import eventImage from '../assets/VoiceOfExcellence.webp'
import kamalakannanImg from '../assets/Kamalakannan1.webp'
import santhoshImg from '../assets/Santhosh1.webp'
import sathyaramImg from '../assets/Sathyaram1.webp'
import shriyaaImg from '../assets/Shriyaa1.webp'

export const frameOfHonorSeasons = [
  {
    id: 'ccl-2-0',
    hero: {
      frameType: 'waiting', // 'waiting' or 'image'
      frameTitle: 'AWAITING THE WINNERS',
      frameSubtitle: 'Reserved for the CCL 2.0 Overall Championship Team',
      image: null,
      title: 'CCL 2.0 Overall Championship',
      description: 'This section is waiting for the winners to hold.',
    },
    voiceOfExcellence: {
      title: 'Voice of Excellence',
      description: 'Inspiring insights and reflections from our championship team members and student leaders.',
      eventImage: eventImage,
      testimonials: [
        {
          id: 1,
          quote: '"Being a part of the Overall Championship Team was a transformative journey. The intense peer learning, competitive coding marathons, and shared dedication enabled us to surpass our goals and bring honor to our department and institution."',
          author: 'Kamalakannan N G',
          department: 'Department of Computer Science and Engineering',
          profileImage: kamalakannanImg,
        },
        {
          id: 2,
          quote: '"Synergy Squad provided the perfect platform for algorithmic problem solving. Competing alongside dedicated peers pushed my limits in TCS CodeVita and national hackathons."',
          author: 'Santhosh R',
          department: 'Department of Computer Science and Engineering',
          profileImage: santhoshImg,
        },
        {
          id: 3,
          quote: '"The structured weekly coding contests and mentorship sessions gave us the technical depth and confidence needed to achieve campus excellence and top company offers."',
          author: 'Sathyaram R',
          department: 'Department of Computer Science and Engineering',
          profileImage: sathyaramImg,
        },
        {
          id: 4,
          quote: '"Collaborating with brilliant minds during competitive marathons built strong problem-solving habits that continue to drive our engineering growth every single day."',
          author: 'Shriyaa S V',
          department: 'Department of Computer Science and Engineering',
          profileImage: shriyaaImg,
        },
      ],
    },
  },
]
