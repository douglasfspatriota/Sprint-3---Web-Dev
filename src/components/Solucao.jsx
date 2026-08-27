import mockupAntesDepois from '../assets/img/mockup-antes-depois.svg'
import './Solucao.css'

const GESTOS = [
  { gesto: 'Tap', funcao: 'Foto instantânea' },
  { gesto: 'Hold', funcao: 'Vídeo contínuo' },
  {
    gesto: 'Drag →',
    funcao: 'Burst mode (rajada de 12 quadros, IA elege o melhor)',
  },
  { gesto: 'Drag ↑', funcao: 'Zoom suave' },
  { gesto: 'Drag ↺', funcao: 'Vídeo em mãos livres (trava a gravação)' },
]

const BENEFICIOS = [
  {
    titulo: 'Ergonomia',
    texto:
      'Um único botão físico ao alcance natural do polegar — sem precisar tirar o olho da cena pra navegar menus.',
  },
  {
    titulo: 'Carga mental',
    texto:
      'Você não perde tempo escolhendo o modo certo. É só apontar e agir: a decisão de "como" fica com o sistema.',
  },
  {
    titulo: 'Habilita a IA',
    texto:
      'O gesto já avisa a intenção — a IA de contexto ajusta cena, foco e exposição antes mesmo do toque.',
  },
]

function Solucao() {
  return (
    <section id="solucao" className="solucao">
      <div className="container">
        <div className="solucao__intro">
          <div>
            <h2>O problema</h2>
            <p>
              A câmera do smartphone reúne mais de dez modos — Alta
              Resolução, Panorâmica, Documento em Ultra HD, Câmera Lenta,
              Astro, Profissional e outros — todos numa grade única, sem
              relação com o que o usuário está vivendo no momento. O
              resultado: tempo perdido decidindo como configurar, e o momento
              que se queria registrar passa despercebido.
            </p>
          </div>
          <div>
            <h2>A solução</h2>
            <p>
              Um único botão físico dinâmico substitui os mais de dez modos.
              Cinco gestos cobrem tudo o que a câmera precisa fazer, e uma IA
              de contexto ajusta cena, foco e exposição antes do toque — o
              usuário só decide <em>o quê</em> registrar, nunca{' '}
              <em>como</em> configurar. Isso reduz o fluxo de captura de 4
              passos (~4,2s) para 1 passo (~0,8s).
            </p>
          </div>
        </div>

        <div className="solucao__comparativo">
          <img
            src={mockupAntesDepois}
            alt="Comparativo: câmera atual leva 4 passos e cerca de 4,2 segundos, NextCam leva 1 passo e cerca de 0,8 segundos"
          />
        </div>

        <div className="solucao__gestos">
          <h3>Cinco gestos cobrem tudo</h3>
          <div className="gestos__grid">
            {GESTOS.map((item) => (
              <div className="gesto-card" key={item.gesto}>
                <span className="gesto-card__gesto">{item.gesto}</span>
                <p className="gesto-card__funcao">{item.funcao}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="solucao__beneficios">
          <div className="beneficios__grid">
            {BENEFICIOS.map((item) => (
              <div className="beneficio-card" key={item.titulo}>
                <h4>{item.titulo}</h4>
                <p>{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solucao
