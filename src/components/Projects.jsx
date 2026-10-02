import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Projects</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
          <p className="mt-3 text-slate-300">Some things I've built</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-slate-900/70 shadow-[0_20px_60px_rgba(15,23,42,0.6)]"
            >
              <div className={`relative h-52 bg-gradient-to-br ${project.accent} p-6`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_30%)]" />
                <div className="relative flex h-full items-start justify-between">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-3 text-4xl backdrop-blur-sm">{project.icon}</div>
                  {project.isPlaceholder && (
                    <span className="rounded-full border border-amber-300/30 bg-amber-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-200">
                      Placeholder
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-500/20"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    className={`inline-flex ${project.demoUrl ? 'flex-1' : 'w-full'} items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10`}
                  >
                    <FaGithub size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
