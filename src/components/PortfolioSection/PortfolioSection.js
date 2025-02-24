import './PortfolioSection.css';

import React, { useState } from "react";

import Project from '../Project/Project';

const projects = [
    { title: "Software Dev", link: "https://github.com/LukeJSimmons", img: "/images/SoftwareDev.webp" },
    { title: "Praxis", link: "https://lukesimmons.substack.com/p/praxis-my-closing-reflection-newsletter", img: "/images/PraxisLogo.webp" },
    { title: "Game Dev", link: "https://lukedaaduke.itch.io/", img: "/images/RiverSunsetSmall.webp" },
    { title: "Podcast", link: "https://youtube.com/@technicallspodcast", img: "/images/TechnicallsLogo.webp" },
    { title: "Newsletter", link: "https://lukesimmons.substack.com/", img: "/images/Substack.webp" },
    { title: "Graphic Design", link: "https://dribbble.com/LukeJSimmons", img: "/images/NMEIcon3x.webp" },
    { title: "Ruby", link: "https://github.com/LukeJSimmons?tab=repositories&q=&type=&language=ruby&sort=", img: "/images/RubyLogo.webp" },
    { title: "ReactJS", link: "https://github.com/LukeJSimmons?tab=repositories&q=&type=&language=javascript&sort=", img: "/images/ReactLogo.webp" },
  ];
  

const PortfolioSection = () => {

    const [showPortfolio, setShowPortfolio] = useState(false);

    function toggleShowPortfolio() {
        setShowPortfolio(!showPortfolio);
    }

    return (
        <div id="portfolio" className="bottom-border">
              <h2>Portfolio</h2>
              <div id="projectContainer" className="flex">
                  {
                    showPortfolio ? projects.map(project => (<Project key={project.title} title={project.title} link={project.link} img={project.img} />))
                    : 
                    projects.slice(0, 4).map(project => (<Project key={project.title} title={project.title} link={project.link} img={project.img} />))
                  }
              </div>
              {showPortfolio ? (<button id="showLessBtn" onClick={toggleShowPortfolio}>Show Less</button>) : (<button id="showMoreBtn" onClick={toggleShowPortfolio}>Show More</button>)}
          </div>
    );
};

export default PortfolioSection;