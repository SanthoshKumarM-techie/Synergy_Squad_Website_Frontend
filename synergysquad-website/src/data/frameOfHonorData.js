import eventImage from '../assets/VoiceOfExcellence.webp'
import cclWinnerImg from '../assets/CCL2.0Winner.JPG'
import vikranthImg from '../assets/Vikranth.png'
import selvaBharathiImg from '../assets/SelvaBarathi.png'
import rajvenkadamImg from '../assets/rajvenkadam.png'
import prabhakaranImg from '../assets/Prabhakaran.png'

export const frameOfHonorSeasons = [
  {
    id: 'ccl-2-0',
    hero: {
      frameType: 'image', // 'waiting' or 'image'
      frameTitle: 'CCL 2.0 OVERALL CHAMPIONS',
      frameSubtitle: 'Overall Championship Team',
      image: cclWinnerImg,
      title: 'CCL 2.0 Overall Championship',
      description: 'The team on the above picture is the Overall Championship Team of our institution for the year 2026.',
    },
    voiceOfExcellence: {
      title: 'Voice of Excellence',
      description: 'Inspiring insights and reflections from our championship team members and student leaders.',
      eventImage: eventImage,
      testimonials: [
        {
          id: 1,
          quote: '"Campus Coders League was a really wonderful and exciting experience. It was a great opportunity to test our coding and problem-solving skills, and I’m really happy that our team won the Overall Championship. Honestly, I didn’t expect us to win, so when they announced our team as the Overall Champions, it was a complete surprise and a very memorable moment for all of us. This win was possible because of the teamwork, coordination, and effort we put in together. A big thanks to the CSE Department for organizing such a great event, and a special thanks to all the student coordinators who worked hard to make the event happen smoothly. Really grateful for the opportunity and the experience."',
          author: 'Vikranth V',
          department: 'Department of Information Technology',
          profileImage: vikranthImg,
        },
        {
          id: 2,
          quote: '"Campus Coders League 2.0 was a really enjoyable and memorable experience for me. The different rounds gave us a chance to improve our coding, problem-solving, and teamwork skills. Winning the Overall Champion Award was a very happy and unexpected moment for our team. I’m really thankful to the CSE Department and all the student coordinators for organizing such a wonderful event and giving us this opportunity."',
          author: 'Selva Bharathi V M',
          department: 'Department of Information Technology',
          profileImage: selvaBharathiImg,
        },
        {
          id: 3,
          quote: '"I sincerely appreciate the entire team for your excellent coordination and effort. The event was very well planned and executed smoothly. Keep up the great work, team! Thank you for giving me this wonderful opportunity to be a part of the event."',
          author: 'Rajvenkadam S',
          department: 'Department of Information Technology',
          profileImage: rajvenkadamImg,
        },
        {
          id: 4,
          quote: '"Today’s Campus Coders League was a wonderful and exciting experience. The event was successfully conducted by the CSE Department and provided a great platform to showcase our coding and problem-solving skills. I am very happy and proud that my team won the Overall Championship. This achievement was possible because of our teamwork, dedication, and coordination. I sincerely thank the CSE Department and all the organizers."',
          author: 'Prabhakaran',
          department: 'Department of Electronics and Communication Engineering',
          profileImage: prabhakaranImg,
        },
      ],
    },
  },
]
