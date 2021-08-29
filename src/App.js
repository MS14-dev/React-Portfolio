// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import up from './images/up.png'
import './css/style.css'

function App() {
  return (
    <>
      <Header/>
      <br/>
      <br/>
      <br/>
      <About/>
      <br/>
      <Projects/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Contact/>
      <br/>
      <br/>
      <Footer/>
      <a href="#header" style={{position:"fixed",right:0, top:450 }}><img className="arrow_icons" src={up}/></a>
    </>
  );
}

export default App;
