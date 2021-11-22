import './style.scss';
import React from 'react';
import ListaProjetos from './projetos';
import { BsArrowUpCircle } from 'react-icons/bs';
import {CgWebsite} from 'react-icons/cg';
import { VscGithubInverted } from 'react-icons/vsc';


function Portfolio() {

    return(
    <>
    <section id="portfolio" className="" >
      <h1>Portfólio</h1>
      <h2>Certified Tech Developer</h2>
      <p>Trabalhos desenvolvidos em grupo e individualmente durante a formação CTD.</p>
      <div id="container-cards">

      { ListaProjetos.map(projeto =>(
        <div className="portfolio-item" key={projeto.id}>
          <img src={projeto.src} alt=""/>
          <h3>{projeto.nome}</h3>
          <span>{projeto.descricao}</span>
          <span>{projeto.tecnologias}</span>
          <div>
            <a href={projeto.linkPag}><CgWebsite /></a>
            <a href={projeto.linkGit}><VscGithubInverted /></a>
          </div>
        </div>
      ))}   
      </div>
      <div id="button-home"><a href="#home"><BsArrowUpCircle /></a></div>
    </section>
    </>
  )
}

export default Portfolio;