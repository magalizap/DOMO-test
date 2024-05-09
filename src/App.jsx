import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Studies from './components/studies/Studies';
import Footer from './components/Footer/Footer';


function App() {


  return (
    <>
      <div className='bg1'>
        <NavBar/>
        <Home/>
        <Services/>
        <Skills/>
      </div>
      <div className="bg2"></div>
      <div className="bg3">
        <Studies/>
      </div>
      <div className="bg4">
        <Footer/>
      </div>
    </>
  )
}

export default App


/**
 *       <div className='bg1'>
        <NavBar/>
        <Home/>
        <Services/>
      </div>
      <div className="bg2">
        <Skills/>
      </div>
      <div className="bg3">
        <Studies/>
      </div>
      <div className="bg4">
        <Footer/>
      </div>
 */