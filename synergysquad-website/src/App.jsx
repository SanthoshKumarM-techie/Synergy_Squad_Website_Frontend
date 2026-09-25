import React, { useState, useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Hero from './Hero'
import Navbar from './Navbar'
import AboutBrief from './AboutBrief'
import ScrollProgressBar from './ScrollProgressBar'
import Testimonials from './Testimonials'
import Squad from './Squad'
import History from './History'
import About from './About'
import FrameOfHonor from './FrameOfHonor'
import Contact from './Contact'
import LaunchScreen from './LaunchScreen'
import FinalCTA from './FinalCTA'
import { AnimatePresence } from 'framer-motion'
import CustomCursor from './CustomCursor'
import PageTransition from './PageTransition'

function App() {
  // Always show launch screen on page load while LaunchScreen is present in App.jsx
  const [isLaunched, setIsLaunched] = useState(false)

  const [currentRoute, setCurrentRoute] = useState(() => {
    const hash = window.location.hash.replace('#', '')
    const path = window.location.pathname.replace('/', '')
    return hash || path || 'home'
  })

  useEffect(() => {
    // Clear any previous cached launch flags
    localStorage.removeItem('ss_site_launched')

    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    
    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.replace('#', '')
      const path = window.location.pathname.replace('/', '')
      const active = hash || path || 'home'
      setCurrentRoute(active)

      const standaloneRoutes = ['squad', 'history', 'about', 'honor', 'frame-of-honor', 'contact']
      if (!standaloneRoutes.includes(active)) {
        setTimeout(() => {
          const element = document.getElementById(active)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
        }, 100)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    window.addEventListener('hashchange', handleLocationChange)
    window.addEventListener('popstate', handleLocationChange)

    return () => {
      window.removeEventListener('hashchange', handleLocationChange)
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [])

  const handleLaunch = () => {
    window.location.hash = 'honor'
    setIsLaunched(true)
  }

  return (
    <div className='bg-[#e6e6e6] min-h-screen text-black'>
      {/* Event Launch Overlay Component — Remove or comment out after launch event */}
       {/* {!isLaunched && <LaunchScreen onLaunch={handleLaunch} />}  */}

      <ScrollProgressBar key={currentRoute} />
      <AnimatePresence mode="wait">
        <PageTransition key={currentRoute}>
          {currentRoute === 'squad' ? (
            <Squad />
          ) : currentRoute === 'history' ? (
            <History />
          ) : currentRoute === 'about' ? (
            <About />
          ) : currentRoute === 'honor' || currentRoute === 'frame-of-honor' ? (
            <FrameOfHonor />
          ) : currentRoute === 'contact' ? (
            <Contact />
          ) : (
            <>
              <Navbar />
              <div id="home" className="md:sticky md:top-0">
                <Hero />
              </div>
              <div className="relative z-10 bg-[#e6e6e6]">
                <div id="about">
                  <AboutBrief />
                </div>
                <div id="testimonials">
                  <Testimonials />
                </div>
                <FinalCTA />
              </div>
            </>
          )}
        </PageTransition>
      </AnimatePresence>
    </div>
  )
}

export default App
