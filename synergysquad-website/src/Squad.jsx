import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import BG from './assets/abstractBG.jpg'
import FinalCTA from './FinalCTA'
import StaggeredText from './StaggeredText'
import { squadHeroData, squadBatches } from './data/squadData'

function Squad() {
  const [activeBatch, setActiveBatch] = useState(1)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const selectedBatchData = squadBatches.find(b => b.id === activeBatch) || squadBatches[0]

  // Split members into two equal columns for a balanced, high-end list feel
  const halfLength = Math.ceil((selectedBatchData?.members?.length || 0) / 2)
  const leftColumn = selectedBatchData?.members?.slice(0, halfLength) || []
  const rightColumn = selectedBatchData?.members?.slice(halfLength) || []

  return (
    <div className='bg-[#e6e6e6] min-h-screen relative overflow-x-hidden'>
      <Navbar />
      <section className='relative md:sticky md:top-0 isolate w-full min-h-screen overflow-hidden flex flex-col justify-center px-6 md:px-12 py-24 md:block'>
        <img src={BG} alt="Abstract Background" className='absolute inset-0 z-0 w-full h-full object-cover' />
        <div className='relative md:absolute md:inset-y-0 md:left-12 z-30 flex items-center mb-10 md:mb-0'>
          <StaggeredText 
            className='max-w-7xl text-left text-4xl sm:text-5xl font-semibold leading-[0.92] tracking-tighter text-white md:text-5xl lg:text-6xl'
            text={squadHeroData.headline}
            delay={0.6}
          />
        </div>
        <div className='relative md:absolute z-10 md:bottom-32 lg:bottom-28 md:left-12 grid grid-cols-3 gap-3 sm:gap-6 md:gap-16 text-white max-w-7xl mb-8 md:mb-0'>
          {squadHeroData.stats.map((stat, index) => (
            <div key={index} className='flex flex-col md:grid md:grid-rows-2 md:grid-flow-col gap-0'>
              <div>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>{stat.value}</h1>
              </div>
              <div>
                <p className='font-semibold text-xs sm:text-sm md:text-base lg:text-lg tracking-tighter leading-tight mt-1 md:mt-2 lg:mt-3'>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
        <p className='relative md:absolute z-10 md:bottom-12 md:left-12 text-white max-w-4xl font-semibold text-sm md:text-base lg:text-lg tracking-tighter leading-tight'>
          {squadHeroData.description}
        </p>
      </section>

      <div className="relative z-10 bg-[#e6e6e6]">
      <section className='min-h-screen px-6 md:px-12 py-24'>
        <div className='max-w-7xl mx-auto'>
          {/* Mobile Dropdown Filter */}
          <div className='md:hidden mb-12 relative'>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-5 py-3 bg-white/60 border border-gray-300 rounded-full font-semibold text-sm text-gray-800 tracking-tighter flex items-center justify-between focus:outline-none focus:border-[#10129B]"
            >
              <span>{selectedBatchData.name}</span>
              <svg className={`w-4 h-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#f0f0f0] border border-gray-300 rounded-2xl shadow-xl z-50 overflow-hidden flex flex-col">
                {squadBatches.map((batch) => (
                  <button
                    key={batch.id}
                    onClick={() => {
                      setActiveBatch(batch.id);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full px-5 py-3 text-left font-semibold text-sm tracking-tighter transition-colors ${
                      activeBatch === batch.id ? 'bg-[#10129B] text-white' : 'text-gray-800 hover:bg-white'
                    }`}
                  >
                    {batch.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Minimalist Filter Tabs */}
          <div className='hidden md:flex flex-wrap items-center gap-4 mb-16'>
            {squadBatches.map((batch) => (
              <button
                key={batch.id}
                onClick={() => setActiveBatch(batch.id)}
                className={`px-6 py-2 rounded-full font-semibold md:text-base lg:text-lg tracking-tighter transition-all duration-300 ${activeBatch === batch.id
                    ? 'bg-[#10129B] text-white'
                    : 'bg-white/60 text-gray-700 hover:bg-white hover:text-black border border-gray-300'
                  }`}
              >
                {batch.name}
              </button>
            ))}
          </div>

          {/* Section Header */}
          <div className='pt-8 pb-12 flex flex-col md:flex-row md:items-baseline justify-between gap-4'>
            <h3 className='text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter leading-tight text-black'>
              {selectedBatchData.name}
            </h3>
            <span className='font-mono text-sm tracking-tighter text-gray-500 font-semibold'>
              [ {selectedBatchData.members.length} MEMBERS ]
            </span>
          </div>

          {/* Dual-Column Minimal List with Viewport Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBatch}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className='grid grid-cols-1 md:grid-cols-2 gap-x-16 border-t border-gray-300'
            >
              {/* Column 1 */}
              <ul className='divide-y divide-gray-300'>
                {leftColumn.map((member, index) => {
                  const globalIndex = index;
                  const name = typeof member === 'object' ? member.name : member;
                  const company = typeof member === 'object' ? member.company : null;
                  return (
                    <motion.li
                      key={`${activeBatch}-left-${globalIndex}`}
                      initial={{ opacity: 0, x: 120 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.03,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className='group flex items-center justify-between py-4 transition-all duration-300 cursor-default'
                    >
                      <div className='flex items-center gap-4 sm:gap-6 transform group-hover:translate-x-2 transition-transform duration-300 min-w-0 pr-2'>
                        <span className='font-mono text-xs md:text-sm text-gray-400 group-hover:text-black font-semibold tracking-tighter transition-colors shrink-0'>
                          {(globalIndex + 1).toString().padStart(2, '0')}
                        </span>
                        <div className='flex flex-wrap items-center gap-2 min-w-0'>
                          <span className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter text-gray-800 group-hover:text-black transition-colors uppercase'>
                            {name}
                          </span>
                          {company && (
                            <span className='text-xs font-semibold tracking-tight text-[#10129B] bg-[#10129B]/10 px-2.5 py-0.5 rounded-full border border-[#10129B]/20 whitespace-nowrap group-hover:bg-[#10129B] group-hover:text-white transition-colors'>
                              {company}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* Minimal Hover Indicator Dot */}
                      <span className='w-1.5 h-1.5 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0' />
                    </motion.li>
                  )
                })}
              </ul>

              {/* Column 2 */}
              <ul className='divide-y divide-gray-300 border-t md:border-t-0 border-gray-300'>
                {rightColumn.map((member, index) => {
                  const globalIndex = halfLength + index;
                  const name = typeof member === 'object' ? member.name : member;
                  const company = typeof member === 'object' ? member.company : null;
                  return (
                    <motion.li
                      key={`${activeBatch}-right-${globalIndex}`}
                      initial={{ opacity: 0, x: 120 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.03,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className='group flex items-center justify-between py-4 transition-all duration-300 cursor-default'
                    >
                      <div className='flex items-center gap-4 sm:gap-6 transform group-hover:translate-x-2 transition-transform duration-300 min-w-0 pr-2'>
                        <span className='font-mono text-xs md:text-sm text-gray-400 group-hover:text-black font-semibold tracking-tighter transition-colors shrink-0'>
                          {(globalIndex + 1).toString().padStart(2, '0')}
                        </span>
                        <div className='flex flex-wrap items-center gap-2 min-w-0'>
                          <span className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter text-gray-800 group-hover:text-black transition-colors uppercase'>
                            {name}
                          </span>
                          {company && (
                            <span className='text-xs font-semibold tracking-tight text-[#10129B] bg-[#10129B]/10 px-2.5 py-0.5 rounded-full border border-[#10129B]/20 whitespace-nowrap group-hover:bg-[#10129B] group-hover:text-white transition-colors'>
                              {company}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* Minimal Hover Indicator Dot */}
                      <span className='w-1.5 h-1.5 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0' />
                    </motion.li>
                  )
                })}
              </ul>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>
      <FinalCTA/>
      </div>
    </div>
  )
}

export default Squad