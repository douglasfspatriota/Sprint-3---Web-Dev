import { useState } from 'react'
import './Publico.css'

const ECONOMIA_POR_FOTO_SEGUNDOS = 3.4

const ESTATISTICAS = [
  {
    valor: '84%',
    texto: 'reconheceram o problema de fotos borradas em eventos sociais',
  },
  {
    valor: '73%',
    texto:
      'preferem uma câmera que decida por eles em vez de configurar modos',
  },
  {
    valor: '61%',
    texto: 'trocariam de aparelho por uma IA que entenda o contexto',
  },
]

const DEPOIMENTOS = [
  {
    texto:
      'Eu nem abro os modos avançados — se a câmera fizer sozinha, é perfeito.',
    autor: 'Estudante, 20 anos',
  },
  {
    texto: 'Minha maior dor é perder a foto do rolê. Se a IA avisar, eu compro.',
    autor: 'Estudante, 22 anos',
  },
]

function Publico() {
  const [fotosPorDia, setFotosPorDia] = useState(5)

  const segundosPorDia = Math.round(fotosPorDia * ECONOMIA_POR_FOTO_SEGUNDOS)
  const minutosPorMes = Math.round(
    (fotosPorDia * ECONOMIA_POR_FOTO_SEGUNDOS * 30) / 60,
  )

  return (
    <section id="publico" className="publico">
      <div className="container">
        <div className="publico__cabecalho">
          <h2>Pra quem é o NextCam</h2>
          <p className="publico__persona">
            Estudantes Full-time, 18-25 anos, cursando graduação/pós em
            regime integral ou quase integral, conciliando
            estudo/estágio/trabalho, vida social e trajetos longos em
            transporte público.
          </p>
        </div>

        <div className="publico__stats">
          {ESTATISTICAS.map((item) => (
            <div className="stat-card" key={item.valor}>
              <span className="stat-card__valor">{item.valor}</span>
              <p className="stat-card__texto">{item.texto}</p>
            </div>
          ))}
        </div>

        <div className="publico__depoimentos">
          {DEPOIMENTOS.map((item) => (
            <blockquote className="depoimento-card" key={item.autor}>
              <p>&ldquo;{item.texto}&rdquo;</p>
              <cite>{item.autor}</cite>
            </blockquote>
          ))}
        </div>

        <div className="publico__calculadora">
          <h3>Quanto tempo você economiza?</h3>
          <p>
            Cada foto leva ~4,2s numa câmera tradicional e ~0,8s no NextCam —
            uma economia de 3,4s por clique.
          </p>

          <label className="calculadora__campo" htmlFor="fotos-por-dia">
            Quantas fotos você tira por dia?
            <input
              id="fotos-por-dia"
              type="number"
              min="0"
              value={fotosPorDia}
              onChange={(e) =>
                setFotosPorDia(Math.max(0, Number(e.target.value)))
              }
            />
          </label>

          <div className="calculadora__resultado">
            <div>
              <strong>{segundosPorDia}s</strong>
              <span>economizados por dia</span>
            </div>
            <div>
              <strong>{minutosPorMes} min</strong>
              <span>economizados por mês</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Publico
