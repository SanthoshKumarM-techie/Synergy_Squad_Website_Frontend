import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from './Navbar'
import FinalCTA from './FinalCTA'
import StaggeredText from './StaggeredText'
import {
  aboutHeroData,
  aboutGenesisData,
  aboutExcellenceStats,
  aboutAuthoritiesData,
  aboutCommunityGalleryData,
  aboutIndustryLeadersData,
  aboutBentoData,
} from './data/aboutData'

function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2, startFrom = 0 }) {
  const [count, setCount] = useState(startFrom)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (!isInView) return

    let startTime = null
    const startValue = startFrom
    const endValue = target

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = (timestamp - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)

      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(startValue + (endValue - startValue) * easeOut)

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animateCount)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(animateCount)
  }, [isInView, target, duration, startFrom])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.04,
    },
  },
}

const wordVariants = {
  hidden: {
    y: '100%',
    opacity: 0,
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: [0.215, 0.61, 0.355, 1.0],
    },
  },
}

function About() {
  return (
    <div className='bg-[#e6e6e6] min-h-screen relative'>
      <Navbar />

      {/* Hero Section */}
      <section className='relative md:sticky md:top-0 isolate w-full min-h-screen overflow-hidden flex flex-col justify-center px-6 md:px-12 py-24 md:block'>
        <img
          src={aboutHeroData.bgImage}
          alt="Abstract Background"
          loading="eager"
          decoding="async"
          className='absolute inset-0 z-0 w-full h-full object-cover'
        />

        <div className='relative md:absolute md:inset-y-0 md:left-12 z-30 flex items-center mb-12 md:mb-0'>
          <StaggeredText 
            className='max-w-7xl text-left text-4xl font-semibold leading-[0.92] tracking-tighter text-white md:text-5xl lg:text-6xl'
            text={aboutHeroData.headline}
            delay={0.6}
          />
        </div>

        <div className='relative md:absolute z-30 md:bottom-12 md:left-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-white max-w-full md:max-w-none md:pr-12'>
          <div className='flex flex-col max-w-lg'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>
              {aboutHeroData.vision.title}
            </h2>
            <p className='tracking-tighter text-sm md:text-md lg:text-lg leading-tight font-semibold'>
              {aboutHeroData.vision.description}
            </p>
          </div>
          <div className='flex flex-col max-w-lg'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>
              {aboutHeroData.mission.title}
            </h2>
            <p className='tracking-tighter text-sm md:text-md lg:text-lg leading-tight font-semibold'>
              {aboutHeroData.mission.description}
            </p>
          </div>
        </div>
      </section>

      <div className="relative z-10 bg-[#e6e6e6]">
        <section className='min-h-fit px-8 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16'>
          {/* Our Genesis Block */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start'>
            {/* Left Half: Heading */}
            <div className='w-full'>
              <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>
                {aboutGenesisData.title}
              </h1>
            </div>

            {/* Right Half: Body Content Horizontally Centered */}
            <div className='w-full flex justify-center'>
              <div className='w-full max-w-5xl font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-700 space-y-3'>
                {aboutGenesisData.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Numbers That Reflect Our Excellence Block */}
          <div className='mt-12 md:mt-16 lg:mt-20'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl max-w-4xl mb-6 md:mb-8 font-semibold tracking-tighter leading-tighter'>
              {aboutExcellenceStats.title}
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
              {aboutExcellenceStats.stats.map((stat, index) => (
                <div key={index} className='flex flex-col space-y-2'>
                  <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
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
        </section>

        {/* Authorities / Testimonials Section */}
        <section className='relative md:min-h-screen overflow-hidden bg-[#000410]'>
          {/* Master Vertical Line */}
          <div aria-hidden='true' className='hidden md:block pointer-events-none absolute inset-0 z-0 text-white/20'>
            <span className='absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-current' />
          </div>

          {/* Authority 1 (HOD) */}
          {aboutAuthoritiesData[0] && (
            <div className='relative z-10 flex flex-col justify-center pt-16 md:pt-32 pb-8 md:pb-16 md:grid md:grid-cols-2 items-start md:items-start gap-10 md:gap-0 px-8 md:px-0 max-w-sm mx-auto md:max-w-none'>
              <div aria-hidden='true' className='hidden md:block pointer-events-none absolute inset-0 z-0 text-white/20'>
                <span className='absolute left-0 top-[8rem] mt-[13.25rem] h-px w-1/2 bg-current' />
                <span className='absolute right-0 top-[8rem] mt-24 h-px w-1/2 bg-current' />
              </div>
              <img
                src={aboutAuthoritiesData[0].image}
                alt={aboutAuthoritiesData[0].name}
                loading="lazy"
                decoding="async"
                className='relative z-10 h-48 md:h-[12.5rem] md:justify-self-end md:mr-3'
              />
              <div className='relative z-10 md:mt-24 md:pt-3 w-full md:max-w-[363px] md:translate-x-3'>
                <motion.p 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className='text-white text-sm md:text-md lg:text-lg tracking-tighter leading-tight font-semibold text-left flex flex-wrap gap-x-[0.25em] gap-y-[0.1em]'
                >
                  {aboutAuthoritiesData[0].quote.split(' ').map((word, index) => (
                    <span key={index} className='inline-block overflow-hidden py-0.5 relative'>
                      <motion.span variants={wordVariants} className='inline-block'>
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </motion.p>
                <div className='mt-8 text-left'>
                  <h1 className='text-white font-semibold text-md md:text-lg lg:text-xl tracking-tighter'>
                    {aboutAuthoritiesData[0].name}
                  </h1>
                  <p className='text-white font-semibold text-md md:text-lg lg:text-xl tracking-tighter leading-tight'>
                    {aboutAuthoritiesData[0].title}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Authority 2 (Faculty Head) */}
          {aboutAuthoritiesData[1] && (
            <div className='relative z-10 flex flex-col justify-center pt-8 md:pt-16 pb-16 md:pb-32 md:grid md:grid-cols-2 items-start md:items-start gap-10 md:gap-0 px-8 md:px-0 max-w-sm mx-auto md:max-w-none'>
              <div aria-hidden='true' className='hidden md:block pointer-events-none absolute inset-0 z-0 text-white/20'>
                <span className='absolute left-0 top-[4rem] mt-24 h-px w-1/2 bg-current' />
                <span className='absolute right-0 top-[4rem] mt-[13.25rem] h-px w-1/2 bg-current' />
              </div>
              <img
                src={aboutAuthoritiesData[1].image}
                alt={aboutAuthoritiesData[1].name}
                loading="lazy"
                decoding="async"
                className='relative z-10 h-48 md:h-[12.5rem] md:justify-self-start md:ml-3 md:order-last'
              />
              <div className='relative z-10 md:mt-24 md:pt-3 w-full md:max-w-[363px] md:justify-self-end md:-translate-x-3'>
                <motion.p 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className='text-white text-sm md:text-md lg:text-lg tracking-tighter leading-tight font-semibold text-left flex flex-wrap gap-x-[0.25em] gap-y-[0.1em]'
                >
                  {aboutAuthoritiesData[1].quote.split(' ').map((word, index) => (
                    <span key={index} className='inline-block overflow-hidden py-0.5 relative'>
                      <motion.span variants={wordVariants} className='inline-block'>
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </motion.p>
                <div className='mt-8 text-left md:text-right'>
                  <h1 className='text-white font-semibold text-md md:text-lg lg:text-xl tracking-tighter'>
                    {aboutAuthoritiesData[1].name}
                  </h1>
                  <p className='text-white font-semibold text-md md:text-lg lg:text-xl tracking-tighter leading-tight'>
                    {aboutAuthoritiesData[1].title}
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Community Gallery Grid */}
        <section className='relative min-h-screen bg-black p-1'>
          <div className='grid h-[100vh] md:h-[calc(100vh-0.5rem)] grid-cols-1 grid-rows-1 md:grid-rows-6 gap-1 md:grid-cols-12'>
            <figure className="group relative overflow-hidden bg-[#111827] after:absolute after:inset-0 after:z-10 after:bg-black/70 after:content-[''] col-start-1 row-start-1 col-span-1 row-span-1 md:col-start-1 md:row-start-1 md:col-span-7 md:row-span-4">
              <img src={aboutCommunityGalleryData.images[0]} alt='Synergy Squad members at an event' loading="lazy" decoding="async" className='h-full w-full object-cover transition duration-700 group-hover:scale-105' />
            </figure>

            <figure className="hidden md:block group relative overflow-hidden bg-[#111827] after:absolute after:inset-0 after:z-10 after:bg-black/70 after:content-[''] md:col-start-8 md:row-start-1 md:col-span-5 md:row-span-2">
              <img src={aboutCommunityGalleryData.images[1]} alt='Synergy Squad 1.0 event banner' loading="lazy" decoding="async" className='h-full w-full object-cover transition duration-700 group-hover:scale-105' />
            </figure>

            <figure className="hidden md:block group relative overflow-hidden bg-[#111827] after:absolute after:inset-0 after:z-10 after:bg-black/70 after:content-[''] md:col-start-8 md:row-start-3 md:col-span-5 md:row-span-2">
              <img src={aboutCommunityGalleryData.images[2]} alt='Synergy Squad 2.0 event banner' loading="lazy" decoding="async" className='h-full w-full object-cover transition duration-700 group-hover:scale-105' />
            </figure>

            <figure className="hidden md:block group relative overflow-hidden bg-[#111827] after:absolute after:inset-0 after:z-10 after:bg-black/70 after:content-[''] md:col-start-1 md:row-start-5 md:col-span-4 md:row-span-2">
              <img src={aboutCommunityGalleryData.images[3]} alt='Students participating in a Synergy Squad activity' loading="lazy" decoding="async" className='h-full w-full object-cover transition duration-700 group-hover:scale-105' />
            </figure>

            <figure className="hidden md:block group relative overflow-hidden bg-[#111827] after:absolute after:inset-0 after:z-10 after:bg-black/70 after:content-[''] md:col-start-5 md:row-start-5 md:col-span-3 md:row-span-2">
              <img src={aboutCommunityGalleryData.images[4]} alt='Synergy Squad 3.0 event banner' loading="lazy" decoding="async" className='h-full w-full object-cover transition duration-700 group-hover:scale-105' />
            </figure>

            <figure className="hidden md:block group relative overflow-hidden bg-[#111827] after:absolute after:inset-0 after:z-10 after:bg-black/70 after:content-[''] md:col-start-8 md:row-start-5 md:col-span-5 md:row-span-2">
              <img src={aboutCommunityGalleryData.images[5]} alt='Synergy Squad students together' loading="lazy" decoding="async" className='h-full w-full object-cover transition duration-700 group-hover:scale-105' />
            </figure>
          </div>

          <div className='pointer-events-none absolute inset-0 z-30 flex items-center justify-center px-6 text-center text-white md:px-12'>
            <div className='max-w-4xl'>
              <h2 className='text-4xl font-semibold leading-[0.92] tracking-tighter md:text-6xl lg:text-8xl'>
                {aboutCommunityGalleryData.bannerQuote}
              </h2>
            </div>
          </div>
        </section>

        {/* Members Hired by Industry Leaders */}
        <div className='mt-16 mb-16 px-8'>
          <h1 className='text-black font-semibold text-3xl md:text-5xl lg:text-6xl tracking-tighter max-w-2xl mb-12'>
            {aboutIndustryLeadersData.title}
          </h1>
          <div className='grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 items-center'>
            {aboutIndustryLeadersData.companies.map((company, index) => (
              <div key={index} className={`border border-gray-300 rounded-sm p-4 flex items-center justify-center h-24 bg-white shadow-xs hover:border-gray-400 transition-colors ${company.overflowHidden ? 'overflow-hidden' : ''}`}>
                <img src={company.logo} alt={company.name} loading="lazy" decoding="async" className={company.imgClassName} />
              </div>
            ))}
          </div>
        </div>

        {/* Reference-Styled Bento Grid Section */}
        <div className='mt-24 px-6 md:px-12 max-w-7xl mx-auto mb-24'>
          {/* Top Grid: Counter Header + Wide Hero Image */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 items-stretch'>
            {/* Header Card with massive counter text */}
            <div className='lg:col-span-5 flex flex-col justify-center py-6 pr-4'>
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter mb-3 text-black'>
                {aboutBentoData.header.title}
              </h2>
              <p className='text-gray-500 font-medium text-sm md:text-base tracking-tighter max-w-xs'>
                {aboutBentoData.header.subtitle}
              </p>
            </div>

            {/* Wide Header Image */}
            <div className='lg:col-span-7 relative h-[260px] md:h-[320px] rounded-[32px] overflow-hidden group bg-gray-300'>
              <img
                src={aboutBentoData.heroImage}
                alt="Squad Hero"
                loading="lazy"
                decoding="async"
                className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700'
              />
            </div>
          </div>

          {/* Main Asymmetric Bento Gallery */}
          <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
            {/* Left Column: Tall Vertical Instagram Card */}
            <div className='md:col-span-4 relative min-h-[500px] md:min-h-[640px] rounded-[32px] overflow-hidden group bg-gray-900'>
              <img
                src={aboutBentoData.poolImage}
                alt="Pool culture"
                loading="lazy"
                decoding="async"
                className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90'
              />
            </div>

            {/* Center Column */}
            <div className='md:col-span-4 flex flex-col justify-between gap-6'>
              {/* Mid Image with Overlay Quote */}
              <div className='relative h-[380px] rounded-[32px] overflow-hidden group bg-gray-800'>
                <img
                  src={aboutBentoData.cultureImage}
                  alt="Culture"
                  loading="lazy"
                  decoding="async"
                  className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 brightness-90'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />
                <div className='absolute bottom-6 left-6 right-6 text-white'>
                  <h4 className='text-xl md:text-2xl font-semibold tracking-tight leading-tight'>
                    {aboutBentoData.cultureQuote}
                  </h4>
                </div>
              </div>

              {/* Lower Preview Card */}
              <div className='h-[236px] rounded-[32px] overflow-hidden bg-gray-300 relative group'>
                <img
                  src={aboutBentoData.teamWorkImage}
                  alt="Team work"
                  loading="lazy"
                  decoding="async"
                  className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700'
                />
              </div>
            </div>

            {/* Right Column */}
            <div className='md:col-span-4 flex flex-col justify-between gap-6'>
              {/* Stat Card */}
              <div className='bg-[#dcdcdc] rounded-[32px] p-8 flex flex-col justify-between h-[280px]'>
                <div>
                  <h3 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-black'>
                    <AnimatedCounter target={aboutBentoData.statTarget} suffix={aboutBentoData.statSuffix} />
                  </h3>
                </div>
                <p className='text-gray-600 font-medium text-sm md:text-base leading-snug tracking-tighter max-w-[200px]'>
                  {aboutBentoData.statDescription}
                </p>
              </div>

              {/* Dark Join CTA Box */}
              <a href="#history" className='bg-[#10129B] text-white rounded-[32px] p-8 flex flex-col justify-between h-[180px] relative group cursor-pointer overflow-hidden block'>
                <span className='text-xs font-semibold text-white tracking-tighter uppercase'>
                  Explore the Squad
                </span>

                {/* Arrow Graphic Icon */}
                <div className='absolute bottom-4 right-4 text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300'>
                  <svg className='w-20 h-20 md:w-24 md:h-24' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M5 19L19 5M19 5H9M19 5V15' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                </div>
              </a>

              {/* Bottom Image Tile */}
              <div className='h-[156px] rounded-[32px] overflow-hidden bg-gray-400 relative group'>
                <img
                  src={aboutBentoData.eventImage}
                  alt="Synergy event"
                  loading="lazy"
                  decoding="async"
                  className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700'
                />
              </div>
            </div>
          </div>
        </div>

        <FinalCTA />
      </div>
    </div>
  )
}

export default About