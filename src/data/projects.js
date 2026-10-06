export const projects = [
  {
    title: 'RajMeet – Real-Time Video Conferencing Platform',
    description:
      'Architected a full-stack video conferencing platform for creating, scheduling, and joining meetings via invite codes. Engineered peer-to-peer video/audio calls and screen sharing with WebRTC, Socket.IO signaling, live in-meeting chat, and Xirsys connectivity. Secured access with JWT authentication and bcrypt password hashing, storing user profiles, meeting history, participant sessions, and messages in MongoDB.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'WebRTC', 'Socket.IO', 'JWT', 'Tailwind CSS', 'Axios', 'Xirsys'],
    demoUrl: 'https://raj-meet.vercel.app/',
    githubUrl: 'https://github.com/rajivraj3/RajMeet',
    isPlaceholder: false,
    accent: 'from-cyan-500/25 via-sky-500/15 to-indigo-500/20',
    icon: '🎥',
  },
  {
    title: 'DivyaTrades – Full-Stack Trading Platform',
    description:
      'Built a responsive trading platform covering portfolio, holdings, positions, orders, and funds. Engineered REST APIs for users, orders, holdings, and support, powering buy orders, watchlists, and profit-and-loss tracking. Visualized portfolio and trading data with interactive Chart.js charts in a MUI/Bootstrap interface.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Chart.js', 'MUI', 'Bootstrap', 'Axios'],
    demoUrl: 'https://divyatrades-1.onrender.com/',
    githubUrl: 'https://github.com/rajivraj3/DivyaTrades',
    isPlaceholder: false,
    accent: 'from-emerald-500/25 via-teal-500/15 to-cyan-500/20',
    icon: '📈',
  },
  {
    title: 'AI Marketing Strategist – AI-Powered Marketing Platform',
    description:
      'Built a full-stack AI marketing platform for campaign creation using React.js, Node.js, Express.js, and MongoDB. Integrated the Gemini API to generate slogans and poster ideas and power a marketing chatbot. Implemented JWT authentication, saved campaign and chat history, and a responsive dashboard.',
    tech: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'JWT'],
    demoUrl: 'https://ai-advertising-platform.netlify.app/',
    githubUrl: 'https://github.com/rajivraj3/AI-Advertising-platform',
    isPlaceholder: false,
    accent: 'from-violet-500/25 via-purple-500/15 to-pink-500/20',
    icon: '🤖',
  },
]