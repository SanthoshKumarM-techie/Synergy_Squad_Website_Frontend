import React from 'react'
import { heroContent } from './data/heroData'

function Hero() {
  return (
    <div className='relative w-full h-screen overflow-hidden'>

      {/* Background Image */}
      <img
        src={heroContent.bgImage}
        alt="Knowledge Institute of Technology Top View"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className='absolute inset-0 w-full h-full object-cover z-0'
      />

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85 z-10'>
        {/* Main Uppercase Content - Centered in Y-axis */}
        <div className='absolute top-1/2 -translate-y-1/2 left-0 right-0 px-8 mx-auto flex flex-col md:flex-row justify-between w-full gap-8 md:gap-8 items-start md:items-center'>
          <div className='flex flex-col max-w-5xl'>
            {/* 1. College Level (Largest) */}
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tighter leading-tighter'>
              {heroContent.collegeName}
            </h1>

            {/* 2. Department Level (Medium) */}
            <h2 className='text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-200 tracking-tighter leading-tighter mt-1 md:mt-2'>
              {heroContent.departmentName}
            </h2>

            {/* 3. Squad Level */}
            <div className='flex flex-wrap items-baseline gap-3 mt-2 md:mt-3'>
              <h3 className='text-2xl md:text-4xl lg:text-5xl font-bold text-blue-500 tracking-tighter'>
                {heroContent.squadTitle}
              </h3>
              <span className='text-xs md:text-sm font-semibold tracking-wider text-white/90 uppercase'>
                {heroContent.establishedYear}
              </span>
            </div>
          </div>
          <div className='flex flex-col items-start shrink-0 whitespace-nowrap gap-1.5 border-l-2 border-white/20 pl-4 md:pl-6'>
            {heroContent.highlights.map((highlight, index) => (
              <p key={index} className='text-white font-semibold whitespace-nowrap text-sm md:text-md lg:text-lg tracking-tighter'>
                {highlight}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom Section - Single Paragraph */}
        <div className='absolute bottom-8 left-0 right-0 px-8 text-gray-200 text-sm md:text-md lg:text-lg max-w-3xl tracking-tighter leading-relaxed font-medium'>
          <p>
            To <span className='text-white font-bold'>identify</span>, <span className='text-white font-bold'>train</span>, and <span className='text-white font-bold'>select</span> <span className='text-blue-500 font-bold'>top-performing students</span> by enhancing their <span className='text-white font-bold'>programming</span> and <span className='text-white font-bold'>problem-solving skills</span>, and preparing them for <span className='text-blue-500 font-bold'>career opportunities</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero