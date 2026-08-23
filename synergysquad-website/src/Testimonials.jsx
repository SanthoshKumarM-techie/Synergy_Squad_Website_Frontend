import React, { useState, useEffect } from 'react'
import testimonialImg from './assets/Testimonial.png'

const testimonialsList = [
    { id: 1, img: testimonialImg, alt: 'Student Testimonial 1' },
    { id: 2, img: testimonialImg, alt: 'Student Testimonial 2' },
    { id: 3, img: testimonialImg, alt: 'Student Testimonial 3' },
    { id: 4, img: testimonialImg, alt: 'Student Testimonial 4' },
    { id: 5, img: testimonialImg, alt: 'Student Testimonial 5' },
]

const STORY_DURATION = 5000 // 5 seconds per status slide

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
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsList.length)
                    return 0
                }
                return nextProgress
            })

            animationFrameId = requestAnimationFrame(updateProgress)
        }

        animationFrameId = requestAnimationFrame(updateProgress)

        return () => cancelAnimationFrame(animationFrameId)
    }, [isPaused])

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
            <h1 className='text-white font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter max-w-3xl leading-tight text-center mx-auto shrink-0 mb-4 md:mb-6'>
                Real Experiences From the Students Who Have Grown, Contributed, and Created Along the Way
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
                    {/* Active Image - Keyed by Index for clean rendering without skipping */}
                    <img
                        key={currentIndex}
                        src={testimonialsList[currentIndex].img}
                        alt={testimonialsList[currentIndex].alt}
                        className='w-full h-full object-contain rounded-lg transition-opacity duration-300'
                    />
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