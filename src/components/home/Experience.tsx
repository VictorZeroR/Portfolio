interface TechChipProps {
  label: string
}

const TechChip = ({ label }: TechChipProps) => (
  <span className="px-2 py-1 rounded bg-surface-raised border border-border-dark text-text-secondary font-mono text-xs">
    {label}
  </span>
)

interface ExperienceEntry {
  role: string
  company: string
  period: string
  location: string
  status: string
  statusColor: string
  color: string
  description: string
  bullets: string[]
  tech: string[]
}

const entries: ExperienceEntry[] = [
  {
    role: 'Estagiário de Desenvolvimento de Software',
    company: 'Fundação José Silveira • Programa Acelera',
    period: 'Janeiro 2025 — Presente',
    location: 'Salvador, Bahia',
    status: 'Atual',
    statusColor: 'text-accent-teal',
    color: 'text-accent-gold',
    description:
      'Atuação no desenvolvimento e sustentação do ecossistema corporativo da Fundação, unindo esteiras modernas de inteligência artificial a rotinas transacionais legado:',
    bullets: [
      'Desenvolvimento e extensão contínua do assistente virtual corporativo "Jo", manipulando pipelines de prompt engineering e parsing de dados.',
      'Implementação de rotinas de ingestão e parsing de arquivos via API na interface Open Web UI, permitindo consultas contextuais de documentos institucionais.',
      'Manutenção e integração de regras de negócio conectadas ao ERP TOTVS, mapeando schemas e endpoints para conciliação operacional.',
      'Apresentação de métricas mensais de usabilidade e saúde do sistema para gerentes de tecnologia e stakeholders do negócio.',
    ],
    tech: ['Python', 'Open Web UI', 'ERP TOTVS', 'Node.js', 'APIs REST', 'Git'],
  },
  {
    role: 'Estagiário em Informática Forense e Perícia Oficial',
    company: 'Polícia Federal • Setor Técnico-Científico (SETEC/SR/PF/BA)',
    period: 'Março 2024 — Fevereiro 2025',
    location: 'Salvador, Bahia',
    status: 'Concluído',
    statusColor: 'text-text-secondary',
    color: 'text-accent-blue',
    description:
      'Operação em suporte direto a Peritos Criminais Federais na manipulação de mídias de armazenamento, preservação de cadeia de custódia e automação pericial:',
    bullets: [
      'Construção e execução de scripts de automação em Python e Shell Script para auditoria de integridade pós-descompressão em grandes volumes de arquivos.',
      'Implementação de rotinas de validação criptográfica (geração e verificação recursiva de checksums MD5 / SHA-256).',
      'Diagnóstico preliminar e inspeção técnica de discos rígidos e pendrives protegidos por criptografia e senhas.',
      'Apoio técnico na estruturação de relatórios e laudos periciais com rigor descritivo formal em conformidade jurídica.',
    ],
    tech: ['Python', 'Bash / Shell', 'Criptografia / Hashes', 'Linux Forense', 'Autópsia Digital'],
  },
  {
    role: 'Coordenador de Projetos & Desenvolvedor Front-end',
    company: 'Empresa Júnior de Informática • UFBA',
    period: '2023 — 2024',
    location: 'Salvador, Bahia',
    status: 'Vivência EJ',
    statusColor: 'text-text-secondary',
    color: 'text-text-secondary',
    description: 'Liderança e execução técnica de demandas contratuais web para parceiros externos e incubadas locais:',
    bullets: [
      'Coordenação e planejamento de entregas sob ritos ágeis (Scrum & Kanban), garantindo alinhamento de escopo e prazos com clientes reais.',
      'Desenvolvimento completo da interface do software INSMAC e portais clientes utilizando React e Tailwind CSS.',
      'Mentoria de novos membros ingressantes em práticas de versionamento com Git, conventional commits e code review.',
    ],
    tech: ['React', 'JavaScript / TypeScript', 'Scrum / Kanban', 'Gestão de Projetos'],
  },
]

const Experience = () => {
  return (
    <section className="space-y-6" id="experiencia" aria-labelledby="exp-heading">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-border-dark pb-3 gap-2">
        <h2 id="exp-heading" className="font-display text-xl sm:text-2xl font-bold tracking-tight text-text-primary flex items-center gap-2">
          <span className="text-accent-gold font-mono text-base font-normal">01.</span>
          Trajetória Profissional &amp; Atuação Técnica
        </h2>
        <span className="font-mono text-xs text-text-muted">ESTÁGIOS, VIVÊNCIAS E PROJETOS PRÁTICOS</span>
      </div>

      <div className="space-y-4">
        {entries.map((entry) => (
          <article
            key={entry.role}
            className="p-6 bg-surface-subtle border border-border-dark rounded-md space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-border-muted pb-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-display font-semibold text-lg text-text-primary">{entry.role}</h3>
                  <span className={`px-2 py-0.5 rounded bg-surface-raised font-mono text-[11px] border border-border-dark ${entry.statusColor}`}>
                    {entry.status}
                  </span>
                </div>
                <p className={`font-mono text-xs mt-0.5 ${entry.color}`}>{entry.company}</p>
              </div>
              <div className="font-mono text-xs text-text-secondary sm:text-right shrink-0">
                <div>{entry.period}</div>
                <div className="text-text-muted">{entry.location}</div>
              </div>
            </div>

            <div className="text-sm text-text-secondary space-y-2">
              <p>{entry.description}</p>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm marker:text-accent-gold">
                {entry.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {entry.tech.map((t) => (
                <TechChip key={t} label={t} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
