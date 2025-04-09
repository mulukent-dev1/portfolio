import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home.jsx';
import About from './Components/About';
import Work from './Components/Work';
import Skills from './Components/Skills';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/styles.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;