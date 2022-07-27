import React, { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {

  return (
    <div>
    <Header />
    <Nav/>
    <About/>
    <Portfolio/>
    <Resume/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
