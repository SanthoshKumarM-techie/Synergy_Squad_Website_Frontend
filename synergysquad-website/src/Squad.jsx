import React, { useState } from 'react'
import Navbar from './Navbar'
import BG from './assets/abstractBG.jpg'
import FinalCTA from './FinalCTA';
import StaggeredText from './StaggeredText'

const squadData = [
  {
    id: 1,
    name: 'Synergy Squad 1.0',
    members: [
      "AASHA S", "ABISHEK M", "ANUVARSHINI R", "ARUNDHATHI S", "BA.SUSHMITHA BALAGANG", "BARATHRAJ K", "Dhanush M", "Dharani M", "DILIP S", "Gayathri R",
      "Harini S", "JEEVANANDHAN J", "JEEVIKA B", "Jeslin jacob", "KAMALAKANNAN NG", "KARTHIK S", "karthikeyan S", "Keerthana D", "NANDHINI K", "NAVEETH J",
      "nithish kumar", "Ragunaath S", "s.meenachi s", "Sathish D", "SATHISKUMAR P", "SATHYARAM R", "selva ganapathi", "shabari S", "SHRIYAA S.V", "Sowantharya S",
      "SUBASRI C", "Subikcha K.B", "Suhasini P", "swathi v", "THARANI k", "Vibav Mahendran", "VIJAY K R", "YUVARAJ R", "yuvasree M"
    ],
    bento: {
      totalCount: '1.0',
      subtitle: 'the beginning of a student community built on learning and collaboration',
      statPercent: '01',
      statDesc: 'the first chapter that laid the foundation for Synergy Squad',
      heroQuote: 'Where a shared vision brought students together and the journey began',
      ctaText: 'Explore Squad 1.0',
      images: [BG, BG, BG, BG]
    }
  },
  {
    id: 2,
    name: 'Synergy Squad 2.0',
    members: [
      "ANITHA S S", "ARUTSELVAN A", "BHARATHI S", "BHUVANESH S", "DEVASREE K P", "DHARSHINI S", "DHIVESH S", "DINESH V T", "GANESHA MOORTHY S", "GAYATHRI M",
      "HARINI P", "INDHUPRAKASH P", "INDHUVADHANI Y", "JEEVANNA M", "JEYASEELAN RA", "KANISHKA N", "KARTHIGA S", "KARTHIKAA K", "KAVITHASHREE S", "KAVYA S",
      "LAKSME THARANE V G", "MADHUMITHA K", "MOHANAVALLI M", "MOSHIKAA S", "MOSHIKAA S", "NAMITHA M", "NARMADHA V.S", "PAVITHRA M", "PRAMOTH R", "PRAVEEN P",
      "RAMESH M", "SARAN P", "SATHYA SRI P V", "SIVAKUMAR R", "SNEHA S J", "SUBASREE G S", "SUBATHRA A", "THARUN N", "UMA J", "VIGNESHWARAN M", "VIGNESHWARAN M"
    ],
    bento: {
      totalCount: '2.0',
      subtitle: 'a growing community shaped by new ideas, stronger collaboration, and shared experiences',
      statPercent: '02',
      statDesc: 'the chapter where the squad grew in people, purpose, and possibilities',
      heroQuote: 'Growing together, taking responsibility, and turning ideas into action',
      ctaText: 'Explore Squad 2.0',
      images: [BG, BG, BG, BG]
    }
  },
  {
    id: 3,
    name: 'Synergy Squad 3.0',
    members: [
      "ARAVINTH KARTHIC K", "ASHOKA S K", "BADRI NARAYANAN B R", "DAMODARA PRAKASH P", "DEKSHA S", "DHANUSHIYA S", "DHINESHKUMAR M", "DHIYANESH SUNDAR", "DINESH G", "GIRI N",
      "JANANI C", "MADHUSREE K", "MAHALAKSHMI S", "NAGA GAYATHRI P", "NARENDHAR P", "NATHAN SHIEH", "NAVEEN PRASATH M", "NISHANTH M", "PRADEEPA S", "PRANESH S",
      "PRASANNAA V", "ROHITH S", "SANGEETHA A", "SANJAY S", "SANTHOSH J V", "SANTHOSH R", "SELVAGANESH U", "SHREESARAN K", "SOUNDARYA P", "SRINITHI E",
      "SUBHARANJINI M", "SUBHASHREE V P", "SUDHAKAR S", "TEJAS T", "THAMARAI SELVAN S", "THARANKUMAR G", "VARSHASHREE S", "VEERASOWNDARYA V", "VIGNESH S", "VISHALINI S", "VISHWAKUMAR J"
    ],
    bento: {
      totalCount: '3.0',
      subtitle: 'a new phase of creativity, leadership, collaboration, and meaningful experiences',
      statPercent: '03',
      statDesc: 'a chapter that strengthened the culture and expanded the vision of the squad',
      heroQuote: 'Empowering students to explore, contribute, lead, and create meaningful impact',
      ctaText: 'Explore Squad 3.0',
      images: [BG, BG, BG, BG]
    }
  },
  {
    id: 4,
    name: 'Synergy Squad 4.0',
    members: [
      "ABINAIYAA N", "ASHFAQ AHAMED J", "AVISHSHARAN S A", "BALASUBRAMANIYAM S", "BARATHKUMAR S",
      "CHANDRU K", "DHAKSANA R", "DIVAGARAN G", "EMIMAAL K V", "IJAZ AHAMED A",
      "JAGANATHAN V", "JAYAVIGNESH B K", "KANISHK N", "KATHIR S", "KAVYANJALI S",
      "KOWSHICK R", "LAKSHANA G", "MAITHREYA N", "MAVETHA V T", "MOHAMED HASITH K",
      "MONISHA D", "MOURISIKAA G K", "MUHAMMED SHUAIB N", "NAVEEN ADHITHYA S", "NIGLESH SUNDHAR K S",
      "NITHISH KANNA R", "PRABHURAM B", "RABINAYA V", "RAGUL C", "RAMYA S",
      "RAMYASRI M", "RATHIKASRI S K", "RENUGADEVI M", "RITHISH BARATH N", "SANDHIYA M",
      "SANJEEVSURYA R", "SANTHOSHKUMAR M", "SARAVANAKUMAR J", "SATHYA M", "SONAL M B",
      "SOWMYA S", "SWATHI M", "VASANTHARAJ G", "VISHAL P", "DEEKSHA R",
      "SONUPRIYA B", "SUVETHA S"
    ],
    bento: {
      totalCount: '4.0',
      subtitle: 'the next generation of students carrying forward the vision of the squad',
      statPercent: '04',
      statDesc: 'the latest chapter continuing a journey built on people, purpose, and progress',
      heroQuote: 'A new generation carrying the vision forward with ambition, creativity, and purpose',
      ctaText: 'Explore Squad 4.0',
      images: [BG, BG, BG, BG]
    }
  }
];

function Squad() {
  const [activeBatch, setActiveBatch] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const selectedBatchData = squadData.find(b => b.id === activeBatch);

  // Split members into two equal columns for a balanced, high-end list feel
  const halfLength = Math.ceil(selectedBatchData.members.length / 2);
  const leftColumn = selectedBatchData.members.slice(0, halfLength);
  const rightColumn = selectedBatchData.members.slice(halfLength);

  return (
    <div className='bg-[#e6e6e6] min-h-screen relative'>
      <Navbar />
      <section className='relative md:sticky md:top-0 isolate w-full min-h-screen overflow-hidden flex flex-col justify-center px-6 md:px-12 py-24 md:block'>
        <img src={BG} alt="Abstract Background" className='absolute inset-0 z-0 w-full h-full object-cover' />
        <div className='relative md:absolute md:inset-y-0 md:left-12 z-30 flex items-center mb-12 md:mb-0'>
          <StaggeredText 
            className='max-w-7xl text-left text-4xl font-semibold leading-[0.92] tracking-tighter text-white md:text-5xl lg:text-6xl'
            text="Connected By Shared Ambition"
            delay={0.6}
          />
        </div>
        <div className='relative md:absolute z-10 md:bottom-32 lg:bottom-28 md:left-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6 md:gap-16 text-white max-w-7xl mb-8 md:mb-0'>
          <div className='flex flex-col md:grid md:grid-rows-2 md:grid-flow-col gap-0'>
            <div>
              <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>4+</h1>
            </div>
            <div>
              <p className='font-semibold text-sm md:text-base lg:text-lg tracking-tighter leading-tight md:mt-2 lg:mt-3'>Batches</p>
            </div>
          </div>
          <div className='flex flex-col md:grid md:grid-rows-2 md:grid-flow-col gap-0'>
            <div>
              <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>190+</h1>
            </div>
            <div>
              <p className='font-semibold text-sm md:text-base lg:text-lg tracking-tighter leading-tight md:mt-2 lg:mt-3'>Members</p>
            </div>
          </div>
          <div className='flex flex-col md:grid md:grid-rows-2 md:grid-flow-col gap-0'>
            <div>
              <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>100+</h1>
            </div>
            <div>
              <p className='font-semibold text-sm md:text-base lg:text-lg tracking-tighter leading-tight md:mt-2 lg:mt-3'>Placed in top MNCs</p>
            </div>
          </div>
        </div>
        <p className='relative md:absolute z-10 md:bottom-12 md:left-12 text-white max-w-4xl font-semibold text-sm md:text-base lg:text-lg tracking-tighter leading-tight'>
          A community built on learning, collaboration, and the ambition to grow beyond boundaries. Every milestone reflects the people, opportunities, and collective effort that continue to shape our journey.
        </p>
      </section>

      <div className="relative z-10 bg-[#e6e6e6]">
      <section className='min-h-screen px-6 md:px-12 py-24'>
        <div className='max-w-7xl mx-auto'>
          {/* Mobile Dropdown Filter */}
          <div className='md:hidden mb-12 relative'>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-5 py-3 bg-white/60 border border-gray-300 rounded-full font-semibold text-sm text-gray-800 tracking-tighter flex items-center justify-between focus:outline-none focus:border-[#10129B]"
            >
              <span>{squadData.find(b => b.id === activeBatch)?.name}</span>
              <svg className={`w-4 h-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#f0f0f0] border border-gray-300 rounded-2xl shadow-xl z-50 overflow-hidden flex flex-col">
                {squadData.map((batch) => (
                  <button
                    key={batch.id}
                    onClick={() => {
                      setActiveBatch(batch.id);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full px-5 py-3 text-left font-semibold text-sm tracking-tighter transition-colors ${
                      activeBatch === batch.id ? 'bg-[#10129B] text-white' : 'text-gray-800 hover:bg-white'
                    }`}
                  >
                    {batch.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Minimalist Filter Tabs */}
          <div className='hidden md:flex flex-wrap items-center gap-4 mb-16'>
            {squadData.map((batch) => (
              <button
                key={batch.id}
                onClick={() => setActiveBatch(batch.id)}
                className={`px-6 py-2 rounded-full font-semibold md:text-base lg:text-lg tracking-tighter transition-all duration-300 ${activeBatch === batch.id
                    ? 'bg-[#10129B] text-white'
                    : 'bg-white/60 text-gray-700 hover:bg-white hover:text-black border border-gray-300'
                  }`}
              >
                {batch.name}
              </button>
            ))}
          </div>

          {/* Section Header */}
          <div className='pt-8 pb-12 flex flex-col md:flex-row md:items-baseline justify-between gap-4'>
            <h3 className='text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter leading-tight text-black'>
              {selectedBatchData.name}
            </h3>
            <span className='font-mono text-sm tracking-tighter text-gray-500 font-semibold'>
              [ {selectedBatchData.members.length} MEMBERS ]
            </span>
          </div>

          {/* Dual-Column Minimal List */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 border-t border-gray-300'>

            {/* Column 1 */}
            <ul className='divide-y divide-gray-300'>
              {leftColumn.map((member, index) => {
                const globalIndex = index;
                return (
                  <li
                    key={globalIndex}
                    className='group flex items-center justify-between py-4 transition-all duration-300 cursor-default'
                  >
                    <div className='flex items-center gap-6 transform group-hover:translate-x-2 transition-transform duration-300'>
                      <span className='font-mono text-xs md:text-sm text-gray-400 group-hover:text-black font-semibold tracking-tighter transition-colors'>
                        {(globalIndex + 1).toString().padStart(2, '0')}
                      </span>
                      <span className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter text-gray-800 group-hover:text-black transition-colors uppercase'>
                        {member}
                      </span>
                    </div>
                    {/* Minimal Hover Indicator Dot */}
                    <span className='w-1.5 h-1.5 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  </li>
                )
              })}
            </ul>

            {/* Column 2 */}
            <ul className='divide-y divide-gray-300 border-t md:border-t-0 border-gray-300'>
              {rightColumn.map((member, index) => {
                const globalIndex = halfLength + index;
                return (
                  <li
                    key={globalIndex}
                    className='group flex items-center justify-between py-4 transition-all duration-300 cursor-default'
                  >
                    <div className='flex items-center gap-6 transform group-hover:translate-x-2 transition-transform duration-300'>
                      <span className='font-mono text-xs md:text-sm text-gray-400 group-hover:text-black font-semibold tracking-tighter transition-colors'>
                        {(globalIndex + 1).toString().padStart(2, '0')}
                      </span>
                      <span className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter text-gray-800 group-hover:text-black transition-colors uppercase'>
                        {member}
                      </span>
                    </div>
                    {/* Minimal Hover Indicator Dot */}
                    <span className='w-1.5 h-1.5 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  </li>
                )
              })}
            </ul>

          </div>

        </div>
      </section>
      <FinalCTA/>
      </div>
    </div>
  )
}

export default Squad