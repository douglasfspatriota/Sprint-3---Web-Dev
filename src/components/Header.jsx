import { useState } from 'react'
import logo from '../assets/img/favicon.svg'
import './Header.css'

const LINKS_MENU = [
  { href: '#solucao', label: 'A Solução' },
  { href: '#publico', label: 'Público-Alvo' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#equipe', label: 'Nossa Equipe' },
  { href: '#contato', label: 'Contato' },
]

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  function fecharMenu() {
    setMenuAberto(false)
  }

  return (
    <header className="cabecalho">
      <div className="container cabecalho__interior">
        <a href="#top" className="cabecalho__logo" onClick={fecharMenu}>
          <img src={logo} alt="" width="32" height="32" />
          <span>NextCam</span>
        </a>

        <nav className={`cabecalho__menu ${menuAberto ? 'aberto' : ''}`}>
          <ul>
            {LINKS_MENU.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={fecharMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={`cabecalho__alternador ${menuAberto ? 'aberto' : ''}`}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto((aberto) => !aberto)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
