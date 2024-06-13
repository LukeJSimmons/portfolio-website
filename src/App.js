import './App.css';

import React, { useEffect, useState } from 'react';

import me from './images/Me.jpg';
import instagram from './images/InstagramLogo.png';
import twitter from './images/twitterLogo.png';
import linkedIn from './images/linkedInLogo.png';

import SubstackSection from './components/SubstackSection/SubstackSection';

function App() {

  // Header script

  let prevScrollPos = window.scrollY;

  window.onscroll = function() {
      const currentScrollPos = window.scrollY;
      const header = document.querySelector('header');

      if (prevScrollPos > currentScrollPos) {
          header.style.top = '0';
      } else {
          header.style.top = '-80px';
      }

      prevScrollPos = currentScrollPos;
  }

  const navBtn = document.getElementById("navBtn");
  const navScreen = document.getElementById("navScreen");

  function handleNavBtnClick() {
      var displayValue = window.getComputedStyle(navScreen).getPropertyValue("display");
      navScreen.style.display = (displayValue === "none") ? "flex" : "none";
  }

  // Projects script

    const [showPortfolio, setShowPortfolio] = useState(false);

    function toggleShowPortfolio() {
        setShowPortfolio(!showPortfolio);
    }


  return (
    <div className="App">
      <header>
          <div id="navScreen" className="flex">
              <a href="#banner">Home</a><br/>
              <a href="#portfolio">Portfolio</a><br/>
              <a href="#about">About Me</a><br/>
              <a href="#contact">Contact</a>
          </div>
          <ul className="flex">
              <li><a href="#banner">Home</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#contact">Contact</a></li>
              <img id="navBtn" src="./resources/images/MoreLines.png" alt='navigation toggle button' onClick={handleNavBtnClick}/>
          </ul>
      </header>
      <main>
          
          <div id="banner" className="flex">
              <h1>Luke Simmons</h1>
              <h3>Coder - Designer - Podcaster</h3>
          </div>
          <SubstackSection/>
          <div id="podcast-section">
              
          </div>
          <div id="portfolio" className="bottom-border">
              <h2>Portfolio</h2>
              <div id="projectContainer" className="flex">
                  <a className="project" id="art" href="https://dribbble.com/LukeJSimmons" target="_blank" rel="noreferrer">
                      <h3>Artwork</h3>
                  </a>
                  <a className="project" id="gameDev" href="https://lukedaaduke.itch.io/" target="_blank" rel="noreferrer">
                      <h3>Game Dev</h3>
                  </a>
                  <a className="project" id="podcast" href="https://open.spotify.com/show/27wK3lUWVuqdX6sdGt65dW?si=f37f93392a7d4997" target="_blank" rel="noreferrer">
                      <h3>Podcast</h3>
                  </a>
                  <a className="project" id="newsletter" href="https://lukesimmons.substack.com/" target="_blank" rel="noreferrer">
                      <h3>Newsletter</h3>
                  </a>
                  {showPortfolio ? (<>
                  <a className="project" id="thisWebsite" href="#banner">
                      <h3>This Website</h3>
                  </a>
                  <a className="project" id="koineClothing" href="https://lukesimmons.substack.com/" target="_blank" rel="noreferrer">
                      <h3>Business Starting</h3>
                  </a>
                  <a className="project" id="marketing" href="https://lukesimmons.substack.com/" target="_blank" rel="noreferrer">
                      <h3>Marketing</h3>
                  </a>
                  <a className="project" id="music" href="https://youtube.com/@lucasjsimmons/" target="_blank" rel="noreferrer">
                      <h3>Music</h3>
                  </a></>) : (<></>)}
              </div>
              {showPortfolio ? (<button id="showLessBtn" onClick={toggleShowPortfolio}>Show Less</button>) : (<button id="showMoreBtn" onClick={toggleShowPortfolio}>Show More</button>)}
          </div>
          <div id="about" className="flex">
              <div className="container">
                  <h2>About Me</h2>
                  <p>I’m Luke! I’m an aspiring creator of all sorts. I love making programs, art, music, games, and more.
                      I’m most skilled in programming and am looking to build a career in it. My love for creating comes from my love for my Creator.
                      I seek to honor and glorify Him in all that I do.</p>
                  {/* <a href="./aboutme.html"><button>Read More</button></a> */}
              </div>
              <img src={me} alt='Luke Simmons in a suit' />
          </div>
          <div id="contact" className="flex">
              <div>
                  <h2>Contact</h2>
                  <h3>lucasjsimmons@yahoo.com</h3>
              </div>
              <div>
                  <h2>Follow</h2>
                  <br/>
                  <br/>
                  <a href="https://www.instagram.com/lordlucasjames/" target="_blank" rel="noreferrer"><img src={instagram} alt='Instagram' /></a>
                  <a href="https://twitter.com/LukeJSimmons/" target="_blank" rel="noreferrer"><img src={twitter} alt='Twitter' /></a>
                  <a href="https://www.linkedin.com/in/lukejsimmons1689/" target="_blank" rel="noreferrer"><img src={linkedIn} alt='LinkedIn' /></a>
              </div>
          </div>
      </main>
      <footer className="flex">
          <p>by Luke Simmons @2024</p>
          <p id="footerEmail">lucasjsimmons@yahoo.com</p>
      </footer>
    </div>
  );
}

export default App;
