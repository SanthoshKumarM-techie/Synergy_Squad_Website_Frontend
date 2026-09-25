import ChroniclesOfSquadImg from '../assets/ChroniclesOfSquad.webp'
import IdentificationImg from '../assets/Identification.png'
import IntensiveTrainingImg from '../assets/IntensiveTraining.webp'
import TechnicalAssessmentsImg from '../assets/technicalTraining.png'
import Santhosh1Img from '../assets/Santhosh1.webp'
import Sathyaram1Img from '../assets/Sathyaram1.webp'
import Shriyaa1Img from '../assets/Shriyaa1.webp'
import Kamalakannan1 from '../assets/Kamalakannan1.webp'
import naveenImg from '../assets/Naveen Adithya.webp'

import SS1B1 from '../assets/SS 1.0 Brouchre 1.webp'
import SS1B2 from '../assets/SS 1.0 Brouchre 2.webp'
import SS1B3 from '../assets/SS 1.0 Brouchre 3.webp'
import SS1B4 from '../assets/SS 1.0 Brouchre 4.webp'
import SS1B5 from '../assets/SS 1.0 Brouchre 5.webp'
import SS1B6 from '../assets/SS 1.0 Brouchre 6.webp'
import SS1B7 from '../assets/SS 1.0 Brouchre 7.webp'
import SS2B1 from '../assets/SS 2.0 Brouchre 1.webp'
import SS2B2 from '../assets/SS 2.0 Brouchre 2.webp'
import SS2B3 from '../assets/SS 2.0 Brouchre 3.webp'
import SS2B4 from '../assets/SS 2.0 Brouchre 4.webp'
import SS2B5 from '../assets/SS 2.0 Brouchre 5.webp'
import SS3B1 from '../assets/SS 3.0 Brouchre 1.webp'
import SS3B2 from '../assets/SS 3.0 Brouchre 2.webp'
import SS3B3 from '../assets/SS 3.0 Brouchre 3.webp'
import SS3B4 from '../assets/SS 3.0 Brouchre 4.webp'
import SS3B5 from '../assets/SS 3.0 Brouchre 5.webp'
import SS3B6 from '../assets/SS 3.0 Brouchre 6.webp'
import SS3B7 from '../assets/SS 3.0 Brouchre 7.webp'
import SS3B8 from '../assets/SS 3.0 Brouchre 8.webp'
import SS4B1 from '../assets/SS 4.0 Brouchre 1.webp'
import SS4B2 from '../assets/SS 4.0 Brouchre 2.webp'
import SS4B3 from '../assets/SS 4.0 Brouchre 3.webp'
import SS4B4 from '../assets/SS 4.0 Brouchre 4.webp'
import SS4B5 from '../assets/SS 4.0 Brouchre 5.webp'
import SS4B6 from '../assets/SS 4.0 Brouchre 6.webp'
import SS4B7 from '../assets/SS 4.0 Brouchre 7.webp'
import SS4B8 from '../assets/SS 4.0 Brouchre 8.webp'

export const heroData = {
  badge: 'LEGACY OF EXCELLENCE \u2022 SINCE 2023',
  headline: 'A Journey Of Excellence & Milestones',
  legacy: {
    title: 'Legacy',
    text: 'Founded in 2023, Synergy Squad has built a continuous legacy of technical excellence, peer mentorship, and competitive programming achievements at Knowledge Institute of Technology.',
  },
  milestones: {
    title: 'Milestones',
    text: 'Across 4 active batches, our members have secured 75%+ placements in Tier-1 IT companies and global technology leaders, setting new benchmarks year after year.',
  },
}

export const chroniclesData = {
  title: 'Chronicles of \n Synergy Squad',
  alumniCount: 80,
  alumniLabel: 'proud Alumnies',
  alumniAvatars: [
    { src: Santhosh1Img, alt: 'Santhosh' },
    { src: Sathyaram1Img, alt: 'Sathyaram' },
    { src: Shriyaa1Img, alt: 'Shriyaa' },
    { src: Kamalakannan1, alt: 'Kamalakannan' },
    { src: naveenImg, alt: 'Naveen' },
  ],
  cta: {
    label: 'Our Process \u2192',
    target: '#process',
  },
  stats: {
    placement: {
      target: 75,
      suffix: '%+',
      label: 'Placement Rate in Tier-1 IT & Global MNCs',
    },
    members: {
      target: 190,
      suffix: '+',
      label: 'Members',
    },
    batches: {
      target: 4,
      suffix: '+',
      label: 'Batches Formed',
    },
    legacy: {
      target: 2023,
      startFrom: 1950,
      duration: 2.5,
      label: 'Legacy Established',
    },
  },
  cover: {
    image: ChroniclesOfSquadImg,
    text: 'A legacy of merit-driven learning, continuous coding marathons, and peer mentorship shaping top-tier engineering talent.',
  },
}

export const identificationData = {
  title: 'Identification &\nFormation',
  description: 'A structured multi-stage evaluation process designed to identify high-potential technical talent.',
  image: IdentificationImg,
  steps: [
    {
      step: '01',
      title: 'Candidate Pool',
      description: 'Students from the respective batch were considered as the initial pool for the Synergy Squad selection process.',
    },
    {
      step: '02',
      title: 'Assessment & Evaluation',
      description: 'Students were evaluated through structured assessments designed to measure their programming skills, logical thinking, problem-solving ability, and technical aptitude.',
    },
    {
      step: '03',
      title: 'Performance Analysis',
      description: 'The assessment results were analyzed to identify students who demonstrated consistent performance and a strong potential for further technical development.',
    },
    {
      step: '04',
      title: 'Shortlisting',
      description: 'Based on their overall performance, the top-performing students were shortlisted from the respective student pool.',
    },
    {
      step: '05',
      title: 'Squad Formation',
      description: 'The shortlisted students were brought together to form the Synergy Squad, creating a focused community of like-minded students committed to continuous learning and improvement.',
    },
    {
      step: '06',
      title: 'Continuous Development',
      description: 'After formation, the squad members participated in structured training, practice sessions, and regular challenges to continuously strengthen their technical capabilities and placement readiness.',
    },
  ],
}

export const technicalTrainingData = {
  title: 'Technical Training',
  description: 'Each Synergy Squad batch underwent focused technical training designed to strengthen programming knowledge, problem-solving ability, and overall technical readiness. The sessions included hands-on Java programming practice, solving moderate-level programming problems through online compilers, daily coding challenges, technical group discussions, skill enhancement assessments, knowledge transfer sessions, and interactive discussions on programming concepts and MCQs. The training also evolved with the needs of each batch, including dedicated sessions on Java Strings and Power BI to broaden students’ technical and practical capabilities.',
  image: IntensiveTrainingImg,
}

export const technicalAssessmentsData = {
  title: 'Technical Assessments',
  description: 'Structured evaluations designed to measure coding proficiency, problem-solving skills, and placement readiness across all Synergy Squad batches.',
  image: TechnicalAssessmentsImg,
  slides: [
    {
      batch: 'Synergy Squad 1.0',
      title: 'Performance Evaluation & Skill Benchmarks',
      hasStudents: true,
      items: [
        { name: 'Initial Assessment Test (C Programming)', date: '02-09-2023', students: '97 / 100' },
        { name: 'Assessment 2 (Logical Reasoning & C)', date: '16-09-2023', students: '93 / 100' },
        { name: 'Assessment 3 (DSA & Advanced C)', date: '30-09-2023', students: '89 / 100' },
        { name: 'Final Placement Benchmark Test', date: '14-10-2023', students: '85 / 100' },
      ],
    },
    {
      batch: 'Synergy Squad 2.0',
      title: 'Weekly Activity Summary',
      hasStudents: false,
      items: [
        { name: 'Control Flow Mastery Day', date: '06-10-2024' },
        { name: 'Array Optimization Master Class Day', date: '13-10-2024' },
        { name: 'Efficient String Manipulation Day', date: '20-10-2024' },
        { name: 'Hundred - Fold C Proficiency Test', date: '27-10-2024' },
      ],
    },
    {
      batch: 'Synergy Squad 3.0',
      title: 'Weekly Activity Summary',
      hasStudents: false,
      items: [
        { name: 'Pattern Play Day', date: '10-08-2025' },
        { name: 'Array Mastery Quest Day', date: '17-08-2025' },
        { name: "String Hacker's Day", date: '24-08-2025' },
        { name: 'Century in C Day', date: '31-08-2025' },
        { name: 'OOPS Explore Day', date: '07-09-2025' },
        { name: 'TCS Mock Sprint Day', date: '14-09-2025' },
        { name: 'Wipro Warriors: NLTH Mock Day', date: '21-09-2025' },
        { name: 'Pratian Prep Battle Day', date: '28-09-2025' },
      ],
    },
    {
      batch: 'Synergy Squad 4.0',
      title: 'Weekly Activity Summary',
      hasStudents: false,
      items: [
        { name: 'Pattern Boss Level', date: '22/02/2026' },
        { name: 'Array Avengers', date: '01/03/2026' },
        { name: 'String Slayer Arena', date: '08/03/2026' },
        { name: 'Mission C: Unlock the Core', date: '15/03/2026' },
        { name: 'OOPS Explore Day', date: '22/03/2026' },
        { name: 'TCS Sprint Royale', date: '29/03/2026' },
        { name: 'WIPRO Warriors Arena Day', date: '05/04/2026' },
        { name: 'Mission Zoho Crack the Code', date: '12/04/2026' },
      ],
    },
  ],
}

export const hallOfFameData = {
  title: 'Hall of Fame',
  description: 'Honoring championship milestones, top coding achievements, and departmental excellence across all Synergy Squad batches.',
  brochures: [
    { id: 1, src: SS1B1, title: 'SS 1.0 - Brochure 1', batch: 'Synergy Squad 1.0' },
    { id: 2, src: SS1B2, title: 'SS 1.0 - Brochure 2', batch: 'Synergy Squad 1.0' },
    { id: 3, src: SS1B3, title: 'SS 1.0 - Brochure 3', batch: 'Synergy Squad 1.0' },
    { id: 4, src: SS1B4, title: 'SS 1.0 - Brochure 4', batch: 'Synergy Squad 1.0' },
    { id: 5, src: SS1B5, title: 'SS 1.0 - Brochure 5', batch: 'Synergy Squad 1.0' },
    { id: 6, src: SS1B6, title: 'SS 1.0 - Brochure 6', batch: 'Synergy Squad 1.0' },
    { id: 7, src: SS1B7, title: 'SS 1.0 - Brochure 7', batch: 'Synergy Squad 1.0' },
    { id: 8, src: SS2B1, title: 'SS 2.0 - Brochure 1', batch: 'Synergy Squad 2.0' },
    { id: 9, src: SS2B2, title: 'SS 2.0 - Brochure 2', batch: 'Synergy Squad 2.0' },
    { id: 10, src: SS2B3, title: 'SS 2.0 - Brochure 3', batch: 'Synergy Squad 2.0' },
    { id: 11, src: SS2B4, title: 'SS 2.0 - Brochure 4', batch: 'Synergy Squad 2.0' },
    { id: 12, src: SS2B5, title: 'SS 2.0 - Brochure 5', batch: 'Synergy Squad 2.0' },
    { id: 13, src: SS3B1, title: 'SS 3.0 - Brochure 1', batch: 'Synergy Squad 3.0' },
    { id: 14, src: SS3B2, title: 'SS 3.0 - Brochure 2', batch: 'Synergy Squad 3.0' },
    { id: 15, src: SS3B3, title: 'SS 3.0 - Brochure 3', batch: 'Synergy Squad 3.0' },
    { id: 16, src: SS3B4, title: 'SS 3.0 - Brochure 4', batch: 'Synergy Squad 3.0' },
    { id: 17, src: SS3B5, title: 'SS 3.0 - Brochure 5', batch: 'Synergy Squad 3.0' },
    { id: 18, src: SS3B6, title: 'SS 3.0 - Brochure 6', batch: 'Synergy Squad 3.0' },
    { id: 19, src: SS3B7, title: 'SS 3.0 - Brochure 7', batch: 'Synergy Squad 3.0' },
    { id: 20, src: SS3B8, title: 'SS 3.0 - Brochure 8', batch: 'Synergy Squad 3.0' },
    { id: 21, src: SS4B1, title: 'SS 4.0 - Brochure 1', batch: 'Synergy Squad 4.0' },
    { id: 22, src: SS4B2, title: 'SS 4.0 - Brochure 2', batch: 'Synergy Squad 4.0' },
    { id: 23, src: SS4B3, title: 'SS 4.0 - Brochure 3', batch: 'Synergy Squad 4.0' },
    { id: 24, src: SS4B4, title: 'SS 4.0 - Brochure 4', batch: 'Synergy Squad 4.0' },
    { id: 25, src: SS4B5, title: 'SS 4.0 - Brochure 5', batch: 'Synergy Squad 4.0' },
    { id: 26, src: SS4B6, title: 'SS 4.0 - Brochure 6', batch: 'Synergy Squad 4.0' },
    { id: 27, src: SS4B7, title: 'SS 4.0 - Brochure 7', batch: 'Synergy Squad 4.0' },
    { id: 28, src: SS4B8, title: 'SS 4.0 - Brochure 8', batch: 'Synergy Squad 4.0' },
  ],
}
