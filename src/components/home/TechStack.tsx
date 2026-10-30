interface SkillRow {
  category: string
  categoryColor: string
  skills: { name: string; detail: string }[]
}

const rows: SkillRow[] = [
  {
    category: '// Linguagens de Programação',
    categoryColor: 'text-accent-gold',
    skills: [
      { name: 'Python', detail: 'Automações forenses, manipulação de dados, scripts de hashing e integração de APIs.' },
      { name: 'JavaScript / TypeScript', detail: 'Aplicações web modernas no ecossistema Node e interfaces reativas.' },
      { name: 'C++', detail: 'Base sólida em algoritmos, complexidade estrutural e sistemas computacionais (UFBA).' },
      { name: 'Shell Script (Bash)', detail: 'Pipelines de terminal, inspeção de diretórios em lotes e rotinas Linux.' },
    ],
  },
  {
    category: '// Front-End & Mobile',
    categoryColor: 'text-accent-blue',
    skills: [
      { name: 'React', detail: 'Componentização limpa, gerenciamento de estado, consumo assíncrono de APIs REST.' },
      { name: 'React Native', detail: 'Desenvolvimento mobile multiplataforma (Android & iOS).' },
      { name: 'Tailwind CSS', detail: 'Construção de layouts responsivos, sistemas de design consistentes e tipografia funcional.' },
      { name: 'HTML5 & Semantic Web', detail: 'Acessibilidade, organização DOM e performance de renderização.' },
    ],
  },
  {
    category: '// Back-End & Persistência',
    categoryColor: 'text-accent-teal',
    skills: [
      { name: 'Node.js', detail: 'Servidores HTTP, rotas RESTful, middlewares e arquitetura orientada a serviços.' },
      { name: 'Autenticação (JWT & RBAC)', detail: 'Controle granular de permissões e proteção de rotas privadas.' },
      { name: 'Bancos Relacionais (SQL)', detail: 'Modelagem entidade-relacionamento, queries PostgreSQL e integridade referencial.' },
      { name: 'ERP TOTVS', detail: 'Integração com sistemas de gestão corporativa e processos de negócio.' },
    ],
  },
  {
    category: '// Infra, Forense & Métodos',
    categoryColor: 'text-text-primary',
    skills: [
      { name: 'Git & GitHub', detail: 'Git flow, branch protection, code review e versionamento semântico.' },
      { name: 'Perícia & Criptografia', detail: 'Cadeia de custódia digital, cálculo de hashes SHA/MD5 e integridade de arquivos.' },
      { name: 'Open Web UI & LLM Tools', detail: 'Ingestão de conhecimento para chatbots corporativos.' },
      { name: 'Metodologias Ágeis', detail: 'Experiência em Scrum, cerimônias de sprint, Kanban e gestão via EJ.' },
    ],
  },
]

const TechStack = () => {
  return (
    <section className="space-y-6" id="stack" aria-labelledby="stack-heading">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-border-dark pb-3 gap-2">
        <h2 id="stack-heading" className="font-display text-xl sm:text-2xl font-bold tracking-tight text-text-primary flex items-center gap-2">
          <span className="text-accent-gold font-mono text-base font-normal">03.</span>
          Domínio Técnico &amp; Ferramental
        </h2>
        <span className="font-mono text-xs text-text-muted">CATEGORIAS ESTRUTURADAS COM CONTEXTO PRÁTICO</span>
      </div>

      <div className="bg-surface-subtle border border-border-dark rounded-md divide-y divide-border-dark font-mono text-xs">
        {rows.map((row) => (
          <div key={row.category} className="p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
            <div className={`md:col-span-3 font-bold uppercase tracking-wider ${row.categoryColor}`}>
              {row.category}
            </div>
            <div className="md:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-text-secondary">
                {row.skills.map((skill) => (
                  <div key={skill.name}>
                    <strong className="text-text-primary font-semibold">{skill.name}:</strong>{' '}
                    <span>{skill.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
