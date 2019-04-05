import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AdditionalServices from './components/AdditionalServices';
import Services from './components/Services';
import ServiceStats from './components/ServiceStats';
import OurTeam from './components/OurTeam';
import ContactBar from './components/ContactBar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ContactBar />
        <Hero />
        <Services />
        <OurTeam />
        <AdditionalServices />
        <ServiceStats />
        <Footer />
      </div>
    );
  }
}

export default App;
