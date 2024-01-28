
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation'
import { Banner } from './Components/Banner';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Header from './Components/Header';
import {Contact} from './Components/Contact';
function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation />
      <Banner/>
      <Skills/>
        <Projects/>
      <Experience/>
    
      <Contact/>
    </div>
  );
}

export default App;
