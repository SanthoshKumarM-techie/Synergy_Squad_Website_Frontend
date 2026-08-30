import React, { useState, useEffect } from 'react'
import naveenImg from './assets/Naveen Adithya.png'
import Santhosh1Img from './assets/Santhosh1.png'

const testimonialsList = [
    { id: 1, img: Santhosh1Img, name: 'HI, I am Santhosh', text: '"I was part of the first batch of Synergy Squad, and I joined without many expectations, knowing only the basics of coding. Synergy Squad taught me how to approach problems through analysis, implementation, and connecting them with real-time scenarios. The competitive environment and group-based recognition for higher scores boosted my confidence and motivated me to improve. It became the foundation of my coding skills and later played a vital role in helping me secure my job."', alt: 'Santhosh' },
    { id: 2, img: naveenImg, name: 'HI, I am Naveen Adhithya', text: '" Being part of the squad gave me opportunities to step outside my comfort zone, meet amazing people, and work on things I genuinely enjoyed. Every event and project taught me something new. "', alt: 'Student Testimonial 2' },
    { id: 3, img: naveenImg, name: 'HI, I am Naveen Adhithya', text: '" Being part of the squad gave me opportunities to step outside my comfort zone, meet amazing people, and work on things I genuinely enjoyed. Every event and project taught me something new. "', alt: 'Student Testimonial 3' },
    { id: 4, img: naveenImg, name: 'HI, I am Naveen Adhithya', text: '" Being part of the squad gave me opportunities to step outside my comfort zone, meet amazing people, and work on things I genuinely enjoyed. Every event and project taught me something new. "', alt: 'Student Testimonial 4' },
    { id: 5, img: naveenImg, name: 'HI, I am Naveen Adhithya', text: '" Being part of the squad gave me opportunities to step outside my comfort zone, meet amazing people, and work on things I genuinely enjoyed. Every event and project taught me something new. "', alt: 'Student Testimonial 5' },
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
                    {/* Content Container */}
                    <div key={currentIndex} className="w-full h-full flex items-center justify-center transition-opacity duration-300 relative">
                        {/* Image Container (Full screen on mobile, Left side on desktop) */}
                        <div className="w-full h-full absolute inset-0 md:relative md:w-1/2 md:h-full md:order-1 flex items-end justify-center z-0 overflow-hidden">
                            <img
                                src={testimonialsList[currentIndex].img}
                                alt={testimonialsList[currentIndex].alt}
                                className="w-full h-full object-cover object-top md:object-contain md:object-center drop-shadow-2xl"
                            />
                        </div>

                        {/* Text Container (Overlay at bottom on mobile, Right side on desktop) */}
                        <div className="flex flex-col w-full md:w-1/2 px-6 pb-8 pt-32 md:p-12 absolute bottom-0 md:relative md:bottom-auto order-1 md:order-2 z-10 text-left bg-gradient-to-t from-black via-black/80 to-transparent md:bg-none">
                            <h2 className="text-white text-2xl md:text-4xl font-semibold tracking-tighter mb-4">{testimonialsList[currentIndex].name}</h2>
                            <p className="text-white/80 text-base md:text-md md:leading-relaxed border-l-2 border-white/50 pl-4 md:pl-6 tracking-tighter font-semibold">{testimonialsList[currentIndex].text}</p>
                        </div>
                    </div>
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