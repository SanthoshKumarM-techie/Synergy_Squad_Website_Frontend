import React, { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import americanMegatrendsLogo from './assets/American_Megatrends_logo.svg'
import mrCooperLogo from './assets/Mr-Cooper-image.webp'
import techMahindraLogo from './assets/tech-mahendra.jpg'
import mindtreeLogo from './assets/MInd tree.jpg'
import tcsLogo from './assets/TCS-Logo.png'

function AnimatedNumber({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(latest.toFixed(0)) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

function CubeBox({ image, alt, imgClassName = 'max-h-12 max-w-full object-contain' }) {
  return (
    <div className="group w-full h-24 [perspective:1000px] cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] [transform:translateZ(-48px)] group-hover:[transform:translateZ(-48px)_rotateX(90deg)]">
        {/* Front Face */}
        <div className="absolute inset-0 border border-gray-300 rounded-sm p-4 flex items-center justify-center bg-white [transform:rotateX(0deg)_translateZ(48px)]">
          <img src={image} alt={alt} className={imgClassName} />
        </div>
        {/* Bottom Face */}
        <div className="absolute inset-0 border border-gray-400 rounded-sm p-4 flex items-center justify-center bg-gray-100 [transform:rotateX(-90deg)_translateZ(48px)]">
          <img src={image} alt={alt} className={imgClassName} />
        </div>
      </div>
    </div>
  )
}

function AboutBrief() {
  return (
    <section className='min-h-screen px-8 py-16 bg-[#e6e6e6] flex flex-col justify-between'>
      <div>
        <h1 className='text-black font-semibold text-xl md:text-3xl lg:text-4xl tracking-tighter max-w-3xl leading-tight mb-16'>
          The Numbers That Reflect Our Commitment to Excellence, Innovation, and Student Success
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16'>
          <div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>
              <AnimatedNumber value={120} suffix="+" />
            </h2>
            <p className='font-semibold text-md md:text-lg lg:text-xl tracking-tighter leading-tight border-b border-gray-300 mb-4 pb-1'>Members</p>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter max-w-sm text-gray-700 leading-tight'>Active student members trained in advanced computing and problem solving across CSE batches.</p>
          </div>
          <div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>
              <AnimatedNumber value={3} suffix="+" />
            </h2>
            <p className='font-semibold text-md md:text-lg lg:text-xl tracking-tighter leading-tight border-b border-gray-300 mb-4 pb-1'>Batches</p>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter max-w-sm text-gray-700 leading-tight'>Across these 3 batches, we have conducted various events and competitions to enhance student skills.</p>
          </div>
          <div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>
              <AnimatedNumber value={10} suffix="+" />
            </h2>
            <p className='font-semibold text-md md:text-lg lg:text-xl tracking-tighter leading-tight border-b border-gray-300 mb-4 pb-1'>Events</p>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter max-w-sm text-gray-700 leading-tight'>Technical workshops, coding hackathons, and company-specific mock challenges conducted annually.</p>
          </div>
          <div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>
              <AnimatedNumber value={75} suffix="%+" />
            </h2>
            <p className='font-semibold text-md md:text-lg lg:text-xl tracking-tighter leading-tight border-b border-gray-300 mb-4 pb-1'>Placed in top MNCs</p>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter max-w-sm text-gray-700 leading-tight'>High-performing graduates recruited into Tier-1 IT companies and global technology leaders.</p>
          </div>
        </div>
      </div>

      <div className='mt-20'>
        <h1 className='text-black font-semibold text-xl md:text-3xl lg:text-4xl tracking-tighter max-w-2xl mb-12'>
          Our members have been hired by industry leaders
        </h1>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 items-center'>
          <CubeBox image={americanMegatrendsLogo} alt="American Megatrends" />
          <CubeBox image={mrCooperLogo} alt="Mr. Cooper" />
          <CubeBox image={techMahindraLogo} alt="Tech Mahindra" />
          <CubeBox image={mindtreeLogo} alt="Mindtree" imgClassName='max-h-16 max-w-full object-contain scale-[1.35]' />
          <CubeBox image={tcsLogo} alt="TCS" imgClassName='max-h-16 max-w-full object-contain scale-[2.4]' />
        </div>
      </div>
      <div className='mt-8 text-end'>
        <button
          type='button'
          className='group relative inline-block cursor-pointer pb-1 font-semibold text-sm tracking-tighter md:text-md lg:text-lg'
        >
          View More
          <span className='absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-[#10129B] transition-transform duration-300 group-hover:scale-x-100' />
        </button>
      </div>
    </section>
  )
}

export default AboutBrief