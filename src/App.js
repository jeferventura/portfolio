<<<<<<< HEAD
import React from 'react'
import ThemeProvider from './_config/ThemeContext';

import './_assets/css/style.min.css';

import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Journey from './components/Journey';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

=======
import React from "react";
import ThemeProvider from "./_config/ThemeContext";

import "./_assets/css/style.min.css";

import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Journey from "./components/Journey";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
>>>>>>> b70aabc163db74fa5031d4c57eb245a5aab82f1a

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <div id="home"></div>
        <Header />
        <Banner />
<<<<<<< HEAD

        <div id="about"></div>
        <About />

        <div id="journey"></div>
        <Journey />

        <div id="portfolio"></div>
        <Portfolio />

        <div id="contact"></div>
=======
        <div id="about"></div>
        <About />
        <div id="journey"></div>
        <Journey />
        <div id="portfolio"></div>
        <Portfolio />
        <div id="contact"></div>
        <div className="leform-inline" data-id="4"></div>
>>>>>>> b70aabc163db74fa5031d4c57eb245a5aab82f1a
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
