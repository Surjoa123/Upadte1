import './App.css';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Navbar from "./components/Navbar/Navbar";
import Skills from './components/Skills/Skills';

import Works from './components/Works/Works';
import Works1 from './components/Works/Works1';
import Works2 from './components/Works/Works2';
// import Works3 from './components/Works/Works3';

function App() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Experience/>
      <Works/>
      <Works1/>
      <Works2/>
      {/* <Works3/> */}
       
    
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
