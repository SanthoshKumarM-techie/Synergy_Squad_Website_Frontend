import BG from '../assets/abstractBG.jpg'
import PreveenSirImage from '../assets/Praveen Sir.png'
import HODSirImage from '../assets/CSEHOD.jpg'
import americanMegatrendsLogo from '../assets/American_Megatrends_logo.svg'
import mrCooperLogo from '../assets/Mr-Cooper-image.webp'
import techMahindraLogo from '../assets/tech-mahendra.webp'
import mindtreeLogo from '../assets/MInd tree.webp'
import tcsLogo from '../assets/TCS-Logo.png'
import SG1 from '../assets/SquadGathering1.webp'
import SG2 from '../assets/SquadGathering2.webp'
import SG3 from '../assets/SquadGathering3.webp'
import SG4 from '../assets/SquadGathering4.webp'
import SG5 from '../assets/SquadGathering5.webp'
import SG6 from '../assets/SquadGathering6.webp'

export const aboutHeroData = {
  headline: "Collaboration Creates Greater Possibilities",
  bgImage: BG,
  vision: {
    title: "Vision",
    description: "To be the leading student-run coding club that empowers every student at the Knowledge Institute of Technology to excel in competitive programming and secure careers at top-tier technology companies."
  },
  mission: {
    title: "Mission",
    description: "Our mission is to foster a vibrant and inclusive coding culture through consistent, high-quality weekly challenges and company-specific training..."
  }
}

export const aboutGenesisData = {
  title: "Our Genesis",
  paragraphs: [
    "Synergy Squad was forged from the Pre-Placement Readiness Initiative, designed to elevate the technical proficiency of our students. Our formation process is rigorous and merit-based: prospective members undergo a series of intensive Practice Assessments, including mock company-specific tests like the TCS CodeVita.",
    "Based on performance, a select group of top candidates are invited to form the squad for that academic year. This exclusive group then receives specialized, intensive training focused on advanced problem-solving, data structures, and algorithms to prepare them for competitive programming on a national level.",
    "The cornerstone of our activity is the \"Weekly Programming Day,\" a structured event designed to continuously strengthen coding skills through consistent practice and targeted assessments, ensuring our members are always ready for the next challenge."
  ]
}

export const aboutExcellenceStats = {
  title: "Numbers That Reflect Our Excellence",
  stats: [
    {
      target: 190,
      suffix: "+",
      label: "Members",
      description: "Active student members trained in advanced computing and problem solving across CSE batches."
    },
    {
      target: 4,
      suffix: "+",
      label: "Batches",
      description: "Across these 3 batches, we have conducted various events and competitions to enhance student skills."
    },
    {
      target: 3,
      suffix: "+",
      label: "Events",
      description: "Technical workshops, coding hackathons, and company-specific mock challenges conducted annually."
    },
    {
      target: 75,
      suffix: "%+",
      label: "Placed in top MNCs",
      description: "High-performing graduates recruited into Tier-1 IT companies and global technology leaders."
    }
  ]
}

export const aboutAuthoritiesData = [
  {
    name: "Mr. T. Karthikeyan",
    title: "Head of the Department - CSE",
    image: HODSirImage,
    quote: `"Our vision at the Department of Computer Science & Engineering is to build a high-impact culture of technical excellence. Synergy Squad represents student leadership at its finest—turning core concepts into industry-ready problem solving that top MNCs actively seek out."`
  },
  {
    name: "Mr. K. Praveen",
    title: "Head of Synergy Squad",
    image: PreveenSirImage,
    quote: `"I envisioned a community where students could bring their ideas to life, discover what they are truly capable of, and grow alongside peers sharing the same curiosity and ambition. Watching these young minds push beyond limits and secure top placements is the greatest reward of leading Synergy Squad."`
  }
]

export const aboutCommunityGalleryData = {
  bannerQuote: "Together, we learn, build, and grow.",
  images: [SG1, SG2, SG3, SG4, SG5, SG6]
}

export const aboutIndustryLeadersData = {
  title: "Members Hired by Industry Leaders",
  companies: [
    {
      name: "American Megatrends",
      logo: americanMegatrendsLogo,
      imgClassName: "max-h-12 max-w-full object-contain"
    },
    {
      name: "Mr. Cooper",
      logo: mrCooperLogo,
      imgClassName: "max-h-12 max-w-full object-contain"
    },
    {
      name: "Tech Mahindra",
      logo: techMahindraLogo,
      imgClassName: "max-h-12 max-w-full object-contain"
    },
    {
      name: "Mindtree",
      logo: mindtreeLogo,
      imgClassName: "max-h-16 max-w-full object-contain scale-[1.35]",
      overflowHidden: true
    },
    {
      name: "TCS",
      logo: tcsLogo,
      imgClassName: "max-h-16 max-w-full object-contain scale-[2.4]",
      overflowHidden: true
    }
  ]
}

export const aboutBentoData = {
  header: {
    title: "Synergy Squad",
    subtitle: "A growing community shaped by new ideas, stronger collaboration, and shared experiences"
  },
  heroImage: SG3,
  poolImage: SG2,
  cultureImage: SG1,
  cultureQuote: "Empowering students to explore, contribute, lead, and create meaningful impact",
  teamWorkImage: SG4,
  statTarget: 75,
  statSuffix: "%+",
  statDescription: "High-performing graduates recruited into Tier-1 IT companies and global technology leaders.",
  eventImage: SG5
}
