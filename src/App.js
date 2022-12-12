import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {

  return (
    <div>

      <Header />

      <main>
        <Hero />

        <About />

        <Portfolio />

        <Contact />
      </main>
      
    </div>
  );
}

export default App;
