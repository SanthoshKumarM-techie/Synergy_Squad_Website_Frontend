import React from 'react'
import Navbar from './Navbar'
import FinalCTA from './FinalCTA'
import PraveenSirImage from './assets/Praveen Sir.png'
import americanMegatrendsLogo from './assets/American_Megatrends_logo.svg'
import mrCooperLogo from './assets/Mr-Cooper-image.webp'
import techMahindraLogo from './assets/tech-mahendra.jpg'
import mindtreeLogo from './assets/MInd tree.jpg'
import tcsLogo from './assets/TCS-Logo.png'
import squadEvent1 from './assets/squad_event_1.png'
import squadEvent2 from './assets/squad_event_2.png'
import squadEvent3 from './assets/squad_event_3.png'
import kiotTopView from './assets/KIOT-Top-View.webp'
import ss2Banner from './assets/SS 2.0 Banner.png'
import ss3Banner from './assets/SS 3.0 Banner.png'

const aboutGalleryImages = [
    { src: kiotTopView, alt: 'KIOT Campus View', title: 'Innovation Hub & Campus Ecosystem', span: 'col-span-1 sm:col-span-2 md:col-span-2 row-span-2' },
    { src: squadEvent1, alt: 'Hands-on Bootcamps', title: 'Intensive Technical Bootcamps', span: 'col-span-1 sm:col-span-1 md:col-span-1 row-span-1' },
    { src: squadEvent3, alt: 'DSA Masterclass', title: 'Advanced DSA & Problem Solving', span: 'col-span-1 sm:col-span-1 md:col-span-1 row-span-2' },
    { src: squadEvent2, alt: 'CodeVita Winners', title: 'Weekly Contest Champions', span: 'col-span-1 sm:col-span-1 md:col-span-1 row-span-1' },
    { src: ss3Banner, alt: 'Synergy Squad 3.0', title: 'Synergy Squad 3.0 Launch', span: 'col-span-1 sm:col-span-2 md:col-span-2 row-span-1' },
    { src: ss2Banner, alt: 'Squad 2.0', title: 'Community & Peer Mentorship', span: 'col-span-1 sm:col-span-2 md:col-span-2 row-span-1' },
]

function About() {
    return (
        <div className='min-h-screen relative select-none bg-[#e6e6e6] text-black'>
            <Navbar />

            <section className='relative z-10 py-12 px-8 w-full overflow-hidden'>
                <h1 className='font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter max-w-3xl leading-tight text-center mx-auto shrink-0 mb-12'>
                    The Story of Who We Are, What We Believe In, and the Journey That Continues to Shape Our Community
                </h1>

                {/* Vision Section with Continuous Auto-Scrolling Background Text */}
                <div className='relative w-full mx-auto py-16 flex flex-col items-center justify-center overflow-hidden my-4'>
                    {/* Continuous Marquee Ticker Background Text (scrolls automatically even on a still screen) */}
                    <div className='absolute inset-0 flex items-center overflow-hidden pointer-events-none z-0'>
                        <div className='animate-marquee flex whitespace-nowrap opacity-15'>
                            <h1 className='font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] tracking-tighter text-black uppercase select-none leading-none pr-12'>
                                VISION OF THE SQUAD • VISION OF THE SQUAD •&nbsp;
                            </h1>
                            <h1 className='font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] tracking-tighter text-black uppercase select-none leading-none pr-12'>
                                VISION OF THE SQUAD • VISION OF THE SQUAD •&nbsp;
                            </h1>
                        </div>
                    </div>

                    {/* Foreground Yellow Card */}
                    <div className='relative z-10 bg-yellow-400 max-w-2xl w-full mx-auto p-8 sm:p-14 md:p-20 text-center rounded-lg shadow-2xl border border-black/10 my-4'>
                        <h2 className='font-semibold tracking-tighter leading-tight text-xl md:text-2xl lg:text-3xl text-black'>
                            To be the leading student-run coding club that empowers every student at the Knowledge Institute of Technology to excel in competitive programming and secure careers at top-tier technology companies.
                        </h2>
                    </div>
                </div>

                {/* Mission Section with Continuous Auto-Scrolling Background Text */}
                <div className='relative w-full mx-auto py-16 flex flex-col items-center justify-center overflow-hidden my-4'>
                    {/* Continuous Marquee Ticker Background Text (scrolls automatically even on a still screen) */}
                    <div className='absolute inset-0 flex items-center overflow-hidden pointer-events-none z-0'>
                        <div className='animate-marquee flex whitespace-nowrap opacity-15'>
                            <h1 className='font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] tracking-tighter text-black uppercase select-none leading-none pr-12'>
                                MISSION OF THE SQUAD • MISSION OF THE SQUAD •&nbsp;
                            </h1>
                            <h1 className='font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] tracking-tighter text-black uppercase select-none leading-none pr-12'>
                                MISSION OF THE SQUAD • MISSION OF THE SQUAD •&nbsp;
                            </h1>
                        </div>
                    </div>

                    {/* Foreground Yellow Card */}
                    <div className='relative z-10 bg-yellow-400 max-w-2xl w-full mx-auto p-8 sm:p-14 md:p-20 text-center rounded-lg shadow-2xl border border-black/10 my-4'>
                        <h2 className='font-semibold tracking-tighter leading-tight text-xl md:text-2xl lg:text-3xl text-black'>
                            Our mission is to foster a vibrant and inclusive coding culture through consistent, high-quality weekly challenges and company-specific training...
                        </h2>
                    </div>
                </div>

                <div className='flex gap-16 items-start mt-16'>
                    <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter'>The Spark That Set Our Journey in Motion</h1>
                    <p className='font-semibold text-md md:text-lg lg:text-xl text-gray-700 leading-tighter tracking-tighter max-w-4xl'>Synergy Squad was forged from the Pre-Placement Readiness Initiative, designed to elevate the technical proficiency of our students. Our formation process is rigorous and merit-based: prospective members undergo a series of intensive Practice Assessments, including mock company-specific tests like the TCS CodeVita.
                        <br />
                        <br />
                        Based on performance, a select group of top candidates are invited to form the squad for that academic year. This exclusive group then receives specialized, intensive training focused on advanced problem-solving, data structures, and algorithms to prepare them for competitive programming on a national level.
                        <br />
                        <br />
                        The cornerstone of our activity is the "Weekly Programming Day," a structured event designed to continuously strengthen coding skills through consistent practice and targeted assessments, ensuring our members are always ready for the next challenge.</p>
                </div>
            </section>
            
            <div className='px-8 mt-16 mb-16'>
                <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter max-w-3xl leading-tight mb-16'>
                    A Snapshot of Our Journey Through Meaningful Numbers, Lasting Impact, and Continuous Growth
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16'>
                    <div>
                        <h2 className='text-black font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tighter'>120+</h2>
                        <p className='text-black font-semibold text-md md:text-lg lg:text-xl tracking-tighter border-b border-gray-300 mb-4 pb-1'>Members</p>
                        <p className='tracking-tighter font-semibold text-sm md:text-md lg:text-lg max-w-sm text-gray-700 leading-tighter'>Active student members trained in advanced computing and problem solving across CSE batches.</p>
                    </div>
                    <div>
                        <h2 className='text-black font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tighter'>3+</h2>
                        <p className='text-black font-semibold text-md md:text-lg lg:text-xl tracking-tighter border-b border-gray-300 mb-4 pb-1'>Batches</p>
                        <p className='tracking-tighter font-semibold text-sm md:text-md lg:text-lg max-w-sm text-gray-700 leading-tighter'>Across these 3 batches, we have conducted various events and competitions to enhance student skills.</p>
                    </div>
                    <div>
                        <h2 className='text-black font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tighter'>10+</h2>
                        <p className='text-black font-semibold text-md md:text-lg lg:text-xl tracking-tighter border-b border-gray-300 mb-4 pb-1'>Events</p>
                        <p className='tracking-tighter font-semibold text-sm md:text-md lg:text-lg max-w-sm text-gray-700 leading-tighter'>Technical workshops, coding hackathons, and company-specific mock challenges conducted annually.</p>
                    </div>
                    <div>
                        <h2 className='text-black font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tighter'>75%+</h2>
                        <p className='text-black font-semibold text-md md:text-lg lg:text-xl tracking-tighter border-b border-gray-300 mb-4 pb-1'>Placed in top MNCs</p>
                        <p className='tracking-tighter font-semibold text-sm md:text-md lg:text-lg max-w-sm text-gray-700 leading-tighter'>High-performing graduates recruited into Tier-1 IT companies and global technology leaders.</p>
                    </div>
                </div>
            </div>

            <section className='grid grid-cols-2 mt-16 bg-black p-16 gap-4'>
                <div className='flex items-center justify-end mb-24'>
                    <img src={PraveenSirImage} alt="Praveen Sir" className='w-40' />
                </div>
                <div className='flex flex-col gap-8 mt-32'>
                    <p className='font-semibold text-md md:text-lg lg:text-xl text-white leading-tighter tracking-tighter max-w-xl'>
                        “I never wanted this club to be just another organization on campus. I envisioned a community where students could bring their ideas to life, discover what they are capable of, and grow alongside people who share the same curiosity and ambition. What started as a simple idea has become a journey shaped by every student who chose to be a part of it.”
                    </p>
                    <div className='flex flex-col gap-1'>
                        <p className='text-white text-md md:text-lg lg:text-xl font-semibold tracking-tighter '>Mr.K.Praveen AP/CSE</p>
                        <p className='text-white text-xs md:text-sm lg:text-md font-semibold tracking-tighter '>Founder of Synergy Squad</p>
                    </div>
                </div>
            </section>
            
            <section className='grid grid-cols-2 bg-black p-16 gap-4'>
                <div className='flex items-center justify-end text-right mt-24'>
                    <p className='font-semibold text-md md:text-lg lg:text-xl text-white leading-tighter tracking-tighter max-w-xl'>
                        We believe that every student has the potential to create, lead, and make a meaningful difference when given the right environment and opportunities. We believe in learning by doing, growing through collaboration, embracing new ideas, and creating a community where curiosity is encouraged, every voice matters, and progress is something we build together.
                    </p>
                </div>
                <div className='flex flex-col gap-8'>
                    <h1 className='font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tighter shrink-0 text-white'>What We Stongly <br /> Beleive in</h1>
                </div>
            </section>

            <div className='mt-16 px-8 '>
                <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter max-w-2xl mb-12'>
                    Our members have been hired by industry leaders
                </h1>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 items-center mb-16'>
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

            {/* Bento Gallery Section (Matching Squad Page Gallery Template) */}
            <section className='px-8 mt-24 mb-24'>
                <div className='flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4'>
                    <div>
                        <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter max-w-2xl'>
                            The Moments, Memories, and Experiences That Define Us
                        </h1>
                    </div>
                    <p className='font-semibold text-sm md:text-md lg:text-lg text-gray-700 max-w-md tracking-tighter'>
                        Visual highlights and event moments from our community journey.
                    </p>
                </div>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 auto-rows-[220px] w-full'>
                    {aboutGalleryImages.map((img, idx) => (
                        <div 
                            key={idx} 
                            className={`group relative overflow-hidden rounded-xl border border-gray-200 bg-gray-900 shadow-sm cursor-pointer ${img.span}`}
                        >
                            <img 
                                src={img.src} 
                                alt={img.alt} 
                                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5'>
                                <h4 className='text-white font-semibold text-sm md:text-md lg:text-lg tracking-tighter'>{img.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <FinalCTA />
        </div>
    )
}

export default About