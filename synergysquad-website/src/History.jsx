import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import ss1Banner from './assets/SS 1.0 Banner.png'

function History() {
  const zoomSectionRef = useRef(null)
  const bannerRef = useRef(null)
  const [zoom, setZoom] = useState(1)
  const [statsProgress, setStatsProgress] = useState(0)

  useEffect(() => {
    const updateZoom = () => {
      const section = zoomSectionRef.current
      const banner = bannerRef.current
      if (!section || !banner) return

      const sectionStart = window.scrollY + section.getBoundingClientRect().top
      const scrollRange = section.offsetHeight - window.innerHeight
      const progress = Math.min(Math.max((window.scrollY - sectionStart) / scrollRange, 0), 1)
      const scaleToFillScreen = Math.max(
        window.innerWidth / banner.offsetWidth,
        window.innerHeight / banner.offsetHeight
      )

      const zoomProgress = Math.min(progress / 0.25, 1)
      setZoom(1 + (scaleToFillScreen - 1) * zoomProgress)
      setStatsProgress(Math.min(Math.max((progress - 0.25) / 0.75, 0), 1))
    }

    window.addEventListener('scroll', updateZoom, { passive: true })
    window.addEventListener('resize', updateZoom)
    updateZoom()

    return () => {
      window.removeEventListener('scroll', updateZoom)
      window.removeEventListener('resize', updateZoom)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="py-16 px-8">
        <h1 className="font-semibold text-lg md:text-xl lg:text-2xl tracking-tighter max-w-3xl leading-tight text-center mx-auto shrink-0 mb-10">A Journey Built on Ideas, Driven by People, and Shaped by Every Milestone Along the Way</h1>
        <div ref={zoomSectionRef} className="relative left-1/2 h-[180vh] w-screen -translate-x-1/2">
          <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
            <img
              ref={bannerRef}
              src={ss1Banner}
              alt="Synergy Squad 1.0 banner"
              className="w-full max-w-6xl h-auto object-cover will-change-transform"
              style={{ transform: `scale(${zoom})` }}
            />
            <div
              className="absolute bottom-0 left-0 w-full px-8 pb-8 pt-28 text-black"
              style={{ transform: `translateY(${(1 - statsProgress) * 110}%)` }}
            >
              <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-x-16'>
                <div className='flex flex-col items-start gap-2'>
                  <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter'>20+</h2>
                  <p className='font-semibold text-md md:text-lg lg:text-xl tracking-tighter'>Coding Practice ssessments</p>
                </div>
                <div className='flex flex-col items-start gap-2'>
                  <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter'>12+</h2>
                  <p className='font-semibold text-md md:text-lg lg:text-xl tracking-tighter'>Coding Practice ssessments</p>
                </div>
                <div className='flex flex-col items-start gap-2'>
                  <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter'>15+</h2>
                  <p className='font-semibold text-md md:text-lg lg:text-xl tracking-tighter'>Coding Practice ssessments</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </main>
    </div>
  )
}

export default History
