import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import FinalCTA from './FinalCTA'
import StaggeredText from './StaggeredText'
import BG from './assets/abstractBG.jpg'
import Silk from '../Components/Silk'
import HistoryBG from './assets/HistoryBG.png'
import ChroniclesOfSquadImg from './assets/ChroniclesOfSquad.png'
import IdentificationImg from './assets/Identification.png'
import IntensiveTrainingImg from './assets/IntensiveTraining.png'
import TechnicalAssessmentsImg from './assets/squad_event_1.png'
import HallOfFameImg from './assets/squad_event_2.png'
import HallOfFameMainImg from './assets/squad_event_3.png'
import SS1B1 from './assets/SS 1.0 Brouchre 1.png'
import SS1B2 from './assets/SS 1.0 Brouchre 2.png'
import SS1B3 from './assets/SS 1.0 Brouchre 3.png'
import SS1B4 from './assets/SS 1.0 Brouchre 4.png'
import SS1B5 from './assets/SS 1.0 Brouchre 5.png'
import SS1B6 from './assets/SS 1.0 Brouchre 6.png'
import SS1B7 from './assets/SS 1.0 Brouchre 7.png'
import SS2B1 from './assets/SS 2.0 Brouchre 1.png'
import SS2B2 from './assets/SS 2.0 Brouchre 2.png'
import SS2B3 from './assets/SS 2.0 Brouchre 3.png'
import SS2B4 from './assets/SS 2.0 Brouchre 4.png'
import SS2B5 from './assets/SS 2.0 Brouchre 5.png'
import SS3B1 from './assets/SS 3.0 Brouchre 1.png'
import SS3B2 from './assets/SS 3.0 Brouchre 2.png'
import SS3B3 from './assets/SS 3.0 Brouchre 3.png'
import SS3B4 from './assets/SS 3.0 Brouchre 4.png'
import SS3B5 from './assets/SS 3.0 Brouchre 5.png'
import SS3B6 from './assets/SS 3.0 Brouchre 6.png'
import SS3B7 from './assets/SS 3.0 Brouchre 7.png'
import SS3B8 from './assets/SS 3.0 Brouchre 8.png'
import SS4B1 from './assets/SS 4.0 Brouchre 1.png'
import SS4B2 from './assets/SS 4.0 Brouchre 2.png'
import SS4B3 from './assets/SS 4.0 Brouchre 3.png'
import SS4B4 from './assets/SS 4.0 Brouchre 4.png'
import SS4B5 from './assets/SS 4.0 Brouchre 5.png'
import SS4B6 from './assets/SS 4.0 Brouchre 6.png'
import SS4B7 from './assets/SS 4.0 Brouchre 7.png'
import SS4B8 from './assets/SS 4.0 Brouchre 8.png'

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

const assessmentSlides = [
  {
    batch: 'Synergy Squad 1.0',
    title: 'Weekly Activity Summary',
    hasStudents: false,
    items: [
      { name: 'Pattern Day', date: '21-01-2024' },
      { name: 'Mastering in Array Day', date: '28-01-2024' },
      { name: 'Mastering in Strings Day', date: '04-02-2024' },
      { name: 'C Programming MCQ Day', date: '11-02-2024' },
      { name: 'C Programming Master Class Day', date: '18-02-2024' },
      { name: 'Mock TCS Ninja NQT Challenge Day', date: '25-02-2024' },
      { name: 'Mock Wipro NLTH Challenge Day', date: '10-03-2024' },
      { name: 'Mock Pratian Technologies Challenge Day', date: '24-03-2024' },
    ]
  },
  {
    batch: 'Synergy Squad 2.0',
    title: 'Summary of 7 Mock TCS CodeVita Assessments',
    hasStudents: true,
    items: [
      { name: 'Assessment No 1', date: '07/10/2024', students: '114' },
      { name: 'Assessment No 2', date: '08/10/2024', students: '123' },
      { name: 'Assessment No 3', date: '09/10/2024', students: '106' },
      { name: 'Assessment No 4', date: '10/10/2024', students: '71' },
      { name: 'Assessment No 5', date: '11/10/2024', students: '69' },
      { name: 'Assessment No 6', date: '14/10/2024', students: '79' },
      { name: 'Assessment No 7', date: '15/10/2024', students: '83' },
    ]
  },
  {
    batch: 'Synergy Squad 2.0',
    title: '5 Know and Grow Assessments - Summary',
    hasStudents: true,
    items: [
      { name: 'Assessment No 1', date: '28/01/2025', students: '81' },
      { name: 'Assessment No 2', date: '29/01/2025', students: '122' },
      { name: 'Assessment No 3', date: '30/01/2025', students: '120' },
      { name: 'Assessment No 4', date: '31/01/2025', students: '107' },
      { name: 'Assessment No 5', date: '01/02/2025', students: '120' },
    ]
  },
  {
    batch: 'Synergy Squad 2.0',
    title: 'Weekly Activity Summary',
    hasStudents: false,
    items: [
      { name: 'Pattern Programming Exploration Day', date: '30-09-2024' },
      { name: 'Control Flow Mastery Day', date: '06-10-2024' },
      { name: 'Array Optimization Master Class Day', date: '13-10-2024' },
      { name: 'Efficient String Manipulation Day', date: '20-10-2024' },
      { name: 'Hundred - Fold C Proficiency Test', date: '27-10-2024' },
    ]
  },
  {
    batch: 'Synergy Squad 3.0',
    title: 'Weekly Activity Summary',
    hasStudents: false,
    items: [
      { name: 'Pattern Play Day', date: '10-08-2025' },
      { name: 'Array Mastery Quest Day', date: '17-08-2025' },
      { name: "String Hacker's Day", date: '24-08-2025' },
      { name: 'Century in C Day', date: '31-08-2025' },
      { name: 'OOPS Explore Day', date: '07-09-2025' },
      { name: 'TCS Mock Sprint Day', date: '14-09-2025' },
      { name: 'Wipro Warriors: NLTH Mock Day', date: '21-09-2025' },
      { name: 'Pratian Prep Battle Day', date: '28-09-2025' },
    ]
  },
  {
    batch: 'Synergy Squad 4.0',
    title: 'Weekly Activity Summary',
    hasStudents: false,
    items: [
      { name: 'Pattern Boss Level', date: '22/02/2026' },
      { name: 'Array Avengers', date: '01/03/2026' },
      { name: 'String Slayer Arena', date: '08/03/2026' },
      { name: 'Mission C: Unlock the Core', date: '15/03/2026' },
      { name: 'OOPS Explore Day', date: '22/03/2026' },
      { name: 'TCS Sprint Royale', date: '29/03/2026' },
      { name: 'WIPRO Warriors Arena Day', date: '05/04/2026' },
      { name: 'Mission Zoho Crack the Code', date: '12/04/2026' },
    ]
  }
]

function TechnicalAssessmentsSlider() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const DURATION = 6500

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
  }, [currentSlideIndex])

  const slide = assessmentSlides[currentSlideIndex]

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
      <div className='grid grid-cols-12 text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider px-2 pb-1 border-b border-black/10 mt-8'>
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
                <span className={`${slide.hasStudents ? 'col-span-6' : 'col-span-8'} font-semibold text-lg md:text-xl text-black tracking-tighter truncate`}>
                  {item.name}
                </span>
                <span className={`${slide.hasStudents ? 'col-span-3 text-center' : 'col-span-4 text-right'} font-semibold text-sm md:text-base text-gray-600 tracking-tighter`}>
                  {item.date}
                </span>
                {slide.hasStudents && (
                  <span className='col-span-3 text-right font-semibold text-sm md:text-base text-black tracking-tighter'>
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

const hallOfFameBrochures = [
  { id: 1, src: SS1B1, title: 'SS 1.0 — Brochure 1', batch: 'Synergy Squad 1.0' },
  { id: 2, src: SS1B2, title: 'SS 1.0 — Brochure 2', batch: 'Synergy Squad 1.0' },
  { id: 3, src: SS1B3, title: 'SS 1.0 — Brochure 3', batch: 'Synergy Squad 1.0' },
  { id: 4, src: SS1B4, title: 'SS 1.0 — Brochure 4', batch: 'Synergy Squad 1.0' },
  { id: 5, src: SS1B5, title: 'SS 1.0 — Brochure 5', batch: 'Synergy Squad 1.0' },
  { id: 6, src: SS1B6, title: 'SS 1.0 — Brochure 6', batch: 'Synergy Squad 1.0' },
  { id: 7, src: SS1B7, title: 'SS 1.0 — Brochure 7', batch: 'Synergy Squad 1.0' },
  { id: 8, src: SS2B1, title: 'SS 2.0 — Brochure 1', batch: 'Synergy Squad 2.0' },
  { id: 9, src: SS2B2, title: 'SS 2.0 — Brochure 2', batch: 'Synergy Squad 2.0' },
  { id: 10, src: SS2B3, title: 'SS 2.0 — Brochure 3', batch: 'Synergy Squad 2.0' },
  { id: 11, src: SS2B4, title: 'SS 2.0 — Brochure 4', batch: 'Synergy Squad 2.0' },
  { id: 12, src: SS2B5, title: 'SS 2.0 — Brochure 5', batch: 'Synergy Squad 2.0' },
  { id: 13, src: SS3B1, title: 'SS 3.0 — Brochure 1', batch: 'Synergy Squad 3.0' },
  { id: 14, src: SS3B2, title: 'SS 3.0 — Brochure 2', batch: 'Synergy Squad 3.0' },
  { id: 15, src: SS3B3, title: 'SS 3.0 — Brochure 3', batch: 'Synergy Squad 3.0' },
  { id: 16, src: SS3B4, title: 'SS 3.0 — Brochure 4', batch: 'Synergy Squad 3.0' },
  { id: 17, src: SS3B5, title: 'SS 3.0 — Brochure 5', batch: 'Synergy Squad 3.0' },
  { id: 18, src: SS3B6, title: 'SS 3.0 — Brochure 6', batch: 'Synergy Squad 3.0' },
  { id: 19, src: SS3B7, title: 'SS 3.0 — Brochure 7', batch: 'Synergy Squad 3.0' },
  { id: 20, src: SS3B8, title: 'SS 3.0 — Brochure 8', batch: 'Synergy Squad 3.0' },
  { id: 21, src: SS4B1, title: 'SS 4.0 — Brochure 1', batch: 'Synergy Squad 4.0' },
  { id: 22, src: SS4B2, title: 'SS 4.0 — Brochure 2', batch: 'Synergy Squad 4.0' },
  { id: 23, src: SS4B3, title: 'SS 4.0 — Brochure 3', batch: 'Synergy Squad 4.0' },
  { id: 24, src: SS4B4, title: 'SS 4.0 — Brochure 4', batch: 'Synergy Squad 4.0' },
  { id: 25, src: SS4B5, title: 'SS 4.0 — Brochure 5', batch: 'Synergy Squad 4.0' },
  { id: 26, src: SS4B6, title: 'SS 4.0 — Brochure 6', batch: 'Synergy Squad 4.0' },
  { id: 27, src: SS4B7, title: 'SS 4.0 — Brochure 7', batch: 'Synergy Squad 4.0' },
  { id: 28, src: SS4B8, title: 'SS 4.0 — Brochure 8', batch: 'Synergy Squad 4.0' },
]

function InfiniteHorizontalBrochureCarousel() {
  return (
    <div className='w-full overflow-hidden relative z-10 pt-6 pb-0 mb-0 mt-auto'>
      <motion.div
        key="fast-marquee-75"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 75,
            ease: 'linear',
          }
        }}
        className='flex items-end gap-4 md:gap-6 w-max'
      >
        {[...hallOfFameBrochures, ...hallOfFameBrochures].map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className='h-[58vh] md:h-[66vh] lg:h-[72vh] shrink-0 hover:scale-[1.02] transition-transform duration-300 relative group flex items-end pb-0'
          >
            <img
              src={item.src}
              alt={item.title}
              className='h-full w-auto object-contain object-bottom drop-shadow-2xl'
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}



function History() {
  return (
    <div className='bg-[#e6e6e6] relative overflow-x-clip w-full max-w-[100vw]'>
      <Navbar />
      <section className='relative md:sticky md:top-0 isolate w-full min-h-screen overflow-hidden flex flex-col justify-center px-6 md:px-12 py-24 md:block'>
        <img src={BG} alt="Abstract Background" className='absolute inset-0 z-0 w-full h-full object-cover' />
        <div className='relative md:absolute md:inset-y-0 md:left-12 z-30 flex items-center mb-12 md:mb-0'>
          <StaggeredText 
            className='max-w-7xl text-left text-4xl font-semibold leading-[0.92] tracking-tighter text-white md:text-5xl lg:text-6xl'
            text="A Journey Of Excellence & Milestones"
            delay={0.6}
          />
        </div>
        <div className='relative md:absolute z-10 md:bottom-32 lg:bottom-28 md:left-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6 md:gap-16 text-white max-w-7xl mb-8 md:mb-0'>
          <div className='flex flex-col md:grid md:grid-rows-2 md:grid-flow-col gap-0'>
            <div>
              <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>2021</h1>
            </div>
            <div>
              <p className='font-semibold text-sm md:text-base lg:text-lg tracking-tighter leading-tight md:mt-2 lg:mt-3'>Established</p>
            </div>
          </div>
          <div className='flex flex-col md:grid md:grid-rows-2 md:grid-flow-col gap-0'>
            <div>
              <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>75+</h1>
            </div>
            <div>
              <p className='font-semibold text-sm md:text-base lg:text-lg tracking-tighter leading-tight md:mt-2 lg:mt-3'>Tier-1 Placements</p>
            </div>
          </div>
          <div className='flex flex-col md:grid md:grid-rows-2 md:grid-flow-col gap-0'>
            <div>
              <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>4+</h1>
            </div>
            <div>
              <p className='font-semibold text-sm md:text-base lg:text-lg tracking-tighter leading-tight md:mt-2 lg:mt-3'>Active Batches</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#e6e6e6] relative z-20 pointer-events-auto" style={{ marginBottom: '-100vh' }}>
        {/* History Chronicles & Stats Section */}
        <section className='min-h-screen px-6 md:px-12 py-16 md:py-20 max-w-[1600px] mx-auto flex flex-col justify-center'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 items-start'>
            
            {/* Left Column: Heading + Square Image Container */}
            <div className='lg:col-span-6 flex flex-col gap-2.5'>
              <div>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tighter leading-tighter'>
                  Chronicles of Synergy Squad
                </h1>
              </div>

              {/* Square Image Holder Box (Sharp square corners, light border with film grain effect) */}
              <div className='aspect-square w-full overflow-hidden rounded-none border border-black/10 shadow-none relative bg-gray-200 mt-1'>
                <img
                  src={ChroniclesOfSquadImg}
                  alt="Synergy Squad Chronicles"
                  className='w-full h-full object-cover object-center rounded-none relative z-0'
                />
                <LiveGrainOverlay opacity='opacity-35' />
              </div>
            </div>

            {/* Right Column: 2x2 Stat Squares Grid + Description Box starting at same line as heading */}
            <div className='lg:col-span-6 flex flex-col justify-between h-full pt-0'>
              <div className='grid grid-cols-2 gap-2 md:gap-2.5'>
                {/* Square 1: 4+ */}
                <div className='aspect-square border border-black/10 rounded-none p-4 md:p-8 flex flex-col items-center justify-center text-center bg-transparent shadow-none'>
                  <span className='text-5xl md:text-6xl lg:text-7xl font-semibold text-black tracking-tighter'>
                    4+
                  </span>
                  <span className='text-xs md:text-sm font-semibold text-gray-600 tracking-tighter uppercase'>
                    Batches Formed
                  </span>
                </div>

                {/* Square 2: 190+ */}
                <div className='aspect-square border border-black/10 rounded-none p-4 md:p-8 flex flex-col items-center justify-center text-center bg-transparent shadow-none'>
                  <span className='text-5xl md:text-6xl lg:text-7xl font-semibold text-black tracking-tighter'>
                    190+
                  </span>
                  <span className='text-xs md:text-sm font-semibold text-gray-600 tracking-tighter uppercase'>
                    Active Coders
                  </span>
                </div>

                {/* Square 3: 75%+ */}
                <div className='aspect-square border border-black/10 rounded-none p-4 md:p-8 flex flex-col items-center justify-center text-center bg-transparent shadow-none'>
                  <span className='text-5xl md:text-6xl lg:text-7xl font-semibold text-black tracking-tighter'>
                    75%+
                  </span>
                  <span className='text-xs md:text-sm font-semibold text-gray-600 tracking-tighter uppercase'>
                    Placement Rate
                  </span>
                </div>

                {/* Square 4: 2023 */}
                <div className='aspect-square border border-black/10 rounded-none p-4 md:p-8 flex flex-col items-center justify-center text-center bg-transparent shadow-none'>
                  <span className='text-5xl md:text-6xl lg:text-7xl font-semibold text-black tracking-tighter'>
                    2023
                  </span>
                  <span className='text-xs md:text-sm font-semibold text-gray-600 tracking-tighter uppercase'>
                    Legacy Started
                  </span>
                </div>

                {/* Full-Width Rectangular Description Box under stat cards */}
                <div className='col-span-2 border border-black/10 rounded-none p-5 md:p-8 flex flex-col justify-center bg-transparent shadow-none'>
                  <p className='text-gray-800 font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-snug'>
                    A legacy of merit-driven learning, continuous coding marathons, and peer mentorship shaping top-tier engineering talent since inception.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Identification & Formation Process Section */}
        <section className='px-6 md:px-12 py-16 md:py-24 max-w-[1600px] mx-auto min-h-screen'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start'>
            
            {/* Left Column: Sticky Heading & Image */}
            <div className='lg:col-span-5 sticky top-28 self-start space-y-4'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tighter leading-tighter'>
                Identification &<br />Formation
              </h2>

              {/* Image Holder below heading with Live Canvas Grain Overlay */}
              <div className='aspect-square w-52 md:w-64 lg:w-72 overflow-hidden border border-black/10 shadow-md relative bg-gray-300 mt-2'>
                <img
                  src={IdentificationImg}
                  alt="Identification & Formation"
                  className='w-full h-full object-cover object-center relative z-0'
                />
                <LiveGrainOverlay opacity="opacity-40" />
              </div>
            </div>

            {/* Right Column: Stacked Borderless Step Items */}
            <div className='lg:col-span-7 space-y-8 md:space-y-12 pt-2 lg:pt-0'>
              {[
                {
                  step: '01',
                  title: 'Candidate Pool',
                  description: 'Students from the respective batch were considered as the initial pool for the Synergy Squad selection process.'
                },
                {
                  step: '02',
                  title: 'Assessment & Evaluation',
                  description: 'Students were evaluated through structured assessments designed to measure their programming skills, logical thinking, problem-solving ability, and technical aptitude.'
                },
                {
                  step: '03',
                  title: 'Performance Analysis',
                  description: 'The assessment results were analyzed to identify students who demonstrated consistent performance and a strong potential for further technical development.'
                },
                {
                  step: '04',
                  title: 'Shortlisting',
                  description: 'Based on their overall performance, the top-performing students were shortlisted from the respective student pool.'
                },
                {
                  step: '05',
                  title: 'Squad Formation',
                  description: 'The shortlisted students were brought together to form the Synergy Squad, creating a focused community of like-minded students committed to continuous learning and improvement.'
                },
                {
                  step: '06',
                  title: 'Continuous Development',
                  description: 'After formation, the squad members participated in structured training, practice sessions, and regular challenges to continuously strengthen their technical capabilities and placement readiness.'
                }
              ].map((item) => (
                <div
                  key={item.step}
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
                </div>
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
                Technical Training
              </h2>

              <p className='text-gray-700 font-semibold text-base md:text-lg lg:text-xl tracking-tighter leading-tight md:leading-snug'>
                Each Synergy Squad batch underwent focused technical training designed to strengthen programming knowledge, problem-solving ability, and overall technical readiness. The sessions included hands-on Java programming practice, solving moderate-level programming problems through online compilers, daily coding challenges, technical group discussions, skill enhancement assessments, knowledge transfer sessions, and interactive discussions on programming concepts and MCQs. The training also evolved with the needs of each batch, including dedicated sessions on Java Strings and Power BI to broaden students’ technical and practical capabilities.
              </p>
            </div>

            {/* Right Side: Image (No Grain) */}
            <div className='lg:col-span-5 flex justify-center lg:justify-end w-full'>
              <div className='aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-black/10 shadow-lg bg-gray-200'>
                <img
                  src={IntensiveTrainingImg}
                  alt="Technical Training"
                  className='w-full h-full object-cover object-center'
                />
              </div>
            </div>

          </div>
        </section>

        {/* Technical Assessments Section */}
        <section className='px-6 md:px-12 py-10 md:py-16 max-w-[1600px] mx-auto min-h-screen'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start'>
            
            {/* Left Column: Sticky Heading & Image */}
            <div className='lg:col-span-5 sticky top-28 self-start space-y-4'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tighter leading-tighter'>
                Technical Assessments
              </h2>

              {/* Image Holder below heading with Live Canvas Grain Overlay */}
              <div className='aspect-square w-52 md:w-64 lg:w-72 overflow-hidden border border-black/10 shadow-md relative bg-gray-300 mt-2'>
                <img
                  src={TechnicalAssessmentsImg}
                  alt="Technical Assessments"
                  className='w-full h-full object-cover object-center relative z-0'
                />
                <LiveGrainOverlay opacity="opacity-40" />
              </div>
            </div>

            {/* Right Column Container: Auto-advancing Batch & Assessment Slider */}
            <TechnicalAssessmentsSlider />

          </div>
        </section>

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
                Hall of Fame
              </h2>
            </div>
            <div className='md:col-span-5'>
              <p className='text-white/85 font-semibold text-sm md:text-base lg:text-lg tracking-tighter leading-tight md:text-right'>
                Honoring championship milestones, top coding achievements, and departmental excellence across all Synergy Squad batches.
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
