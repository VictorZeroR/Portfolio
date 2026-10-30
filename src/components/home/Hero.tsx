interface StatBoxProps {
  label: string
  value: string
}

const StatBox = ({ label, value }: StatBoxProps) => (
  <div className="p-3 bg-canvas-base border border-border-dark rounded">
    <span className="block text-text-muted text-[10px] uppercase font-mono">{label}</span>
    <span className="font-mono font-semibold text-text-primary text-xs">{value}</span>
  </div>
)

const ArrowDownIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)
const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)
const CodeIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const stats: StatBoxProps[] = [
  { label: 'Instituição', value: 'UFBA (Salvador)' },
  { label: 'Especialidade', value: 'APIs & Full Stack' },
  { label: 'Enterprise', value: 'TOTVS & AI' },
  { label: 'Idiomas', value: 'Inglês C1 (CCAA)' },
]

const Hero = () => {
  return (
    <section className="border border-border-dark bg-surface-subtle rounded-md p-6 sm:p-10" aria-labelledby="hero-name">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Bio & Overview */}
        <div className="lg:col-span-8 space-y-6">
          {/* Status Badges */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="px-2 py-0.5 rounded bg-surface-raised border border-border-dark text-text-secondary">
              Graduando em Sistemas de Informação @ UFBA
            </span>
            <span className="px-2 py-0.5 rounded bg-surface-raised border border-border-dark text-accent-gold">
              Acelera @ Fundação José Silveira
            </span>
            <span className="px-2 py-0.5 rounded bg-surface-raised border border-border-dark text-accent-blue">
              Ex-Perícia @ Polícia Federal
            </span>
          </div>

          {/* Name & Title */}
          <div>
            <h1 id="hero-name" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
              Victor Santana
            </h1>
            <p className="font-mono text-sm sm:text-base text-accent-gold mt-1 tracking-tight">
              Desenvolvimento Full Stack &amp; Integração de Sistemas Corporativos
            </p>
          </div>

          {/* Bio */}
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl">
            Engenheiro de software e discente da Universidade Federal da Bahia (UFBA) em Salvador.
            Experiência prática na sustentação de chatbots em{' '}
            <strong className="text-text-primary font-medium">Open Web UI</strong> e integrações ao
            ecossistema{' '}
            <strong className="text-text-primary font-medium">ERP TOTVS</strong>, aliada a atuação
            prévia na área pericial computacional da{' '}
            <strong className="text-text-primary font-medium">Polícia Federal</strong> com scripts de
            validação de integridade forense. Stack de domínio diário em{' '}
            <strong className="text-text-primary font-medium">
              Python, React, React Native, Node.js e C++
            </strong>.
          </p>

          {/* Stat Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {stats.map((s) => (
              <StatBox key={s.label} label={s.label} value={s.value} />
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
            <a
              href="#projetos"
              className="px-4 py-2 rounded bg-accent-gold text-canvas-dark font-semibold hover:bg-yellow-400 transition-colors flex items-center gap-2"
            >
              <span>Ver Casos de Desenvolvimento</span>
              <ArrowDownIcon />
            </a>
            <a
              href="mailto:joaopk06@gmail.com"
              className="px-4 py-2 rounded bg-surface-raised border border-border-dark text-text-primary hover:border-text-secondary transition-colors flex items-center gap-2"
            >
              <MailIcon />
              <span>joaopk06@gmail.com</span>
            </a>
            <a
              href="https://github.com/VictorZeroR"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded bg-surface-raised border border-border-dark text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2"
            >
              <CodeIcon />
              <span>github.com/VictorZeroR</span>
            </a>
          </div>
        </div>

        {/* Right: Portrait Card */}
        <div className="lg:col-span-4 flex flex-col items-center">
          <div className="w-full max-w-[280px] bg-canvas-base border border-border-dark rounded p-2 space-y-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded bg-surface-raised border border-border-muted">
              <img
                alt="Retrato fotográfico de Victor Santana, Engenheiro de Software Full Stack"
                className="w-full h-full object-cover grayscale contrast-[1.15] brightness-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA305V0LcjRgWJgf2pAxNzUM2D2WKzXHIKqrRkkIGpnPiFqhQwrp29J-LVY_vqnb0GNkGtJU3wgSyKNB6EUBsFsz_QtqQhxD9rnlrK3IBbtob_ZBgynMI568TOjLA7-MsyUteiS_gxDMSTY0RuviCmbJ_udZ4etzqlRcQLnAOm8Tr37612_PpTjGSnfuq9jFKw2T_kTFYQx_FzF87Nly-R5mWTDy5aRDzcgCqqFH2Ox"
              />
            </div>
            {/* Identity Stamp */}
            <div className="p-2 font-mono text-[11px] space-y-1 bg-surface-subtle rounded border border-border-dark">
              <div className="flex justify-between items-center text-text-secondary">
                <span>IDENTITY:</span>
                <span className="text-text-primary font-semibold">VICTOR SANTANA</span>
              </div>
              <div className="flex justify-between items-center text-text-muted">
                <span>STATUS:</span>
                <span className="text-accent-teal">ATIVO / SALVADOR-BA</span>
              </div>
              <div className="flex justify-between items-center text-text-muted">
                <span>GITHUB:</span>
                <span className="text-text-primary">@VictorZeroR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
