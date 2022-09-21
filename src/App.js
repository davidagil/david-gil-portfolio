import React from 'react';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Tech/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
