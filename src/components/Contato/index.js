import './style.scss';
import { VscGithubInverted } from 'react-icons/vsc';
import { BsLinkedin } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';


const Contato = () => {

  return (
    <section id="contact">
      <div>
        <h1>Contate-me</h1>
        <h2>Contate-me para parcerias e trabalhos</h2>
      </div>

      <div id="container-icons">
        <div>
          <a href="https://github.com/damaresbortolucci" target="_blank" rel="noreferrer"><VscGithubInverted /></a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/damaresbs/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        </div>
        <div>
          <a href="mailto:damaresbortolucci@gmail.com"><MdOutlineAlternateEmail /></a>
        </div>
      </div>
    </section>
  )
}

export default Contato;