import React from 'react'
import americanMegatrendsLogo from './assets/American_Megatrends_logo.svg'
import mrCooperLogo from './assets/Mr-Cooper-image.webp'
import techMahindraLogo from './assets/tech-mahendra.jpg'
import mindtreeLogo from './assets/MInd tree.jpg'
import tcsLogo from './assets/TCS-Logo.png'

function AboutBrief() {
  return (
    <section className='min-h-screen px-8 py-16 bg-[#e6e6e6] flex flex-col justify-between'>
      <div>
        <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter max-w-3xl leading-tight mb-16'>
          The Numbers That Reflect Our Commitment to Excellence, Innovation, and Student Success
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16'>
          <div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>120+</h2>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight border-b border-gray-300 mb-4 pb-1'>Members</p>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter max-w-sm text-gray-700 leading-tight'>Active student members trained in advanced computing and problem solving across CSE batches.</p>
          </div>
          <div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>3+</h2>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight border-b border-gray-300 mb-4 pb-1'>Batches</p>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter max-w-sm text-gray-700 leading-tight'>Across these 3 batches, we have conducted various events and competitions to enhance student skills.</p>
          </div>
          <div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>10+</h2>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight border-b border-gray-300 mb-4 pb-1'>Events</p>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter max-w-sm text-gray-700 leading-tight'>Technical workshops, coding hackathons, and company-specific mock challenges conducted annually.</p>
          </div>
          <div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>75%+</h2>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight border-b border-gray-300 mb-4 pb-1'>Placed in top MNCs</p>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter max-w-sm text-gray-700 leading-tight'>High-performing graduates recruited into Tier-1 IT companies and global technology leaders.</p>
          </div>
        </div>
      </div>

      <div className='mt-20'>
        <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter max-w-2xl mb-12'>
          Our members have been hired by industry leaders
        </h1>
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
      <div className='mt-8 text-end'>
        <button
          type='button'
          className='group relative inline-block cursor-pointer pb-1 font-semibold text-sm tracking-tighter md:text-md lg:text-lg'
        >
          View More
          <span className='absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-yellow-400 transition-transform duration-300 group-hover:scale-x-100' />
        </button>
      </div>
    </section>
  )
}

export default AboutBrief