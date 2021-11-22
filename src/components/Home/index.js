/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss';

import foto from './perfil1.png';
import linkedin from './linkedin.png';
import github from './github.png';

import { AiOutlineHome } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { GiDiploma } from 'react-icons/gi';
import { MdOutlineAlternateEmail } from 'react-icons/md';/* @ */

import { BiCodeCurly } from 'react-icons/bi';/* chaves */
import { VscCode } from 'react-icons/vsc';/* {} */
import { VscChevronLeft } from 'react-icons/vsc';/*  < */
import { VscBug } from 'react-icons/vsc';
import { VscRecord } from 'react-icons/vsc';

import curriculo from './damaresbsousa.pdf';


const Home = () => {

  return (
    <section id="home">
      {/* redes sociais e botao currículo */}
      <div id="social-contact">
        <a href="https://github.com/damaresbortolucci" target="_blank" rel="noreferrer"><img className="midias" src={github} alt="github" /></a>
        <a href="https://www.linkedin.com/in/damaresbs/" target="_blank" rel="noreferrer"><img className="midias" src={linkedin} alt="linkedin" /></a>
        <button> <a href={curriculo} alt="curriculo" target="_blank" rel="noreferrer">DOWNLOAD CV</a>
        </button>
      </div>

      {/* apresentação */}
      <div id="description">
        <span>I'm </span>
        <h2>Dâmares Bortolucci</h2>
        <p>Front-end Developer</p>
      </div>

      {/* foto */}
      <div id="container-photo">
        <div id="moldura"></div>
        <img src={foto} alt="koko" />
      </div>


      {/* menu */}
      <div id="secoes">
        <a href="#home">
          <div className="menu">
            <AiOutlineHome />
            <span>Home</span>
          </div>
        </a>
        <a href="#about">
          <div className="menu">
            <FiUser />
            <span>Sobre mim</span>
          </div>
        </a>
        <a href="#portfolio">
          <div className="menu">
            <VscCode />
            <span>Portfólio</span>
          </div>
        </a>
        <a href="#formacao">
          <div className="menu">
            <GiDiploma />
            <span>Formação</span>
          </div>
        </a>
        <a href="#contact">
          <div className="menu">
            <MdOutlineAlternateEmail />
            <span>Contato</span>
          </div>
        </a>
      </div>

      {/* imagens SVG */}
      <div className="group3" id="svg3"><VscCode /></div>
      <div className="group2" id="svg4"><VscBug /></div>
      <div className="group1 " id="svg1"><VscCode /></div>
      <div className="group3" id="svg3"><VscChevronLeft /></div>
      <div className="group2" id="svg4"><VscBug /></div>
      <div className="group2" id="svg4"><VscBug /></div>
      <div className="group3" id="svg1"><VscCode /></div>
      <div className="group4" id="svg2"><VscRecord /></div>
      <div className="group2" id="svg1"><VscCode /></div>
      <div className="group3" id="svg3"><VscChevronLeft /></div>
      <div className="group2" id="svg4"><VscBug /></div>
      <div className="group2" id="svg4"><BiCodeCurly /></div>
    </section>
  )
}

export default Home;