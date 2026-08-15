import React, { useState } from 'react'
import Navbar from './Navbar'
import FinalCTA from './FinalCTA'
import squadEvent1 from './assets/squad_event_1.png'
import squadEvent2 from './assets/squad_event_2.png'
import squadEvent3 from './assets/squad_event_3.png'
import kiotTopView from './assets/KIOT-Top-View.webp'
import testimonialImg from './assets/Testimonial.png'
import heroImg from './assets/hero.png'

const squad1 = [
  "Aarav Sharma", "Ananya Rao", "Vigneshwaran S.", "Nithya Sri R.", "Karthi V.",
  "Harish Kumar", "Priya Dharshini M.", "Rahul Verma", "Aditi Patel", "Deepak Sundar",
  "Kavya Krishnan", "Ashwin Raj", "Meera Nair", "Siddarth P.", "Divya S.",
  "Gautham R.", "Janani K.", "Gokulnath T.", "Keerthana B.", "Naveen Kumar",
  "Preeti Sengupta", "Rajesh Kannan", "Shalini M.", "Surya Prakash", "Swetha N.",
  "Tarun Kumar", "Varun S.", "Abhinav Reddy", "Bhavana Chawla", "Dinesh Karthik",
  "Eswar Prasad", "Hemalatha R.", "Ishwarya V.", "Jagadeesh M.", "Lokesh Kumar",
  "Monica R.", "Narendran P.", "Pavithra S.", "Rithvik V.", "Yuvraj S."
]

const squad2 = [
  "Akash V.", "Bhavya Sri N.", "Chandresh M.", "Dharshini K.", "Elango R.",
  "Farhan Ahmed", "Gayathri P.", "Hariharan S.", "Indumathi K.", "Jayashree M.",
  "Karthikeyan B.", "Lavanya R.", "Manoj Kumar", "Nivedha S.", "Om Prakash",
  "Prasanth R.", "Ramya V.", "Santhosh Kumar", "Sneha P.", "Tamilselvan M.",
  "Uma Maheswari", "Venkatesh S.", "Vishnu Vardhan", "Yogeshwaran R.", "Anitha K.",
  "Balaji S.", "Charulatha M.", "Devendra R.", "Gokul S.", "Hari Prasath",
  "Kaviyarasan T.", "Logeshwaran V.", "Manikandan P.", "Naveen Raj", "Pradeep S.",
  "Raghavan M.", "Saravanan K.", "Tharani R.", "Vijay Kumar", "Yamini S."
]

const squad3 = [
  "Abishek R.", "Archana M.", "Bharath Kumar", "Deepika S.", "Dhanush K.",
  "Ganesh Moorthy", "Gita R.", "Illakhiya V.", "Jeevanantham S.", "Kiruthika M.",
  "Kishore Kumar", "Madhavan R.", "Malathi S.", "Nandhini P.", "Nitin Verma",
  "Pavithran K.", "Prithiviraj M.", "Rakshitha S.", "Rohan Gupta", "Sanjay Kumar",
  "Sharmathi V.", "Sri Ram M.", "Sudharsan R.", "Suraj Sharma", "Thangapandi K.",
  "Vaishnavi S.", "Vignesh Kumar", "Vinothini R.", "Aravindh M.", "Deepak Kumar",
  "Gowtham S.", "Hari Ram", "Karthik Raja", "Leelavathi P.", "Murali Dharan",
  "Nagarajan S.", "Preetha R.", "Roshan V.", "Subash Chandran", "Vishwa S."
]

const squad4 = [
  "Ashok Kumar", "Bhuvanesh R.", "Charan V.", "Devaki S.", "Dinesh Raj",
  "Gopinath M.", "Hemant Sharma", "Janarthanan R.", "Kabilan S.", "Karthika P.",
  "Logesh R.", "Meenakshi S.", "Naveen Prasad", "Nirmal Kumar", "Pavithra Raj",
  "Praveen Kumar", "Rajeshwari M.", "Rohit Sharma", "Sakthi V.", "Santhiya R.",
  "Sathish Kumar", "Sharmila P.", "Sowmiya S.", "Subash R.", "Sudhir Kumar",
  "Sujitha V.", "Sundar Raj", "Surendhar M.", "Tanvi Gupta", "Udhaya Kumar",
  "Vasanth R.", "Venkatesan M.", "Vidhya S.", "Vignesh Raj", "Vijay Anand",
  "Vikram S.", "Vinay Kumar", "Vishal R.", "Yashwanth S.", "Yogesh R."
]

const batchList = [
  {
    id: '1.0',
    title: 'Synergy Squad 1.0',
    galleryTitle: 'Synergy Squad 1.0 Gallery',
    members: squad1,
    images: [
      { src: squadEvent1, alt: '24-Hour Code Hackathon', title: '24-Hour Competitive Coding Challenge', span: 'col-span-1 sm:col-span-2 md:col-span-2 row-span-2' },
      { src: kiotTopView, alt: 'KIOT Campus View', title: 'Innovation Hub', span: 'col-span-1 sm:col-span-1 md:col-span-1 row-span-1' },
      { src: squadEvent3, alt: 'DSA Workshop', title: 'Advanced DSA & Algorithm Masterclass', span: 'col-span-1 sm:col-span-1 md:col-span-1 row-span-2' },
      { src: squadEvent2, alt: 'TCS CodeVita Award Winners', title: 'CodeVita Winners', span: 'col-span-1 sm:col-span-1 md:col-span-1 row-span-1' },
      { src: testimonialImg, alt: 'Member Experiences', title: 'Real Student Journeys & Tier-1 Placements', span: 'col-span-1 sm:col-span-2 md:col-span-2 row-span-1' },
      { src: heroImg, alt: 'Synergy Squad Graphic', title: 'Synergy Squad 1.0', span: 'col-span-1 sm:col-span-2 md:col-span-2 row-span-1' },
    ]
  },
  {
    id: '2.0',
    title: 'Synergy Squad 2.0',
    galleryTitle: 'Synergy Squad 2.0 Gallery',
    members: squad2,
    images: [
      { src: squadEvent2, alt: 'CodeVita Winners', title: 'National Coding Competition Winners', span: 'col-span-1 sm:col-span-2 md:col-span-2 row-span-2' },
      { src: squadEvent1, alt: 'Hackathon', title: 'Hackathon Sprint', span: 'col-span-1 sm:col-span-1 md:col-span-1 row-span-1' },
      { src: kiotTopView, alt: 'Campus Lab', title: 'Computing Research Center', span: 'col-span-1 sm:col-span-1 md:col-span-1 row-span-2' },
      { src: squadEvent3, alt: 'Workshop', title: 'Tech Workshop', span: 'col-span-1 sm:col-span-1 md:col-span-1 row-span-1' },
      { src: heroImg, alt: 'Squad 2.0', title: 'Batch 2.0 Achievements', span: 'col-span-1 sm:col-span-2 md:col-span-2 row-span-1' },
      { src: testimonialImg, alt: 'Placements', title: 'Tier-1 IT Recruits', span: 'col-span-1 sm:col-span-2 md:col-span-2 row-span-1' },
    ]
  },
  {
    id: '3.0',
    title: 'Synergy Squad 3.0',
    galleryTitle: 'Synergy Squad 3.0 Gallery',
    members: squad3,
    images: [
      { src: squadEvent3, alt: 'DSA Masterclass', title: 'System Design & DSA Bootcamp', span: 'col-span-1 sm:col-span-2 md:col-span-2 row-span-2' },
      { src: testimonialImg, alt: 'Student Stories', title: 'Student Success Stories', span: 'col-span-1 sm:col-span-1 md:col-span-1 row-span-1' },
      { src: squadEvent1, alt: 'Coding Sprint', title: '24-Hour Code Jam', span: 'col-span-1 sm:col-span-1 md:col-span-1 row-span-2' },
      { src: squadEvent2, alt: 'Awards', title: 'Hackathon Champions', span: 'col-span-1 sm:col-span-1 md:col-span-1 row-span-1' },
      { src: kiotTopView, alt: 'Campus View', title: 'Tech Campus Life', span: 'col-span-1 sm:col-span-2 md:col-span-2 row-span-1' },
      { src: heroImg, alt: 'Squad 3.0', title: 'Synergy Squad 3.0', span: 'col-span-1 sm:col-span-2 md:col-span-2 row-span-1' },
    ]
  },
  {
    id: '4.0',
    title: 'Synergy Squad 4.0',
    galleryTitle: 'Synergy Squad 4.0 Gallery',
    members: squad4,
    images: [
      { src: heroImg, alt: 'Squad 4.0 Launch', title: 'Synergy Squad 4.0 Launch', span: 'col-span-1 sm:col-span-2 md:col-span-2 row-span-2' },
      { src: squadEvent3, alt: 'Mentorship', title: 'Peer Mentorship Sessions', span: 'col-span-1 sm:col-span-1 md:col-span-1 row-span-1' },
      { src: squadEvent2, alt: 'CodeVita Stage', title: 'National Level Finalists', span: 'col-span-1 sm:col-span-1 md:col-span-1 row-span-2' },
      { src: squadEvent1, alt: 'Coding Arena', title: 'Mock Technical Interviews', span: 'col-span-1 sm:col-span-1 md:col-span-1 row-span-1' },
      { src: testimonialImg, alt: 'Placement Drive', title: '100% Placement Milestone', span: 'col-span-1 sm:col-span-2 md:col-span-2 row-span-1' },
      { src: kiotTopView, alt: 'KIOT Hub', title: 'Department of CSE', span: 'col-span-1 sm:col-span-2 md:col-span-2 row-span-1' },
    ]
  },
]

function Squad() {
  const [activeBatchId, setActiveBatchId] = useState('1.0')

  const activeBatch = batchList.find(b => b.id === activeBatchId) || batchList[0]
  const activeBatchIndex = batchList.findIndex(b => b.id === activeBatchId)

  return (
    <div className='min-h-screen relative flex flex-col justify-between select-none bg-[#e6e6e6] text-black'>
      <Navbar />

      <main className='relative z-10 py-16 px-8 w-full'>
        {/* Main Header */}
        <h1 className='font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter max-w-3xl leading-tight text-center mx-auto shrink-0 mb-10'>
          Meet the People Behind the Ideas, Initiatives, and Energy That Drive Our Squad Forward
        </h1>

        {/* Sleek Batch Selector Pills */}
        <div className='flex items-center justify-center gap-2 sm:gap-4 mb-16 overflow-x-auto py-2 no-scrollbar'>
          {batchList.map((batch) => {
            const isActive = batch.id === activeBatchId
            return (
              <button
                key={batch.id}
                onClick={() => setActiveBatchId(batch.id)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm md:text-md lg:text-lg tracking-tighter transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-yellow-400 shadow-md scale-105'
                    : 'bg-black/5 text-gray-800 hover:bg-black/10 hover:text-black'
                }`}
              >
                {batch.title}
              </button>
            )
          })}
        </div>

        {/* Active Batch Content */}
        <div key={activeBatch.id} className='flex flex-col w-full transition-all duration-500'>
          {/* Left Sticky Batch Title & Right 40 Student Names */}
          <div className='flex flex-col md:flex-row justify-between items-start gap-12 lg:gap-24 w-full relative'>
            {/* Extreme Left Section */}
            <div className='md:w-1/3 shrink-0 text-left sticky top-28 self-start'>
              <h2 className='font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter text-black'>
                {activeBatch.title}
              </h2>
              <p className='font-semibold text-sm md:text-md lg:text-lg text-gray-700 leading-tighter tracking-tighter max-w-sm mt-3'>
                {activeBatch.members.length} Merit-based student members trained in advanced DSA, competitive programming, and engineering fundamentals.
              </p>
            </div>

            {/* Extreme Right Section: 40 Student Names */}
            <div className='md:w-2/3 w-full flex justify-end'>
              <ul className='grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-3 font-medium tracking-tight text-sm md:text-md lg:text-lg w-full max-w-3xl'>
                {activeBatch.members.map((name, index) => (
                  <li 
                    key={index}
                    className='py-2 px-3 rounded-md hover:bg-gray-100 transition-colors flex items-center border-b border-gray-100 whitespace-nowrap'
                  >
                    <span className='font-semibold text-gray-900 tracking-tight whitespace-nowrap shrink-0'>{name}</span>
                    <span className='text-xs font-semibold text-yellow-400 tracking-tighter shrink-0 ml-4'>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Batch Photo Gallery */}
          <div className='mt-24 pt-12 w-full'>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4'>
              <div>
                <h3 className='font-semibold text-xl md:text-2xl lg:text-3xl tracking-tighter text-black'>
                  {activeBatch.galleryTitle}
                </h3>
              </div>
              <p className='font-semibold text-sm md:text-md lg:text-lg text-gray-700 max-w-md tracking-tighter'>
                Visual highlights and event moments from {activeBatch.title}.
              </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 auto-rows-[220px] w-full'>
              {activeBatch.images.map((img, idx) => (
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
          </div>

          {/* Batch Navigation Footer */}
          <div className='mt-16 pt-8 flex items-center justify-between border-t border-gray-100'>
            {activeBatchIndex > 0 ? (
              <button
                type='button'
                onClick={() => {
                  setActiveBatchId(batchList[activeBatchIndex - 1].id)
                  window.scrollTo({ top: 120, behavior: 'smooth' })
                }}
                className='group relative inline-block cursor-pointer font-bold text-sm md:text-md lg:text-lg tracking-tighter text-black py-1'
              >
                <span>{batchList[activeBatchIndex - 1].title}</span>
                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out' />
              </button>
            ) : <div />}

            {activeBatchIndex < batchList.length - 1 ? (
              <button
                type='button'
                onClick={() => {
                  setActiveBatchId(batchList[activeBatchIndex + 1].id)
                  window.scrollTo({ top: 120, behavior: 'smooth' })
                }}
                className='group relative inline-block cursor-pointer font-bold text-sm md:text-md lg:text-lg tracking-tighter text-black py-1'
              >
                <span>{batchList[activeBatchIndex + 1].title}</span>
                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out' />
              </button>
            ) : <div />}
          </div>
        </div>
      </main>

      <FinalCTA />
    </div>
  )
}

export default Squad