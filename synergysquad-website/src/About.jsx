import React from 'react'
import BG from './assets/abstractBG.jpg'
import Navbar from './Navbar'
import FinalCTA from './FinalCTA'
import StaggeredText from './StaggeredText'
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
import HODSirImage from './assets/HODSir.webp'
import SG1 from './assets/SquadGathering1.jpeg'
import SG2 from './assets/SquadGathering2.jpeg'
import SG3 from './assets/SquadGathering3.jpeg'
import SG4 from './assets/SquadGathering4.jpeg'
import SG5 from './assets/SquadGathering5.jpeg'
import SG6 from './assets/SquadGathering6.jpeg'

function About() {
    return (
    <div className='bg-[#e6e6e6] min-h-screen relative'>
        <Navbar />
        <section className='relative md:sticky md:top-0 isolate w-full min-h-screen overflow-hidden flex flex-col justify-center px-6 md:px-12 py-24 md:block'>
            <img src={BG} alt="Abstract Background" className='absolute inset-0 z-0 w-full h-full object-cover' />
          

            <div className='relative md:absolute md:inset-y-0 md:left-12 z-30 flex items-center mb-12 md:mb-0'>
              <StaggeredText 
                className='max-w-7xl text-left text-4xl font-semibold leading-[0.92] tracking-tighter text-white md:text-5xl lg:text-6xl'
                text="Collaboration Creates Greater Possibilities"
                delay={0.6}
              />
            </div>

                <div className='relative md:absolute z-30 md:bottom-12 md:left-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-white max-w-full md:max-w-none md:pr-12'>
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

            <div className="relative z-10 bg-[#e6e6e6]">
            <section className='min-h-screen px-8 pt-16 pb-16'>
                <div className='flex flex-col md:flex-row gap-8'>
                    <h1 className='text-2xl lg:text-3xl max-w-lg font-semibold tracking-tighter leading-tight'>
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
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>190+</h2>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight border-b border-gray-300 mb-4 pb-1'>Members</p>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter max-w-sm text-gray-700 leading-tight'>Active student members trained in advanced computing and problem solving across CSE batches.</p>
          </div>
          <div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>4+</h2>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight border-b border-gray-300 mb-4 pb-1'>Batches</p>
            <p className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter max-w-sm text-gray-700 leading-tight'>Across these 3 batches, we have conducted various events and competitions to enhance student skills.</p>
          </div>
          <div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>3+</h2>
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

            <section className='relative md:min-h-screen overflow-hidden bg-[#000410]'>
                {/* Master Vertical Line */}
                <div aria-hidden='true' className='hidden md:block pointer-events-none absolute inset-0 z-0 text-white/20'>
                    <span className='absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-current' />
                </div>

                {/* Authority 1 */}
                <div className='relative z-10 flex flex-col justify-center pt-16 md:pt-32 pb-8 md:pb-16 md:grid md:grid-cols-2 items-start md:items-start gap-10 md:gap-0 px-8 md:px-0 max-w-sm mx-auto md:max-w-none'>
                    <div aria-hidden='true' className='hidden md:block pointer-events-none absolute inset-0 z-0 text-white/20'>
                        <span className='absolute left-0 top-[8rem] mt-[13.25rem] h-px w-1/2 bg-current' />
                        <span className='absolute right-0 top-[8rem] mt-24 h-px w-1/2 bg-current' />
                    </div>
                    <img
                        src={HODSirImage}
                        alt='Mr. T. Karthikeyan'
                        className='relative z-10 h-48 md:h-[12.5rem] md:justify-self-end md:mr-3'
                    />
                    <div className='relative z-10 md:mt-24 md:pt-3 w-full md:max-w-[363px] md:translate-x-3'>
                        <p className='text-white text-sm md:text-md lg:text-lg tracking-tighter leading-tight font-semibold text-left'>"I never wanted this club to be just another organization on campus. I envisioned a community where students could bring their ideas to life, discover what they are capable of, and grow alongside people who share the same curiosity and ambition. What started as a simple idea has become a journey shaped by every student who chose to be a part of it."</p>
                        <div className='mt-8 text-left'>
                            <h1 className='text-white font-semibold text-md md:text-lg lg:text-xl tracking-tighter'>Mr. T. Karthikeyan</h1>
                            <p className='text-white font-semibold text-xs md:text-sm lg:text-md tracking-tighter leading-tight'>Head of the Department - CSE</p>
                        </div>
                    </div>
                </div>

                {/* Authority 2 */}
                <div className='relative z-10 flex flex-col justify-center pt-8 md:pt-16 pb-16 md:pb-32 md:grid md:grid-cols-2 items-start md:items-start gap-10 md:gap-0 px-8 md:px-0 max-w-sm mx-auto md:max-w-none'>
                    <div aria-hidden='true' className='hidden md:block pointer-events-none absolute inset-0 z-0 text-white/20'>
                        <span className='absolute left-0 top-[4rem] mt-24 h-px w-1/2 bg-current' />
                        <span className='absolute right-0 top-[4rem] mt-[13.25rem] h-px w-1/2 bg-current' />
                    </div>
                    <img
                        src={PreveenSirImage}
                        alt='Mr. K. Praveen'
                        className='relative z-10 h-48 md:h-[12.5rem] md:justify-self-start md:ml-3 md:order-last'
                    />
                    <div className='relative z-10 md:mt-24 md:pt-3 w-full md:max-w-[363px] md:justify-self-end md:-translate-x-3'>
                        <p className='text-white text-sm md:text-md lg:text-lg tracking-tighter leading-tight font-semibold text-left'>"I never wanted this club to be just another organization on campus. I envisioned a community where students could bring their ideas to life, discover what they are capable of, and grow alongside people who share the same curiosity and ambition. What started as a simple idea has become a journey shaped by every student who chose to be a part of it."</p>
                        <div className='mt-8 text-left md:text-right'>
                            <h1 className='text-white font-semibold text-md md:text-lg lg:text-xl tracking-tighter'>Mr. K. Praveen</h1>
                            <p className='text-white font-semibold text-xs md:text-sm lg:text-md tracking-tighter leading-tight'>Head of Synergy Squad</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative min-h-screen bg-black p-1'>
                <div className='grid h-[100vh] md:h-[calc(100vh-0.5rem)] grid-cols-1 grid-rows-1 md:grid-rows-6 gap-1 md:grid-cols-12'>
                    <figure className="group relative overflow-hidden bg-[#111827] after:absolute after:inset-0 after:z-10 after:bg-black/70 after:content-[''] col-start-1 row-start-1 col-span-1 row-span-1 md:col-start-1 md:row-start-1 md:col-span-7 md:row-span-4">
                        <img src={SG1} alt='Synergy Squad members at an event' className='h-full w-full object-cover transition duration-700 group-hover:scale-105' />
                    </figure>

                    <figure className="hidden md:block group relative overflow-hidden bg-[#111827] after:absolute after:inset-0 after:z-10 after:bg-black/70 after:content-[''] md:col-start-8 md:row-start-1 md:col-span-5 md:row-span-2">
                        <img src={SG2} alt='Synergy Squad 1.0 event banner' className='h-full w-full object-cover transition duration-700 group-hover:scale-105' />
                    </figure>

                    <figure className="hidden md:block group relative overflow-hidden bg-[#111827] after:absolute after:inset-0 after:z-10 after:bg-black/70 after:content-[''] md:col-start-8 md:row-start-3 md:col-span-5 md:row-span-2">
                        <img src={SG3} alt='Synergy Squad 2.0 event banner' className='h-full w-full object-cover transition duration-700 group-hover:scale-105' />
                    </figure>

                    <figure className="hidden md:block group relative overflow-hidden bg-[#111827] after:absolute after:inset-0 after:z-10 after:bg-black/70 after:content-[''] md:col-start-1 md:row-start-5 md:col-span-4 md:row-span-2">
                        <img src={SG4} alt='Students participating in a Synergy Squad activity' className='h-full w-full object-cover transition duration-700 group-hover:scale-105' />
                    </figure>

                    <figure className="hidden md:block group relative overflow-hidden bg-[#111827] after:absolute after:inset-0 after:z-10 after:bg-black/70 after:content-[''] md:col-start-5 md:row-start-5 md:col-span-3 md:row-span-2">
                        <img src={SG5} alt='Synergy Squad 3.0 event banner' className='h-full w-full object-cover transition duration-700 group-hover:scale-105' />
                    </figure>

                    <figure className="hidden md:block group relative overflow-hidden bg-[#111827] after:absolute after:inset-0 after:z-10 after:bg-black/70 after:content-[''] md:col-start-8 md:row-start-5 md:col-span-5 md:row-span-2">
                        <img src={SG6} alt='Synergy Squad students together' className='h-full w-full object-cover transition duration-700 group-hover:scale-105' />
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
          {/* Reference-Styled Bento Grid Section */}
          <div className='mt-24 px-6 md:px-12 max-w-7xl mx-auto mb-24'>
            {/* Top Grid: Counter Header + Wide Hero Image */}
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 items-stretch'>

              {/* Header Card with massive counter text */}
              <div className='lg:col-span-5 flex flex-col justify-center py-6 pr-4'>
                <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter mb-3 text-black'>
                  Synergy Squad
                </h2>
                <p className='text-gray-500 font-medium text-sm md:text-base tracking-tighter max-w-xs'>
                  A growing community shaped by new ideas, stronger collaboration, and shared experiences
                </p>
              </div>

              {/* Wide Header Image */}
              <div className='lg:col-span-7 relative h-[260px] md:h-[320px] rounded-[32px] overflow-hidden group bg-gray-300'>
                <img
                  src={SG3}
                  alt="Squad Hero"
                  className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700'
                />
              </div>

            </div>

            {/* Main Asymmetric Bento Gallery */}
            <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>

              {/* Left Column: Tall Vertical Instagram Card */}
              <div className='md:col-span-4 relative min-h-[500px] md:min-h-[640px] rounded-[32px] overflow-hidden group bg-gray-900'>
                <img
                  src={SG2}
                  alt="Pool culture"
                  className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90'
                />
              </div>

              {/* Center Column */}
              <div className='md:col-span-4 flex flex-col justify-between gap-6'>
                {/* Mid Image with Overlay Quote */}
                <div className='relative h-[380px] rounded-[32px] overflow-hidden group bg-gray-800'>
                  <img
                    src={SG1}
                    alt="Culture"
                    className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 brightness-90'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />
                  <div className='absolute bottom-6 left-6 right-6 text-white'>
                    <h4 className='text-xl md:text-2xl font-semibold tracking-tight leading-tight'>
                      Empowering students to explore, contribute, lead, and create meaningful impact
                    </h4>
                  </div>
                </div>

                {/* Lower Preview Card */}
                <div className='h-[236px] rounded-[32px] overflow-hidden bg-gray-300 relative group'>
                  <img
                    src={SG4}
                    alt="Team work"
                    className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700'
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className='md:col-span-4 flex flex-col justify-between gap-6'>

                {/* 99% Stat Card */}
                <div className='bg-[#dcdcdc] rounded-[32px] p-8 flex flex-col justify-between h-[280px]'>
                  <div>
                    <h3 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-black'>
                      75%+
                    </h3>
                  </div>
                  <p className='text-gray-600 font-medium text-sm md:text-base leading-snug tracking-tighter max-w-[200px]'>
                    High-performing graduates recruited into Tier-1 IT companies and global technology leaders.
                  </p>
                </div>

                {/* Dark Join CTA Box */}
                <a href="#history" className='bg-[#10129B] text-white rounded-[32px] p-8 flex flex-col justify-between h-[180px] relative group cursor-pointer overflow-hidden block'>
                  <span className='text-xs font-semibold text-white tracking-tighter uppercase'>
                    Explore the Squad
                  </span>

                  {/* Arrow Graphic Icon */}
                  <div className='absolute bottom-4 right-4 text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300'>
                    <svg className='w-20 h-20 md:w-24 md:h-24' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M5 19L19 5M19 5H9M19 5V15' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                  </div>
                </a>

                {/* Bottom Image Tile */}
                <div className='h-[156px] rounded-[32px] overflow-hidden bg-gray-400 relative group'>
                  <img
                    src={SG5}
                    alt="Synergy event"
                    className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700'
                  />
                </div>

              </div>

            </div>
          </div>

            <FinalCTA />
            </div>
        </div>
    )
}

export default About