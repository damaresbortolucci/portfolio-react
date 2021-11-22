import './style.scss';
import { SiTarget } from 'react-icons/si'
import { BsArrowUpCircle } from 'react-icons/bs'

const Formacao = () => {

  return (
    <section id="formacao">
      <div>
        <h1>Formação</h1>
        <h2>Cursos e certificações em tecnologia</h2>
      </div>

      <div id="container-formation">
        {/* coluna esquerda */}
        <div className="column">
          <div className="formation">
            <div className="target"><SiTarget /></div>
            <span>Certified Tech Developer</span>
            <h3>Digital House</h3>
            <p>Certified Tech Developer é um curso completo, pensado e desenhado pelo Mercado Livre e Globant em conjunto com a Digital House, onde aprendo as linguagens mais procuradas em Programação, conhecimentos técnicos e uma série de habilidades fundamentais para inserção nas empresas mais disruptivas do mundo.</p>
          </div>
          <div className="formation">
            <div className="target"><SiTarget /></div>
            <span>Técnico em Desenvolvimento de Sistemas</span>
            <h3>IFSul de Minas - Instituto Federal do Sul de Minas</h3>
            <p>Início: Outubro 2020 <br />
              Conclusão: Março 2022</p>
          </div>
        </div>

        {/* coluna direita */}
        <div className="column">
          <div className="formation">
            <div className="target"><SiTarget /></div>
            <span>IT Essencials</span>
            <h3>Parceria MCIO e Cisco</h3>
            <p>O IT Essentials aborda fundamentos e qualificações profissionais de carreira necessárias para trabalhos básicos na área de TI: Instalação, configuração e solução problemas de computadores e dispositivos móveis. Identificação de ameaças comuns à segurança, pensamento crítico e qualificações profissionais de resolução de problemas usando equipamentos reais e o Cisco Packet Tracer.<br /><br />
              Carga Horária do curso: 70 horas
            </p>
          </div>
          <div className="formation">
            <div className="target"><SiTarget /></div>
            <span>Formação Inicial e Continuada em Programador Web</span>
            <h3>IFRN - Instituto Federal do Rio Grande do Norte</h3>
            <p>O curso de Formação Inicial e Continuada em Programador Web, forma profissionais que desenvolvem, testam e realizam manutenção em sistemas, respeitando os padrões técnicos de qualidade. Faz consultas ao sistema, segundo as especificações do projeto, documentando todas as etapas do processo. <br /><br />
              Carga Horária do curso: 200 horas</p>
          </div>
        </div>
      </div>
      {/* botao home */}
      <div id="button-home"><a href="#home"><BsArrowUpCircle /></a></div>
    </section>
  )
}

export default Formacao;