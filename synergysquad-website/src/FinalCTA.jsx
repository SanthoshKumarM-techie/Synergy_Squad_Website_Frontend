import React from 'react'
import clubLogo from './assets/club-logo.png'
import collegeLogo from './assets/college-logo.png'

function FinalCTA() {
  return (
    <footer className='w-full select-none bg-[#e6e6e6] text-black border-t border-black/10'>
      <div className='max-w-7xl mx-auto px-8 py-16 md:py-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 md:gap-8 items-start'>
          
          {/* Column 1: Brand & Contact Info (5 cols) */}
          <div className='md:col-span-5 flex flex-col justify-between space-y-8 pr-4'>
            <div>
              <div className='flex items-center gap-3 mb-4'>
                <img src={clubLogo} alt="Synergy Squad Logo" className='h-10 md:h-12 object-contain' />
                <div className='h-6 w-[1px] bg-black/20' />
                <img src={collegeLogo} alt="KIOT Logo" className='h-10 md:h-12 object-contain' />
              </div>
              
              <h3 className='font-semibold text-lg md:text-xl lg:text-2xl tracking-tighter text-black mb-1'>
                Synergy Squad
              </h3>
              <p className='font-semibold text-sm md:text-md text-gray-700 tracking-tighter leading-tight mb-4 max-w-sm'>
                Department of Computer Science & Engineering, Knowledge Institute of Technology.
              </p>
              <p className='font-semibold text-sm md:text-md text-gray-600 tracking-tighter leading-tight max-w-md'>
                Empowering student coders through merit-driven initiatives, peer mentorship, and competitive programming excellence.
              </p>
            </div>

            <div>
              <p className='font-semibold text-xs md:text-sm text-gray-500 tracking-tighter uppercase mb-1'>Write to us</p>
              <a 
                href="mailto:synergysquad@kiot.ac.in" 
                className='font-semibold text-lg md:text-xl lg:text-2xl tracking-tighter text-black hover:text-yellow-600 transition-colors block'
              >
                synergysquad@kiot.ac.in
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className='md:col-span-3 flex flex-col space-y-4'>
            <h4 className='font-semibold text-xs md:text-sm text-gray-500 uppercase tracking-tighter mb-1'>Navigation</h4>
            <div className='flex flex-col space-y-3 font-semibold text-sm md:text-md lg:text-lg tracking-tighter text-gray-800'>
              <a href="#home" className='hover:text-black hover:translate-x-1 transition-all duration-200'>Home</a>
              <a href="#about" className='hover:text-black hover:translate-x-1 transition-all duration-200'>About Us</a>
              <a href="#squad" className='hover:text-black hover:translate-x-1 transition-all duration-200'>Squad Members</a>
              <a href="#history" className='hover:text-black hover:translate-x-1 transition-all duration-200'>Milestones & History</a>
            </div>
          </div>

          {/* Column 3: Squad Batches (2 cols) */}
          <div className='md:col-span-2 flex flex-col space-y-4'>
            <h4 className='font-semibold text-xs md:text-sm text-gray-500 uppercase tracking-tighter mb-1'>Batches</h4>
            <div className='flex flex-col space-y-3 font-semibold text-sm md:text-md lg:text-lg tracking-tighter text-gray-800'>
              <a href="#squad" className='hover:text-black hover:translate-x-1 transition-all duration-200'>Squad 1.0</a>
              <a href="#squad" className='hover:text-black hover:translate-x-1 transition-all duration-200'>Squad 2.0</a>
              <a href="#squad" className='hover:text-black hover:translate-x-1 transition-all duration-200'>Squad 3.0</a>
              <a href="#squad" className='hover:text-black hover:translate-x-1 transition-all duration-200'>Squad 4.0</a>
            </div>
          </div>

          {/* Column 4: Social Media Links (2 cols) */}
          <div className='md:col-span-2 flex flex-col space-y-4'>
            <h4 className='font-semibold text-xs md:text-sm text-gray-500 uppercase tracking-tighter mb-1'>Social</h4>
            <div className='flex flex-col space-y-3 font-semibold text-sm md:text-md lg:text-lg tracking-tighter text-gray-800'>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='flex items-center gap-1.5 hover:text-yellow-600 hover:translate-x-1 transition-all duration-200'
              >
                <span className='text-xs text-yellow-500 font-semibold'>↗</span> LinkedIn
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='flex items-center gap-1.5 hover:text-yellow-600 hover:translate-x-1 transition-all duration-200'
              >
                <span className='text-xs text-yellow-500 font-semibold'>↗</span> GitHub
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='flex items-center gap-1.5 hover:text-yellow-600 hover:translate-x-1 transition-all duration-200'
              >
                <span className='text-xs text-yellow-500 font-semibold'>↗</span> Instagram
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className='mt-16 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-semibold text-xs md:text-sm text-gray-600 tracking-tighter'>
          <p>© 2026 Synergy Squad — Department of Computer Science & Engineering, KIOT.</p>
          <p>Designed with passion for competitive programming & tech excellence.</p>
        </div>
      </div>
    </footer>
  )
}

export default FinalCTA