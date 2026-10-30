const Education = () => {
  return (
    <section className="space-y-6" id="formacao" aria-labelledby="edu-heading">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-border-dark pb-3 gap-2">
        <h2 id="edu-heading" className="font-display text-xl sm:text-2xl font-bold tracking-tight text-text-primary flex items-center gap-2">
          <span className="text-accent-gold font-mono text-base font-normal">04.</span>
          Formação Acadêmica &amp; Qualificações
        </h2>
        <span className="font-mono text-xs text-text-muted">GRADUAÇÃO E CERTIFICAÇÕES RELEVANTES</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Academic Degree Card */}
        <div className="p-6 bg-surface-subtle border border-border-dark rounded-md space-y-3">
          <div className="text-accent-gold font-mono font-semibold text-xs uppercase tracking-wider">
            Graduação de Nível Superior
          </div>
          <h3 className="font-display font-bold text-base text-text-primary">
            Bacharelado em Sistemas de Informação
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            Universidade Federal da Bahia (UFBA) — Instituto de Computação. Formação focada em
            engenharia de software, banco de dados, arquiteturas corporativas e algoritmos
            avançados.
          </p>
          <div className="flex justify-between items-center text-text-muted font-mono text-xs pt-2 border-t border-border-muted">
            <span>Salvador, Bahia</span>
            <span className="text-text-primary">Graduando</span>
          </div>
        </div>

        {/* Language Qualification Card */}
        <div className="p-6 bg-surface-subtle border border-border-dark rounded-md space-y-3">
          <div className="text-accent-teal font-mono font-semibold text-xs uppercase tracking-wider">
            Competência Linguística
          </div>
          <h3 className="font-display font-bold text-base text-text-primary">
            Inglês Avançado — Nível C1
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            Conclusão de curso regular e formação avançada no CCAA. Capacidade comprovada para
            leitura de documentações técnicas de alta complexidade, redação técnica e comunicação
            oral profissional em times internacionais.
          </p>
          <div className="flex justify-between items-center text-text-muted font-mono text-xs pt-2 border-t border-border-muted">
            <span>CCAA</span>
            <span className="text-text-primary">Certificado Nível C1</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
