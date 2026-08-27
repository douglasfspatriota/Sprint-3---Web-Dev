import './Equipe.css'

const INTEGRANTES = [
  {
    nome: 'Douglas Ferreira Santos Patriota',
    rm: '569713',
    frente: 'Front-End & Integração da Solução',
  },
  {
    nome: 'Pedro Henrique Santos de Brito',
    rm: '573187',
    frente: 'UX/UI & Total Experience Design',
  },
  {
    nome: 'Octavio Kal Oliveira Lima',
    rm: '571838',
    frente: 'Arquitetura & Backlog da Solução',
  },
  {
    nome: 'Vitor Santos Cintra',
    rm: '569416',
    frente: 'Storytelling & Inspiração Empreendedora',
  },
]

function Equipe() {
  return (
    <section id="equipe" className="equipe">
      <div className="container">
        <h2>Nossa Equipe</h2>
        <p className="equipe__subtitulo">PrimeNext</p>

        <div className="equipe__grid">
          {INTEGRANTES.map((integrante) => (
            <div className="integrante-card" key={integrante.rm}>
              <span className="integrante-card__avatar">
                {integrante.nome.charAt(0)}
              </span>
              <h3>{integrante.nome}</h3>
              <p className="integrante-card__cargo">Engenheiro de Software</p>
              <p className="integrante-card__frente">{integrante.frente}</p>
              <p className="integrante-card__rm">RM {integrante.rm}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Equipe
