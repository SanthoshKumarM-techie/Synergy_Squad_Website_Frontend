import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
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

function ScrambleNumber({ targetText, className = "" }) {
    const [displayText, setDisplayText] = useState(targetText);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasAnimated) {
                setHasAnimated(true);
                let iteration = 0;
                const chars = "0123456789";
                const totalIterations = 16;

                const interval = setInterval(() => {
                    setDisplayText(
                        targetText
                            .split("")
                            .map((char, index) => {
                                if (char === "+" || char === "%") return char;
                                if (index < Math.floor((iteration / totalIterations) * targetText.length)) {
                                    return targetText[index];
                                }
                                return chars[Math.floor(Math.random() * chars.length)];
                            })
                            .join("")
                    );

                    iteration++;
                    if (iteration >= totalIterations) {
                        setDisplayText(targetText);
                        clearInterval(interval);
                    }
                }, 45);
            }
        }, { threshold: 0.1 });

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [targetText, hasAnimated]);

    return (
        <span ref={ref} className={className}>
            {displayText}
        </span>
    );
}

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
                    {/* Background Marquee Text illuminates first upon arriving in viewport */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.05 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className='absolute inset-0 flex items-center overflow-hidden pointer-events-none z-0'
                    >
                        <div className='animate-marquee flex whitespace-nowrap opacity-25'>
                            <h1 className='font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] tracking-tighter text-black uppercase select-none leading-none pr-12'>
                                VISION OF THE SQUAD • VISION OF THE SQUAD •&nbsp;
                            </h1>
                            <h1 className='font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] tracking-tighter text-black uppercase select-none leading-none pr-12'>
                                VISION OF THE SQUAD • VISION OF THE SQUAD •&nbsp;
                            </h1>
                        </div>
                    </motion.div>

                    {/* Foreground Yellow Card - Grows from Center */}
                    <div className='w-full max-w-2xl mx-auto my-4 relative z-10'>
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0, y: 40 }}
                            whileInView={{ scale: 1, opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.05 }}
                            transition={{
                                duration: 0.85,
                                delay: 0.25,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            style={{ transformOrigin: 'center' }}
                            className='relative bg-yellow-400 max-w-2xl w-full mx-auto p-8 sm:p-14 md:p-20 text-center rounded-sm shadow-[0_25px_60px_rgba(234,179,8,0.4)] border border-black/10 overflow-hidden'
                        >
                            {/* Light Sweep Shimmer Effect */}
                            <motion.div
                                initial={{ x: '-120%', opacity: 0 }}
                                whileInView={{ x: '220%', opacity: [0, 0.7, 0] }}
                                viewport={{ once: true, amount: 0.05 }}
                                transition={{ duration: 1.1, delay: 0.7, ease: 'easeInOut' }}
                                className='absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12'
                            />

                            <motion.h2
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.05 }}
                                transition={{ duration: 0.5, delay: 0.55, ease: 'easeOut' }}
                                className='font-semibold tracking-tighter leading-tight text-xl md:text-2xl lg:text-3xl text-black'
                            >
                                To be the leading student-run coding club that empowers every student at the Knowledge Institute of Technology to excel in competitive programming and secure careers at top-tier technology companies.
                            </motion.h2>
                        </motion.div>
                    </div>
                </div>

                {/* Mission Section with Continuous Auto-Scrolling Background Text */}
                <div className='relative w-full mx-auto py-16 flex flex-col items-center justify-center overflow-hidden my-4'>
                    {/* Background Marquee Text illuminates first upon arriving in viewport */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.05 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className='absolute inset-0 flex items-center overflow-hidden pointer-events-none z-0'
                    >
                        <div className='animate-marquee flex whitespace-nowrap opacity-25'>
                            <h1 className='font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] tracking-tighter text-black uppercase select-none leading-none pr-12'>
                                MISSION OF THE SQUAD • MISSION OF THE SQUAD •&nbsp;
                            </h1>
                            <h1 className='font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] tracking-tighter text-black uppercase select-none leading-none pr-12'>
                                MISSION OF THE SQUAD • MISSION OF THE SQUAD •&nbsp;
                            </h1>
                        </div>
                    </motion.div>

                    {/* Foreground Yellow Card - Grows from Center */}
                    <div className='w-full max-w-2xl mx-auto my-4 relative z-10'>
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0, y: 40 }}
                            whileInView={{ scale: 1, opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.05 }}
                            transition={{
                                duration: 0.85,
                                delay: 0.25,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            style={{ transformOrigin: 'center' }}
                            className='relative bg-yellow-400 max-w-2xl w-full mx-auto p-8 sm:p-14 md:p-20 text-center rounded-sm shadow-[0_25px_60px_rgba(234,179,8,0.4)] border border-black/10 overflow-hidden'
                        >
                            {/* Light Sweep Shimmer Effect */}
                            <motion.div
                                initial={{ x: '-120%', opacity: 0 }}
                                whileInView={{ x: '220%', opacity: [0, 0.7, 0] }}
                                viewport={{ once: true, amount: 0.05 }}
                                transition={{ duration: 1.1, delay: 0.7, ease: 'easeInOut' }}
                                className='absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12'
                            />

                            <motion.h2
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.05 }}
                                transition={{ duration: 0.5, delay: 0.55, ease: 'easeOut' }}
                                className='font-semibold tracking-tighter leading-tight text-xl md:text-2xl lg:text-3xl text-black'
                            >
                                Our mission is to foster a vibrant and inclusive coding culture through consistent, high-quality weekly challenges and company-specific training...
                            </motion.h2>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className='flex flex-col lg:flex-row gap-8 lg:gap-16 items-start mt-16 relative z-10'
                >
                    {/* Word-by-Word Masked Heading Reveal with Exact Standard Word Spacing */}
                    <div className='lg:w-1/3 shrink-0'>
                        <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter leading-tight'>
                            {["The", "Spark", "That", "Set", "Our", "Journey", "in", "Motion"].map((word, idx, arr) => (
                                <React.Fragment key={idx}>
                                    <span className='inline-block overflow-hidden align-top py-0.5'>
                                        <motion.span
                                            variants={{
                                                hidden: { y: '120%', opacity: 0 },
                                                visible: {
                                                    y: '0%',
                                                    opacity: 1,
                                                    transition: {
                                                        duration: 0.6,
                                                        delay: idx * 0.06,
                                                        ease: [0.16, 1, 0.3, 1]
                                                    }
                                                }
                                            }}
                                            className='inline-block'
                                        >
                                            {word}
                                        </motion.span>
                                    </span>
                                    {idx < arr.length - 1 && ' '}
                                </React.Fragment>
                            ))}
                        </h1>
                    </div>

                    {/* Normal Fade In Effect for Body Text */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.75, delay: 0.2, ease: 'easeOut' }
                            }
                        }}
                        className='font-semibold text-md md:text-lg lg:text-xl text-gray-700 leading-tighter tracking-tighter max-w-4xl lg:w-2/3 flex flex-col gap-6'
                    >
                        <p>
                            Synergy Squad was forged from the Pre-Placement Readiness Initiative, designed to elevate the technical proficiency of our students. Our formation process is rigorous and merit-based: prospective members undergo a series of intensive Practice Assessments, including mock company-specific tests like the TCS CodeVita.
                        </p>
                        <p>
                            Based on performance, a select group of top candidates are invited to form the squad for that academic year. This exclusive group then receives specialized, intensive training focused on advanced problem-solving, data structures, and algorithms to prepare them for competitive programming on a national level.
                        </p>
                        <p>
                            The cornerstone of our activity is the "Weekly Programming Day," a structured event designed to continuously strengthen coding skills through consistent practice and targeted assessments, ensuring our members are always ready for the next challenge.
                        </p>
                    </motion.div>
                </motion.div>
            </section>
            
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className='px-8 mt-16 mb-16'
            >
                <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter max-w-3xl leading-tight mb-16'>
                    {"A Snapshot of Our Journey Through Meaningful Numbers, Lasting Impact, and Continuous Growth".split(" ").map((word, idx, arr) => (
                        <React.Fragment key={idx}>
                            <span className='inline-block overflow-hidden align-top py-0.5'>
                                <motion.span
                                    variants={{
                                        hidden: { y: '120%', opacity: 0 },
                                        visible: {
                                            y: '0%',
                                            opacity: 1,
                                            transition: {
                                                duration: 0.6,
                                                delay: idx * 0.05,
                                                ease: [0.16, 1, 0.3, 1]
                                            }
                                        }
                                    }}
                                    className='inline-block'
                                >
                                    {word}
                                </motion.span>
                            </span>
                            {idx < arr.length - 1 && ' '}
                        </React.Fragment>
                    ))}
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16'>
                    <div>
                        <h2 className='text-black font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tighter'>
                            <ScrambleNumber targetText="120+" />
                        </h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
                        >
                            <p className='text-black font-semibold text-md md:text-lg lg:text-xl tracking-tighter border-b border-gray-300 mb-4 pb-1 mt-2'>Members</p>
                            <p className='tracking-tighter font-semibold text-sm md:text-md lg:text-lg max-w-sm text-gray-700 leading-tighter'>Active student members trained in advanced computing and problem solving across CSE batches.</p>
                        </motion.div>
                    </div>
                    <div>
                        <h2 className='text-black font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tighter'>
                            <ScrambleNumber targetText="3+" />
                        </h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.65, delay: 0.3, ease: 'easeOut' }}
                        >
                            <p className='text-black font-semibold text-md md:text-lg lg:text-xl tracking-tighter border-b border-gray-300 mb-4 pb-1 mt-2'>Batches</p>
                            <p className='tracking-tighter font-semibold text-sm md:text-md lg:text-lg max-w-sm text-gray-700 leading-tighter'>Across these 3 batches, we have conducted various events and competitions to enhance student skills.</p>
                        </motion.div>
                    </div>
                    <div>
                        <h2 className='text-black font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tighter'>
                            <ScrambleNumber targetText="10+" />
                        </h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.65, delay: 0.4, ease: 'easeOut' }}
                        >
                            <p className='text-black font-semibold text-md md:text-lg lg:text-xl tracking-tighter border-b border-gray-300 mb-4 pb-1 mt-2'>Events</p>
                            <p className='tracking-tighter font-semibold text-sm md:text-md lg:text-lg max-w-sm text-gray-700 leading-tighter'>Technical workshops, coding hackathons, and company-specific mock challenges conducted annually.</p>
                        </motion.div>
                    </div>
                    <div>
                        <h2 className='text-black font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tighter'>
                            <ScrambleNumber targetText="75%+" />
                        </h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.65, delay: 0.5, ease: 'easeOut' }}
                        >
                            <p className='text-black font-semibold text-md md:text-lg lg:text-xl tracking-tighter border-b border-gray-300 mb-4 pb-1 mt-2'>Placed in top MNCs</p>
                            <p className='tracking-tighter font-semibold text-sm md:text-md lg:text-lg max-w-sm text-gray-700 leading-tighter'>High-performing graduates recruited into Tier-1 IT companies and global technology leaders.</p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <section className='grid grid-cols-2 mt-16 bg-black p-16 gap-4'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.75, ease: 'easeOut' }}
                    className='flex items-center justify-end mb-24'
                >
                    <img src={PraveenSirImage} alt="Praveen Sir" className='w-40' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
                    className='flex flex-col gap-8 mt-32'
                >
                    <p className='font-semibold text-md md:text-lg lg:text-xl text-white leading-tighter tracking-tighter max-w-xl'>
                        “I never wanted this club to be just another organization on campus. I envisioned a community where students could bring their ideas to life, discover what they are capable of, and grow alongside people who share the same curiosity and ambition. What started as a simple idea has become a journey shaped by every student who chose to be a part of it.”
                    </p>
                    <div className='flex flex-col gap-1'>
                        <p className='text-white text-md md:text-lg lg:text-xl font-semibold tracking-tighter '>Mr.K.Praveen AP/CSE</p>
                        <p className='text-white text-xs md:text-sm lg:text-md font-semibold tracking-tighter '>Founder of Synergy Squad</p>
                    </div>
                </motion.div>
            </section>
            
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className='grid grid-cols-2 bg-black p-16 gap-4'
            >
                <div className='flex items-center justify-end text-right mt-24'>
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.75, delay: 0.35, ease: 'easeOut' }
                            }
                        }}
                        className='font-semibold text-md md:text-lg lg:text-xl text-white leading-tighter tracking-tighter max-w-xl'
                    >
                        We believe that every student has the potential to create, lead, and make a meaningful difference when given the right environment and opportunities. We believe in learning by doing, growing through collaboration, embracing new ideas, and creating a community where curiosity is encouraged, every voice matters, and progress is something we build together.
                    </motion.p>
                </div>
                <div className='flex flex-col gap-8'>
                    <h1 className='font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tighter shrink-0 text-white leading-tight'>
                        {["What", "We", "Strongly", "Believe", "in"].map((word, idx, arr) => (
                            <React.Fragment key={idx}>
                                <span className='inline-block overflow-hidden align-top py-0.5'>
                                    <motion.span
                                        variants={{
                                            hidden: { y: '120%', opacity: 0 },
                                            visible: {
                                                y: '0%',
                                                opacity: 1,
                                                transition: {
                                                    duration: 0.6,
                                                    delay: idx * 0.07,
                                                    ease: [0.16, 1, 0.3, 1]
                                                }
                                            }
                                        }}
                                        className='inline-block'
                                    >
                                        {word}
                                    </motion.span>
                                </span>
                                {idx < arr.length - 1 && ' '}
                            </React.Fragment>
                        ))}
                    </h1>
                </div>
            </motion.section>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className='mt-16 px-8'
            >
                <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter max-w-2xl mb-12 leading-tight'>
                    {"Our members have been hired by industry leaders".split(" ").map((word, idx, arr) => (
                        <React.Fragment key={idx}>
                            <span className='inline-block overflow-hidden align-top py-0.5'>
                                <motion.span
                                    variants={{
                                        hidden: { y: '120%', opacity: 0 },
                                        visible: {
                                            y: '0%',
                                            opacity: 1,
                                            transition: {
                                                duration: 0.6,
                                                delay: idx * 0.06,
                                                ease: [0.16, 1, 0.3, 1]
                                            }
                                        }
                                    }}
                                    className='inline-block'
                                >
                                    {word}
                                </motion.span>
                            </span>
                            {idx < arr.length - 1 && ' '}
                        </React.Fragment>
                    ))}
                </h1>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.75, delay: 0.45, ease: 'easeOut' }
                        }
                    }}
                    className='grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 items-center mb-16'
                >
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
                </motion.div>
            </motion.div>

            {/* Bento Gallery Section (Matching Squad Page Gallery Template) */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className='px-8 mt-24 mb-24'
            >
                <div className='flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4'>
                    <div>
                        <h1 className='text-black font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter max-w-2xl leading-tight'>
                            {"The Moments, Memories, and Experiences That Define Us".split(" ").map((word, idx, arr) => (
                                <React.Fragment key={idx}>
                                    <span className='inline-block overflow-hidden align-top py-0.5'>
                                        <motion.span
                                            variants={{
                                                hidden: { y: '120%', opacity: 0 },
                                                visible: {
                                                    y: '0%',
                                                    opacity: 1,
                                                    transition: {
                                                        duration: 0.6,
                                                        delay: idx * 0.06,
                                                        ease: [0.16, 1, 0.3, 1]
                                                    }
                                                }
                                            }}
                                            className='inline-block'
                                        >
                                            {word}
                                        </motion.span>
                                    </span>
                                    {idx < arr.length - 1 && ' '}
                                </React.Fragment>
                            ))}
                        </h1>
                    </div>
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.75, delay: 0.45, ease: 'easeOut' }
                            }
                        }}
                        className='font-semibold text-sm md:text-md lg:text-lg text-gray-700 max-w-md tracking-tighter'
                    >
                        Visual highlights and event moments from our community journey.
                    </motion.p>
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
            </motion.section>
            <FinalCTA />
        </div>
    )
}

export default About