import React, { useState, useEffect, useRef } from 'react'
import americanMegatrendsLogo from './assets/American_Megatrends_logo.svg'
import mrCooperLogo from './assets/Mr-Cooper-image.webp'
import techMahindraLogo from './assets/tech-mahendra.jpg'
import mindtreeLogo from './assets/MInd tree.jpg'
import tcsLogo from './assets/TCS-Logo.png'

function CountUp({ target, start = 0, suffix = '', prefix = '', duration = 2000 }) {
  const [count, setCount] = useState(start)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let startTime = null

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime
            const elapsedTime = currentTime - startTime
            const progress = Math.min(elapsedTime / duration, 1)

            // Smooth cubic ease-out progression across 2 seconds
            const easedProgress = 1 - Math.pow(1 - progress, 3)
            const currentVal = Math.floor(start + easedProgress * (target - start))

            setCount(currentVal)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(target)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.2 }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [target, start, duration])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

function AboutBrief() {
  return (
    <section className='min-h-screen px-8 py-16 bg-white flex flex-col justify-between'>
      <div>
        <h1 className='text-black font-semibold text-lg md:text-xl lg:text-2xl tracking-tighter max-w-xl leading-tight mb-16'>
          The Numbers That Reflect Our Commitment to Excellence, Innovation, and Student Success
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16'>
          <div>
            <h2 className='text-black font-bold text-3xl md:text-4xl lg:text-5xl tracking-tighter'>
              <CountUp target={120} start={0} duration={2000} suffix="+" />
            </h2>
            <p className='text-black font-semibold text-lg md:text-xl lg:text-2xl tracking-tighter border-b border-gray-300 mb-4'>Members</p>
            <p className='tracking-tighter font-medium text-sm md:text-md lg:text-lg max-w-sm text-gray-700'>Active student members trained in advanced computing and problem solving across CSE batches.</p>
          </div>  
          <div>
            <h2 className='text-black font-bold text-3xl md:text-4xl lg:text-5xl tracking-tighter'>
              <CountUp target={3} start={0} duration={2000} suffix="+" />
            </h2>
            <p className='text-black font-medium text-lg md:text-xl lg:text-2xl tracking-tighter border-b border-gray-300 mb-4'>Batches</p>
            <p className='tracking-tighter font-medium text-sm md:text-md lg:text-lg max-w-sm text-gray-700'>Across these 3 batches, we have conducted various events and competitions to enhance student skills.</p>
          </div>
          <div>
            <h2 className='text-black font-bold text-3xl md:text-4xl lg:text-5xl tracking-tighter'>
              <CountUp target={10} start={0} duration={2000} suffix="+" />
            </h2>
            <p className='text-black font-medium text-lg md:text-xl lg:text-2xl tracking-tighter border-b border-gray-300 mb-4'>Events</p>
            <p className='tracking-tighter font-medium text-sm md:text-md lg:text-lg max-w-sm text-gray-700'>Technical workshops, coding hackathons, and company-specific mock challenges conducted annually.</p>
          </div>
          <div>
            <h2 className='text-black font-bold text-3xl md:text-4xl lg:text-5xl tracking-tighter'>
              <CountUp target={75} start={0} duration={2000} suffix="%+" />
            </h2>
            <p className='text-black font-medium text-lg md:text-xl lg:text-2xl tracking-tighter border-b border-gray-300 mb-4'>Placed in top MNCs</p>
            <p className='tracking-tighter font-medium text-sm md:text-md lg:text-lg max-w-sm text-gray-700'>High-performing graduates recruited into Tier-1 IT companies and global technology leaders.</p>
          </div>
        </div>
      </div>

      <div className='mt-20'>
        <h1 className='text-black font-semibold text-lg md:text-xl lg:text-2xl tracking-tighter max-w-xl mb-12'>Our members have been hired by industry leaders</h1>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 items-center'>
          <div className='border border-gray-300 rounded-sm p-4 flex items-center justify-center h-24 bg-white shadow-xs hover:border-gray-400 transition-colors'>
            <img src={americanMegatrendsLogo} alt="American Megatrends" className='max-h-12 max-w-full object-contain' />
          </div>
          <div className='border border-gray-300 rounded-sm p-4 flex items-center justify-center h-24 bg-white shadow-xs hover:border-gray-400 transition-colors'>
            <img src={mrCooperLogo} alt="Mr. Cooper" className='max-h-12 max-w-full object-contain' />
          </div>
          <div className='border border-gray-300 rounded-sm p-4 flex items-center justify-center h-24 bg-white shadow-xs hover:border-gray-400 transition-colors'>
            <img src={techMahindraLogo} alt="Tech Mahindra" className='max-h-12 max-w-full object-contain' />
          </div>
          <div className='border border-gray-300 rounded-sm p-4 flex items-center justify-center h-24 bg-white shadow-xs hover:border-gray-400 transition-colors overflow-hidden'>
            <img src={mindtreeLogo} alt="Mindtree" className='max-h-16 max-w-full object-contain scale-[1.35]' />
          </div>
          <div className='border border-gray-300 rounded-sm p-4 flex items-center justify-center h-24 bg-white shadow-xs hover:border-gray-400 transition-colors overflow-hidden'>
            <img src={tcsLogo} alt="TCS" className='max-h-16 max-w-full object-contain scale-[2.4]' />
          </div>
        </div>
      </div>
      <div className='mt-8 font-semibold tracking-tighter text-lg flex justify-end'>
        <a href="#view-more" className='group relative inline-block cursor-pointer text-black py-1'>
          <span>View More</span>
          <span className='absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out' />
        </a>
      </div>
    </section>
  )
}

export default AboutBrief