import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { BrainCircuit, ChartNoAxesCombined, Code2, Cpu, Database, Sparkles, Webhook, Wrench } from 'lucide-react'
import {
  SiCplusplus,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostman,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiTailwindcss,
} from 'react-icons/si'
import { DiCss3, DiJava } from 'react-icons/di'
import { VscVscode } from 'react-icons/vsc'
import { skillFilterTabs, skillGroups } from '../data/skills'

const categoryIcons = {
  languages: Code2,
  frontend: Sparkles,
  backend: Cpu,
  database: Database,
  tools: Wrench,
  ai: Brain,
}

function Brain(props) {
  return <Cpu {...props} />
}

const skillIcons = {
  'C++': SiCplusplus,
  Java: DiJava,
  JavaScript: SiJavascript,
  Python: SiPython,
  HTML: SiHtml5,
  CSS: DiCss3,
  'React.js': SiReact,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'REST APIs': Webhook,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Git: SiGit,
  GitHub: SiGithub,
  'VS Code': VscVscode,
  Postman: SiPostman,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  Matplotlib: ChartNoAxesCombined,
  'Scikit-learn': SiScikitlearn,
  'Machine Learning fundamentals': BrainCircuit,
}

const skillIconColors = {
  'C++': '#659AD2',
  Java: '#E76F00',
  JavaScript: '#F7DF1E',
  Python: '#3776AB',
  HTML: '#E34F26',
  CSS: '#1572B6',
  'React.js': '#61DAFB',
  'Tailwind CSS': '#06B6D4',
  'Node.js': '#5FA04E',
  'Express.js': '#E2E8F0',
  'REST APIs': '#67E8F9',
  MongoDB: '#47A248',
  MySQL: '#4479A1',
  Git: '#F05032',
  GitHub: '#E2E8F0',
  'VS Code': '#007ACC',
  Postman: '#FF6C37',
  NumPy: '#4DABCF',
  Pandas: '#E70488',
  Matplotlib: '#67E8F9',
  'Scikit-learn': '#F7931E',
  'Machine Learning fundamentals': '#67E8F9',
}

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredGroups = useMemo(() => {
    if (activeFilter === 'all') return skillGroups
    return skillGroups.filter((group) => group.id === activeFilter)
  }, [activeFilter])

  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Skills</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Technical Skills</h2>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {skillFilterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                activeFilter === tab.id
                  ? 'border-cyan-400/40 bg-cyan-500/10 text-cyan-200'
                  : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredGroups.map((group, groupIndex) => {
            const Icon = categoryIcons[group.id] || Code2

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: groupIndex * 0.05 }}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-[0_0_35px_rgba(124,58,237,0.18)]"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{group.label}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const SkillIcon = skillIcons[item]

                    return (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-500/5"
                      >
                        <SkillIcon
                          aria-hidden="true"
                          className="h-7 w-7 shrink-0"
                          style={{ color: skillIconColors[item] }}
                        />
                        <span>{item}</span>
                      </span>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
