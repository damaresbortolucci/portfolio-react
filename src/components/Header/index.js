import './style.scss';
import linkedin from './linkedin.png'
import github from'./github.png'

const Header = ({empresa}) => {

  return(
    <header>
      <h1>{empresa}</h1>
      <nav>
        <ul>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <li><a href="#"><img src={linkedin} alt="linkedin" /></a></li>
          <li><a href="#galeria"><img src={github} alt="github" /></a></li>
        </ul>
        <button>DOWNLOAD CV</button>
      </nav>
    </header>
  );
}

export default Header;