# NextCam — Dynamic Action Button

Landing page do produto **NextCam**, migrada de HTML/CSS/JS puro para **React** como parte da Sprint 3 (Web Development) do Challenge com a empresa **JOVI Smartphone**. Equipe **PrimeNext**.

## Tecnologias usadas

- [React](https://react.dev/) (componentes funcionais)
- [Vite](https://vite.dev/)
- CSS puro (custom properties, Flexbox e Grid), sem framework de UI
- `localStorage` (API do navegador) para persistir o histórico de contato
- `Math` (`Math.round`) na calculadora de tempo economizado

## Como instalar

```bash
npm install
```

## Como rodar

```bash
npm run dev
```

Acesse `http://localhost:5173` no navegador.

Para gerar o build de produção:

```bash
npm run build
```

## Onde a IA foi usada no projeto

Usei o Claude (Anthropic), via Claude Code, como par de programação ao longo da migração deste projeto de HTML/CSS/JS puro para React. A IA me ajudou a:

- Estruturar os componentes funcionais em React (Header, Hero, Solução, Público-Alvo, Galeria, Nossa Equipe, Contato, Footer) a partir do conteúdo e da lógica que eu já tinha definido e validado com a JOVI Smartphone nas sprints anteriores;
- Implementar a lógica de estado com `useState` (menu responsivo com hambúrguer, formulário de contato controlado, calculadora de tempo com `Math`, histórico salvo em `localStorage`);
- Revisar e adaptar para o tom de site alguns textos (como os parágrafos de problema/solução e os cards de benefício), sempre mantendo os fatos, números e a pesquisa de validação que eu já tinha levantado — sem inventar dado novo;
- Gerar as 6 ilustrações vetoriais (SVG) usadas no favicon, no hero e na galeria. Como o produto físico ainda não existe e eu não tinha fotos/mockups reais em mãos, optei por ilustrações originais desenhadas em código (na paleta de cores da marca) em vez de usar imagens fictícias apresentadas como se fossem reais.

Todo o conteúdo estratégico do projeto — problema, solução, os 5 gestos, pesquisa de validação, depoimentos e definição de público-alvo — foi definido por mim e pela equipe PrimeNext antes da migração para React.

## Deploy

Link do deploy na Vercel: https://sprint-3-web-dev-mu.vercel.app

## Equipe PrimeNext

Ver [INTEGRANTES.txt](./INTEGRANTES.txt).
