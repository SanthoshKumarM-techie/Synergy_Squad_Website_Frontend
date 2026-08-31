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
import FinalCTA from './FinalCTA'
import { AnimatePresence } from 'framer-motion'
import CustomCursor from './CustomCursor'
import PageTransition from './PageTransition'

function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    const hash = window.location.hash.replace('#', '')
    const path = window.location.pathname.replace('/', '')
    return hash || path || 'home'
  })

  useEffect(() => {
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

      if (active !== 'squad' && active !== 'history' && active !== 'about') {
        const element = document.getElementById(active)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        } else if (active === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
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

  return (
    <div className='bg-[#e6e6e6] min-h-screen text-black'>
      <ScrollProgressBar />
      <AnimatePresence mode="wait">
        <PageTransition key={currentRoute}>
          {currentRoute === 'squad' ? (
            <Squad />
          ) : currentRoute === 'history' ? (
            <History />
          ) : currentRoute === 'about' ? (
            <About />
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
