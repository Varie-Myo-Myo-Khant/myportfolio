
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { AllProjects } from './Components/AllProjects';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </div>
  );
}

export default App;
