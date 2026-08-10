import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import ss1Banner from './assets/SS 1.0 Banner.png'
import SS1Brochre1 from './assets/SS 1.0 Brouchre 1.png';
import SS1Brochre2 from './assets/SS 1.0 Brouchre 2.png';
import SS1Brochre3 from './assets/SS 1.0 Brouchre 3.png';
import SS1Brochre4 from './assets/SS 1.0 Brouchre 4.png';
import SS1Brochre5 from './assets/SS 1.0 Brouchre 5.png';
import SS1Brochre6 from './assets/SS 1.0 Brouchre 6.png';
import SS1Brochre7 from './assets/SS 1.0 Brouchre 7.png';
import SideRays from '../Components/SideRays';

function History() {
  const weeklyActivities = [
    ['Pattern Day', '21-01-2024'],
    ['Mastering in Array Day', '28-01-2024'],
    ['Mastering in Strings Day', '04-02-2024'],
    ['C Programming MCQ Day', '11-02-2024'],
    ['C Programming Master Class Day', '18-02-2024'],
    ['Mock TCS Ninja NQT Challenge Day', '25-02-2024'],
    ['Mock Wipro NLTH Challenge Day', '10-03-2024'],
    ['Mock Pratian Technologies Challenge Day', '24-03-2024'],
  ]
  const activityReports = [
    {
      title: 'Pattern Day',
      image: SS1Brochre1,
      description: 'A focused coding challenge designed to strengthen logical thinking, pattern recognition, and problem-solving skills.',
      winners: ['Anuvarshini T R', 'Keerthana D', 'Vijay K R'],
    },
    {
      title: 'Mastering in Array Day',
      image: SS1Brochre2,
      description: 'An array-focused assessment that built confidence in traversal, searching, sorting, and efficient problem solving.',
      winners: ['To be updated', 'To be updated', 'To be updated'],
    },
    {
      title: 'Mastering in Strings Day',
      image: SS1Brochre3,
      description: 'A hands-on challenge that strengthened string manipulation, pattern matching, and algorithmic thinking.',
      winners: ['To be updated', 'To be updated', 'To be updated'],
    },
    {
      title: 'C Programming MCQ Day',
      image: SS1Brochre4,
      description: 'A concept assessment covering core C programming syntax, logic, memory, and programming fundamentals.',
      winners: ['To be updated', 'To be updated', 'To be updated'],
    },
    {
      title: 'C Programming Master Class Day',
      image: SS1Brochre5,
      description: 'An advanced C programming session focused on applying fundamental concepts to practical coding challenges.',
      winners: ['To be updated', 'To be updated', 'To be updated'],
    },
    {
      title: 'Mock TCS Ninja NQT Challenge Day',
      image: SS1Brochre6,
      description: 'A mock aptitude and coding assessment designed to prepare the squad for the TCS Ninja NQT selection process.',
      winners: ['To be updated', 'To be updated', 'To be updated'],
    },
    {
      title: 'Mock Wipro NLTH Challenge Day',
      image: SS1Brochre7,
      description: 'A simulated placement challenge that helped participants practice the skills needed for the Wipro NLTH assessment.',
      winners: ['To be updated', 'To be updated', 'To be updated'],
    },
  ]
  const zoomSectionRef = useRef(null)
  const bannerRef = useRef(null)
  const [zoom, setZoom] = useState(1)
  const [statsProgress, setStatsProgress] = useState(0)
  const [showAllReports, setShowAllReports] = useState(false)
  const visibleReports = showAllReports ? activityReports : activityReports.slice(0, 4)
  const reportPairs = visibleReports.reduce((pairs, report, index) => {
    if (index % 2 === 0) pairs.push([report])
    else pairs[pairs.length - 1].push(report)
    return pairs
  }, [])

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

      const zoomProgress = Math.min(progress / (1 / 3), 1)
      setZoom(1 + (scaleToFillScreen - 1) * zoomProgress)
      setStatsProgress(Math.min(Math.max((progress - 1 / 3) / (1 / 3), 0), 1))
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
        <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter max-w-3xl leading-tight text-center mx-auto shrink-0 mb-10">A Journey Built on Ideas, Driven by People, and Shaped by Every Milestone Along the Way</h1>
        <div ref={zoomSectionRef} className="relative left-1/2 h-[160vh] w-screen -translate-x-1/2">
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

        <div className='flex gap-16 items-start mt-16'>
          <h1 className='text-black font-bold text-xl md:text-2xl lg:text-3xl tracking-tighter'>Identification & Formation</h1>
          <p className='font-semibold text-md md:text-lg lg:text-xl text-gray-700 leading-tighter tracking-tighter max-w-4xl'>As part of the Pre-Placement Readiness Initiative, the top 40 candidates were identified from a total strength of 201 students to form Synergy Squad 1.0. This squad received intensive Java Programming Refresher Training and participated in weekly challenges to strengthen their coding skills.</p>
        </div>

        <div className='mt-16'>
          <h1 className='text-black font-bold text-xl md:text-2xl lg:text-3xl tracking-tighter'>Intensive Refresher Training</h1>
          <p className='font-semibold text-sm md:text-md lg:text-lg text-gray-700 leading-tighter tracking-tighter'>(26/12/2023 – 05/01/2024)</p>
          <div className='grid grid-cols-4 mt-8 gap-16'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-md md:text-lg lg:text-xl font-bold tracking-tighter'>Forenoon</h1>
              <p className='text-sm md:text-md lg:text-lg tracking-tight leading-tight font-semibold text-gray-700'>Practicing Java programs in the NEO PAT</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='text-md md:text-lg lg:text-xl font-bold tracking-tighter'>Afternoon</h1>
              <p className='text-sm md:text-md lg:text-lg tracking-tight leading-tight font-semibold text-gray-700'>Solving DSA problems on CodeStudio</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='text-md md:text-lg lg:text-xl font-bold tracking-tighter'>Evening</h1>
              <p className='text-sm md:text-md lg:text-lg tracking-tight leading-tight font-semibold text-gray-700'>Solving DSA problems on CodeStudio</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='text-md md:text-lg lg:text-xl font-bold tracking-tighter'>Night</h1>
              <p className='text-sm md:text-md lg:text-lg tracking-tight leading-tight font-semibold text-gray-700'>Solving DSA problems on CodeStudio</p>
            </div>
          </div>

          <div className='grid grid-cols-2 mt-24 flex gap-8'>
            <div>
              <h1 className='text-black font-bold text-xl md:text-2xl lg:text-3xl tracking-tighter'>Weekly Activity Summary</h1>
              <p className='font-semibold text-sm md:text-md lg:text-lg max-w-lg mt-4 text-gray-700 leading-tighter tracking-tighter'>Weekly assessments were conducted to evaluate and enhance the problem-solving abilities and coding proficiency of the squad members.</p>
            </div>
            <div >
              <div className='grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 border-b border-gray-200 px-4 py-5'>
                <h1 className='text-md md:text-lg lg:text-xl font-bold tracking-tighter'>Activity Name</h1>
                <h1 className='text-md md:text-lg lg:text-xl font-bold tracking-tighter text-right'>Date Conducted</h1>
              </div>
              {weeklyActivities.map(([activity, date]) => (
                <div key={activity} className='grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 border-b border-gray-200 px-4 py-5'>
                  <p className='text-sm font-semibold tracking-tight md:text-md lg:text-lg'>{activity}</p>
                  <p className='text-right text-sm font-semibold tracking-tight text-gray-700 md:text-md lg:text-lg'>{date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-20'>
          <h1 className='text-black font-bold text-xl md:text-2xl lg:text-3xl tracking-tighter'>Activity Execution Reports</h1>
          <div className='mt-8 grid grid-cols-1 gap-3'>
            {reportPairs.map((reports, pairIndex) => (
              <article key={reports[0].title} className='relative overflow-hidden rounded-md bg-[#0e0c12] shadow-lg'>
                <div className='absolute inset-0 z-0'>
                  <div className='absolute inset-0'>
                    <SideRays speed={4.5} rayColor1="#555555" rayColor2="#f0f0f0" intensity={4} spread={3.2} origin="bottom-right" tilt={-35} saturation={0} blend={1} falloff={0.9} opacity={1} />
                  </div>
                  <div className='absolute inset-0'>
                    <SideRays speed={4.5} rayColor1="#555555" rayColor2="#f0f0f0" intensity={4} spread={3.2} origin="top-left" tilt={-35} saturation={0} blend={1} falloff={0.9} opacity={1} />
                  </div>
                </div>
                <div className='absolute inset-0 z-[1] bg-black/45' />
                <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2'>
                  {reports.map(({ title, image, description, winners }, reportIndex) => (
                    <section key={title} className='grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]'>
                      <div className='p-5'>
                        <img src={image} alt={`${title} activity brochure`} className='h-full min-h-64 w-full object-cover object-top'/>
                      </div>
                      <div className='flex flex-col pt-4 pr-4 pb-5'>
                        <h1 className='text-white text-md md:text-lg lg:text-xl font-bold tracking-tighter'>Week {pairIndex * 2 + reportIndex + 1}: {title}</h1>
                        <p className='font-medium text-xs md:text-sm lg:text-md max-w-lg text-gray-300 leading-tighter tracking-tighter leading-tight'>{description}</p>
                        <ul className='mt-5 space-y-3'>
                          <li className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter text-gray-300'>1st Place: {winners[0]}</li>
                          <li className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter text-gray-300'>2nd Place: {winners[1]}</li>
                          <li className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter text-gray-300'>3rd Place: {winners[2]}</li>
                        </ul>
                      </div>
                    </section>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className='mt-8 text-end'>
            <button
              type='button'
              onClick={() => setShowAllReports(!showAllReports)}
              className='group relative inline-block cursor-pointer pb-1 font-bold text-sm tracking-tighter md:text-md lg:text-lg'
            >
              {showAllReports ? 'View Less' : 'View More'}
              <span className='absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-yellow-400 transition-transform duration-300 group-hover:scale-x-100' />
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default History
