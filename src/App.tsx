import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
//import Interests from './sections/Interests';
//import Skills from './sections/Skills';
//import Experience from './sections/Experience';
/*import Contact from './sections/Contact';*/
import './styles/main.scss';

const App = () => {
  useEffect(() => {
    document.body.style.opacity = '1';
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Navbar />
        
        <main>
          <Home />
          <About />
         
        </main>
      </div>
    </Router>
  );
};

export default App;