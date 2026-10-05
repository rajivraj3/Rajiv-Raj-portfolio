import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Name is required.'
    if (!form.email.trim()) nextErrors.email = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) nextErrors.email = 'Please enter a valid email.'
    if (!form.subject.trim()) nextErrors.subject = 'Subject is required.'
    if (!form.message.trim()) nextErrors.message = 'Message is required.'

    return nextErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setIsSubmitted(false)
      return
    }

    setErrors({})
    setIsSubmitted(true)
    setForm(initialState)
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Contact</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Let's Build Something Together</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[30px] border border-white/10 bg-slate-900/70 p-6"
          >
            <p className="text-lg leading-8 text-slate-300">
              I'm always interested in learning, building meaningful projects, collaborating with other developers, and exploring new opportunities.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                <Mail size={18} className="text-cyan-300" />
                <span>rajivraj2635@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                <FaGithub size={18} className="text-cyan-300" />
                <span>github.com/rajivraj3</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                <FaLinkedinIn size={18} className="text-cyan-300" />
                <span>linkedin.com/in/rajiv-raj-312rnc</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                <span className="text-cyan-300 font-semibold">📞</span>
                <span>+91 9065302162</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={handleSubmit}
            className="rounded-[30px] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.6)]"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">Name</label>
                <input id="name" name="name" value={form.name} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50" placeholder="Your name" />
                {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50" placeholder="your@email.com" />
                {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-200">Subject</label>
              <input id="subject" name="subject" value={form.subject} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50" placeholder="Project inquiry" />
              {errors.subject && <p className="mt-2 text-sm text-red-400">{errors.subject}</p>}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">Message</label>
              <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50" placeholder="Tell me about your project..." />
              {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message}</p>}
            </div>

            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:-translate-y-0.5">
                <Send size={16} />
                Send Message
              </button>

              {isSubmitted && (
                <p className="text-sm font-medium text-emerald-300">Message ready to send. Connect your email service to enable delivery.</p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
