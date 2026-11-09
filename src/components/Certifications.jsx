import { motion } from 'framer-motion'
import { BrainCircuit, CodeXml } from 'lucide-react'
import { FaJava, FaMicrosoft } from 'react-icons/fa'
import { GrOracle } from 'react-icons/gr'
import { certifications } from '../data/certifications'
import { extracurricularActivities } from '../data/achievements'

const certificationIcons = [GrOracle, FaJava]
const activityIcons = [FaMicrosoft, BrainCircuit]

function EntryIcon({ Icon, kind }) {
  return (
    <span className="relative flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition duration-200 hover:scale-105 hover:border-cyan-300/40 hover:bg-white/10 hover:shadow-[0_0_18px_rgba(34,211,238,0.12)]">
      {kind === 'microsoft' ? (
        <Icon size={22} aria-hidden="true" className="text-slate-100" />
      ) : (
        <Icon
          size={kind === 'oracle' ? 28 : 24}
          aria-hidden="true"
          className={
            kind === 'oracle'
              ? 'text-red-500'
              : kind === 'java'
                ? 'text-orange-300'
                : 'text-cyan-300'
          }
        />
      )}
      {kind === 'microsoft' && (
        <span className="absolute -bottom-1 -right-1 flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[#020817] bg-slate-800 text-cyan-300">
          <CodeXml size={11} aria-hidden="true" />
        </span>
      )}
    </span>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Certifications</p>
        </div>

        <div className="space-y-4 border-t border-white/60 pt-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex flex-col gap-2 border-b border-white/20 pb-4 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex min-w-0 items-center gap-4 text-base text-slate-200 md:text-lg">
                <EntryIcon Icon={certificationIcons[index]} kind={index === 0 ? 'oracle' : 'java'} />
                <div className="min-w-0">
                  <span className="font-medium text-white">{cert.title}</span>
                  {cert.link !== '#' ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-2 text-cyan-300 underline decoration-cyan-400/70 underline-offset-4 transition-colors hover:text-cyan-100 hover:decoration-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                    >
                      {cert.status}
                    </a>
                  ) : (
                    <span className="ml-2 text-cyan-300">{cert.status}</span>
                  )}
                </div>
              </div>

              <div className="pl-[58px] text-sm font-medium text-slate-300 md:pl-0">{cert.date}</div>
            </motion.div>
          ))}
        </div>

        <div className="mb-8 mt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Extracurricular Activities</p>
        </div>

        <div className="space-y-4 border-t border-white/60 pt-4">
          {extracurricularActivities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex flex-col gap-2 border-b border-white/20 pb-4 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex min-w-0 items-center gap-4 text-base text-slate-200 md:text-lg">
                <EntryIcon Icon={activityIcons[index]} kind={index === 0 ? 'microsoft' : 'ai'} />
                <div className="min-w-0">
                  <span className="font-medium text-white">{item.title}</span>
                  <span className="text-slate-300"> | {item.org}</span>
                  {item.link !== '#' ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-2 text-cyan-300 underline decoration-cyan-400/70 underline-offset-4 transition-colors hover:text-cyan-100 hover:decoration-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="ml-2 text-cyan-300">{item.label}</span>
                  )}
                </div>
              </div>

              <div className="pl-[58px] text-sm font-medium text-slate-300 md:pl-0">{item.date}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
