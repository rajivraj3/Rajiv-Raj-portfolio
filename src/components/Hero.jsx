import { motion } from 'framer-motion'
import { ArrowRight, Mail, Code2, Database, Cpu, Sparkles, Briefcase } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import portrait from '../assets/rajiv-portrait.jpeg'

export default function Hero() {
  const techs = ['React', 'Node.js', 'MongoDB', 'AI/ML', 'Express', 'Tailwind']

  return (
    <section id="home" className="relative overflow-hidden bg-[#e7ecd8] pb-20 pt-32 sm:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.3),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(146,169,114,0.1),transparent_28%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#89c7be]/70 bg-[#dfead7] px-3 py-2 text-sm font-medium text-[#2f6f63] shadow-sm">
            <Briefcase size={14} className="text-[#2f6f63]" />
            Open to Opportunities
          </div>

          <h1 className="max-w-xl text-6xl font-extrabold leading-[0.95] tracking-[-0.05em] text-[#6b3e2e] sm:text-7xl lg:text-[5.5rem]">
            Rajiv Raj
          </h1>

          <p className="mt-5 max-w-2xl text-2xl font-semibold leading-tight text-[#1f2d2a] sm:text-3xl">
            MERN Stack Developer &amp; AI/ML Enthusiast
          </p>

          <p className="mt-5 max-w-xl text-lg leading-8 text-[#2f4a45]">
            B.Tech CSE student at Lovely Professional University, passionate about building modern full-stack web applications and exploring Artificial Intelligence and Machine Learning.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4ec4d7] via-[#4da8ff] to-[#3fbdc2] px-6 py-3 text-sm font-semibold text-[#17332f] shadow-[0_10px_25px_rgba(76,184,196,0.35)] transition hover:-translate-y-0.5"
            >
              View My Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="/Rajiv%20Raj%20final%20cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-[#7ea19a] bg-[#edf3e5] px-6 py-3 text-sm font-semibold text-[#1f2d2a] transition hover:border-[#5d8c86] hover:bg-white/70"
            >
              Download Resume
            </a>
          </div>

          <p className="mt-5 text-lg font-semibold text-[#2f6f63]">
            &quot;Turning ideas into Digital Experiences.&quot;
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a href="https://github.com/rajivraj3" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8bc8c0] bg-[#edf5ef] text-[#1d3b39] transition hover:-translate-y-0.5 hover:border-[#4db6b0] hover:text-[#1a4f52]">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/rajiv-raj-312rnc/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8bc8c0] bg-[#edf5ef] text-[#1d3b39] transition hover:-translate-y-0.5 hover:border-[#4db6b0] hover:text-[#1a4f52]">
              <FaLinkedinIn size={18} />
            </a>
            <a href="mailto:rajivraj2635@gmail.com" aria-label="Email" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8bc8c0] bg-[#edf5ef] text-[#1d3b39] transition hover:-translate-y-0.5 hover:border-[#4db6b0] hover:text-[#1a4f52]">
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative z-10"
        >
          <div className="relative mx-auto max-w-[440px] rounded-[32px] border border-white/10 bg-slate-900/70 p-4 shadow-[0_0_80px_rgba(15,23,42,0.85)] backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                live
              </span>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#040b16] p-3">
              <div className="overflow-hidden rounded-[22px] border border-white/10 bg-slate-950/80">
                <img
                  src={portrait}
                  alt="Rajiv Raj"
                  className="h-[520px] w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-5 -left-5 rounded-2xl border border-cyan-400/30 bg-slate-950/80 px-4 py-3 shadow-glow"
          >
            <div className="flex items-center gap-3 text-sm text-cyan-200">
              <Sparkles size={16} />
              Building modern web apps
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
