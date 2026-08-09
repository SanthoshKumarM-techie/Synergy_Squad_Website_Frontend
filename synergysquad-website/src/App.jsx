import React, { useState, useEffect } from 'react'
import Hero from './Hero'
import AboutBrief from './AboutBrief'
import ScrollProgressBar from './ScrollProgressBar'
import Testimonials from './Testimonials'
import Squad from './Squad'
import History from './History'

function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    const hash = window.location.hash.replace('#', '')
    const path = window.location.pathname.replace('/', '')
    return hash || path || 'home'
  })

  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.replace('#', '')
      const path = window.location.pathname.replace('/', '')
      const active = hash || path || 'home'
      setCurrentRoute(active)

      if (active !== 'squad') {
        const element = document.getElementById(active)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        } else if (active === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
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
    <div>
      <ScrollProgressBar />
      {currentRoute === 'squad' ? (
        <Squad />
      ) : currentRoute === 'history' ? (
        <History />
      ) : (
        <>
          <div id="home">
            <Hero />
          </div>
          <div id="about">
            <AboutBrief />
          </div>
          <div id="testimonials">
            <Testimonials />
          </div>
        </>
      )}
    </div>
  )
}

export default App
