import React from 'react'
import BG from './assets/abstractBG.jpg'
import Navbar from './Navbar'
import FinalCTA from './FinalCTA'
import PreveenSirImage from './assets/Praveen Sir.png'
import SquadEventOne from './assets/squad_event_1.png'
import SquadEventTwo from './assets/squad_event_2.png'
import SquadEventThree from './assets/squad_event_3.png'
import SSOneBanner from './assets/SS 1.0 Banner.png'
import SSTwoBanner from './assets/SS 2.0 Banner.png'
import SSThreeBanner from './assets/SS 3.0 Banner.png'
import americanMegatrendsLogo from './assets/American_Megatrends_logo.svg'
import mrCooperLogo from './assets/Mr-Cooper-image.webp'
import techMahindraLogo from './assets/tech-mahendra.jpg'
import mindtreeLogo from './assets/MInd tree.jpg'
import tcsLogo from './assets/TCS-Logo.png'

function About() {
    return (
        <div className='bg-[#e6e6e6]'>
            <section className='relative isolate w-full min-h-screen overflow-hidden flex items-center justify-center px-6 md:px-12 py-24'>
                <img src={BG} alt="Abstract Background" className='absolute inset-0 z-0 w-full h-full object-cover' />

                <Navbar />

                <div className='absolute inset-y-0 left-6 z-30 flex items-center md:left-12'>
                    <h1 className='max-w-7xl text-left text-4xl font-semibold leading-[0.92] tracking-tighter text-white md:text-5xl lg:text-6xl'>
                        Collaboration Creates Greater Possibilities
                    </h1>
                </div>

                <div className='absolute z-30 bottom-8 left-6 md:bottom-12 md:left-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-white max-w-full md:max-w-none pr-6 md:pr-12'>
                    <div className='flex flex-col max-w-lg'>
                        <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>Vision</h2>
                        <p className='tracking-tighter text-sm md:text-md lg:text-lg leading-tight font-semibold'>To be the leading student-run coding club that empowers every student at the Knowledge Institute of Technology to excel in competitive programming and secure careers at top-tier technology companies.</p>
                    </div>
                    <div className='flex flex-col max-w-lg'>
                        <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>Mission</h2>
                        <p className='tracking-tighter text-sm md:text-md lg:text-lg leading-tight font-semibold'>Our mission is to foster a vibrant and inclusive coding culture through consistent, high-quality weekly challenges and company-specific training...</p>
                    </div>
                </div>
            </section>

            <section className='min-h-screen px-8 pt-16 pb-16'>
                <div className='flex flex-col md:flex-row gap-8'>
                    <h1 className='text-2xl md:text-2xl lg:text-3xl max-w-lg font-semibold tracking-tighter'>
                    The Spark That Set Our Journey in Motion
                    </h1>
                    <p className='w-full max-w-2xl font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight md:mr-32 text-gray-700'>Synergy Squad was forged from the Pre-Placement Readiness Initiative, designed to elevate the technical proficiency of our students. Our formation process is rigorous and merit-based: prospective members undergo a series of intensive Practice Assessments, including mock company-specific tests like the TCS CodeVita.
                    <br /><br />
                    Based on performance, a select group of top candidates are invited to form the squad for that academic year. This exclusive group then receives specialized, intensive training focused on advanced problem-solving, data structures, and algorithms to prepare them for competitive programming on a national level.
                    <br /><br />
                    The cornerstone of our activity is the "Weekly Programming Day," a structured event designed to continuously strengthen coding skills through consistent practice and targeted assessments, ensuring our members are always ready for the next challenge.</p>
                </div>

                <div className='mt-16'>
        <h1 className='text-xl md:text-2xl lg:text-3xl max-w-2xl mb-8 font-semibold tracking-tighter'>
          The Numbers That Reflect Our Commitment to Excellence, Innovation, and Student Success
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16'>
          <div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>120+</h2>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight border-b border-gray-300 mb-4 pb-1'>Members</p>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter max-w-sm text-gray-700 leading-tight'>Active student members trained in advanced computing and problem solving across CSE batches.</p>
          </div>
          <div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>3+</h2>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight border-b border-gray-300 mb-4 pb-1'>Batches</p>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter max-w-sm text-gray-700 leading-tight'>Across these 3 batches, we have conducted various events and competitions to enhance student skills.</p>
          </div>
          <div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>10+</h2>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight border-b border-gray-300 mb-4 pb-1'>Events</p>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter max-w-sm text-gray-700 leading-tight'>Technical workshops, coding hackathons, and company-specific mock challenges conducted annually.</p>
          </div>
          <div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>75%+</h2>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight border-b border-gray-300 mb-4 pb-1'>Placed in top MNCs</p>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter max-w-sm text-gray-700 leading-tight'>High-performing graduates recruited into Tier-1 IT companies and global technology leaders.</p>
          </div>
        </div>
      </div>
            </section>

            <section className='relative min-h-screen overflow-hidden bg-[#000410]'>
                <div aria-hidden='true' className='hidden md:block pointer-events-none absolute inset-0 z-0 text-white/20'>
                    <span className='absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-current' />
                    <span className='absolute left-0 top-[25.5rem] h-px w-1/2 bg-current' />
                    <span className='absolute right-0 top-[17.5rem] h-px w-1/2 bg-current' />
                </div>

                <div className='relative z-10 flex flex-col justify-center min-h-screen md:min-h-0 md:grid md:grid-cols-2 items-start md:items-start pt-0 md:pt-50 gap-10 md:gap-0 px-8 md:px-0 max-w-sm mx-auto md:max-w-none'>
                    <img
                        src={PreveenSirImage}
                        alt='Mr. K. Praveen'
                        className='h-48 md:h-50 md:justify-self-end md:mr-2'
                    />
                    <div className='md:mt-24 w-full md:max-w-[363px] md:translate-x-3'>
                    <p className='text-white text-sm md:text-md lg:text-lg tracking-tighter leading-tight font-semibold text-left'>"I never wanted this club to be just another organization on campus. I envisioned a community where students could bring their ideas to life, discover what they are capable of, and grow alongside people who share the same curiosity and ambition. What started as a simple idea has become a journey shaped by every student who chose to be a part of it."</p>
                    <div className='mt-8 text-left'>
                        <h1 className='text-white font-semibold text-md md:text-lg lg:text-xl tracking-tighter'>Mr. K. Praveen</h1>
                        <p className='text-white font-semibold text-xs md:text-sm lg:text-md tracking-tighter'>Founder of Synergy Squad</p>
                    </div>
                    </div>
                </div>
            </section>

            <section className='relative min-h-screen bg-black p-1'>
                <div className='grid h-[calc(100vh-0.5rem)] grid-cols-1 grid-rows-6 gap-1 md:grid-cols-12'>
                    <figure className="group relative overflow-hidden bg-[#111827] after:absolute after:inset-0 after:z-10 after:bg-black/70 after:content-[''] md:col-start-1 md:row-start-1 md:col-span-7 md:row-span-4">
                        <img src={SquadEventOne} alt='Synergy Squad members at an event' className='h-full w-full object-cover transition duration-700 group-hover:scale-105' />
                    </figure>

                    <figure className="group relative overflow-hidden bg-[#111827] after:absolute after:inset-0 after:z-10 after:bg-black/70 after:content-[''] md:col-start-8 md:row-start-1 md:col-span-5 md:row-span-2">
                        <img src={SSOneBanner} alt='Synergy Squad 1.0 event banner' className='h-full w-full object-cover transition duration-700 group-hover:scale-105' />
                    </figure>

                    <figure className="group relative overflow-hidden bg-[#111827] after:absolute after:inset-0 after:z-10 after:bg-black/70 after:content-[''] md:col-start-8 md:row-start-3 md:col-span-5 md:row-span-2">
                        <img src={SSTwoBanner} alt='Synergy Squad 2.0 event banner' className='h-full w-full object-cover transition duration-700 group-hover:scale-105' />
                    </figure>

                    <figure className="group relative overflow-hidden bg-[#111827] after:absolute after:inset-0 after:z-10 after:bg-black/70 after:content-[''] md:col-start-1 md:row-start-5 md:col-span-4 md:row-span-2">
                        <img src={SquadEventTwo} alt='Students participating in a Synergy Squad activity' className='h-full w-full object-cover transition duration-700 group-hover:scale-105' />
                    </figure>

                    <figure className="group relative overflow-hidden bg-[#111827] after:absolute after:inset-0 after:z-10 after:bg-black/70 after:content-[''] md:col-start-5 md:row-start-5 md:col-span-3 md:row-span-2">
                        <img src={SSThreeBanner} alt='Synergy Squad 3.0 event banner' className='h-full w-full object-cover transition duration-700 group-hover:scale-105' />
                    </figure>

                    <figure className="group relative overflow-hidden bg-[#111827] after:absolute after:inset-0 after:z-10 after:bg-black/70 after:content-[''] md:col-start-8 md:row-start-5 md:col-span-5 md:row-span-2">
                        <img src={SquadEventThree} alt='Synergy Squad students together' className='h-full w-full object-cover transition duration-700 group-hover:scale-105' />
                    </figure>
                </div>

                <div className='pointer-events-none absolute inset-0 z-30 flex items-center justify-center px-6 text-center text-white md:px-12'>
                    <div className='max-w-4xl'>
                        <h2 className='text-4xl font-semibold leading-[0.92] tracking-tighter md:text-6xl lg:text-8xl'>Together, we learn, build, and grow.</h2>
                    </div>
                </div>
            </section>

            <div className='mt-16 mb-16 px-8'>
                    <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter max-w-2xl mb-12'>
                      Our members have been hired by industry leaders
                    </h1>
                    <div className='grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 items-center'>
                      <div className='border border-gray-300 rounded-sm p-4 flex items-center justify-center h-24 bg-white shadow-xs hover:border-gray-400 transition-colors'>
                        <img src={americanMegatrendsLogo} alt="American Megatrends" className='max-h-12 max-w-full object-contain' />
                      </div>
                      <div className='border border-gray-300 rounded-sm p-4 flex items-center justify-center h-24 bg-white shadow-xs hover:border-gray-400 transition-colors'>
                        <img src={mrCooperLogo} alt="Mr. Cooper" className='max-h-12 max-w-full object-contain' />
                      </div>
                      <div className='border border-gray-300 rounded-sm p-4 flex items-center justify-center h-24 bg-white shadow-xs hover:border-gray-400 transition-colors'>
                        <img src={techMahindraLogo} alt="Tech Mahindra" className='max-h-12 max-w-full object-contain' />
                      </div>
                      <div className='border border-gray-300 rounded-sm p-4 flex items-center justify-center h-24 bg-white shadow-xs hover:border-gray-400 transition-colors overflow-hidden'>
                        <img src={mindtreeLogo} alt="Mindtree" className='max-h-16 max-w-full object-contain scale-[1.35]' />
                      </div>
                      <div className='border border-gray-300 rounded-sm p-4 flex items-center justify-center h-24 bg-white shadow-xs hover:border-gray-400 transition-colors overflow-hidden'>
                        <img src={tcsLogo} alt="TCS" className='max-h-16 max-w-full object-contain scale-[2.4]' />
                      </div>
                    </div>
                  </div>
            <FinalCTA />
        </div>
    )
}

export default About
