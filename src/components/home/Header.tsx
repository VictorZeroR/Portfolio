const GitHubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-canvas-base border-b border-border-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-6">
        {/* Logo / Identity */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded"
          aria-label="Victor Santana — início"
        >
          <div className="w-9 h-9 rounded bg-surface-raised border border-border-dark flex items-center justify-center font-mono font-bold text-accent-gold text-sm group-hover:border-accent-gold transition-colors">
            VS
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-text-primary group-hover:text-accent-gold transition-colors">
              VICTOR SANTANA
            </span>
            <span className="font-mono text-[11px] text-text-muted tracking-tight">
              Full Stack Software Engineer
            </span>
          </div>
        </a>

        {/* Navigation */}
        <nav
          className="hidden md:flex items-center gap-6 font-mono text-xs text-text-secondary"
          aria-label="Navegação principal"
        >
          <a className="hover:text-text-primary transition-colors py-1" href="#experiencia">/experiência</a>
          <a className="hover:text-text-primary transition-colors py-1" href="#projetos">/projetos</a>
          <a className="hover:text-text-primary transition-colors py-1" href="#stack">/stack-tecnico</a>
          <a className="hover:text-text-primary transition-colors py-1" href="#formacao">/formação</a>
          <a className="hover:text-text-primary transition-colors py-1" href="#contato">/contato</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/VictorZeroR"
            target="_blank"
            rel="noreferrer"
            title="GitHub Profile"
            aria-label="Perfil no GitHub"
            className="p-2 rounded bg-surface-subtle border border-border-dark text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://linkedin.com/in/victor-santana1"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn Profile"
            aria-label="Perfil no LinkedIn"
            className="p-2 rounded bg-surface-subtle border border-border-dark text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:joaopk06@gmail.com"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-raised border border-border-dark font-mono text-xs text-accent-gold hover:bg-surface-highlight hover:border-accent-gold transition-colors"
          >
            <MailIcon />
            <span>Contato</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
