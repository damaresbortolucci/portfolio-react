import './App.scss';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Formacao from './components/Formacao';
import Contato from './components/Contato';
import Footer from './components/Footer';


function App() {
  const nomeEmpresa = '';
  return (
    <>
      <main>
        <Home />
        <About />
        <Portfolio />
        <Formacao />
        <Contato />
      </main>
      <Footer empresa={nomeEmpresa} />
    </>
  );
}

export default App;
