import React from 'react'
import './_assets/css/style.min.css';

import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Journey from './components/Journey';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <div id="home"></div>
        <Header />
        <Banner />

        <div id="about"></div>
        <About />

        <div id="journey"></div>
        <Journey />

        <div id="portfolio"></div>
        <Portfolio />

        <div id="contact"></div>
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
