import './App.css';
import {BrowserRoute as router,route} from 'react-router-dom'
import Home from './components/pages/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/pages/Projects';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';

const App=()=> {
  return (
    <router className="App">
      <Navbar/>
      <switch>
        <route path='/' component= {Home} exact>
          <Home/>
        </route>
        <route path='/projects' component= {Projects} exact>
          <Projects/>
        </route>
        <route path='/services' component= {Services} exact>
          <Services/>
        </route>
        <route path='/contact' component= {Contact} exact>
          <Contact/>
        </route>
      </switch>
    </router>
  );
}

export default App;