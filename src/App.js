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

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
    <Header />
    <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
          <div>
            <About/>
          </div>
          <div>
            <Portfolio/>
          </div>
          <div>
            <Resume/>
          </div>
          </>
        ) : (
          <Contact></Contact>
        )}
        <Footer/>
      </main>
    {/* <About/>
    <Portfolio/>
    
    <Contact/> 
     */}
    </div>
  );
}

export default App;
