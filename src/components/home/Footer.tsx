const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-canvas-dark border-t border-border-dark font-mono text-xs text-text-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-text-primary">VICTOR SANTANA</span>
          <span className="text-border-dark">|</span>
          <span>UFBA // SISTEMAS DE INFORMAÇÃO</span>
        </div>
        <div>
          <span>© {year} Victor Santana. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
