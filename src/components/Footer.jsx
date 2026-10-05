export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-2xl font-bold text-white">Rajiv Raj</p>
          <p className="mt-2 text-sm text-slate-300">MERN Stack Developer | AI/ML Enthusiast</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
          <a href="#home" className="transition hover:text-white">Home</a>
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="https://github.com/rajivraj3" target="_blank" rel="noreferrer" className="transition hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/rajiv-raj-312rnc/" target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn</a>
          <a href="mailto:rajivraj2635@gmail.com" className="transition hover:text-white">Email</a>
        </div>

        <div className="text-sm text-slate-400">
          © 2026 Rajiv Raj. All rights reserved.
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        Built with React, Vite & Tailwind CSS
      </div>
    </footer>
  )
}
