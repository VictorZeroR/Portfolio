interface Project {
  category: string
  categoryColor: string
  year: string
  title: string
  description: string
  stack: string
  statusType: 'live' | 'link' | 'locked'
  statusLabel: string
  statusHref?: string
}

const projects: Project[] = [
  {
    category: 'EMPRESA / FJS',
    categoryColor: 'text-accent-gold',
    year: '2025',
    title: 'Chatbot "Jo" & Open Web UI Pipeline',
    description:
      'Integração de agente inteligente via API na Open Web UI com ingestão de documentos estruturados para atender processos gerenciais sincronizados ao ERP TOTVS.',
    stack: 'Python, Open Web UI, REST, TOTVS API',
    statusType: 'live',
    statusLabel: 'Em produção na FJS',
  },
  {
    category: 'ACADÊMICO / UFBA',
    categoryColor: 'text-accent-blue',
    year: '2024',
    title: 'Portal de Oportunidades & Vagas UFBA',
    description:
      'Plataforma web full stack para conexão de discentes a editais de iniciação científica, monitorias e estágios. Implementação de autenticação JWT, RBAC e banco relacional.',
    stack: 'Node.js, React, PostgreSQL, JWT',
    statusType: 'link',
    statusLabel: 'Ver código no GitHub',
    statusHref: 'https://github.com/VictorZeroR',
  },
  {
    category: 'PERÍCIA / POLÍCIA FEDERAL',
    categoryColor: 'text-accent-teal',
    year: '2024',
    title: 'Scripts de Integridade e Extração Forense',
    description:
      'Coleção de scripts em Python e Shell para verificação em lote de hashes criptográficos SHA-256 e validação pós-descompressão de evidências computacionais.',
    stack: 'Python 3, Bash, Hashing, Linux CLI',
    statusType: 'locked',
    statusLabel: 'Uso Interno e Pericial',
  },
]

const projects_section = () => {
  return (
    <section className="space-y-6" id="projetos" aria-labelledby="proj-heading">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-border-dark pb-3 gap-2">
        <h2 id="proj-heading" className="font-display text-xl sm:text-2xl font-bold tracking-tight text-text-primary flex items-center gap-2">
          <span className="text-accent-gold font-mono text-base font-normal">02.</span>
          Projetos &amp; Aplicações em Produção
        </h2>
        <span className="font-mono text-xs text-text-muted">SISTEMAS REAIS, ARQUITETURA E REPOSITÓRIOS</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-surface-subtle border border-border-dark rounded-md p-5 flex flex-col justify-between space-y-4 hover:border-text-secondary transition-colors"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-center font-mono text-xs">
                <span className={`font-medium ${project.categoryColor}`}>{project.category}</span>
                <span className="text-text-muted">{project.year}</span>
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary">{project.title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{project.description}</p>
            </div>

            <div className="space-y-3 pt-2 border-t border-border-muted font-mono text-xs">
              <div className="text-text-muted">
                Stack: <span className="text-text-secondary">{project.stack}</span>
              </div>
              <div className="flex items-center gap-2">
                {project.statusType === 'live' && (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-teal" />
                    <span className="text-text-primary text-[11px]">{project.statusLabel}</span>
                  </>
                )}
                {project.statusType === 'link' && (
                  <a
                    href={project.statusHref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent-gold hover:underline inline-flex items-center gap-1"
                  >
                    <span>{project.statusLabel}</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                {project.statusType === 'locked' && (
                  <>
                    <svg className="w-3.5 h-3.5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-text-muted text-[11px]">{project.statusLabel}</span>
                  </>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default projects_section
