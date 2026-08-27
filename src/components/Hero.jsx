import heroIlustracao from '../assets/img/hero-illustration.svg'
import './Hero.css'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__interior">
        <div className="hero__conteudo">
          <h1>Todo o controle da câmera cabe em um gesto.</h1>
          <p className="hero__lead">
            O Dynamic Action Button substitui os mais de dez modos da câmera
            por um único botão físico dinâmico. Uma IA de contexto ajusta
            cena, foco e exposição antes do toque — você só decide{' '}
            <em>o quê</em> registrar, nunca <em>como</em> configurar.
          </p>
          <div className="hero__ctas">
            <a href="#solucao" className="botao botao--primario">
              Ver a solução
            </a>
            <a href="#contato" className="botao botao--secundario">
              Falar com a equipe
            </a>
          </div>
        </div>

        <div className="hero__imagem">
          <img
            src={heroIlustracao}
            alt="Smartphone com o Dynamic Action Button e os gestos de tap, hold e drag ao redor"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
