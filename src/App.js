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
    <div className='bg-[#f8fafc]'>
      <Navbar/>
      <Home/>
      <About/>
      <div style={isMobile  ? {height: '200px'} : {height: '300px'}}></div>
      <Content/>
      <div style={isMobile ? {height: '200px'} : {height: '100px'}}></div>
      <Tech/>
      <div style={isMobile ? {height: '0px'} : {height: '1200px'}}></div>
      <Projects/>
      <div style={isMobile ? {height: '0px'} : {height: '1100px'}}></div>
      <Contact/>
    </div>
  );
}

export default App;
