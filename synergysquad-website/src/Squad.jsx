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
      { name: "AASHA S", company: "Hexaware" },
      "ABISHEK M",
      { name: "ANUVARSHINI R", company: "AMI" },
      { name: "ARUNDHATHI S", company: "AMI" },
      "BA.SUSHMITHA BALAGANG",
      { name: "BARATHRAJ K", company: "PK Software Solutions" },
      { name: "Dhanush M", company: "KT Telematic Solutions" },
      { name: "Dharani M", company: "Expleo Solutions" },
      { name: "DILIP S", company: "Tech Mahindra" },
      { name: "Gayathri R", company: "Expleo Solutions" },
      { name: "Harini S", company: "Hexaware" },
      { name: "JEEVANANDHAN J", company: "Zoho" },
      { name: "JEEVIKA B", company: "Expleo Solutions" },
      "Jeslin jacob",
      { name: "KAMALAKANNAN NG", company: "Zoho" },
      { name: "KARTHIK S", company: "Tech Mahindra" },
      { name: "karthikeyan S", company: "KaarTech" },
      { name: "Keerthana D", company: "Mr Cooper" },
      { name: "NANDHINI K", company: "PK Software Solutions" },
      { name: "NAVEETH J", company: "AMI" },
      "nithish kumar",
      "Ragunaath S",
      { name: "s.meenachi s", company: "Thiran Technologies" },
      { name: "Sathish D", company: "Genworx.ai" },
      { name: "SATHISKUMAR P", company: "AMI" },
      { name: "SATHYARAM R", company: "LTIMindtree" },
      "selva ganapathi",
      "shabari S",
      { name: "SHRIYAA S.V", company: "AMI" },
      { name: "Sowantharya S", company: "AMI" },
      "SUBASRI C",
      { name: "Subikcha K.B", company: "HP" },
      { name: "Suhasini P", company: "Applstar Technologies" },
      "swathi v",
      { name: "THARANI k", company: "Applstar Technologies" },
      { name: "Vibav Mahendran", company: "Abluva" },
      { name: "VIJAY K R", company: "AMI" },
      { name: "YUVARAJ R", company: "Expleo Solutions" },
      { name: "yuvasree M", company: "Tech Mahindra" }
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
      { name: "ANITHA S S", company: "Hexaware" },
      { name: "ARUTSELVAN A", company: "JaMocha tech" },
      { name: "BHARATHI S", company: "TCS & Hexaware" },
      "BHUVANESH S",
      { name: "DEVASREE K P", company: "TCS & Hexaware" },
      "DHARSHINI S",
      { name: "DHIVESH Y S", company: "Expleo Solutions" },
      "DINESH V T",
      { name: "GANESHA MOORTHY S", company: "Tranzyd Solutions" },
      { name: "GAYATHRI M", company: "SekyurityAi" },
      { name: "HARINI P", company: "Avasoft, Hexaware" },
      { name: "INDHUPRAKASH P", company: "ZOHO" },
      { name: "INDHUVADHANI Y", company: "Virtualmaze Softsys" },
      { name: "JEEVANNA M", company: "ITC Infotech, HCLTech" },
      "JEYASEELAN RA",
      { name: "KANISHKA N", company: "JaMocha tech" },
      "KARTHIGA S",
      { name: "KARTHIKAA K", company: "Hexaware" },
      "KAVITHASHREE S",
      { name: "KAVYA S", company: "HCLTech" },
      { name: "LAKSME THARANE V G", company: "Hexaware" },
      { name: "MADHUMITHA K", company: "Hexaware" },
      { name: "MOHANAVALLI M", company: "Hexaware" },
      { name: "MOSHIKAA S", company: "AMI" },
      "MOSHIKAA S",
      "NAMITHA M",
      { name: "NARMADHA V S", company: "AMI" },
      "PAVITHRA M",
      { name: "PRAMOTH R", company: "Coding Mart" },
      { name: "PRAVEEN P", company: "HCLTech" },
      { name: "RAMESH M", company: "Waves Digital" },
      { name: "SARAN P", company: "KAAR tech" },
      { name: "SATHYA SRI P V", company: "TCS & VirtualMaze Softsys" },
      { name: "SIVAKUMAR R", company: "ITC Infotech" },
      "SNEHA S J",
      { name: "SUBASREE G S", company: "Hexaware" },
      { name: "SUBATHRA A", company: "Expleo Solutions" },
      { name: "THARUN N", company: "AMI" },
      "UMA J",
      { name: "VIGNESHWARAN M", company: "ITC Infotech" },
      { name: "VIGNESHWARAN M", company: "Expleo Solutions" }
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
      { name: "ABINAIYAA N", company: "Student" },
      { name: "ASHFAQ AHAMED J", company: "Student" },
      { name: "AVISHSHARAN S A", company: "Student" },
      { name: "BALASUBRAMANIYAM S", company: "Student" },
      { name: "BARATHKUMAR S", company: "Student" },
      { name: "CHANDRU K", company: "Student" },
      { name: "DHAKSANA R", company: "Student" },
      { name: "DIVAGARAN G", company: "Student" },
      { name: "EMIMAAL K V", company: "Student" },
      { name: "IJAZ AHAMED A", company: "Student" },
      { name: "JAGANATHAN V", company: "Student" },
      { name: "JAYAVIGNESH B K", company: "Student" },
      { name: "KANISHK N", company: "Student" },
      { name: "KATHIR S", company: "Student" },
      { name: "KAVYANJALI S", company: "Student" },
      { name: "KOWSHICK R", company: "Student" },
      { name: "LAKSHANA G", company: "Student" },
      { name: "MAITHREYA N", company: "Student" },
      { name: "MAVETHA V T", company: "Student" },
      { name: "MOHAMED HASITH K", company: "Student" },
      { name: "MONISHA D", company: "Student" },
      { name: "MOURISIKAA G K", company: "Student" },
      { name: "MUHAMMED SHUAIB N", company: "Student" },
      { name: "NAVEEN ADHITHYA S", company: "Student" },
      { name: "NIGLESH SUNDHAR K S", company: "Student" },
      { name: "NITHISH KANNA R", company: "Student" },
      { name: "PRABHURAM B", company: "Student" },
      { name: "RABINAYA V", company: "Student" },
      { name: "RAGUL C", company: "Student" },
      { name: "RAMYA S", company: "Student" },
      { name: "RAMYASRI M", company: "Student" },
      { name: "RATHIKASRI S K", company: "Student" },
      { name: "RENUGADEVI M", company: "Student" },
      { name: "RITHISH BARATH N", company: "Student" },
      { name: "SANDHIYA M", company: "Student" },
      { name: "SANJEEVSURYA R", company: "Student" },
      { name: "SANTHOSHKUMAR M", company: "Student" },
      { name: "SARAVANAKUMAR J", company: "Student" },
      { name: "SATHYA M", company: "Student" },
      { name: "SONAL M B", company: "Student" },
      { name: "SOWMYA S", company: "Student" },
      { name: "SWATHI M", company: "Student" },
      { name: "VASANTHARAJ G", company: "Student" },
      { name: "VISHAL P", company: "Student" },
      { name: "DEEKSHA R", company: "Student" },
      { name: "SONUPRIYA B", company: "Student" },
      { name: "SUVETHA S", company: "Student" }
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
                const name = typeof member === 'object' ? member.name : member;
                const company = typeof member === 'object' ? member.company : null;
                return (
                  <li
                    key={globalIndex}
                    className='group flex items-center justify-between py-4 transition-all duration-300 cursor-default'
                  >
                    <div className='flex items-center gap-4 sm:gap-6 transform group-hover:translate-x-2 transition-transform duration-300 min-w-0 pr-2'>
                      <span className='font-mono text-xs md:text-sm text-gray-400 group-hover:text-black font-semibold tracking-tighter transition-colors shrink-0'>
                        {(globalIndex + 1).toString().padStart(2, '0')}
                      </span>
                      <div className='flex flex-wrap items-center gap-2 min-w-0'>
                        <span className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter text-gray-800 group-hover:text-black transition-colors uppercase'>
                          {name}
                        </span>
                        {company && (
                          <span className='text-xs font-semibold tracking-tight text-[#10129B] bg-[#10129B]/10 px-2.5 py-0.5 rounded-full border border-[#10129B]/20 whitespace-nowrap group-hover:bg-[#10129B] group-hover:text-white transition-colors'>
                            {company}
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Minimal Hover Indicator Dot */}
                    <span className='w-1.5 h-1.5 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0' />
                  </li>
                )
              })}
            </ul>

            {/* Column 2 */}
            <ul className='divide-y divide-gray-300 border-t md:border-t-0 border-gray-300'>
              {rightColumn.map((member, index) => {
                const globalIndex = halfLength + index;
                const name = typeof member === 'object' ? member.name : member;
                const company = typeof member === 'object' ? member.company : null;
                return (
                  <li
                    key={globalIndex}
                    className='group flex items-center justify-between py-4 transition-all duration-300 cursor-default'
                  >
                    <div className='flex items-center gap-4 sm:gap-6 transform group-hover:translate-x-2 transition-transform duration-300 min-w-0 pr-2'>
                      <span className='font-mono text-xs md:text-sm text-gray-400 group-hover:text-black font-semibold tracking-tighter transition-colors shrink-0'>
                        {(globalIndex + 1).toString().padStart(2, '0')}
                      </span>
                      <div className='flex flex-wrap items-center gap-2 min-w-0'>
                        <span className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter text-gray-800 group-hover:text-black transition-colors uppercase'>
                          {name}
                        </span>
                        {company && (
                          <span className='text-xs font-semibold tracking-tight text-[#10129B] bg-[#10129B]/10 px-2.5 py-0.5 rounded-full border border-[#10129B]/20 whitespace-nowrap group-hover:bg-[#10129B] group-hover:text-white transition-colors'>
                            {company}
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Minimal Hover Indicator Dot */}
                    <span className='w-1.5 h-1.5 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0' />
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