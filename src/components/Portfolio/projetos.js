import todolist from './toDoList.jpg';
import projetocard from './projetocard.jpg';
import sudaca from './sudaca.jpg';
import cancodeit from './cancodeit.jpg';
import blog from './blog.jpg';
import formulario from './formulario.jpg';


const ListaProjetos = [
    {
      id: 0,
      src: todolist,
      nome: 'To Do List',
      descricao: 'Trabalho desenvolvido em grupo',
      tecnologias: 'Html - CSS - JavaScript',
      linkPag: 'https://damaresbortolucci.github.io/CTD-frontend-II-checkpoint2/',
      linkGit:'https://github.com/damaresbortolucci/CTD-frontend-II-checkpoint2'
    },
    {
        id: 1,
        src: projetocard,
        nome: 'Travel Card',
        descricao: 'Trabalho desenvolvido em grupo',
        tecnologias: 'Html - CSS - JavaScript',
        linkPag: 'https://moreirafelipe.github.io/dh-front2-checkpoint1/',
        linkGit: 'https://github.com/moreirafelipe/dh-front2-checkpoint1'
      },
      {
        id: 2,
        src: sudaca,
        nome: 'Sudaca Filmes',
        descricao: 'Trabalho desenvolvido em grupo',
        tecnologias: 'Html - CSS - JavaScript',
        linkPag: 'https://moreirafelipe.github.io/dh-frontend-sudaca/index.html',
        linkGit: 'https://github.com/moreirafelipe/dh-frontend-sudaca'
      },
      {
        id: 3,
        src: cancodeit,
        nome: 'We can Code It',
        descricao: 'Trabalho individual - estudo sobre Ract JS',
        tecnologias: 'React JS',
        linkPag: 'https://ctd-projeto-aula5-372q89rku-damaresbortolucci.vercel.app/',
        linkGit: 'https://github.com/damaresbortolucci/CTD-3-Bimestre/tree/main/Aula05'
      },
      {
        id: 4,
        nome: 'Blog',
        src: blog,
        descricao: 'Trabalho individual - primeiro projeto front-end',
        tecnologias: 'Html - CSS - JavaScript',
        linkPag: 'https://damaresbortolucci.github.io/projeto-01-CTD-frontend/index.html',
        linkGit: 'https://github.com/damaresbortolucci/projeto-01-CTD-frontend'
      },
      {
        id: 5,
        src: formulario,
        nome: 'Formulário animado',
        descricao: 'Trabalho individual - estudo sobre animações',
        tecnologias: 'Html - CSS - JavaScript',
        linkPag: 'https://damaresbortolucci.github.io/projeto-formulario-animado',
        linkGit: 'https://github.com/damaresbortolucci/projeto-formulario-animado'
      }
  ]

  export default ListaProjetos;