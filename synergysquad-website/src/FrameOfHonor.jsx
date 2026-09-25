import React, { useRef, useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import ScrollProgressBar from './ScrollProgressBar'
import FinalCTA from './FinalCTA'
import { frameOfHonorSeasons } from './data/frameOfHonorData'

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.04,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: 'easeIn',
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

function VoiceOfExcellenceSection({ data }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    if (!data?.testimonials?.length) return
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % data.testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [data?.testimonials])

  const handlePrev = () => {
    if (!data?.testimonials?.length) return
    setActiveTestimonial((prev) => (prev - 1 + data.testimonials.length) % data.testimonials.length)
  }

  const handleNext = () => {
    if (!data?.testimonials?.length) return
    setActiveTestimonial((prev) => (prev + 1) % data.testimonials.length)
  }

  const currentTestimonial = data?.testimonials?.[activeTestimonial]

  if (!currentTestimonial) return null

  return (
    <section className='min-h-screen px-6 md:px-12 py-12 md:py-16 max-w-[1600px] mx-auto flex flex-col justify-between'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch flex-1'>
        
        {/* Left Column: Heading, Description, and Image */}
        <div className='flex flex-col gap-4 items-start self-start'>
          <div>
            <h2 className='text-3xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tighter leading-tight'>
              {data.title}
            </h2>
            {data.description && (
              <p className='text-gray-700 font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight max-w-xl mt-2'>
                {data.description}
              </p>
            )}
          </div>

          {/* Image Holder below description with Live Canvas Grain Overlay */}
          {data.eventImage && (
            <div className='aspect-square w-36 md:w-44 lg:w-52 overflow-hidden border border-black/10 shadow-md relative bg-gray-300 mt-2'>
              <img
                src={data.eventImage}
                alt={data.title}
                loading="lazy"
                decoding="async"
                className='w-full h-full object-cover object-center relative z-0'
              />
              <LiveGrainOverlay opacity="opacity-40" />
            </div>
          )}
        </div>

        {/* Right Column: Testimonial Centered Vertically & Profile/Nav at Bottom */}
        <div className='flex flex-col justify-between h-full py-2 min-h-[400px] md:min-h-[500px]'>
          {/* Testimonial Text Centered via Flex Layout */}
          <div className='flex-1 flex items-center justify-center my-auto py-8 overflow-hidden'>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className='font-semibold text-2xl md:text-3xl lg:text-4xl tracking-tighter leading-tight text-black flex flex-wrap gap-x-[0.25em] gap-y-[0.1em]'
              >
                {currentTestimonial.quote.split(' ').map((word, index) => (
                  <span key={index} className='inline-block overflow-hidden py-0.5 relative'>
                    <motion.span variants={wordVariants} className='inline-block'>
                      {word}
                    </motion.span>
                  </span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Profile Container & Navigation Arrows Row (Plain Static Profile Card) */}
          <div className='flex items-center justify-between gap-4 flex-wrap mt-auto pt-4'>
            {/* Static Profile Avatar & Info without card animation */}
            <div className='flex items-center gap-4'>
              <div className='w-20 h-20 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-black/10 shadow-sm shrink-0 bg-gray-200 relative'>
                <img
                  src={currentTestimonial.profileImage}
                  alt={currentTestimonial.author}
                  loading="lazy"
                  decoding="async"
                  className='w-full h-full object-cover object-top relative z-0'
                />
              </div>
              <div className='flex flex-col'>
                <h3 className='font-semibold text-base md:text-xl lg:text-2xl text-black tracking-tighter leading-tight'>
                  {currentTestimonial.author}
                </h3>
                <p className='font-semibold text-sm md:text-md text-gray-600 tracking-tighter leading-tight'>
                  {currentTestimonial.department}
                </p>
              </div>
            </div>

            {/* Navigation Arrows < > */}
            <div className='flex items-center gap-4 shrink-0'>
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className='text-black cursor-pointer bg-transparent border-none p-1 text-3xl md:text-4xl select-none hover:opacity-70 transition-opacity'
              >
                <FiChevronLeft />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className='text-black cursor-pointer bg-transparent border-none p-1 text-3xl md:text-4xl select-none hover:opacity-70 transition-opacity'
              >
                <FiChevronRight />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

function FrameOfHonor() {
  return (
    <div className='bg-[#e6e6e6] min-h-screen relative text-black'>
      <ScrollProgressBar />
      <Navbar />

      {frameOfHonorSeasons.map((season) => (
        <React.Fragment key={season.id}>
          {/* Main Hero Section */}
          <section className='px-6 md:px-12 pt-18 md:pt-22 pb-12 max-w-[1600px] mx-auto'>
            {season.hero.frameType === 'waiting' ? (
              <div className='w-full aspect-video rounded-sm border border-black/10 shadow-lg relative bg-black flex flex-col items-center justify-center p-6 text-center'>
                <h2 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter uppercase leading-none max-w-4xl'>
                  {season.hero.frameTitle}
                </h2>
                <p className='text-gray-400 font-bold text-base md:text-xl tracking-tight uppercase mt-4'>
                  {season.hero.frameSubtitle}
                </p>
              </div>
            ) : (
              <div className='w-full aspect-video overflow-hidden rounded-sm border border-black/10 shadow-lg relative bg-gray-300'>
                <img
                  src={season.hero.image}
                  alt={season.hero.title}
                  className='w-full h-full object-cover object-center relative z-0'
                />
              </div>
            )}

            {/* Text Section directly under the Image */}
            <div className='mt-4 md:mt-4 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16'>
              <div className='max-w-3xl'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tighter leading-tight'>
                  {season.hero.title}
                </h1>
                <p className='text-gray-700 font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight'>
                  {season.hero.description}
                </p>
              </div>
            </div>
          </section>

          {/* Voice of Excellence Section for this season */}
          <VoiceOfExcellenceSection data={season.voiceOfExcellence} />
        </React.Fragment>
      ))}

      <FinalCTA />
    </div>
  )
}

export default FrameOfHonor