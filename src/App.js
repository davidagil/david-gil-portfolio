import React, { useState, useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Content from './components/Content';

const App = () => {

  const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
      handleResize();
  }, []);

  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Content/>
      <Tech/>
      <div style={isMobile ? {height: '0px'} : {height: '800px'}}></div>
      <Projects/>
      <div style={isMobile ? {height: '0px'} : {height: '800px'}}></div>
      <Contact/>
    </div>
  );
}

export default App;
