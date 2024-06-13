import './HeaderSection.css';

import React from "react";

import moreLines from '../../images/WEBP/MoreLines.webp';

const HeaderSection = () => {

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

    const navScreen = document.getElementById("navScreen");

    function handleNavBtnClick() {
        var displayValue = window.getComputedStyle(navScreen).getPropertyValue("display");
        navScreen.style.display = (displayValue === "none") ? "flex" : "none";
    }
    
    return (
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
              <img id="navBtn" src={moreLines} alt='navigation toggle button' onClick={handleNavBtnClick}/>
          </ul>
      </header>
    );
};

export default HeaderSection;