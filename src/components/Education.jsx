import { motion } from 'framer-motion'

export default function Education() {
  const education = [
    {
      institution: 'Lovely Professional University',
      qualification: 'Bachelor of Technology – Computer Science and Engineering',
      location: 'Phagwara, Punjab',
      period: 'Since August 2024',
    },
    {
      institution: 'DAV Public School, Tapin North',
      qualification: 'Intermediate',
      location: 'Hazaribagh, Jharkhand',
      period: 'June 2020 – June 2022',
    },
    {
      institution: 'DAV Public School, Hehal',
      qualification: 'Matriculation',
      location: 'Ranchi, Jharkhand',
      period: 'April 2019 – May 2020',
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Education</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Academic Journey</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative rounded-[30px] border border-white/10 bg-slate-900/70 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.6)]"
        >
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-cyan-400/70 to-violet-500/70" />

          <div className="relative space-y-6">
            {education.map((item) => (
              <div key={item.institution} className="relative ml-10 rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="absolute -left-[2.65rem] top-6 h-5 w-5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-lg shadow-cyan-500/50" />
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.institution}</h3>
                    <p className="mt-2 text-slate-300">{item.qualification}</p>
                  </div>
                  <div className="shrink-0 text-sm text-slate-400 sm:text-right">
                    <p>{item.location}</p>
                    <p className="mt-1">{item.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
