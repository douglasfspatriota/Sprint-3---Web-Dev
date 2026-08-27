import mockupGestos from '../assets/img/mockup-gestures.svg'
import mockupAntesDepois from '../assets/img/mockup-antes-depois.svg'
import mockupBurst from '../assets/img/mockup-burst.svg'
import mockupErgonomia from '../assets/img/mockup-ergonomia.svg'
import './Galeria.css'

const MOCKUPS = [
  {
    src: mockupGestos,
    legenda: 'Os cinco gestos do Dynamic Action Button',
  },
  {
    src: mockupAntesDepois,
    legenda: 'Comparativo: 4 passos (~4,2s) vs. 1 passo (~0,8s)',
  },
  {
    src: mockupBurst,
    legenda: 'Burst mode: rajada de 12 quadros, a IA elege o melhor',
  },
  {
    src: mockupErgonomia,
    legenda: 'Ergonomia: alcance natural do polegar',
  },
]

function Galeria() {
  return (
    <section id="galeria" className="galeria">
      <div className="container">
        <h2>Galeria</h2>

        <div className="galeria__grid">
          {MOCKUPS.map((item) => (
            <figure className="galeria-card" key={item.legenda}>
              <img src={item.src} alt={item.legenda} />
              <figcaption>{item.legenda}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Galeria
