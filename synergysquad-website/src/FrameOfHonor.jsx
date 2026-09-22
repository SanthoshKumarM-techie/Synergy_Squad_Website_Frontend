import React, { useRef, useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Navbar from './Navbar'
import ScrollProgressBar from './ScrollProgressBar'
import heroImage from './assets/Identification.png'
import eventImage from './assets/VoiceOfExcellence.png'
import kamalakannanImg from './assets/Kamalakannan1.png'
import santhoshImg from './assets/Santhosh1.png'
import sathyaramImg from './assets/Sathyaram1.png'
import shriyaaImg from './assets/Shriyaa1.png'
import FinalCTA from './FinalCTA'

const testimonialsData = [
  {
    id: 1,
    quote: '"Being a part of the Overall Championship Team was a transformative journey. The intense peer learning, competitive coding marathons, and shared dedication enabled us to surpass our goals and bring honor to our department and institution."',
    author: 'Kamalakannan N G',
    department: 'Department of Computer Science and Engineering',
    profileImage: kamalakannanImg,
  },
  {
    id: 2,
    quote: '"Synergy Squad provided the perfect platform for algorithmic problem solving. Competing alongside dedicated peers pushed my limits in TCS CodeVita and national hackathons."',
    author: 'Santhosh R',
    department: 'Department of Computer Science and Engineering',
    profileImage: santhoshImg,
  },
  {
    id: 3,
    quote: '"The structured weekly coding contests and mentorship sessions gave us the technical depth and confidence needed to achieve campus excellence and top company offers."',
    author: 'Sathyaram R',
    department: 'Department of Computer Science and Engineering',
    profileImage: sathyaramImg,
  },
  {
    id: 4,
    quote: '"Collaborating with brilliant minds during competitive marathons built strong problem-solving habits that continue to drive our engineering growth every single day."',
    author: 'Shriyaa S V',
    department: 'Department of Computer Science and Engineering',
    profileImage: shriyaaImg,
  },
]

function LiveGrainOverlay({ opacity = 'opacity-35' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId

    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth
        canvas.height = canvas.parentElement.clientHeight
      }
    }
    resize()
    window.addEventListener('resize', resize)

    const renderNoise = () => {
      const w = canvas.width
      const h = canvas.height
      if (w > 0 && h > 0) {
        const imgData = ctx.createImageData(w, h)
        const data = imgData.data
        for (let i = 0; i < data.length; i += 4) {
          const v = (Math.random() - 0.5) * 200
          data[i] = 128 + v     // R
          data[i + 1] = 128 + v // G
          data[i + 2] = 128 + v // B
          data[i + 3] = 255     // A
        }
        ctx.putImageData(imgData, 0, 0)
      }
      animationFrameId = requestAnimationFrame(renderNoise)
    }

    renderNoise()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none z-10 ${opacity} mix-blend-overlay`}
    />
  )
}

function FrameOfHonor() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [activeTestimonial])

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)
  }

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length)
  }

  const currentTestimonial = testimonialsData[activeTestimonial]

  return (
    <div className='bg-[#e6e6e6] min-h-screen relative text-black'>
      <ScrollProgressBar />
      <Navbar />

      {/* Main Hero Section */}
      <section className='px-6 md:px-12 pt-18 md:pt-22 pb-12 max-w-[1600px] mx-auto'>
        
        {/* Big Rectangle Image Holder */}
        <div className='w-full h-[50vh] md:h-[62vh] lg:h-[70vh] overflow-hidden rounded-sm border border-black/10 shadow-lg relative bg-gray-300'>
          <img
            src={heroImage}
            alt="Frame of Honor - Synergy Squad"
            className='w-full h-full object-cover object-center relative z-0'
          />
        </div>

        {/* Text Section directly under the Image */}
        <div className='mt-4 md:mt-4 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16'>
          {/* Heading Text under left bottom of image */}
          <div className='max-w-3xl'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tighter leading-tight'>
              CCL 2.0 Overall Championship
            </h1>
            <p className='text-gray-700 font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight'>
              The team on the above picture is the Overall Championship Team of our institution for the year 2026.
            </p>
          </div>
        </div>

      </section>

      {/* Voice of Excellence Section */}
      <section className='min-h-screen px-6 md:px-12 pt-6 md:pt-10 pb-8 max-w-[1600px] mx-auto flex flex-col justify-start'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch min-h-[calc(100vh-6rem)]'>
          
          {/* Left Column: Heading, Description, and Image (Untouched at Top) */}
          <div className='flex flex-col gap-4 items-start self-start'>
            <div>
              <h2 className='text-3xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tighter leading-tight'>
                Voice of Excellence
              </h2>
              <p className='text-gray-700 font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight max-w-xl'>
                Inspiring insights and reflections from our championship team members and student leaders.
              </p>
            </div>

            {/* Image Holder below description with Live Canvas Grain Overlay */}
            <div className='aspect-square w-52 md:w-64 lg:w-72 overflow-hidden border border-black/10 shadow-md relative bg-gray-300 mt-2'>
              <img
                src={eventImage}
                alt="Voice of Excellence Event"
                className='w-full h-full object-cover object-center relative z-0'
              />
              <LiveGrainOverlay opacity="opacity-40" />
            </div>
          </div>

          {/* Right Column: Testimonial Centered to Full Screen Height & Profile at Bottom */}
          <div className='flex flex-col justify-between self-stretch h-full py-4'>
            {/* Testimonial Text in Center of Full Screen Height */}
            <div className='my-auto pt-40 pb-40 transition-opacity duration-300'>
              <p className='font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter leading-tight key={currentTestimonial.id}'>
                {currentTestimonial.quote}
              </p>
            </div>

            {/* Bottom Profile Container & Navigation Arrows Row */}
            <div className='flex items-center justify-between mt-auto pb-4 gap-4 flex-wrap'>
              {/* Profile Avatar & Info */}
              <div className='flex items-center gap-4'>
                <div className='w-20 h-20 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-black/10 shadow-sm shrink-0 bg-gray-200 relative'>
                  <img
                    src={currentTestimonial.profileImage}
                    alt={currentTestimonial.author}
                    className='w-full h-full object-cover object-top relative z-0'
                  />
                </div>
                <div className='flex flex-col'>
                  <h4 className='font-semibold text-base md:text-xl lg:text-2xl text-black tracking-tighter leading-tight'>
                    {currentTestimonial.author}
                  </h4>
                  <p className='font-semibold text-sm md:text-md text-gray-600 tracking-tighter leading-tight'>
                    {currentTestimonial.department}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows < > */}
              <div className='flex items-center gap-4 shrink-0'>
                <button
                  onClick={handlePrev}
                  aria-label="Previous Testimonial"
                  className='text-black cursor-pointer bg-transparent border-none p-1 text-3xl md:text-4xl select-none'
                >
                  <FiChevronLeft />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Testimonial"
                  className='text-black cursor-pointer bg-transparent border-none p-1 text-3xl md:text-4xl select-none'
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      <FinalCTA/>
    </div>
  )
}

export default FrameOfHonor