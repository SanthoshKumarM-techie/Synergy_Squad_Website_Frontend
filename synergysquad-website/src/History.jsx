import React from 'react'
import BG from './assets/abstractBG.jpg'
import Navbar from './Navbar'
import SideRays from '../Components/SideRays'
import eventOne from './assets/squad_event_1.png'
import eventTwo from './assets/squad_event_2.png'
import eventThree from './assets/squad_event_3.png'
import brochureOne from './assets/SS 1.0 Brouchre 1.png'
import brochureTwo from './assets/SS 2.0 Brouchre 1.png'
import brochureThree from './assets/SS 3.0 Brouchre 1.png'

const historyImages = [
  eventOne,
  brochureOne,
  eventTwo,
  brochureTwo,
  eventThree,
  brochureThree,
]

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

function History() {
  return (
    <div className='bg-[#e6e6e6]'>
      <section className='relative isolate min-h-screen w-full overflow-hidden px-6 py-24 md:px-12'>
                <img src={BG} alt="Abstract Background" className='absolute inset-0 z-0 w-full h-full object-cover' />

                <Navbar />

                <div className='relative z-20 flex min-h-[calc(100vh-12rem)] flex-col items-center justify-end gap-14'>
                    <h1 className='max-w-7xl text-center text-4xl font-semibold leading-[0.92] tracking-tighter text-white md:text-5xl lg:text-6xl'>
                        A Journey Built on Ideas, Driven by People, and Shaped by Every Milestone Along the Way
                    </h1>

                    <div className='w-screen overflow-hidden' aria-label='Synergy Squad history gallery'>
                        <div className='animate-marquee'>
                            {[false, true].map((isDuplicate) => (
                                <div key={String(isDuplicate)} className='flex shrink-0 gap-6 pr-6 md:gap-10 md:pr-10'>
                                    {historyImages.map((image, index) => (
                                        <img
                                            key={`${image}-${isDuplicate}`}
                                            src={image}
                                            alt={isDuplicate ? '' : `Synergy Squad milestone ${index + 1}`}
                                            aria-hidden={isDuplicate}
                                            className='aspect-square w-40 shrink-0 rounded-sm object-cover sm:w-48 md:w-52 lg:w-56'
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        <section className='min-h-screen px-8 pt-16 pb-16'>
          <div
            className='relative flex min-h-[60vh] flex-col justify-end overflow-hidden p-8 pb-16'
            style={{ background: 'radial-gradient(ellipse at 78% 20%, #3329D2 0%, #000846 68%)' }}
          >
            <SideRays
              className='z-0 opacity-100'
              origin='top-right'
              rayColor1='#AAA6FF'
              rayColor2='#6258FF'
              intensity={6}
              spread={2}
              speed={0.8}
              opacity={1}
            />
            <div className='relative z-10 max-w-3xl'>
              <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>Synergy Squad 1.0</h1>
              <p className='text-white font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight'>The inaugural chapter of our journey, where the foundations <br /> of Synergy Squad were laid.</p>
            </div>
          </div>

          <div className='flex gap-8 mt-16'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl max-w-xl font-semibold tracking-tighter'>
                    Identification & Formation
                    </h1>
                    <p className='max-w-4xl font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight mr-32 text-gray-700'>As part of the Pre-Placement Readiness Initiative, the top 40 candidates were identified from a total strength of 201 students to form Synergy Squad 1.0. This squad received intensive Java Programming Refresher Training and participated in weekly challenges to strengthen their coding skills.</p>
                </div>

            <div className='mt-16'>
              <h1 className='text-xl md:text-2xl lg:text-3xl max-w-xl font-semibold tracking-tighter'>Intensive Refresher Training </h1>
              <div className='grid grid-cols-4'>
                <div className='mt-8'>
                  <h1 className='text-2xl font-semibold tracking-tighter leading-tight'>Forenoon</h1>
                  <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-700 mt-4'>Practicing Java programs in the <br />NEO PAT</p>
                </div>
                <div className='mt-8'>
                  <h1 className='text-2xl font-semibold tracking-tighter leading-tight'>Afternoon</h1>
                  <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-700 mt-4'>Solving moderate problems in online compilers</p>
                </div>
                <div className='mt-8'>
                  <h1 className='text-2xl font-semibold tracking-tighter leading-tight'>Evening</h1>
                  <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-700 mt-4'>Technical Group Discussion</p>
                </div>
                <div className='mt-8'>
                  <h1 className='text-2xl font-semibold tracking-tighter leading-tight'>Night</h1>
                  <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-700 mt-4'>Solving daily challenges in the Techgig portal</p>
                </div>
              </div>
            </div>

            <div className='mt-16 grid gap-6 md:grid-cols-[minmax(0,25rem)_minmax(0,1fr)]'>
              <h1 className='text-xl md:text-2xl lg:text-3xl max-w-xl font-semibold tracking-tighter'>Weekly Activity Summary</h1>
              <div className='max-w-2xl'>
                <ul className='divide-y divide-gray-300 border-t border-gray-300'>
                  <li className='flex items-center justify-between gap-6 py-3 font-semibold tracking-tighter text-gray-900'>
                    <span className='text-2xl font-semibold tracking-tighter leading-tight'>Activity Name</span>
                    <span className='text-2xl font-semibold tracking-tighter leading-tight'>Date</span>
                  </li>
                  {weeklyActivities.map(([activity, date]) => (
                    <li key={activity} className='flex items-center justify-between gap-6 py-3 font-semibold tracking-tighter text-gray-700'>
                      <span className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-700'>{activity}</span>
                      <time className='shrink-0 text-font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-700'>{date}</time>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              
            </div>
        </section>
    </div>
  )
}

export default History
