const StatusBar = () => {
  return (
    <aside
      className="w-full bg-canvas-dark border-b border-border-dark py-2 px-4 sm:px-8 text-xs font-mono text-text-muted flex justify-between items-center z-50 select-none"
      aria-label="Status do sistema"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 text-accent-teal font-medium">
          <span className="w-2 h-2 rounded-full bg-accent-teal inline-block animate-pulse" />
          DISPONÍVEL PARA PROJETOS
        </span>
        <span className="hidden md:inline text-border-dark">|</span>
        <span className="hidden md:inline text-text-secondary">
          SYS.LOC: SALVADOR, BAHIA (12°58&apos;16&quot;S 38°30&apos;39&quot;W)
        </span>
      </div>
      <div className="flex items-center gap-4 text-text-secondary">
        <span className="hidden sm:inline">UFBA // SISTEMAS DE INFORMAÇÃO</span>
        <span className="text-accent-gold font-semibold">PORTFÓLIO v2025</span>
      </div>
    </aside>
  )
}

export default StatusBar
