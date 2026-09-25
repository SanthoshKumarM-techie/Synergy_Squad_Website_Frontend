import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import collegeLogo from './assets/college-logo.webp'
import clubLogo from './assets/club-logo.webp'

function LaunchScreen({ onLaunch }) {
  const [isRemote, setIsRemote] = useState(false)
  const [isCounting, setIsCounting] = useState(false)
  const [count, setCount] = useState(10)
  const [remoteSent, setRemoteSent] = useState(false)
  const [stage, setStage] = useState('idle') // 'idle' | 'url' | 'split'

  // Detect Mobile Remote Mode (#remote)
  useEffect(() => {
    const checkMode = () => {
      const hash = window.location.hash.toLowerCase()
      setIsRemote(hash === '#remote' || hash === '#trigger')
    }
    checkMode()
    window.addEventListener('hashchange', checkMode)
    return () => window.removeEventListener('hashchange', checkMode)
  }, [])

  // Poll Local Server Endpoint (/api/launch) over Local Wi-Fi Network
  useEffect(() => {
    // Reset server launch state on fresh load of host screen
    if (!isRemote) {
      fetch('/api/launch', { method: 'DELETE' }).catch(() => { })
    }

    const pollInterval = setInterval(async () => {
      try {
        const res = await fetch('/api/launch')
        const data = await res.json()
        if (data.launched && !isCounting) {
          setIsCounting(true)
        }
      } catch (err) {
        // Fallback to local storage if API is unreachable
        if (localStorage.getItem('synergy_remote_launch_active') === 'true' && !isCounting) {
          setIsCounting(true)
        }
      }
    }, 300)

    return () => clearInterval(pollInterval)
  }, [isRemote, isCounting])

  // 10-Second Stage Countdown Timer on Stage Screen
  useEffect(() => {
    let timer
    if (isCounting && stage === 'idle') {
      if (count > 0) {
        timer = setTimeout(() => {
          setCount((prev) => {
            if (prev <= 1) {
              setStage('url')
              return 0
            }
            return prev - 1
          })
        }, 1000)
      }
    }
    return () => clearTimeout(timer)
  }, [isCounting, count, stage])

  // Post-Countdown Animation Flow: URL Reveal (3.5s) -> Top/Bottom Curtain Split (1.25s)
  useEffect(() => {
    if (stage === 'url') {
      const timer = setTimeout(() => {
        setStage('split')
      }, 3500) // Show white screen URL for 3.5s for clear audience visibility
      return () => clearTimeout(timer)
    }
    if (stage === 'split') {
      const timer = setTimeout(() => {
        onLaunch()
      }, 1250) // Allow shadowless top/bottom split easeOut animation to complete
      return () => clearTimeout(timer)
    }
  }, [stage, onLaunch])

  // Trigger Launch Action (from Mobile Phone)
  const handleStartLaunch = async () => {
    try {
      await fetch('/api/launch', { method: 'POST' })
    } catch (err) {
      console.log('Local API trigger failed, using local storage fallback')
    }
    localStorage.setItem('synergy_remote_launch_active', 'true')
    setRemoteSent(true)
    setIsCounting(true)
  }

  // 1. MOBILE REMOTE CONTROLLER VIEW (Opened at http://<laptop-ip>:5173/#remote on Mobile Phone)
  if (isRemote) {
    return (
      <div className='fixed inset-0 z-[9999] bg-[#e6e6e6] text-black flex flex-col justify-between p-6 overflow-hidden select-none min-h-screen'>
        {/* Top Header */}
        <div className='flex items-center justify-between w-full pb-4 border-b border-black/10'>
          <div className='flex items-center gap-3'>
            <img src={collegeLogo} alt="KIOT Logo" className='h-8 w-auto object-contain' />
            <div className='h-4 w-px bg-black/20' />
            <img src={clubLogo} alt="Synergy Squad Logo" className='h-7 w-auto object-contain' />
          </div>
          <span className='text-[10px] font-semibold tracking-wider text-[#10129B] uppercase bg-blue-100 px-2.5 py-1 rounded-full'>
            Stage Controller
          </span>
        </div>

        {/* Center Mobile Trigger Area */}
        <div className='flex flex-col items-center justify-center my-auto text-center px-4 space-y-8 w-full'>
          <div className='space-y-1'>
            <span className='text-[9px] font-semibold tracking-widest text-[#10129B] uppercase block'>
              Knowledge Institute of Technology
            </span>
            <h2 className='text-4xl sm:text-2xl font-bold tracking-tighter text-black uppercase leading-tighter'>
              Synergy Squad <br />
              <span className='text-[#10129B]'>Intoducing CCl Frame of Honor</span>
            </h2>
          </div>

          {!remoteSent ? (
            <button
              type='button'
              onClick={handleStartLaunch}
              className='w-full max-w-xs bg-[#10129B] text-white font-semibold text-xs py-3.5 px-6 rounded-full uppercase tracking-wider shadow-md active:scale-95 hover:bg-blue-800 transition-all duration-200 cursor-pointer text-center'
            >
              REVEAL FRAME OF HONOR
            </button>
          ) : (
            <div className='w-full max-w-xs bg-[#10129B] text-white p-5 rounded-none uppercase font-semibold text-center shadow-lg space-y-1 border border-blue-400/30'>
              <div className='text-sm tracking-tight'>FRAME OF HONOR UNVEILED</div>
              <div className='text-[11px] font-semibold text-blue-200 tracking-wider leading-relaxed'>
                The Frame of Honor section is now live on the main stage screen.
              </div>
            </div>
          )}
        </div>

        {/* Mobile Footer */}
        <div className='text-center text-[10px] text-gray-500 font-semibold tracking-tighter pt-4 border-t border-black/10'>
          © 2026 Synergy Squad — KIOT CSE
        </div>
      </div>
    )
  }

  // 2. STAGE REVEAL STAGE: TOP & BOTTOM SHADOWLESS CURTAIN SPLIT EASE-OUT ANIMATION
  if (stage === 'split') {
    return (
      <div className='fixed inset-0 z-[9999] pointer-events-none select-none overflow-hidden'>
        {/* Top Half Panel — Slides UP cleanly without shadow or border */}
        <motion.div
          initial={{ y: '0%' }}
          animate={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className='fixed top-0 left-0 right-0 h-[50.5vh] bg-white z-[9999] flex flex-col justify-end items-center pb-6'
        >
          <div className='flex items-center gap-2 opacity-30 scale-90'>
            <span className='font-mono text-xs text-gray-400'>https://</span>
            <span className='font-mono font-bold text-sm text-black tracking-tight'>synergysquad-kiot.netlify.app/#honor</span>
          </div>
        </motion.div>

        {/* Bottom Half Panel — Slides DOWN cleanly without shadow or border */}
        <motion.div
          initial={{ y: '0%' }}
          animate={{ y: '100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className='fixed bottom-0 left-0 right-0 h-[50.5vh] bg-white z-[9999] flex flex-col justify-start items-center pt-6'
        >
          <div className='text-[11px] font-bold text-[#10129B] uppercase tracking-widest opacity-40'>
            Frame of Honor — KIOT CSE
          </div>
        </motion.div>
      </div>
    )
  }

  // 3. STAGE REVEAL STAGE: PURE SOLID WHITE BACKGROUND + ENLARGED URL PRESENTATION (3.5s)
  if (stage === 'url') {
    return (
      <div className='fixed inset-0 z-[9999] bg-white text-black flex flex-col items-center justify-center p-6 select-none opacity-100'>
        <div className='flex flex-col items-center space-y-5'>
          <span className='text-xs md:text-sm font-bold tracking-widest text-[#10129B] uppercase'>
            Frame of Honor
          </span>

          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className='flex items-center gap-3 bg-gray-50/80 border border-black/10 px-8 py-5 rounded-full shadow-sm'
          >
            <span className='font-mono text-lg sm:text-2xl md:text-3xl text-gray-400'>https://</span>
            <span className='font-mono font-extrabold text-3xl sm:text-5xl md:text-6xl text-black tracking-tight'>
              synergysquad.kiot.ac.in/#honor
            </span>
            <span className='w-3 h-8 md:h-12 bg-[#10129B] animate-pulse rounded-full ml-1' />
          </motion.div>
        </div>
      </div>
    )
  }

  // 4. STAGE PROJECTOR DISPLAY VIEW (Opened at http://localhost:5173 on Stage Laptop)
  return (
    <div className='fixed inset-0 z-[9999] bg-[#e6e6e6] text-black flex flex-col justify-between p-6 md:p-12 overflow-hidden select-none opacity-100'>
      {/* Top Header Bar */}
      <div className='relative z-20 flex items-center justify-between w-full max-w-7xl mx-auto'>
        <div className='flex items-center gap-4'>
          <img src={collegeLogo} alt="KIOT Logo" loading="eager" decoding="async" className='h-9 md:h-10 w-auto object-contain' />
          <div className='h-5 w-px bg-black/15' />
          <img src={clubLogo} alt="Synergy Squad Logo" loading="eager" decoding="async" className='h-8 md:h-9 w-auto object-contain' />
        </div>

        <div className='text-xs md:text-sm font-semibold tracking-tighter text-gray-600 uppercase'>
          Knowledge Institute of Technology
        </div>
      </div>

      {/* Center Stage Display Content */}
      <div className='relative z-20 flex flex-col items-center justify-center my-auto text-center max-w-3xl mx-auto w-full py-8'>

        {!isCounting ? (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col items-center'
          >
            <span className='text-xs md:text-lg font-bold tracking-widest text-[#10129B] uppercase mb-3 block'>
              Department of Computer Science and Engineering
            </span>

            <h1 className='text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter uppercase leading-tighter text-black'>
              Synergy Squad <br />
              <span className='text-[#10129B] leading-tighter'>
                Introducing CCl Frame of Honor
              </span>
            </h1>
          </motion.div>
        ) : (
          <motion.div
            key="counter-view"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className='flex flex-col items-center justify-center'
          >
            {/* Minimalist Animated Counter */}
            <motion.div
              key={count}
              initial={{ scale: 1.15, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-black leading-none my-2 font-mono'
            >
              {String(count).padStart(2, '0')}
            </motion.div>

            {/* Progress Line */}
            <div className='w-48 md:w-64 h-1.5 bg-black/10 rounded-full overflow-hidden mt-6'>
              <div
                className='h-full bg-[#10129B] transition-all duration-1000 ease-linear rounded-full'
                style={{ width: `${(count / 10) * 100}%` }}
              />
            </div>
          </motion.div>
        )}

      </div>

      {/* Footer Bar */}
      <div className='relative z-20 flex flex-col sm:flex-row items-center justify-between text-xs md:text-sm text-gray-600 font-semibold tracking-tighter border-t border-black/10 pt-4 max-w-7xl mx-auto w-full gap-2'>
        <span>© 2026 Synergy Squad — KIOT CSE</span>
        <span>Honoring Excellence, Code & Peer Leadership</span>
      </div>

    </div>
  )
}

export default LaunchScreen
