import React from 'react'
import collageTopView from './assets/KIOT-Top-View.webp'

function Hero() {
  return (
    <div className='relative w-full h-screen overflow-hidden'>

      {/* Background Image */}
      <img
        src={collageTopView}
        alt="Knowledge Institute of Technology Top View"
        className='absolute inset-0 w-full h-full object-cover z-0'
      />

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85 z-10'>
        {/* Main Uppercase Content - Centered in Y-axis */}
        <div className='absolute top-1/2 -translate-y-1/2 left-0 right-0 px-8 mx-auto flex flex-col md:flex-row justify-between w-full gap-8 md:gap-8'>
          <div className='flex flex-col gap-0'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tighter max-w-5xl uppercase leading-tight'>
              Knowledge Institute of Technology
            </h1>
            <h3 className='text-white font-semibold text-2xl md:text-4xl lg:text-5xl uppercase tracking-tighter leading-tight'>
              Department of Computer Science and Engineering
            </h3>
            <div className='flex gap-3 mt-1'>
              <h3 className='text-yellow-400 font-semibold text-2xl md:text-4xl lg:text-5xl uppercase tracking-tighter'>
                Synergy Squad
              </h3>
              <p className='text-white font-semibold text-sm md:text-md lg:text-lg uppercase tracking-tighter'>
                EST. 2021
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start shrink-0 whitespace-nowrap gap-1.5'>
            <p className='text-white font-semibold whitespace-nowrap text-sm md:text-md lg:text-lg tracking-tighter'>75+ Placements in Tier-1 IT</p>
            <p className='text-white font-semibold whitespace-nowrap text-sm md:text-md lg:text-lg tracking-tighter'>Tech Discussions Daily</p>
            <p className='text-white font-semibold whitespace-nowrap text-sm md:text-md lg:text-lg tracking-tighter'>Coding Challenges Weekly</p>
            <p className='text-white font-semibold whitespace-nowrap text-sm md:text-md lg:text-lg tracking-tighter'>Mock Company Specific Tests</p>
          </div>
        </div>

        {/* Bottom Section - Single Paragraph */}
        <div className='absolute bottom-8 left-0 right-0 px-8 text-gray-300 text-sm md:text-md lg:text-lg max-w-3xl tracking-tighter leading-tight font-medium'>
          <p>
            <span className='text-white font-semibold'>Synergy Squad</span> is a <span className='text-white font-semibold'>merit-based elite group</span> under the <span className='text-white font-semibold'>pre-placement initiative</span>, formed through rigorous assessments like <span className='text-white font-semibold'>TCS CodeVita</span>. It offers <span className='text-white font-semibold'>intensive training</span> in <span className='text-white font-semibold'>advanced DSA</span> and <span className='text-white font-semibold'>algorithms</span>, supported by a <span className='text-white font-semibold'>dedicated weekly programming day</span> to ensure <span className='text-white font-semibold'>continuous skill development</span> and <span className='text-white font-semibold'>performance excellence</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero