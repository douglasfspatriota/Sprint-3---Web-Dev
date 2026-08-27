import { useState } from 'react'
import './Contato.css'

const CHAVE_ARMAZENAMENTO = 'nextcam_mensagens'

function lerMensagensSalvas() {
  try {
    const salvas = localStorage.getItem(CHAVE_ARMAZENAMENTO)
    return salvas ? JSON.parse(salvas) : []
  } catch {
    return []
  }
}

function Contato() {
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    mensagem: '',
  })
  const [mensagens, setMensagens] = useState(lerMensagensSalvas)

  function handleChange(e) {
    const { name, value } = e.target
    setFormulario((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const novaMensagem = {
      ...formulario,
      id: Date.now(),
      data: new Date().toLocaleString('pt-BR'),
    }

    const novasMensagens = [novaMensagem, ...mensagens]
    setMensagens(novasMensagens)
    localStorage.setItem(CHAVE_ARMAZENAMENTO, JSON.stringify(novasMensagens))
    setFormulario({ nome: '', email: '', mensagem: '' })
  }

  return (
    <section id="contato" className="contato">
      <div className="container contato__interior">
        <div className="contato__form-wrapper">
          <h2>Contato</h2>
          <p>Manda sua mensagem pra equipe PrimeNext.</p>

          <form className="contato__form" onSubmit={handleSubmit}>
            <label>
              Nome
              <input
                type="text"
                name="nome"
                value={formulario.nome}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              E-mail
              <input
                type="email"
                name="email"
                value={formulario.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Mensagem
              <textarea
                name="mensagem"
                rows="4"
                value={formulario.mensagem}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" className="botao botao--primario">
              Enviar mensagem
            </button>
          </form>
        </div>

        <div className="contato__historico">
          <h3>Mensagens enviadas ({mensagens.length})</h3>

          {mensagens.length === 0 ? (
            <p className="contato__vazio">Nenhuma mensagem enviada ainda.</p>
          ) : (
            <ul className="contato__lista">
              {mensagens.map((msg) => (
                <li className="mensagem-card" key={msg.id}>
                  <div className="mensagem-card__cabecalho">
                    <strong>{msg.nome}</strong>
                    <span>{msg.data}</span>
                  </div>
                  <p className="mensagem-card__email">{msg.email}</p>
                  <p>{msg.mensagem}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contato
