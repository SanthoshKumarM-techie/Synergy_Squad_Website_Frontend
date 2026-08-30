import React from 'react'
import { FaMedal } from 'react-icons/fa'
import BG from './assets/abstractBG.jpg'
import Navbar from './Navbar'
import SideRays from '../Components/SideRays'
import Silk from '../Components/Silk'
import eventOne from './assets/squad_event_1.png'
import eventTwo from './assets/squad_event_2.png'
import eventThree from './assets/squad_event_3.png'
import SS1B1 from './assets/SS 1.0 Brouchre 1.png'
import SS1B2 from './assets/SS 1.0 Brouchre 2.png'
import SS1B3 from './assets/SS 1.0 Brouchre 3.png'
import SS1B4 from './assets/SS 1.0 Brouchre 4.png'
import SS1B5 from './assets/SS 1.0 Brouchre 5.png'
import SS1B6 from './assets/SS 1.0 Brouchre 6.png'
import SS1B7 from './assets/SS 1.0 Brouchre 7.png'
import SS2B1 from './assets/SS 2.0 Brouchre 1.png'
import SS2B2 from './assets/SS 2.0 Brouchre 2.png'
import SS2B3 from './assets/SS 2.0 Brouchre 3.png'
import SS2B4 from './assets/SS 2.0 Brouchre 4.png'
import SS2B5 from './assets/SS 2.0 Brouchre 5.png'
import SS3B1 from './assets/SS 3.0 Brouchre 1.png'
import SS3B2 from './assets/SS 3.0 Brouchre 2.png'
import SS3B3 from './assets/SS 3.0 Brouchre 3.png'
import SS3B4 from './assets/SS 3.0 Brouchre 4.png'
import SS3B5 from './assets/SS 3.0 Brouchre 5.png'
import SS3B6 from './assets/SS 3.0 Brouchre 6.png'
import SS3B7 from './assets/SS 3.0 Brouchre 7.png'
import SS3B8 from './assets/SS 3.0 Brouchre 8.png'


const historyImages = [
  eventOne,
  SS1B1,
  eventTwo,
  SS1B2,
  eventThree,
  SS1B3,
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

const codevitaAssessments = [
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

const ss3WeeklyActivities = [
  ['1', 'Pattern Play Day', '10-08-2025'],
  ['2', 'Array Mastery Quest Day', '17-08-2025'],
  ['3', "String Hacker's Day", '24-08-2025'],
  ['4', 'Century in C Day', '31-08-2025'],
  ['5', 'OOPS Explore Day', '07-09-2025'],
  ['6', 'TCS Mock Sprint Day', '14-09-2025'],
  ['7', 'Wipro Warriors: NLTH Mock Day', '21-09-2025'],
  ['8', 'Pratian Prep Battle Day', '28-09-2025'],
]

const ss2WeeklyActivities = [
  ['Pattern Programming Exploration Day', '30-09-2024'],
  ['Control Flow Mastery Day', '06-10-2024'],
  ['Array Optimization Master Class Day', '13-10-2024'],
  ['Efficient String Manipulation Day', '20-10-2024'],
  ['Hundred - Fold C Proficiency Test', '27-10-2024'],
]

const ss2WeekCards = [
  {
    week: 1,
    title: 'Week 1 : Pattern Programming Exploration Day',
    description: 'Explored pattern programming techniques and problem-solving strategies.',
    toppers: ['Gayathri M', 'Kanishka N', 'Ramesh M'],
    image: SS2B1,
  },
  {
    week: 2,
    title: 'Week 2 : Control Flow Mastery Day',
    description: 'Mastered control flow constructs including loops, conditions, and branching logic.',
    toppers: ['Bharathi S', 'Kanishka N', 'Vigneshwaran M'],
    image: SS2B2,
  },
  {
    week: 3,
    title: 'Week 3 : Array Optimization Master Class Day',
    description: 'Deep-dived into array optimization techniques and efficient data handling.',
    toppers: ['Vigneshwaran M', 'Vigneshwaran M', 'Kavitha S'],
    image: SS2B3,
  },
  {
    week: 4,
    title: 'Week 4 : Efficient String Manipulation Day',
    description: 'Focused on efficient string operations and manipulation algorithms.',
    toppers: ['Ramesh M', 'Subasree G S', 'Praveen P'],
    image: SS2B4,
    imageClass: 'block h-full w-72 shrink-0 rounded-sm object-cover object-top',
  },
  {
    week: 5,
    title: 'Week 5 : Hundred - Fold C Proficiency Test',
    description: 'A comprehensive 100-question C proficiency test to evaluate overall language mastery.',
    toppers: ['SathyaSri V', 'Jeevanna M', 'Praveen P'],
    image: SS2B5,
  },
]

const ss3WeekCards = [
  {
    week: 1,
    title: 'Week 1 : Pattern Play Day',
    description: 'Explored pattern programming techniques and creative problem-solving approaches.',
    toppers: ['DHINESHKUMAR M', 'SUDHAKAR S', 'Giri N', 'Naveen Prasath', 'Nishanth M', 'Tharankumar G'],
    image: SS3B1,
  },
  {
    week: 2,
    title: 'Week 2 : Array Mastery Quest Day',
    description: 'Tackled advanced array problems and data structure challenges.',
    toppers: ['Subashree V P', 'Dhineshkumar M', 'Hari Dev M V'],
    image: SS3B2,
  },
  {
    week: 3,
    title: "Week 3 : String Hacker's Day",
    description: 'Hacked through complex string manipulation and pattern matching problems.',
    toppers: ['Adithya N V', 'Dhineshkumar M', 'Naveen Prasath', 'Pooja M', 'Prakalya R G '],
    image: SS3B3,
  },
  {
    week: 4,
    title: 'Week 4 : Century in C Day',
    description: 'Completed 100 C programming challenges to strengthen core language skills.',
    toppers: ['Veera Sowndarya V', 'Prakalya R G', 'Dinesh G', 'Pooja M'],
    image: SS3B4,
  },
  {
    week: 5,
    title: 'Week 5 : OOPS Explore Day',
    description: 'Explored Object-Oriented Programming concepts through hands-on coding exercises.',
    toppers: ['Dhineshkumar M', 'Subhashree V P', 'Nishanth M'],
    image: SS3B5,
  },
  {
    week: 6,
    title: 'Week 6 : TCS Mock Sprint Day',
    description: 'Sprint-style mock assessment simulating the TCS placement pattern.',
    toppers: ['NADITYA N V', 'SUBASHREE V P', 'SANJAY S', 'SHRESARAN K', 'PRASANNA V', 'POOJA M', 'DHANUSHIYA S', 'PUNITHA S', 'RAMYA S G'],
    image: SS3B6,
  },
  {
    week: 7,
    title: 'Week 7 : Wipro Warriors: NLTH Mock Day',
    description: 'Simulated the Wipro NLTH exam to sharpen aptitude and coding readiness.',
    toppers: ['ADITYA N V', 'KISHORE D', 'SUBHASHREE', 'DHINESHKUMAR M', 'ELANGO K', 'SUBHARANJINI M'],
    image: SS3B7,
  },
  {
    week: 8,
    title: 'Week 8 : Pratian Prep Battle Day',
    description: 'A final battle-round mock test based on the Pratian Technologies assessment format.',
    toppers: ['DHINESHKUMAR M', 'JEEVA VIGNESH', 'SUBHASHREE P', 'ADITYA NV', 'SHREE SARAN'],
    image: SS3B8,
  },
]

const weekCards = [
  {
    week: 1,
    title: 'Week 1 : Pattern Day',
    description: 'Participated in the ISTE IST-Olympics and won first prize.',
    teamBuildingActivity: 'Participated in the ISTE IST-Olympics and won the first prize in the Minute to Win It challenge.',
    toppers: ['Anuvarshini T R', 'Keerthana D', 'Vijay K R'],
    image: SS1B1,
  },
  {
    week: 2,
    title: 'Week 2 : Mastering in Array Day',
    description: 'Focused on mastering array-based problems and data structures.',
    teamBuildingActivity: 'Conducted group problem-solving sessions on array challenges and competitive coding.',
    toppers: ['Jeevanandhan J', 'Karthikeyan S', 'Shriyaa S V'],
    image: SS1B2,
  },
  {
    week: 3,
    title: 'Week 3 : Mastering in Strings Day',
    description: 'Deep-dived into string manipulation techniques and pattern matching.',
    teamBuildingActivity: 'Organised inter-team string challenge competitions to boost collaborative thinking.',
    toppers: ['AASHA S', 'KARTHIKEYAN S', 'VIBHAV M'],
    image: SS1B3,
  },
  {
    week: 4,
    title: 'Week 4 : C Programming MCQ Day',
    description: 'Tested conceptual knowledge of C Programming through MCQ rounds.',
    teamBuildingActivity: 'Held a buzzer-round style MCQ quiz to encourage quick thinking and teamwork.',
    toppers: ['Jeslin Maria Jacob', 'Kiruthika V M', 'Subasri C'],
    image: SS1B4,
  },
  {
    week: 5,
    title: 'Week 5 : C Programming Master Class Day',
    description: 'Attended an intensive master class on advanced C Programming concepts.',
    teamBuildingActivity: 'Peer-teaching sessions where toppers mentored fellow squad members on C topics.',
    toppers: ['AASHA S', 'Keerthana D', 'Vijay K R'],
    image: SS1B5,
  },
  {
    week: 6,
    title: 'Week 6 : Mock TCS Ninja NQT Challenge Day',
    description: 'Simulated the TCS Ninja NQT exam to evaluate placement readiness.',
    teamBuildingActivity: 'Post-mock review sessions to discuss solutions and strategies as a team.',
    toppers: ['Anuvarshini T R', 'Rasika S', 'Vijay K R'],
    image: SS1B6,
  },
  {
    week: 7,
    title: 'Week 7 : Mock Wipro NLTH Challenge Day',
    description: 'Simulated the Wipro NLTH exam to strengthen aptitude and coding skills.',
    teamBuildingActivity: 'Conducted group analysis of Wipro NLTH patterns and problem-solving strategies.',
    toppers: ['Gayathri R', 'Nithish Kumar', 'Shabari K S'],
    image: SS1B7,
  },
]

function History() {
  return (
    <div className='bg-[#e6e6e6] relative overflow-x-clip w-full max-w-[100vw]'>
        <Navbar />
      <section className='relative isolate min-h-screen w-full overflow-hidden px-6 py-24 md:px-12'>
                <img src={BG} alt="Abstract Background" className='absolute inset-0 z-0 w-full h-full object-cover' />

                <div className='relative z-20 flex min-h-[calc(100vh-12rem)] flex-col items-center justify-end gap-14'>
                    <h1 className='max-w-7xl text-center text-4xl font-semibold leading-[0.92] tracking-tighter text-white md:text-5xl lg:text-6xl'>
                        A Journey Built on Ideas, Driven by People, and Shaped by Every Milestone Along the Way
                    </h1>

                    <div className='w-full overflow-hidden' aria-label='Synergy Squad history gallery'>
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
            className='relative flex min-h-[60vh] flex-col justify-end overflow-hidden p-8 pt-32 md:pt-8 pb-16'
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
            <div className='relative z-10 max-w-3xl mt-8'>
              <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>Synergy Squad 1.0</h1>
              <p className='text-white font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight'>The inaugural chapter of our journey, where the foundations <br /> of Synergy Squad were laid.</p>
              <div className='flex flex-col md:flex-row md:flex-wrap items-start gap-12 md:gap-16 mt-4'>
                <div>
                  <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight text-white'>35+</h1>
                  <p className='text-white font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-300'>Members</p>
                </div>
                <div>
                  <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight text-white'>3+</h1>
                  <p className='text-white font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-300'>Days intensive Training</p>
                </div>
                <div>
                  <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight text-white'>7+</h1>
                  <p className='text-white font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-300'>Technical Assessments</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-8 mt-16'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl max-w-xl font-semibold tracking-tighter'>
                    Identification & Formation
                    </h1>
                    <p className='max-w-4xl font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight md:mr-32 text-gray-700'>As part of the Pre-Placement Readiness Initiative, the top 40 candidates were identified from a total strength of 201 students to form Synergy Squad 1.0. This squad received intensive Java Programming Refresher Training and participated in weekly challenges to strengthen their coding skills.</p>
                </div>

            <div className='mt-16'>
              <h1 className='text-xl md:text-2xl lg:text-3xl max-w-xl font-semibold tracking-tighter'>Intensive Refresher Training </h1>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
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
              <h1 className='text-xl md:text-2xl lg:text-3xl max-w-xl font-semibold tracking-tighter static md:sticky md:top-28 self-start'>Weekly Activity Summary</h1>
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

            <div className='grid grid-cols-1 md:grid-cols-2 mt-16 gap-4'>
              {weekCards.map((card) => (
                <React.Fragment key={card.week}>
                  {/* Left: Silk card with brochure image + details */}
                  <div className="relative flex h-100 overflow-hidden rounded-md">
                    <div className="pointer-events-none absolute inset-0">
                      <Silk
                        speed={5}
                        scale={1}
                        color="#5227FF"
                        noiseIntensity={1.5}
                        rotation={0}
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-black/75" />
                    <div className="relative z-10 flex h-full gap-5 p-2">
                      <img
                        src={card.image}
                        alt={`${card.title} brochure`}
                        className="block h-full w-auto shrink-0 rounded-sm object-contain"
                      />
                      <div className="text-white">
                        <h3 className="text-2xl font-semibold tracking-tighter leading-tight">{card.title}</h3>
                        <p className="mt-2 font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight">
                          {card.description}
                        </p>
                        <div className='mt-8'>
                          <h1 className='text-2xl font-semibold tracking-tighter leading-tight'>Toppers</h1>
                          <ul className='mt-2 font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight'>
                            {card.toppers.map((name, i) => (
                              <li key={i} className='mt-1 uppercase flex items-center gap-2'><FaMedal className="text-yellow-400" /> {name}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
        </section>

        <section className='px-8 pb-16'>
          <div
            className='relative flex min-h-[60vh] flex-col justify-end overflow-hidden p-8 pt-32 md:pt-8 pb-16'
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
              <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>Synergy Squad 2.0</h1>
              <p className='text-white font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight'>The next chapter of our journey, where the vision <br /> of Synergy Squad grew stronger and reached further.</p>
              <div className='flex flex-col md:flex-row md:flex-wrap items-start gap-12 md:gap-16 mt-4'>
                <div>
                  <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight text-white'>40+</h1>
                  <p className='text-white font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-300'>Members</p>
                </div>
                <div>
                  <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight text-white'>3+</h1>
                  <p className='text-white font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-300'>Days intensive Training</p>
                </div>
                <div>
                  <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight text-white'>15+</h1>
                  <p className='text-white font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-300'>Technical Assessments</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-8 mt-16'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl max-w-xl font-semibold tracking-tighter'>
                    Identification & Formation
                    </h1>
                    <p className='max-w-4xl font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight md:mr-32 text-gray-700'>Following the success of Synergy Squad 1.0, the initiative was expanded to III Year CSE students. The identification process was conducted through 7 Mock TCS CodeVita Assessments, where 40 top-performing students were shortlisted from a total of 179 students to enhance their coding proficiency, logical thinking, and problem-solving skills.</p>
                </div>

                <div className='flex flex-col md:flex-row gap-8 mt-16'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl max-w-xl font-semibold tracking-tighter'>
                    Intensive Technical Training Schedule
                    </h1>
                    <p className='max-w-4xl font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight md:mr-32 text-gray-700'>A 3-day intensive program featuring Skill Enhancement Assessments, Knowledge Transfer Sessions, and Interactive Discussions on Programming MCQs to rapidly boost technical capabilities.</p>
                </div>

            <div className='mt-16 grid gap-6 md:grid-cols-[minmax(0,25rem)_minmax(0,1fr)]'>
              <h1 className='text-xl md:text-2xl lg:text-3xl max-w-xl font-semibold tracking-tighter static md:sticky md:top-28 self-start'>Summary of 7 Mock TCS CodeVita Assessments</h1>
              <div className='max-w-2xl'>
                <ul className='divide-y divide-gray-300 border-t border-gray-300'>
                  <li className='flex items-center justify-between gap-6 py-3 font-semibold tracking-tighter text-gray-900'>
                    <span className='text-2xl font-semibold tracking-tighter leading-tight  flex-1'>Activity Name</span>
                    <span className='text-2xl font-semibold tracking-tighter leading-tight flex-1 text-center'>Date Conducted</span>
                    <span className='text-2xl font-semibold tracking-tighter leading-tight flex-1 text-right'>Students Attended</span>
                  </li>
                  {codevitaAssessments.map(([activity, date, students]) => (
                    <li key={activity} className='flex items-center justify-between gap-6 py-3 font-semibold tracking-tighter text-gray-700'>
                      <span className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-700 flex-1'>{activity}</span>
                      <time className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-700 flex-1 text-center'>{date}</time>
                      <span className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-700 flex-1 text-right'>{students}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='mt-16 grid gap-6 md:grid-cols-[minmax(0,25rem)_minmax(0,1fr)]'>
              <h1 className='text-xl md:text-2xl lg:text-3xl max-w-xl font-semibold tracking-tighter static md:sticky md:top-28 self-start'>5 Know and Grow Assessments - Summary</h1>
              <div className='max-w-2xl'>
                <ul className='divide-y divide-gray-300 border-t border-gray-300'>
                  <li className='flex items-center justify-between gap-6 py-3 font-semibold tracking-tighter text-gray-900'>
                    <span className='text-2xl font-semibold tracking-tighter leading-tight flex-1'>Assessment No.</span>
                    <span className='text-2xl font-semibold tracking-tighter leading-tight flex-1 text-center'>Date Conducted</span>
                    <span className='text-2xl font-semibold tracking-tighter leading-tight flex-1 text-right'>Students Attended</span>
                  </li>
                  {knowAndGrowAssessments.map(([activity, date, students]) => (
                    <li key={activity} className='flex items-center justify-between gap-6 py-3 font-semibold tracking-tighter text-gray-700'>
                      <span className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-700 flex-1'>{activity}</span>
                      <time className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-700 flex-1 text-center'>{date}</time>
                      <span className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-700 flex-1 text-right'>{students}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='mt-16 grid gap-6 md:grid-cols-[minmax(0,25rem)_minmax(0,1fr)]'>
              <h1 className='text-xl md:text-2xl lg:text-3xl max-w-xl font-semibold tracking-tighter static md:sticky md:top-28 self-start'>Weekly Activity Summary</h1>
              <div className='max-w-2xl'>
                <ul className='divide-y divide-gray-300 border-t border-gray-300'>
                  <li className='flex items-center justify-between gap-6 py-3 font-semibold tracking-tighter text-gray-900'>
                    <span className='text-2xl font-semibold tracking-tighter leading-tight'>Activity Name</span>
                    <span className='text-2xl font-semibold tracking-tighter leading-tight'>Date Conducted</span>
                  </li>
                  {ss2WeeklyActivities.map(([activity, date]) => (
                    <li key={activity} className='flex items-center justify-between gap-6 py-3 font-semibold tracking-tighter text-gray-700'>
                      <span className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-700'>{activity}</span>
                      <time className='shrink-0 font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-700'>{date}</time>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 mt-16 gap-4'>
              {ss2WeekCards.map((card) => (
                <React.Fragment key={card.week}>
                  <div className="relative flex h-100 overflow-hidden rounded-md">
                    <div className="pointer-events-none absolute inset-0">
                      <Silk
                        speed={5}
                        scale={1}
                        color="#5227FF"
                        noiseIntensity={1.5}
                        rotation={0}
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-black/75" />
                    <div className="relative z-10 flex h-full gap-5 p-2">
                      <img
                        src={card.image}
                        alt={`${card.title} brochure`}
                        className={card.imageClass || "block h-full w-auto shrink-0 rounded-sm object-contain"}
                      />
                      <div className="text-white">
                        <h3 className="text-2xl font-semibold tracking-tighter leading-tight">{card.title}</h3>
                        <p className="mt-2 font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight">
                          {card.description}
                        </p>
                        <div className='mt-8'>
                          <h1 className='text-2xl font-semibold tracking-tighter leading-tight'>Toppers</h1>
                          <ul className='mt-2 font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight'>
                            {card.toppers.map((name, i) => (
                              <li key={i} className='mt-1 uppercase flex items-center gap-2'><FaMedal className="text-yellow-400" /> {name}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
        </section>

        <section className='px-8 pb-16'>
            <div
            className='relative flex min-h-[60vh] flex-col justify-end overflow-hidden p-8 pt-32 md:pt-8 pb-16'
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
              <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight'>Synergy Squad 3.0</h1>
              <p className='text-white font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight'>The third chapter of our journey, where the spirit <br />of Synergy Squad evolved through growth, leadership, and collaboration.</p>
              <div className='flex flex-col md:flex-row md:flex-wrap items-start gap-12 md:gap-16 mt-4'>
                <div>
                  <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight text-white'>40+</h1>
                  <p className='text-white font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-300'>Members</p>
                </div>
                <div>
                  <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight text-white'>3+</h1>
                  <p className='text-white font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-300'>Days intensive Training</p>
                </div>
                <div>
                  <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight text-white'>7+</h1>
                  <p className='text-white font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-300'>Technical Assessments</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-8 mt-16'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl max-w-xl font-semibold tracking-tighter'>
                    Identification & Formation
                    </h1>
                    <p className='max-w-4xl font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight md:mr-32 text-gray-700'>Following the success of Synergy Squad 1.0, the initiative was expanded to III Year CSE students. The identification process was conducted through 7 Mock TCS CodeVita Assessments, where 40 top-performing students were shortlisted from a total of 179 students to enhance their coding proficiency, logical thinking, and problem-solving skills.</p>
                </div>

            <div className='mt-16 grid gap-6 md:grid-cols-[minmax(0,25rem)_minmax(0,1fr)]'>
              <h1 className='text-xl md:text-2xl lg:text-3xl max-w-xl font-semibold tracking-tighter static md:sticky md:top-28 self-start'>Weekly Activity Summary</h1>
              <div className='max-w-2xl'>
                <ul className='divide-y divide-gray-300 border-t border-gray-300'>
                  <li className='flex items-center gap-6 py-3 font-semibold tracking-tighter text-gray-900'>
                    <span className='text-2xl font-semibold tracking-tighter leading-tight w-20 shrink-0 whitespace-nowrap'>Week No</span>
                    <span className='text-2xl font-semibold tracking-tighter leading-tight flex-1'>Activity Name</span>
                    <span className='text-2xl font-semibold tracking-tighter leading-tight shrink-0'>Date Conducted</span>
                  </li>
                  {ss3WeeklyActivities.map(([week, activity, date]) => (
                    <li key={activity} className='flex items-center gap-6 py-3 font-semibold tracking-tighter text-gray-700'>
                      <span className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-700 w-20 shrink-0 text-center'>{week}</span>
                      <span className='font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-700 flex-1'>{activity}</span>
                      <time className='shrink-0 font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight text-gray-700'>{date}</time>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 mt-16 gap-4'>
              {ss3WeekCards.map((card) => (
                <React.Fragment key={card.week}>
                  <div className="relative flex h-100 overflow-hidden rounded-md">
                    <div className="pointer-events-none absolute inset-0">
                      <Silk
                        speed={5}
                        scale={1}
                        color="#5227FF"
                        noiseIntensity={1.5}
                        rotation={0}
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-black/75" />
                    <div className="relative z-10 flex h-full gap-5 p-2">
                      <img
                        src={card.image}
                        alt={`${card.title} brochure`}
                        className={card.imageClass || "block h-full w-auto shrink-0 rounded-sm object-contain"}
                      />
                      <div className="text-white">
                        <h3 className="text-2xl font-semibold tracking-tighter leading-tight">{card.title}</h3>
                        <p className="mt-2 font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight">
                          {card.description}
                        </p>
                        <div className='mt-8'>
                          <h1 className='text-2xl font-semibold tracking-tighter leading-tight'>Toppers</h1>
                          <ul className='mt-2 font-semibold text-sm md:text-md lg:text-lg tracking-tighter leading-tight'>
                            {card.toppers.map((name, i) => (
                              <li key={i} className='mt-1 uppercase flex items-center gap-2'><FaMedal className="text-yellow-400" /> {name}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>

        </section>
    </div>
  )
}

export default History
