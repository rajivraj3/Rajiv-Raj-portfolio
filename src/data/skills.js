export const skillGroups = [
  {
    id: 'languages',
    label: 'Languages',
    items: ['C++', 'Java', 'JavaScript', 'Python'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    items: ['HTML', 'CSS', 'React.js', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    id: 'database',
    label: 'Database',
    items: ['MongoDB', 'MySQL'],
  },
  {
    id: 'tools',
    label: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    id: 'ai',
    label: 'AI / ML',
    items: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Machine Learning fundamentals'],
  },
]

export const skillFilterTabs = [
  { id: 'all', label: 'All' },
  ...skillGroups,
]
