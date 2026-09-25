import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import FinalCTA from './FinalCTA'
import { contactHeader, facultyHead, campusLocation } from './data/contactData'

// Canvas Grain Overlay component for editorial image depth
const LiveGrainOverlay = ({ opacity = "opacity-20" }) => (
  <div 
    className={`absolute inset-0 pointer-events-none ${opacity} z-10`}
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      mixBlendMode: 'overlay'
    }}
  />
)

function Contact() {
  return (
    <div className='bg-[#e6e6e6] min-h-screen text-black relative w-full overflow-x-clip'>
      <Navbar />

      {/* Main Contact Section */}
      <main className='px-6 md:px-12 lg:px-16 pt-36 md:pt-44 lg:pt-48 pb-20 md:pb-28 max-w-[1600px] mx-auto'>
        
        {/* Page Title & Intro Header */}
        <div className='flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16 md:mb-20 border-b border-black/10 pb-10'>
          <div>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-none text-black whitespace-pre-line'>
              {contactHeader.title}
            </h1>
          </div>
          
          <p className='text-gray-700 font-semibold text-base md:text-lg lg:text-xl tracking-tighter max-w-xl leading-snug'>
            {contactHeader.description}
          </p>
        </div>

        {/* Single Faculty Lead Card */}
        <div className='max-w-4xl mx-auto mb-20 md:mb-28'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className='border border-black/10 rounded-none bg-transparent hover:border-black/30 transition-all grid grid-cols-1 md:grid-cols-12 p-6 md:p-10 gap-8 items-center relative group'
          >
            {/* Leader Image Container */}
            <div className='md:col-span-5 relative w-full aspect-[4/5] overflow-hidden border border-black/10 bg-gray-200 rounded-none'>
              <img
                src={facultyHead.image}
                alt={facultyHead.name}
                className='w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105'
              />
              <LiveGrainOverlay opacity="opacity-25" />
            </div>

            {/* Leader Details Content */}
            <div className='md:col-span-7 flex flex-col justify-between space-y-6'>
              <div>
                <h2 className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-black leading-tight mb-2'>
                  {facultyHead.name}
                </h2>
                <p className='text-base md:text-lg font-semibold text-[#10129B] tracking-tighter uppercase mb-3'>
                  {facultyHead.role}
                </p>
                <p className='text-sm md:text-base font-semibold text-gray-700 tracking-tighter leading-snug'>
                  {facultyHead.department} <br />
                  <span className='text-black font-semibold'>{facultyHead.institution}</span>
                </p>
              </div>

              {/* Contact Action Buttons */}
              <div className='pt-6 border-t border-black/10 flex flex-col sm:flex-row gap-3'>
                <a
                  href={`mailto:${facultyHead.email}`}
                  className='flex-1 bg-[#10129B] text-white text-xs md:text-sm font-semibold py-3.5 px-6 rounded-none uppercase tracking-wider text-center hover:bg-blue-800 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2'
                >
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                  {facultyHead.email}
                </a>

                <a
                  href={`tel:${facultyHead.phone.replace(/\s+/g, '')}`}
                  className='flex-1 border border-black/20 text-black text-xs md:text-sm font-semibold py-3.5 px-6 rounded-none uppercase tracking-wider text-center hover:bg-[#10129B] hover:text-white hover:border-[#10129B] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2'
                >
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                  </svg>
                  {facultyHead.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Campus Location & General Contact Info Box */}
        <div className='border border-black/10 rounded-none p-8 md:p-12 bg-transparent grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
          <div className='lg:col-span-8 space-y-3'>
            <span className='text-xs md:text-sm font-semibold text-[#10129B] tracking-tighter uppercase block'>
              {campusLocation.badge}
            </span>
            <h3 className='text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-black leading-tight'>
              {campusLocation.title}
            </h3>
            <p className='text-gray-700 font-semibold text-sm md:text-base tracking-tighter leading-relaxed max-w-2xl'>
              {campusLocation.address}
            </p>
          </div>

          <div className='lg:col-span-4 flex flex-col gap-3 justify-center border-t lg:border-t-0 lg:border-l border-black/10 pt-6 lg:pt-0 lg:pl-8'>
            {campusLocation.socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className={
                  link.primary
                    ? 'bg-[#10129B] text-white px-6 py-3.5 rounded-none text-xs md:text-sm font-semibold uppercase tracking-wider text-center hover:bg-blue-900 transition-colors shadow-md'
                    : 'border border-black text-black px-6 py-3.5 rounded-none text-xs md:text-sm font-semibold uppercase tracking-wider text-center hover:bg-[#10129B] hover:text-white hover:border-[#10129B] transition-colors'
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </main>

      <FinalCTA />
    </div>
  )
}

export default Contact
