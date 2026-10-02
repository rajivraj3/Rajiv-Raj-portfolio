import { motion } from 'framer-motion'
import { ArrowRight, Cloud, Cpu, Database, Rocket, Sparkles, Workflow } from 'lucide-react'

const items = [
  { title: 'Advanced MERN Stack Development', icon: Workflow },
  { title: 'REST API Development', icon: Database },
  { title: 'Machine Learning', icon: Cpu },
  { title: 'Generative AI', icon: Sparkles },
  { title: 'AI-powered Web Applications', icon: ArrowRight },
  { title: 'Data Structures & Algorithms', icon: Rocket },
  { title: 'Cloud Deployment', icon: Cloud },
]

export default function Exploring() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Learning</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Currently Exploring</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-[26px] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-300">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
