
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation'
import { Banner } from './Components/Banner';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner/>
      <Skills/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;
