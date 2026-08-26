import { Renderer, Program, Mesh, Color, Triangle } from 'ogl';
import { useEffect, useRef } from 'react';

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;

varying vec2 vUv;

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;

  uv += (uMouse - vec2(0.5)) * uAmplitude;

  float d = -uTime * 0.2 * uSpeed;
  float a = 0.0;
  for (float i = 0.0; i < 8.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }
  
  float val = clamp((cos(d) * 0.5 + 0.5) * 0.7 + (sin(a) * 0.5 + 0.5) * 0.3, 0.0, 1.0);
  
  // Build the iridescent tones from the configured colour.
  vec3 darkBlue = uColor * 0.20;
  vec3 midBlue = uColor * 0.62;
  vec3 brightBlue = min(uColor * 1.25 + vec3(0.03, 0.06, 0.16), vec3(1.0));
  vec3 highlightBlue = mix(brightBlue, vec3(0.60, 0.78, 1.0), 0.35);

  vec3 col;
  if (val < 0.5) {
    col = mix(darkBlue, midBlue, val * 2.0);
  } else {
    col = mix(midBlue, brightBlue, (val - 0.5) * 2.0);
  }
  
  float shimmer = pow(val, 3.5);
  col = mix(col, highlightBlue, shimmer * 0.35);

  gl_FragColor = vec4(col, 1.0);
}
`;

export default function Iridescence({ color = [0.04, 0.14, 0.82], speed = 0.3, amplitude = 0.1, mouseReact = true, ...rest }) {
  const ctnDom = useRef(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (!ctnDom.current) return;
    const ctn = ctnDom.current;
    const renderer = new Renderer();
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 1);
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    gl.canvas.style.display = 'block';

    let program;

    function resize() {
      if (!ctnDom.current) return;
      const scale = 1;
      renderer.setSize(ctn.offsetWidth * scale, ctn.offsetHeight * scale);
      if (program) {
        program.uniforms.uResolution.value = new Color(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height
        );
      }
    }
    window.addEventListener('resize', resize, false);
    resize();

    const geometry = new Triangle(gl);
    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new Color(...color) },
        uResolution: {
          value: new Color(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height)
        },
        uMouse: { value: new Float32Array([mousePos.current.x, mousePos.current.y]) },
        uAmplitude: { value: amplitude },
        uSpeed: { value: speed }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });
    let animateId;

    function update(t) {
      animateId = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    }
    animateId = requestAnimationFrame(update);
    ctn.appendChild(gl.canvas);

    function handleMouseMove(e) {
      if (!ctnDom.current) return;
      const rect = ctnDom.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / (rect.width || 1);
      const y = 1.0 - (e.clientY - rect.top) / (rect.height || 1);
      mousePos.current = { x, y };
      if (program && program.uniforms && program.uniforms.uMouse) {
        program.uniforms.uMouse.value[0] = x;
        program.uniforms.uMouse.value[1] = y;
      }
    }
    if (mouseReact) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener('resize', resize);
      if (mouseReact) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      if (gl.canvas && gl.canvas.parentNode) {
        gl.canvas.parentNode.removeChild(gl.canvas);
      }
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [color, speed, amplitude, mouseReact]);

  return <div ref={ctnDom} className="w-full h-full" {...rest} />;
}
