import './Footer.css'

const LINKS_RODAPE = [
  { href: '#solucao', label: 'A Solução' },
  { href: '#publico', label: 'Público-Alvo' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#equipe', label: 'Nossa Equipe' },
  { href: '#contato', label: 'Contato' },
]

function Footer() {
  const anoAtual = new Date().getFullYear()

  return (
    <footer className="rodape">
      <div className="container rodape__interior">
        <div>
          <p className="rodape__marca">NextCam</p>
          <p className="rodape__copyright">
            &copy; {anoAtual} PrimeNext. Todos os direitos reservados.
          </p>
        </div>

        <nav className="rodape__links">
          {LINKS_RODAPE.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer
