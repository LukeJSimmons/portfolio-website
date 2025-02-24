import './App.css';

import React from 'react';

import HeaderSection from './components/HeaderSection/HeaderSection';
import BannerSection from './components/BannerSection/BannerSection';
import SubstackSection from './components/SubstackSection/SubstackSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import AboutSection from './components/AboutSection/AboutSection';
import ContactSection from './components/ContactSection/ContactSection';
import FooterSection from './components/FooterSection/FooterSection';

function App() {
  return (
    <div className="App">
      <HeaderSection/>
      <main>
          <BannerSection/>
          <PortfolioSection/>
          <SubstackSection/>
          <AboutSection/>
          <ContactSection/>
      </main>
      <FooterSection/>
    </div>
  );
}

export default App;
