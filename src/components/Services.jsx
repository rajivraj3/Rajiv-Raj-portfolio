import { motion } from 'framer-motion'
import { AppWindow, DatabaseZap, Globe, Layers3, Rocket, Zap } from 'lucide-react'

const services = [
  { title: 'Full Stack Web Applications', description: 'Scalable and modern product experiences from UI to backend logic.', icon: AppWindow },
  { title: 'Responsive Frontend Interfaces', description: 'Clean and adaptive interfaces built for desktop, tablet and mobile.', icon: Globe },
  { title: 'REST APIs', description: 'Reliable API design and integration for efficient application workflows.', icon: Layers3 },
  { title: 'MongoDB Applications', description: 'Data-driven apps with robust models and flexible database structures.', icon: DatabaseZap },
  { title: 'AI-powered Web Applications', description: 'Exploring intelligent features and data-informed user experiences.', icon: Zap },
  { title: 'Data-driven Applications', description: 'Insightful dashboards and apps powered by useful analysis and metrics.', icon: Rocket },
]

export default function Services() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Services</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">What I Can Build</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-300">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
