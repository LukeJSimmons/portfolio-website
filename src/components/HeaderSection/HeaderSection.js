import './HeaderSection.css';

import React, { useState } from "react";

const HeaderSection = () => {

    const [navScreenShow, setNavScreenShow] = useState(false);

    function handleNavBtnClick() {
        setNavScreenShow(!navScreenShow);
    }

    let prevScrollPos = window.scrollY;

    if (!navScreenShow) {
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
    } else {
        window.onscroll = function() {
            return;
        }
    }
    
    return (
        <header>
          {navScreenShow ? (<div id="navScreen" className="flex">
              <a href="#banner">Home</a><br/>
              <a href="#portfolio">Portfolio</a><br/>
              <a href="#about">About Me</a><br/>
              <a href="#contact">Contact</a>
          </div>) : (<></>)}
          <ul className="flex">
              <li><a href="#banner">Home</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#contact">Contact</a></li>
              <img id="navBtn" src='/images/MoreLines.webp' alt='navigation toggle button' onClick={handleNavBtnClick}/>
          </ul>
      </header>
    );
};

export default HeaderSection;