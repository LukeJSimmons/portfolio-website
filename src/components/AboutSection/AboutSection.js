import './AboutSection.css';

import React from "react";

import me from '../../images/Me.jpg';

const AboutSection = () => {
    return (
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
    );
};

export default AboutSection;