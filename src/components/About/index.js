import './style.scss';


const About = () => {

  return (
    <section id="about">
      <div className="about-card">
        <h2>Nome</h2>
        <p>Dâmares Bortolucci de Sousa</p>
        <h2>E-mail</h2>
        <p>damaresbortolucci<br />@gmail.com</p>
        <h2>Endereço</h2>
        <p>São Paulo / SP</p>
        <h2>Competências</h2>
        <p>HTML5, CSS3, Javascript, React JS, Git, Java, MySQL</p>
      </div>

      <div className="about-text">
        <h1>Sobre mim</h1>
        <h3>Desenvolvedora Front-end Júnior</h3>
        <p>Tenho +13 anos de experiência corporativa. Estou em formação e transição para a área de tecnologia.</p>
        <p>Cursando Técnico em Desenvolvimento de Sistemas pelo Instituto Federal do Sul de Minas.</p>
        <p>Aprovada no processo seletivo para a primeira turma da formação Certified Tech Developer, curso desenhado pelo         Mercado Livre e Globant em conjunto com a Digital House, onde estou tendo uma base sólida em front-end, back-end,         infraestrutura, banco de dados, além de learning agility, desenvolvimento de soft skills em colaboração e trabalho em         equipe, comunicação eficaz e postura profissional.</p>
        <p>Participante da formação IT Essencials ministrada pela Cisco em parceria com a academia MCIO.</p>
        <span>
          Habilidades: <br />
          - HTML5, CSS3, Javascript, ReactJS, GitHub, Java, SQL.<br />
          - Capacidade de resolução, Comprometimento, Colaboração, Comunicação, Empatia, Facilidade de Aprendizado, Gestão de       problemas e conflitos, Pensamento criativo e Persistência.
        </span>
      </div>
    </section>
  )
}

export default About;