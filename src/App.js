import React, { Fragment } from 'react';
import './App.css';

import Home from './Pages/Home'
import AboutMe from './newComponents/Aboutme'
// import SkillTech from './Pages/SkillTech'
// import Internship from './Pages/Internship'
import Projects from './Pages/Projects'
import Navbar from './components/Navbar';
// import Experience from './comp/Experience';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
    </Fragment>
  );
}

export default App;
