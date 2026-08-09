import React, { useEffect, useState } from 'react'

function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const updateScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100
        setScrollProgress(Math.min(Math.max(currentProgress, 0), 100))
      } else {
        setScrollProgress(0)
      }
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollProgress)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    window.addEventListener('hashchange', updateScrollProgress, { passive: true })
    window.addEventListener('popstate', updateScrollProgress, { passive: true })
    updateScrollProgress()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      window.removeEventListener('hashchange', updateScrollProgress)
      window.removeEventListener('popstate', updateScrollProgress)
    }
  }, [])

  return (
    <div className='fixed top-0 left-0 right-0 h-1.5 z-50 pointer-events-none bg-transparent overflow-hidden'>
      <div
        className='h-full bg-yellow-400 shadow-[0_0_12px_#facc15]'
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}

export default ScrollProgressBar
