import americanMegatrendsLogo from '../assets/American_Megatrends_logo.svg'
import mrCooperLogo from '../assets/Mr-Cooper-image.webp'
import techMahindraLogo from '../assets/tech-mahendra.webp'
import mindtreeLogo from '../assets/MInd tree.webp'
import tcsLogo from '../assets/TCS-Logo.png'

export const aboutBriefStatsData = {
  title: "Numbers That Reflect Our Excellence",
  stats: [
    {
      value: 190,
      suffix: "+",
      label: "Members",
      description: "Active student members trained in advanced computing and problem solving across CSE batches."
    },
    {
      value: 4,
      suffix: "+",
      label: "Batches",
      description: "Across these 3 batches, we have conducted various events and competitions to enhance student skills."
    },
    {
      value: 3,
      suffix: "+",
      label: "Events",
      description: "Technical workshops, coding hackathons, and company-specific mock challenges conducted annually."
    },
    {
      value: 75,
      suffix: "%+",
      label: "Placed in top MNCs",
      description: "High-performing graduates recruited into Tier-1 IT companies and global technology leaders."
    }
  ]
}

export const aboutBriefCompaniesData = {
  title: "Members Hired by Industry Leaders",
  companies: [
    { name: "American Megatrends", image: americanMegatrendsLogo, imgClassName: 'max-h-12 max-w-full object-contain' },
    { name: "Mr. Cooper", image: mrCooperLogo, imgClassName: 'max-h-12 max-w-full object-contain' },
    { name: "Tech Mahindra", image: techMahindraLogo, imgClassName: 'max-h-12 max-w-full object-contain' },
    { name: "Mindtree", image: mindtreeLogo, imgClassName: 'max-h-16 max-w-full object-contain scale-[1.35]', overflowHidden: true },
    { name: "TCS", image: tcsLogo, imgClassName: 'max-h-16 max-w-full object-contain scale-[2.4]', overflowHidden: true }
  ]
}
