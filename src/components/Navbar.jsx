import { useEffect, useState } from 'react'
import { Menu, X, Download, Sparkles } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { motion } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'pt-3' : 'pt-4'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`flex items-center justify-between rounded-full border px-4 py-3 backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? 'border-white/10 bg-slate-950/70 shadow-[0_10px_35px_rgba(15,23,42,0.5)]'
              : 'border-white/10 bg-slate-950/40'
          }`}
        >
          <a href="#home" className="flex items-center gap-3 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-violet-500 to-emerald-400 font-bold text-slate-950 shadow-glow">
              RR
            </span>
            <span className="text-lg font-semibold tracking-wide">Rajiv Raj</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.href.replace('#', '')
                    ? 'bg-white/10 text-white shadow-[0_0_25px_rgba(34,211,238,0.2)]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://github.com/rajivraj3"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-cyan-300"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/rajiv-raj-312rnc/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-cyan-300"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="/Rajiv_Raj_CV%20(1).pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-glow transition hover:-translate-y-0.5"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.nav>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-3 rounded-2xl border border-white/10 bg-slate-950/90 p-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-3 py-2 text-sm font-medium ${
                    activeSection === item.href.replace('#', '')
                      ? 'bg-white/10 text-white'
                      : 'text-slate-300'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a href="https://github.com/rajivraj3" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-200">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/rajiv-raj-312rnc/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-200">
                <FaLinkedinIn size={18} />
              </a>
              <a href="/Rajiv_Raj_CV%20(1).pdf" download className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-sm font-semibold text-slate-950">
                <Sparkles size={14} /> Resume
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}
