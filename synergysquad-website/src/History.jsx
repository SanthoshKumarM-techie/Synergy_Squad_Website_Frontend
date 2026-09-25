import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Navbar from './Navbar'
import FinalCTA from './FinalCTA'
import StaggeredText from './StaggeredText'
import BG from './assets/abstractBG.jpg'
import Silk from '../Components/Silk'
import {
  heroData,
  chroniclesData,
  identificationData,
  technicalTrainingData,
  technicalAssessmentsData,
  hallOfFameData,
} from './data/historyData'

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

      // Smooth cubic ease-out
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

function LiveGrainOverlay({ opacity = 'opacity-35' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId

    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth
        canvas.height = canvas.parentElement.clientHeight
      }
    }
    resize()
    window.addEventListener('resize', resize)

    const renderNoise = () => {
      const w = canvas.width
      const h = canvas.height
      if (w > 0 && h > 0) {
        const imgData = ctx.createImageData(w, h)
        const data = imgData.data
        for (let i = 0; i < data.length; i += 4) {
          const v = (Math.random() - 0.5) * 200
          data[i] = 128 + v     // R
          data[i + 1] = 128 + v // G
          data[i + 2] = 128 + v // B
          data[i + 3] = 255     // A
        }
        ctx.putImageData(imgData, 0, 0)
      }
      animationFrameId = requestAnimationFrame(renderNoise)
    }

    renderNoise()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none z-10 ${opacity} mix-blend-overlay`}
    />
  )
}

function TechnicalAssessmentsSlider({ currentSlideIndex, setCurrentSlideIndex }) {
  const [progress, setProgress] = useState(0)
  const DURATION = 6500
  const assessmentSlides = technicalAssessmentsData.slides

  useEffect(() => {
    setProgress(0)
    const startTime = Date.now()
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const currentProgress = Math.min((elapsed / DURATION) * 100, 100)
      setProgress(currentProgress)

      if (elapsed >= DURATION) {
        clearInterval(interval)
        setCurrentSlideIndex((prev) => (prev + 1) % assessmentSlides.length)
      }
    }, 40)

    return () => clearInterval(interval)
  }, [currentSlideIndex, setCurrentSlideIndex, assessmentSlides.length])

  const slide = assessmentSlides[currentSlideIndex]

  if (!slide) return null

  return (
    <div className='lg:col-span-7 pt-0 space-y-4'>
      
      {/* Animated Batch & Assessment Heading */}
      <div className='space-y-1 overflow-hidden min-h-[80px] flex flex-col justify-end'>
        <motion.h3
          key={`batch-${currentSlideIndex}`}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black tracking-tighter'
        >
          {slide.batch}
        </motion.h3>

        <motion.h4
          key={`title-${currentSlideIndex}`}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className='text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 tracking-tighter pt-0.5'
        >
          {slide.title}
        </motion.h4>
      </div>

      {/* Blue Load Bar Line below Assessment Heading */}
      <div className='relative w-full h-[4px] bg-black/10 rounded-full overflow-hidden my-2'>
        <div
          className='absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-all duration-75 linear'
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Constant Column Headers */}
      <div className='grid grid-cols-12 text-[10px] sm:text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider px-2 pb-1 border-b border-black/10 mt-6 lg:mt-8'>
        <span className={slide.hasStudents ? 'col-span-6' : 'col-span-8'}>
          Test Name
        </span>
        <span className={slide.hasStudents ? 'col-span-3 text-center' : 'col-span-4 text-right'}>
          Date Conducted
        </span>
        {slide.hasStudents && (
          <span className='col-span-3 text-right'>
            Attended Students
          </span>
        )}
      </div>

      {/* List Items Container with Staggered Slide-In from Right */}
      <div className='divide-y divide-black/10 border-b border-black/10 overflow-hidden min-h-[360px]'>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className='divide-y divide-black/10'
          >
            {slide.items.map((item, idx) => (
              <motion.div
                key={`${currentSlideIndex}-${idx}`}
                initial={{ opacity: 0, x: 120 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className='py-3.5 grid grid-cols-12 items-center gap-2 group hover:bg-black/5 px-2 transition-colors duration-150'
              >
                <span className={`${slide.hasStudents ? 'col-span-6' : 'col-span-8'} font-semibold text-base sm:text-lg md:text-xl text-black tracking-tighter truncate`}>
                  {item.name}
                </span>
                <span className={`${slide.hasStudents ? 'col-span-3 text-center' : 'col-span-4 text-right'} font-semibold text-xs sm:text-sm md:text-base text-gray-600 tracking-tighter`}>
                  {item.date}
                </span>
                {slide.hasStudents && (
                  <span className='col-span-3 text-right font-semibold text-xs sm:text-sm md:text-base text-black tracking-tighter'>
                    {item.students}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  )
}

function TechnicalAssessmentsSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const slidesCount = technicalAssessmentsData.slides.length

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slidesCount) % slidesCount)
  }

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slidesCount)
  }

  return (
    <section className='px-6 md:px-12 py-10 md:py-16 max-w-[1600px] mx-auto min-h-screen'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start'>
        
        {/* Left Column: Sticky Heading, Description, Image & Navigation Arrows */}
        <div className='lg:col-span-5 relative lg:sticky lg:top-28 self-start space-y-4'>
          <div>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tighter leading-tighter'>
              {technicalAssessmentsData.title}
            </h2>
            <p className='text-gray-700 font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight max-w-xl mt-2'>
              {technicalAssessmentsData.description}
            </p>
          </div>

          {/* Image Holder below heading with Live Canvas Grain Overlay */}
          <div className='aspect-square w-36 md:w-44 lg:w-52 overflow-hidden border border-black/10 shadow-md relative bg-gray-300 mt-2'>
            <img
              src={technicalAssessmentsData.image}
              alt={technicalAssessmentsData.title}
              className='w-full h-full object-cover object-center relative z-0'
            />
            <LiveGrainOverlay opacity="opacity-40" />
          </div>

          {/* Navigation Arrows < > */}
          <div className='flex items-center gap-4 pt-2 shrink-0'>
            <button
              onClick={handlePrev}
              aria-label="Previous Assessment"
              className='text-black cursor-pointer bg-transparent border-none p-1 text-3xl md:text-4xl select-none hover:opacity-70 transition-opacity'
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Assessment"
              className='text-black cursor-pointer bg-transparent border-none p-1 text-3xl md:text-4xl select-none hover:opacity-70 transition-opacity'
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        {/* Right Column Container: Auto-advancing Batch & Assessment Slider */}
        <TechnicalAssessmentsSlider
          currentSlideIndex={currentSlideIndex}
          setCurrentSlideIndex={setCurrentSlideIndex}
        />

      </div>
    </section>
  )
}

function InfiniteHorizontalBrochureCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  const brochures = hallOfFameData.brochures

  return (
    <div 
      className='w-full overflow-hidden relative z-10 pt-6 pb-0 mb-0 mt-auto group pointer-events-auto cursor-pointer'
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className='animate-marquee-slow group-hover:[animation-play-state:paused] flex items-end gap-4 md:gap-6 w-max'
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      >
        {[...brochures, ...brochures].map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className='h-[58vh] md:h-[66vh] lg:h-[72vh] shrink-0 hover:scale-[1.02] transition-transform duration-300 relative flex items-end pb-0'
          >
            <img
              src={item.src}
              alt={item.title}
              className='h-full w-auto object-contain object-bottom drop-shadow-2xl'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function History() {
  return (
    <div className='bg-[#e6e6e6] relative overflow-x-clip w-full max-w-[100vw]'>
      <Navbar />
      
      {/* Sticky Hero Section */}
      <section className='relative md:sticky md:top-0 isolate w-full min-h-screen overflow-hidden flex flex-col justify-center px-6 md:px-12 py-24 md:block'>
        <img src={BG} alt="Abstract Background" className='absolute inset-0 z-0 w-full h-full object-cover' />
        <div className='relative md:absolute md:inset-y-0 md:left-12 z-30 flex items-center mb-12 md:mb-0'>
          <StaggeredText 
            className='max-w-7xl text-left text-4xl font-semibold leading-[0.92] tracking-tighter text-white md:text-5xl lg:text-6xl'
            text={heroData.headline}
            delay={0.6}
          />
        </div>
        <div className='relative md:absolute z-30 md:bottom-12 md:left-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-white max-w-full md:max-w-none md:pr-12'>
          <div className='flex flex-col max-w-lg'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>
              {heroData.legacy.title}
            </h2>
            <p className='tracking-tighter text-sm md:text-md lg:text-lg leading-tight font-semibold'>
              {heroData.legacy.text}
            </p>
          </div>
          <div className='flex flex-col max-w-lg'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>
              {heroData.milestones.title}
            </h2>
            <p className='tracking-tighter text-sm md:text-md lg:text-lg leading-tight font-semibold'>
              {heroData.milestones.text}
            </p>
          </div>
        </div>
      </section>

      <div className="bg-[#e6e6e6] relative z-20 pointer-events-auto" style={{ marginBottom: '-100vh' }}>
        {/* History Chronicles & Bento Stats Section */}
        <section id="chronicles" className='min-h-fit px-6 md:px-12 lg:px-16 pt-36 md:pt-44 lg:pt-48 pb-20 md:pb-28 max-w-[1600px] mx-auto flex flex-col justify-center'>
          
          {/* Header Title + Action Pill & Alumni Badge */}
          <div className='flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 md:mb-16'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tighter leading-tighter whitespace-pre-line'>
              {chroniclesData.title}
            </h1>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8'>
              {/* Overlapping Profile Avatars */}
              <div className='flex flex-col items-start gap-1.5'>
                <div className='flex items-center -space-x-4 overflow-visible py-1'>
                  {chroniclesData.alumniAvatars.map((avatar, idx) => (
                    <img
                      key={idx}
                      src={avatar.src}
                      alt={avatar.alt}
                      className='inline-block w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full object-cover ring-2 ring-[#e6e6e6] shadow-md hover:scale-110 hover:z-20 transition-all duration-300'
                    />
                  ))}
                </div>
                <span className='text-xs md:text-sm font-semibold text-gray-800 tracking-tighter uppercase block'>
                  <AnimatedCounter target={chroniclesData.alumniCount} suffix="+" /> {chroniclesData.alumniLabel}
                </span>
              </div>

              <a 
                href={chroniclesData.cta.target}
                onClick={(e) => {
                  e.preventDefault()
                  const targetElement = document.querySelector(chroniclesData.cta.target)
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className='bg-[#10129B] text-white px-6 py-3.5 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider hover:bg-blue-800 transition-all duration-300 shadow-md shrink-0 flex items-center gap-2 self-start sm:self-center cursor-pointer'
              >
                {chroniclesData.cta.label}
              </a>
            </div>
          </div>

          {/* Asymmetric Bento Grid */}
          <div className='grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 items-stretch'>
            
            {/* Left 7 Columns Grid */}
            <div className='md:col-span-7 flex flex-col gap-4 lg:gap-6 justify-between'>
              
              {/* Row 1: Large Stat Card */}
              <div className='border border-black/10 rounded-none p-6 md:p-8 flex flex-col justify-between min-h-[220px] md:min-h-[250px] bg-transparent hover:border-black/25 transition-all relative group'>
                <div className='flex items-center justify-between w-full'>
                  <div>
                    <span className='text-6xl md:text-7xl lg:text-8xl font-semibold text-black tracking-tighter leading-none block'>
                      <AnimatedCounter target={chroniclesData.stats.placement.target} suffix={chroniclesData.stats.placement.suffix} />
                    </span>
                  </div>
                  
                  {/* Sunburst Graphic */}
                  <div className='relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center shrink-0'>
                    <svg className='w-full h-full animate-[spin_20s_linear_infinite] text-black/25' viewBox='0 0 100 100' fill='none'>
                      <circle cx='50' cy='50' r='46' stroke='currentColor' strokeWidth='2' strokeDasharray='4 6' />
                      <circle cx='50' cy='50' r='38' stroke='currentColor' strokeWidth='1' strokeDasharray='2 4' />
                    </svg>
                    <svg className='absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] animate-[spin_14s_linear_infinite_reverse] text-[#10129B]/30' viewBox='0 0 100 100' fill='none'>
                      <circle cx='50' cy='50' r='44' stroke='currentColor' strokeWidth='1.5' strokeDasharray='6 10' />
                    </svg>
                    <div className='absolute inset-0 m-auto w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full bg-[#10129B] text-white flex items-center justify-center shadow-xl shadow-blue-950/20 hover:scale-105 transition-transform duration-300'>
                      <svg className='w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-white' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
                        <polyline points='16 18 22 12 16 6' />
                        <polyline points='8 6 2 12 8 18' />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className='mt-6 border-t border-black/10 pt-4 flex items-center justify-between'>
                  <span className='text-xs sm:text-sm font-semibold text-gray-700 tracking-tighter uppercase'>
                    {chroniclesData.stats.placement.label}
                  </span>
                </div>
              </div>

              {/* Row 2: 3 Stat Cards */}
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6'>
                <div className='border border-black/10 rounded-none p-6 md:p-8 flex flex-col justify-between min-h-[180px] md:min-h-[200px] bg-transparent hover:border-black/25 transition-all'>
                  <span className='text-5xl md:text-6xl lg:text-7xl font-semibold text-black tracking-tighter leading-none block'>
                    <AnimatedCounter target={chroniclesData.stats.members.target} suffix={chroniclesData.stats.members.suffix} />
                  </span>
                  <span className='text-xs sm:text-sm font-semibold text-gray-700 tracking-tighter uppercase mt-6 pt-4 border-t border-black/10 block'>
                    {chroniclesData.stats.members.label}
                  </span>
                </div>

                <div className='border border-black/10 rounded-none p-6 md:p-8 flex flex-col justify-between min-h-[180px] md:min-h-[200px] bg-transparent hover:border-black/25 transition-all'>
                  <span className='text-5xl md:text-6xl lg:text-7xl font-semibold text-black tracking-tighter leading-none block'>
                    <AnimatedCounter target={chroniclesData.stats.batches.target} suffix={chroniclesData.stats.batches.suffix} />
                  </span>
                  <span className='text-xs sm:text-sm font-semibold text-gray-700 tracking-tighter uppercase mt-6 pt-4 border-t border-black/10 block'>
                    {chroniclesData.stats.batches.label}
                  </span>
                </div>

                <div className='border border-black/10 rounded-none p-6 md:p-8 flex flex-col justify-between min-h-[180px] md:min-h-[200px] bg-transparent hover:border-black/25 transition-all'>
                  <span className='text-5xl md:text-6xl lg:text-7xl font-semibold text-black tracking-tighter leading-none block'>
                    <AnimatedCounter 
                      target={chroniclesData.stats.legacy.target} 
                      startFrom={chroniclesData.stats.legacy.startFrom} 
                      duration={chroniclesData.stats.legacy.duration} 
                    />
                  </span>
                  <span className='text-xs sm:text-sm font-semibold text-gray-700 tracking-tighter uppercase mt-6 pt-4 border-t border-black/10 block'>
                    {chroniclesData.stats.legacy.label}
                  </span>
                </div>
              </div>

            </div>

            {/* Right 5 Columns: Cover Image Box */}
            <div className='md:col-span-5 border border-black/10 rounded-none relative overflow-hidden flex flex-col justify-end p-6 md:p-8 min-h-[400px] md:min-h-[440px] bg-transparent group'>
              <img
                src={chroniclesData.cover.image}
                alt="Synergy Squad Chronicles"
                className='absolute inset-0 w-full h-full object-cover rounded-none z-0 transition-transform duration-700 group-hover:scale-105'
              />
              <LiveGrainOverlay opacity='opacity-20' />

              <div className='relative z-10 pt-16'>
                <p className='text-white mix-blend-difference font-semibold text-base md:text-lg lg:text-xl leading-snug tracking-tighter'>
                  {chroniclesData.cover.text}
                </p>
              </div>
            </div>

          </div>

        </section>

        {/* Identification & Formation Process Section */}
        <section id="process" className='px-6 md:px-12 py-16 md:py-24 max-w-[1600px] mx-auto min-h-screen scroll-mt-24'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start'>
            
            {/* Left Column: Sticky Heading & Image */}
            <div className='lg:col-span-5 relative lg:sticky lg:top-28 self-start space-y-4'>
              <div>
                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tighter leading-tighter whitespace-pre-line'>
                  {identificationData.title}
                </h2>
                <p className='text-gray-700 font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight max-w-xl mt-2'>
                  {identificationData.description}
                </p>
              </div>

              {/* Image Holder below heading with Live Canvas Grain Overlay */}
              <div className='aspect-square w-36 md:w-44 lg:w-52 overflow-hidden border border-black/10 shadow-md relative bg-gray-300 mt-2'>
                <img
                  src={identificationData.image}
                  alt={identificationData.title}
                  className='w-full h-full object-cover object-center relative z-0'
                />
                <LiveGrainOverlay opacity="opacity-40" />
              </div>
            </div>

            {/* Right Column: Stacked Borderless Step Items */}
            <div className='lg:col-span-7 space-y-8 md:space-y-12 pt-2 lg:pt-0'>
              {identificationData.steps.map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: 120 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className='flex flex-col gap-2 group pb-4'
                >
                  <div className='flex items-baseline gap-2.5'>
                    <span className='text-md md:text-xl font-semibold text-gray-500 tracking-tighter shrink-0'>
                      {item.step} —
                    </span>
                    <h3 className='text-xl sm:text-lg md:text-xl lg:text-2xl font-semibold text-black tracking-tighter'>
                      {item.title}
                    </h3>
                  </div>
                  <p className='text-gray-700 font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight md:leading-snug max-w-2xl'>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Technical Training Section */}
        <section className='px-6 md:px-12 py-16 md:py-24 max-w-[1600px] mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start'>
            
            {/* Left Side: Heading on top + Body text below it */}
            <div className='lg:col-span-7 space-y-6'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tighter leading-tight'>
                {technicalTrainingData.title}
              </h2>

              <p className='text-gray-700 font-semibold text-base md:text-lg lg:text-xl tracking-tighter leading-tight md:leading-snug'>
                {technicalTrainingData.description}
              </p>
            </div>

            {/* Right Side: Image (No Grain) */}
            <div className='lg:col-span-5 flex justify-center lg:justify-end w-full'>
              <div className='aspect-square w-full max-w-md overflow-hidden border border-black/10 shadow-lg bg-gray-200'>
                <img
                  src={technicalTrainingData.image}
                  alt={technicalTrainingData.title}
                  className='w-full h-full object-cover object-center'
                />
              </div>
            </div>

          </div>
        </section>

        {/* Technical Assessments Section */}
        <TechnicalAssessmentsSection />

        {/* Hall of Fame Section with Silk Background & Bottom Infinite Horizontal Carousel */}
        <section className='relative isolate min-h-screen w-full pt-16 md:pt-24 pb-0 flex flex-col justify-between overflow-hidden'>
          {/* Silk Background Component */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <Silk
              speed={5}
              scale={1}
              color="#5227FF"
              noiseIntensity={1.5}
              rotation={0}
            />
          </div>

          {/* Top Header Grid: Heading on left, Description on right */}
          <div className='z-10 relative max-w-[1600px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-4 items-end'>
            <div className='md:col-span-7'>
              <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter leading-none'>
                {hallOfFameData.title}
              </h2>
            </div>
            <div className='md:col-span-5'>
              <p className='text-white/85 font-semibold text-sm md:text-base lg:text-lg tracking-tighter leading-tight md:text-right'>
                {hallOfFameData.description}
              </p>
            </div>
          </div>

          {/* Bottom Infinite Horizontal Carousel anchored to bottom edge */}
          <InfiniteHorizontalBrochureCarousel />
        </section>

        {/* Final Call to Action */}
        <FinalCTA />
      </div>
    </div>
  )
}

export default History
