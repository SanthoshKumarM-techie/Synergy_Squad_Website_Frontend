import React, { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { aboutBriefStatsData, aboutBriefCompaniesData } from './data/aboutBriefData'

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

function LogoCard({ image, alt, imgClassName = 'max-h-12 max-w-full object-contain', overflowHidden = false }) {
  return (
    <div className={`w-full h-24 border border-gray-300 rounded-sm p-4 flex items-center justify-center bg-white shadow-xs hover:border-gray-400 transition-colors duration-300 ${overflowHidden ? 'overflow-hidden' : ''}`}>
      <img src={image} alt={alt} loading="lazy" decoding="async" className={imgClassName} />
    </div>
  )
}

function AboutBrief() {
  return (
    <section className='min-h-screen px-8 md:px-12 lg:px-16 py-16 md:py-24 bg-[#e6e6e6] flex flex-col justify-between max-w-[1600px] mx-auto'>
      <div>
        <h1 className='text-3xl md:text-5xl lg:text-6xl max-w-4xl mb-6 md:mb-8 font-semibold tracking-tighter leading-tighter text-black'>
          {aboutBriefStatsData.title}
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
          {aboutBriefStatsData.stats.map((stat, index) => (
            <div key={index} className='flex flex-col space-y-2'>
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight text-black'>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </h2>
              <p className='font-semibold text-md md:text-lg lg:text-xl tracking-tighter leading-tight border-b border-gray-300 mb-2.5 pb-1'>
                {stat.label}
              </p>
              <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter text-gray-700 leading-snug'>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-16 md:mt-24'>
        <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter max-w-2xl mb-12 text-black'>
          {aboutBriefCompaniesData.title}
        </h1>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 items-center'>
          {aboutBriefCompaniesData.companies.map((company, index) => (
            <LogoCard 
              key={index} 
              image={company.image} 
              alt={company.name} 
              imgClassName={company.imgClassName} 
              overflowHidden={company.overflowHidden} 
            />
          ))}
        </div>
      </div>

      <div className='mt-12 text-end'>
        <a
          href='#about'
          onClick={() => {
            window.location.hash = '#about'
          }}
          className='group relative inline-block cursor-pointer pb-1 font-semibold text-sm tracking-tighter md:text-md lg:text-lg text-black'
        >
          View More →
          <span className='absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-[#10129B] transition-transform duration-300 group-hover:scale-x-100' />
        </a>
      </div>
    </section>
  )
}

export default AboutBrief