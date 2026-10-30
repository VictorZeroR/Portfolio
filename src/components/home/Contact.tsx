interface Channel {
  label: string
  value: string
  cta: string
  href: string
  hoverBorder: string
  ctaColor: string
  isExternal?: boolean
}

const channels: Channel[] = [
  {
    label: 'E-mail Pessoal / Contato',
    value: 'joaopk06@gmail.com',
    cta: 'Enviar mensagem →',
    href: 'mailto:joaopk06@gmail.com',
    hoverBorder: 'hover:border-accent-gold',
    ctaColor: 'text-accent-gold',
  },
  {
    label: 'LinkedIn Oficial',
    value: '/in/victor-santana1',
    cta: 'Acessar perfil profissional →',
    href: 'https://linkedin.com/in/victor-santana1',
    hoverBorder: 'hover:border-accent-blue',
    ctaColor: 'text-accent-blue',
    isExternal: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/VictorZeroR',
    cta: 'Explorar repositórios →',
    href: 'https://github.com/VictorZeroR',
    hoverBorder: 'hover:border-text-secondary',
    ctaColor: 'text-text-secondary',
    isExternal: true,
  },
]

const Contact = () => {
  return (
    <section
      className="p-6 sm:p-10 bg-canvas-dark border border-border-dark rounded-md space-y-6"
      id="contato"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-2xl space-y-3">
        <div className="font-mono text-xs text-accent-gold uppercase tracking-wider">
          // Conexão Profissional
        </div>
        <h2 id="contact-heading" className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
          Vamos construir um projeto de desenvolvimento juntos?
        </h2>
        <p className="text-sm text-text-secondary leading-relaxed">
          Disponível para novos desafios profissionais em engenharia de software, desenvolvimento
          full stack e projetos corporativos de integração. Entre em contato pelos canais oficiais:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
        {channels.map((ch) => (
          <a
            key={ch.value}
            href={ch.href}
            target={ch.isExternal ? '_blank' : undefined}
            rel={ch.isExternal ? 'noreferrer' : undefined}
            className={`p-4 bg-surface-subtle border border-border-dark rounded transition-colors block space-y-1 ${ch.hoverBorder}`}
          >
            <div className="text-text-muted text-[10px] uppercase">{ch.label}</div>
            <div className="text-text-primary font-semibold text-sm truncate">{ch.value}</div>
            <div className={`text-[11px] pt-1 ${ch.ctaColor}`}>{ch.cta}</div>
          </a>
        ))}
      </div>

      <div className="pt-4 border-t border-border-dark flex flex-col sm:flex-row justify-between items-start sm:items-center font-mono text-xs text-text-muted gap-2">
        <span>LOCALIZAÇÃO: SALVADOR — BA, BRASIL</span>
        <span>MODALIDADE: PRESENCIAL, HÍBRIDO OU REMOTO</span>
      </div>
    </section>
  )
}

export default Contact
