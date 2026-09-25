import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonialsHeader, testimonialsList } from './data/testimonialsData'

const STORY_DURATION = 15000 // 15 seconds per status slide

const RevealText = ({ text, delay = 0, stagger = 0.015 }) => {
    const words = text.split(" ");
    return (
        <>
            {words.map((word, i) => (
                <React.Fragment key={i}>
                    <span className="inline-flex overflow-hidden align-top pb-[0.1em]">
                        <motion.span
                            initial={{ y: "110%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5, delay: delay + i * stagger, ease: [0.33, 1, 0.68, 1] }}
                            className="inline-block"
                        >
                            {word}
                        </motion.span>
                    </span>
                    {i < words.length - 1 && " "}
                </React.Fragment>
            ))}
        </>
    );
};

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    // Robust 60fps animation frame loop for smooth, un-skipped status progression
    useEffect(() => {
        if (isPaused) return

        let animationFrameId
        let lastTime = performance.now()

        const updateProgress = (currentTime) => {
            const deltaTime = currentTime - lastTime
            lastTime = currentTime

            setProgress((prevProgress) => {
                const nextProgress = prevProgress + (deltaTime / STORY_DURATION) * 100
                if (nextProgress >= 100) {
                    return 100
                }
                return nextProgress
            })

            animationFrameId = requestAnimationFrame(updateProgress)
        }

        animationFrameId = requestAnimationFrame(updateProgress)

        return () => cancelAnimationFrame(animationFrameId)
    }, [isPaused, currentIndex])

    // Effect to handle slide change when progress reaches 100
    useEffect(() => {
        if (progress >= 100) {
            setProgress(0)
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsList.length)
        }
    }, [progress])

    const handleNext = () => {
        setProgress(0)
        setCurrentIndex((prev) => (prev + 1) % testimonialsList.length)
    }

    const handlePrev = () => {
        setProgress(0)
        setCurrentIndex((prev) => (prev === 0 ? testimonialsList.length - 1 : prev - 1))
    }

    // Tap/Click handler: Right side -> Next, Left side -> Previous
    const handleContainerClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const clickX = e.clientX - rect.left
        if (clickX > rect.width / 2) {
            handleNext()
        } else {
            handlePrev()
        }
    }

    const handleContextMenu = (e) => {
        e.preventDefault()
        handleNext()
    }

    return (
        <section className='h-screen px-4 md:px-8 py-6 md:py-16 bg-black flex flex-col justify-between items-center w-full overflow-hidden select-none'>
            {/* Header */}
            <h1 className='text-white font-semibold ext-xl md:text-3xl lg:text-4xl tracking-tighter max-w-3xl leading-tight text-center mx-auto shrink-0 mb-4 md:mb-6'>
                {testimonialsHeader}
            </h1>

            {/* Main Status Style Container */}
            <div className='w-full max-w-5xl flex-1 flex flex-col items-center justify-between overflow-hidden relative'>
                {/* Clickable Image Container (No Buttons) */}
                <div
                    className='w-full flex-1 relative flex items-center justify-center overflow-hidden cursor-pointer'
                    onClick={handleContainerClick}
                    onContextMenu={handleContextMenu}
                    onMouseDown={() => setIsPaused(true)}
                    onMouseUp={() => setIsPaused(false)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                >
                    <AnimatePresence mode="wait">
                        {/* Content Container */}
                        <motion.div 
                            key={currentIndex} 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="w-full h-full flex items-center justify-center relative"
                        >
                            {/* Image Container (Full screen on mobile, Left side on desktop) */}
                            <div className="w-full h-full absolute inset-0 md:relative md:w-1/2 md:h-full md:order-1 flex items-end justify-center z-0 overflow-hidden">
                                <img
                                    src={testimonialsList[currentIndex].img}
                                    alt={testimonialsList[currentIndex].alt}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover object-top md:object-contain md:object-center drop-shadow-2xl"
                                />
                            </div>

                            {/* Text Container (Overlay at bottom on mobile, Right side on desktop) */}
                            <div className="flex flex-col w-full md:w-1/2 px-6 pb-12 pt-32 md:p-12 absolute bottom-0 md:relative md:bottom-auto order-1 md:order-2 z-10 text-left bg-gradient-to-t from-black via-black/90 to-transparent md:bg-none pointer-events-none md:pointer-events-auto">
                                <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold tracking-tighter leading-tight mb-3 md:mb-4 drop-shadow-md">
                                    <span className="inline-flex overflow-hidden align-top pb-[0.1em]">
                                        <motion.span
                                            initial={{ y: "110%" }}
                                            animate={{ y: 0 }}
                                            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                                            className="inline-block"
                                        >
                                            {testimonialsList[currentIndex].name}
                                        </motion.span>
                                    </span>
                                </h2>
                                <div className="max-h-[35vh] md:max-h-none overflow-y-auto pointer-events-auto pr-2 pb-4 md:pb-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                    <p className="text-white/80 text-xs md:text-sm lg:text-[16px] leading-tight border-l-2 border-white/50 pl-4 md:pl-6 tracking-tighter font-semibold drop-shadow-md">
                                        <RevealText text={testimonialsList[currentIndex].text} delay={0.2} />
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Minimal Width Progress Bars at Bottom */}
                <div className='w-36 md:w-48 flex gap-1 mt-3 z-20 shrink-0 mx-auto'>
                    {testimonialsList.map((_, index) => {
                        let barWidth = 0
                        if (index < currentIndex) {
                            barWidth = 100
                        } else if (index === currentIndex) {
                            barWidth = progress
                        } else {
                            barWidth = 0
                        }

                        return (
                            <div key={index} className='flex-1 h-1 bg-white/20 rounded-full overflow-hidden'>
                                <div
                                    className='h-full bg-white rounded-full'
                                    style={{ width: `${barWidth}%` }}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Testimonials