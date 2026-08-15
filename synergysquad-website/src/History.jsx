import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import FinalCTA from './FinalCTA'
import ss1Banner from './assets/SS 1.0 Banner.png'
import ss2Banner from './assets/SS 2.0 Banner.png'
import ss3Banner from './assets/SS 3.0 Banner.png'
import SS1Brochre1 from './assets/SS 1.0 Brouchre 1.png';
import SS1Brochre2 from './assets/SS 1.0 Brouchre 2.png';
import SS1Brochre3 from './assets/SS 1.0 Brouchre 3.png';
import SS1Brochre4 from './assets/SS 1.0 Brouchre 4.png';
import SS1Brochre5 from './assets/SS 1.0 Brouchre 5.png';
import SS1Brochre6 from './assets/SS 1.0 Brouchre 6.png';
import SS1Brochre7 from './assets/SS 1.0 Brouchre 7.png';
import SS2Brochre1 from './assets/SS 2.0 Brouchre 1.png';
import SS2Brochre2 from './assets/SS 2.0 Brouchre 2.png';
import SS2Brochre3 from './assets/SS 2.0 Brouchre 3.png';
import SS2Brochre4 from './assets/SS 2.0 Brouchre 4.png';
import SS2Brochre5 from './assets/SS 2.0 Brouchre 5.png'; 
import SS3Brochre1 from './assets/SS 3.0 Brouchre 1.png';
import SS3Brochre2 from './assets/SS 3.0 Brouchre 2.png';
import SS3Brochre3 from './assets/SS 3.0 Brouchre 3.png';
import SS3Brochre4 from './assets/SS 3.0 Brouchre 4.png';
import SS3Brochre5 from './assets/SS 3.0 Brouchre 5.png';
import SS3Brochre6 from './assets/SS 3.0 Brouchre 6.png';
import SS3Brochre7 from './assets/SS 3.0 Brouchre 7.png';
import SS3Brochre8 from './assets/SS 3.0 Brouchre 8.png';
import SideRays from '../Components/SideRays';

function BannerZoomSection({ src, alt, className = "" }) {
  const sectionRef = useRef(null)
  const bannerRef = useRef(null)
  const [zoom, setZoom] = useState(1)
  const [statsProgress, setStatsProgress] = useState(0)

  useEffect(() => {
    let animationFrameId

    const updateZoom = () => {
      const section = sectionRef.current
      const banner = bannerRef.current
      if (!section || !banner) return

      const rect = section.getBoundingClientRect()
      const sectionStart = window.scrollY + rect.top
      const scrollRange = section.offsetHeight - window.innerHeight
      if (scrollRange <= 0) return

      const progress = Math.min(Math.max((window.scrollY - sectionStart) / scrollRange, 0), 1)

      const bannerWidth = banner.offsetWidth || banner.naturalWidth || 1
      const bannerHeight = banner.offsetHeight || banner.naturalHeight || 1

      const scaleToFillScreen = Math.max(
        window.innerWidth / bannerWidth,
        window.innerHeight / bannerHeight
      )
      const zoomProgress = Math.min(progress / (1 / 3), 1)

      setZoom(1 + (scaleToFillScreen - 1) * zoomProgress)
      setStatsProgress(Math.min(Math.max((progress - 1 / 3) / (1 / 3), 0), 1))
    }

    const handleScrollOrResize = () => {
      animationFrameId = requestAnimationFrame(updateZoom)
    }

    window.addEventListener('scroll', handleScrollOrResize, { passive: true })
    window.addEventListener('resize', handleScrollOrResize)

    const bannerImg = bannerRef.current
    if (bannerImg) {
      if (bannerImg.complete) {
        updateZoom()
      } else {
        bannerImg.addEventListener('load', updateZoom)
      }
    }

    updateZoom()

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize)
      window.removeEventListener('resize', handleScrollOrResize)
      if (bannerImg) {
        bannerImg.removeEventListener('load', updateZoom)
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <div ref={sectionRef} className={`relative left-1/2 h-[160vh] w-screen -translate-x-1/2 ${className}`}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <img
          ref={bannerRef}
          src={src}
          alt={alt}
          className="w-full max-w-6xl h-auto object-cover will-change-transform"
          style={{ transform: `scale(${zoom})` }}
        />
        <div
          className="absolute bottom-0 left-0 w-full px-8 pb-8 pt-28 text-black"
          style={{ transform: `translateY(${(1 - statsProgress) * 110}%)` }}
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-x-16">
            <div className="flex flex-col items-start gap-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">20+</h2>
              <p className="font-semibold text-md md:text-lg lg:text-xl tracking-tighter">Coding Practice ssessments</p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">12+</h2>
              <p className="font-semibold text-md md:text-lg lg:text-xl tracking-tighter">Coding Practice ssessments</p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">15+</h2>
              <p className="font-semibold text-md md:text-lg lg:text-xl tracking-tighter">Coding Practice ssessments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

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
  const mockCodeVitaAssessments = [
    ['Assessment No 1', '07/10/2024', '114'],
    ['Assessment No 2', '08/10/2024', '123'],
    ['Assessment No 3', '09/10/2024', '106'],
    ['Assessment No 4', '10/10/2024', '71'],
    ['Assessment No 5', '11/10/2024', '69'],
    ['Assessment No 6', '14/10/2024', '79'],
    ['Assessment No 7', '15/10/2024', '83'],
  ]
  const knowAndGrowAssessments = [
    ['Assessment No 1', '28/01/2025', '81'],
    ['Assessment No 2', '29/01/2025', '122'],
    ['Assessment No 3', '30/01/2025', '120'],
    ['Assessment No 4', '31/01/2025', '107'],
    ['Assessment No 5', '01/02/2025', '120'],
  ]
  const weeklyActivities2 = [
    ['Pattern Programming Exploration Day', '30-09-2024'],
    ['Control Flow Mastery Day', '06-10-2024'],
    ['Array Optimization Master Class Day', '13-10-2024'],
    ['Efficient String Manipulation Day', '20-10-2024'],
    ['Hundred - Fold C Proficiency Test', '27-10-2024'],
  ]
  const weeklyActivities3 = [
    ['Pattern Play Day', '10-08-2025'],
    ['Array Mastery Quest Day', '17-08-2025'],
    ['String Hacker\'s Day', '24-08-2025'],
    ['Century in C Day', '31-08-2025'],
    ['OOPS Explore Day', '07-09-2025'],
    ['TCS Mock Sprint Day', '14-09-2025'],
    ['Wipro Warriors: NLTH Mock Day', '21-09-2025'],
    ['Pratian Prep Battle Day', '28-09-2025'],
  ]
  const activityReports2 = [
    { title: 'Pattern Programming Exploration Day', image: SS2Brochre1, description: 'A focused coding challenge designed to strengthen logical thinking, pattern recognition, and problem-solving skills.', winners: ['To be updated', 'To be updated', 'To be updated'] },
    { title: 'Control Flow Mastery Day', image: SS2Brochre2, description: 'An array-focused assessment that built confidence in traversal, searching, sorting, and efficient problem solving.', winners: ['To be updated', 'To be updated', 'To be updated'] },
    { title: 'Array Optimization Master Class Day', image: SS2Brochre3, description: 'A hands-on challenge that strengthened string manipulation, pattern matching, and algorithmic thinking.', winners: ['To be updated', 'To be updated', 'To be updated'] },
    { title: 'Efficient String Manipulation Day', image: SS2Brochre4, description: 'A concept assessment covering core C programming syntax, logic, memory, and programming fundamentals.', winners: ['To be updated', 'To be updated', 'To be updated'] },
    { title: 'Hundred - Fold C Proficiency Test', image: SS2Brochre5, description: 'An advanced C programming session focused on applying fundamental concepts to practical coding challenges.', winners: ['To be updated', 'To be updated', 'To be updated'] },
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
  const activityReports3 = [
    { title: 'Pattern Play Day', image: SS3Brochre1, description: 'A focused coding challenge designed to strengthen logical thinking, pattern recognition, and problem-solving skills.', winners: ['To be updated', 'To be updated', 'To be updated'] },
    { title: 'Array Mastery Quest Day', image: SS3Brochre2, description: 'An array-focused assessment that built confidence in traversal, searching, sorting, and efficient problem solving.', winners: ['To be updated', 'To be updated', 'To be updated'] },
    { title: 'String Hacker\'s Day', image: SS3Brochre3, description: 'A hands-on challenge that strengthened string manipulation, pattern matching, and algorithmic thinking.', winners: ['To be updated', 'To be updated', 'To be updated'] },
    { title: 'Century in C Day', image: SS3Brochre4, description: 'A concept assessment covering core C programming syntax, logic, memory, and programming fundamentals.', winners: ['To be updated', 'To be updated', 'To be updated'] },
    { title: 'OOPS Explore Day', image: SS3Brochre5, description: 'An object-oriented programming challenge focused on evaluating core OOP principles and problem-solving.', winners: ['To be updated', 'To be updated', 'To be updated'] },
    { title: 'TCS Mock Sprint Day', image: SS3Brochre6, description: 'A mock aptitude and coding assessment designed to prepare the squad for the TCS selection process.', winners: ['To be updated', 'To be updated', 'To be updated'] },
    { title: 'Wipro Warriors: NLTH Mock Day', image: SS3Brochre7, description: 'A simulated placement challenge that helped participants practice the skills needed for placement assessments.', winners: ['To be updated', 'To be updated', 'To be updated'] },
    { title: 'Pratian Prep Battle Day', image: SS3Brochre8, description: 'An intensive competitive programming challenge aimed at boosting speed, accuracy, and algorithmic efficiency.', winners: ['To be updated', 'To be updated', 'To be updated'] },
  ]
  const [showAllReports1, setShowAllReports1] = useState(false)
  const [showAllReports2, setShowAllReports2] = useState(false)
  const [showAllReports3, setShowAllReports3] = useState(false)
  const visibleReports = showAllReports1 ? activityReports : activityReports.slice(0, 4)
  const reportPairs1 = visibleReports.reduce((pairs, report, index) => {
    if (index % 2 === 0) pairs.push([report])
    else pairs[pairs.length - 1].push(report)
    return pairs
  }, [])
  const visibleReports2 = showAllReports2 ? activityReports2 : activityReports2.slice(0, 4)
  const reportPairs2 = visibleReports2.reduce((pairs, report, index) => {
    if (index % 2 === 0) pairs.push([report])
    else pairs[pairs.length - 1].push(report)
    return pairs
  }, [])
  const visibleReports3 = showAllReports3 ? activityReports3 : activityReports3.slice(0, 4)
  const reportPairs3 = visibleReports3.reduce((pairs, report, index) => {
    if (index % 2 === 0) pairs.push([report])
    else pairs[pairs.length - 1].push(report)
    return pairs
  }, [])

  return (
    <div className="min-h-screen bg-[#e6e6e6] text-black">
      <Navbar />
      <main className="py-16 px-8">
        <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter max-w-3xl leading-tight text-center mx-auto shrink-0 mb-10">A Journey Built on Ideas, Driven by People, and Shaped by Every Milestone Along the Way</h1>
        <BannerZoomSection src={ss1Banner} alt="Synergy Squad 1.0 banner" />

        <div className='flex gap-16 items-start mt-16'>
          <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter'>Identification & Formation</h1>
          <p className='font-semibold text-md md:text-lg lg:text-xl text-gray-700 leading-tighter tracking-tighter max-w-4xl'>As part of the Pre-Placement Readiness Initiative, the top 40 candidates were identified from a total strength of 201 students to form Synergy Squad 1.0. This squad received intensive Java Programming Refresher Training and participated in weekly challenges to strengthen their coding skills.</p>
        </div>

        <div className='mt-16'>
          <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter'>Intensive Refresher Training</h1>
          <p className='font-semibold text-sm md:text-md lg:text-lg text-gray-700 leading-tighter tracking-tighter'>(26/12/2023 – 05/01/2024)</p>
          <div className='grid grid-cols-4 mt-8 gap-16'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-md md:text-lg lg:text-xl font-semibold tracking-tighter'>Forenoon</h1>
              <p className='text-sm md:text-md lg:text-lg tracking-tight leading-tight font-semibold text-gray-700'>Practicing Java programs in the NEO PAT</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='text-md md:text-lg lg:text-xl font-semibold tracking-tighter'>Afternoon</h1>
              <p className='text-sm md:text-md lg:text-lg tracking-tight leading-tight font-semibold text-gray-700'>Solving DSA problems on CodeStudio</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='text-md md:text-lg lg:text-xl font-semibold tracking-tighter'>Evening</h1>
              <p className='text-sm md:text-md lg:text-lg tracking-tight leading-tight font-semibold text-gray-700'>Solving DSA problems on CodeStudio</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='text-md md:text-lg lg:text-xl font-semibold tracking-tighter'>Night</h1>
              <p className='text-sm md:text-md lg:text-lg tracking-tight leading-tight font-semibold text-gray-700'>Solving DSA problems on CodeStudio</p>
            </div>
          </div>

          <div className='mt-24 flex flex-col items-start gap-8 md:flex-row'>
            <div className='self-start md:sticky md:top-28 md:w-1/3 md:shrink-0'>
              <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter'>Weekly Activity Summary</h1>
              <p className='font-semibold text-sm md:text-md lg:text-lg max-w-lg mt-4 text-gray-700 leading-tighter tracking-tighter'>Weekly assessments were conducted to evaluate and enhance the problem-solving abilities and coding proficiency of the squad members.</p>
            </div>
            <div className='w-full md:w-2/3'>
              <div className='grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 border-b border-gray-200 px-4 py-5'>
                <h1 className='text-md md:text-lg lg:text-xl font-semibold tracking-tighter'>Activity Name</h1>
                <h1 className='text-md md:text-lg lg:text-xl font-semibold tracking-tighter text-right'>Date Conducted</h1>
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
          <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter'>Activity Execution Reports</h1>
          <div className='mt-8 grid grid-cols-1 gap-3'>
            {reportPairs1.map((reports, pairIndex) => (
              <article key={reports[0].title} className='relative overflow-hidden rounded-md bg-[#0e0c12] shadow-lg'>
                <div className='absolute inset-0 z-0'>
                  <div className='absolute inset-0'>
                    <SideRays speed={4.5} rayColor1="#B8860B" rayColor2="#FFE08A" intensity={4} spread={3.2} origin="bottom-right" tilt={-35} saturation={1.5} blend={1} falloff={0.9} opacity={1} />
                  </div>
                  <div className='absolute inset-0'>
                    <SideRays speed={4.5} rayColor1="#B8860B" rayColor2="#FFE08A" intensity={4} spread={3.2} origin="top-left" tilt={-35} saturation={1.5} blend={1} falloff={0.9} opacity={1} />
                  </div>
                </div>
                <div className='absolute inset-0 z-[1] bg-black/45' />
                <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2'>
                  {reports.map(({ title, image, description, winners }, reportIndex) => (
                    <section key={title} className='grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]'>
                      <div className='p-5'>
                        {image ? (
                          <img src={image} alt={`${title} activity brochure`} className='h-full min-h-64 w-full object-cover object-top'/>
                        ) : (
                          <div className='flex min-h-64 items-center justify-center border border-dashed border-white/40 p-4 text-center text-sm font-semibold text-gray-300'>Add 2.0 brochure image</div>
                        )}
                      </div>
                      <div className='flex flex-col pt-4 pr-4 pb-5'>
                        <h1 className='text-white text-md md:text-lg lg:text-xl font-semibold tracking-tighter'>Week {pairIndex * 2 + reportIndex + 1}: {title}</h1>
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
              onClick={() => setShowAllReports1(!showAllReports1)}
              className='group relative inline-block cursor-pointer pb-1 font-semibold text-sm tracking-tighter md:text-md lg:text-lg'
            >
              {showAllReports1 ? 'View Less' : 'View More'}
              <span className='absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-yellow-400 transition-transform duration-300 group-hover:scale-x-100' />
            </button>
          </div>
        </div>

        <BannerZoomSection src={ss2Banner} alt="Synergy Squad 2.0 banner" className="mt-16" />

        <div className='mt-16 grid items-start gap-16 md:grid-cols-[22rem_minmax(0,1fr)]'>
          <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter'>Identification & Formation</h1>
          <p className='font-semibold text-md md:text-lg lg:text-xl text-gray-700 leading-tighter tracking-tighter max-w-4xl'>Following the success of Synergy Squad 1.0, the initiative was expanded to III Year CSE students. The identification process was conducted through 7 Mock TCS CodeVita Assessments, where 40 top-performing students were shortlisted from a total of 179 students to enhance their coding proficiency, logical thinking, and problem-solving skills.</p>
        </div>

        <div className='mt-16 grid items-start gap-16 md:grid-cols-[22rem_minmax(0,1fr)]'>
          <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter'>Intensive Technical Training Schedule</h1>
          <p className='font-semibold text-md md:text-lg lg:text-xl text-gray-700 leading-tighter tracking-tighter max-w-4xl'>A 3-day intensive program featuring Skill Enhancement Assessments, Knowledge Transfer Sessions, and Interactive Discussions on Programming MCQs to rapidly boost technical capabilities.</p>
        </div>

        <div className='mt-24 flex flex-col items-start gap-8 md:flex-row'>
          <div className='self-start md:sticky md:top-28 md:w-1/3 md:shrink-0'>
            <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter'>Summary of 7 Mock TCS CodeVita Assessments</h1>
            <p className='font-semibold text-sm md:text-md lg:text-lg max-w-lg mt-4 text-gray-700 leading-tighter tracking-tighter'>Seven mock CodeVita assessments were conducted to evaluate coding consistency, speed, and problem-solving readiness.</p>
          </div>
          <div className='w-full md:w-2/3'>
            <div className='grid grid-cols-3 items-center gap-6 border-b border-gray-200 px-4 pb-5 pt-0'>
              <h1 className='text-md md:text-lg lg:text-xl font-semibold tracking-tighter'>Activity Name</h1>
              <h1 className='text-md md:text-lg lg:text-xl font-semibold tracking-tighter text-center'>Date Conducted</h1>
              <h1 className='text-md md:text-lg lg:text-xl font-semibold tracking-tighter text-right'>Students Attended</h1>
            </div>
            {mockCodeVitaAssessments.map(([activity, date, students]) => (
              <div key={activity} className='grid grid-cols-3 items-center gap-6 border-b border-gray-200 px-4 py-5'>
                <p className='text-sm font-semibold tracking-tight md:text-md lg:text-lg'>{activity}</p>
                <p className='text-center text-sm font-semibold tracking-tight text-gray-700 md:text-md lg:text-lg'>{date}</p>
                <p className='text-right text-sm font-semibold tracking-tight text-gray-700 md:text-md lg:text-lg'>{students}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-24 flex flex-col items-start gap-8 md:flex-row'>
          <div className='self-start md:sticky md:top-28 md:w-1/3 md:shrink-0'>
            <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter'>5 Know and Grow Assessments - Summary</h1>
            <p className='font-semibold text-sm md:text-md lg:text-lg max-w-lg mt-4 text-gray-700 leading-tighter tracking-tighter'>These assessments tracked progress and helped students strengthen their technical knowledge through regular practice.</p>
          </div>
          <div className='w-full md:w-2/3'>
            <div className='grid grid-cols-3 items-center gap-6 border-b border-gray-200 px-4 pb-5 pt-0'>
              <h1 className='text-md md:text-lg lg:text-xl font-semibold tracking-tighter'>Assessment No.</h1>
              <h1 className='text-md md:text-lg lg:text-xl font-semibold tracking-tighter text-center'>Date Conducted</h1>
              <h1 className='text-md md:text-lg lg:text-xl font-semibold tracking-tighter text-right'>Students Attended</h1>
            </div>
            {knowAndGrowAssessments.map(([assessment, date, students]) => (
              <div key={assessment} className='grid grid-cols-3 items-center gap-6 border-b border-gray-200 px-4 py-5'>
                <p className='text-sm font-semibold tracking-tight md:text-md lg:text-lg'>{assessment}</p>
                <p className='text-center text-sm font-semibold tracking-tight text-gray-700 md:text-md lg:text-lg'>{date}</p>
                <p className='text-right text-sm font-semibold tracking-tight text-gray-700 md:text-md lg:text-lg'>{students}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-24 flex flex-col items-start gap-8 md:flex-row'>
          <div className='self-start md:sticky md:top-28 md:w-1/3 md:shrink-0'>
            <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter'>Weekly Activity Summary</h1>
            <p className='font-semibold text-sm md:text-md lg:text-lg max-w-lg mt-4 text-gray-700 leading-tighter tracking-tighter'>Weekly activities were designed to improve programming fundamentals, coding efficiency, and practical problem-solving skills.</p>
            <p></p>
          </div>
          <div className='w-full md:w-2/3'>
            <div className='grid grid-cols-2 items-center gap-6 border-b border-gray-200 px-4 pb-5 pt-0'>
              <h1 className='text-md md:text-lg lg:text-xl font-semibold tracking-tighter'>Activity Name</h1>
              <h1 className='text-md md:text-lg lg:text-xl font-semibold tracking-tighter text-right'>Date Conducted</h1>
            </div>
            {weeklyActivities2.map(([activity, date]) => (
              <div key={activity} className='grid grid-cols-2 items-center gap-6 border-b border-gray-200 px-4 py-5'>
                <p className='text-sm font-semibold tracking-tight md:text-md lg:text-lg'>{activity}</p>
                <p className='text-right text-sm font-semibold tracking-tight text-gray-700 md:text-md lg:text-lg'>{date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-20'>
          <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter'>Activity Execution Reports</h1>
          <div className='mt-8 grid grid-cols-1 gap-3'>
            {reportPairs2.map((reports, pairIndex) => (
              <article key={reports[0].title} className='relative overflow-hidden rounded-md bg-[#0e0c12] shadow-lg'>
                <div className='absolute inset-0 z-0'>
                  <div className='absolute inset-0'>
                    <SideRays speed={4.5} rayColor1="#B8860B" rayColor2="#FFE08A" intensity={4} spread={3.2} origin="bottom-right" tilt={-35} saturation={1.5} blend={1} falloff={0.9} opacity={1} />
                  </div>
                  <div className='absolute inset-0'>
                    <SideRays speed={4.5} rayColor1="#B8860B" rayColor2="#FFE08A" intensity={4} spread={3.2} origin="top-left" tilt={-35} saturation={1.5} blend={1} falloff={0.9} opacity={1} />
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
                        <h1 className='text-white text-md md:text-lg lg:text-xl font-semibold tracking-tighter'>Week {pairIndex * 2 + reportIndex + 1}: {title}</h1>
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
              onClick={() => setShowAllReports2(!showAllReports2)}
              className='group relative inline-block cursor-pointer pb-1 font-semibold text-sm tracking-tighter md:text-md lg:text-lg'
            >
              {showAllReports2 ? 'View Less' : 'View More'}
              <span className='absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-yellow-400 transition-transform duration-300 group-hover:scale-x-100' />
            </button>
          </div>
        </div>

        <BannerZoomSection src={ss3Banner} alt="Synergy Squad 3.0 banner" className="mt-16" />

        <div className='mt-16 grid items-start gap-16 md:grid-cols-[22rem_minmax(0,1fr)]'>
          <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter'>Weekly Sunday Programming Activities for III Year Students</h1>
          <p className='font-semibold text-md md:text-lg lg:text-xl text-gray-700 leading-tighter tracking-tighter max-w-4xl'>To enhance the programming skills, logical thinking, and placement preparedness of the students, a new series of Weekly Sunday Programming Activities was organized. Each session was specially designed to reinforce programming concepts and simulate real-time coding challenges.</p>
        </div>

        <div className='mt-24 flex flex-col items-start gap-8 md:flex-row'>
          <div className='self-start md:sticky md:top-28 md:w-1/3 md:shrink-0'>
            <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter'>Weekly Activity Summary</h1>
            <p className='font-semibold text-sm md:text-md lg:text-lg max-w-lg mt-4 text-gray-700 leading-tighter tracking-tighter'>Weekly activities were designed to evaluate and enhance the problem-solving abilities and coding proficiency of the squad members.</p>
          </div>
          <div className='w-full md:w-2/3'>
            <div className='grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 border-b border-gray-200 px-4 py-5'>
              <h1 className='text-md md:text-lg lg:text-xl font-semibold tracking-tighter'>Activity Name</h1>
              <h1 className='text-md md:text-lg lg:text-xl font-semibold tracking-tighter text-right'>Planned Date</h1>
            </div>
            {weeklyActivities3.map(([activity, date]) => (
              <div key={activity} className='grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 border-b border-gray-200 px-4 py-5'>
                <p className='text-sm font-semibold tracking-tight md:text-md lg:text-lg'>{activity}</p>
                <p className='text-right text-sm font-semibold tracking-tight text-gray-700 md:text-md lg:text-lg'>{date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-20'>
          <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter'>Activity Execution Reports</h1>
          <div className='mt-8 grid grid-cols-1 gap-3'>
            {reportPairs3.map((reports, pairIndex) => (
              <article key={reports[0].title} className='relative overflow-hidden rounded-md bg-[#0e0c12] shadow-lg'>
                <div className='absolute inset-0 z-0'>
                  <div className='absolute inset-0'>
                    <SideRays speed={4.5} rayColor1="#B8860B" rayColor2="#FFE08A" intensity={4} spread={3.2} origin="bottom-right" tilt={-35} saturation={1.5} blend={1} falloff={0.9} opacity={1} />
                  </div>
                  <div className='absolute inset-0'>
                    <SideRays speed={4.5} rayColor1="#B8860B" rayColor2="#FFE08A" intensity={4} spread={3.2} origin="top-left" tilt={-35} saturation={1.5} blend={1} falloff={0.9} opacity={1} />
                  </div>
                </div>
                <div className='absolute inset-0 z-[1] bg-black/45' />
                <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2'>
                  {reports.map(({ title, image, description, winners }, reportIndex) => (
                    <section key={title} className='grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]'>
                      <div className='p-5'>
                        {image ? (
                          <img src={image} alt={`${title} activity brochure`} className='h-full min-h-64 w-full object-cover object-top'/>
                        ) : (
                          <div className='flex min-h-64 items-center justify-center border border-dashed border-white/40 p-4 text-center text-sm font-semibold text-gray-300'>Add 3.0 brochure image</div>
                        )}
                      </div>
                      <div className='flex flex-col pt-4 pr-4 pb-5'>
                        <h1 className='text-white text-md md:text-lg lg:text-xl font-semibold tracking-tighter'>Week {pairIndex * 2 + reportIndex + 1}: {title}</h1>
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
              onClick={() => setShowAllReports3(!showAllReports3)}
              className='group relative inline-block cursor-pointer pb-1 font-semibold text-sm tracking-tighter md:text-md lg:text-lg'
            >
              {showAllReports3 ? 'View Less' : 'View More'}
              <span className='absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-yellow-400 transition-transform duration-300 group-hover:scale-x-100' />
            </button>
          </div>
        </div>
      </main>

      <FinalCTA />
    </div>
  )
}

export default History
