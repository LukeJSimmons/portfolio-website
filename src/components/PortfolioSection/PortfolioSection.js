import './PortfolioSection.css';

import React, { useState } from "react";

const PortfolioSection = () => {

    const [showPortfolio, setShowPortfolio] = useState(false);

    function toggleShowPortfolio() {
        setShowPortfolio(!showPortfolio);
    }

    return (
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
    );
};

export default PortfolioSection;