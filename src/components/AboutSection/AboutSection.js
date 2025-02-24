import './AboutSection.css';

import React from "react";

const AboutSection = () => {
    return (
        <div id="about" className="flex">
              <div className="container">
                  <h2>I make things.</h2>
                  <p>
                    I make things that solve problems. I make things better, easier, and more efficient.
                    Most importantly, I make things that I love. That I want in this world. People far better and smarter
                    than me have done this before me, and I want to follow in their footsteps. Humans have great potential,
                    and I want to live up to mine.
                  </p>
                  {/* <a href="./aboutme.html"><button>Read More</button></a> */}
              </div>
              <img src='/images/Me.webp' alt='Luke Simmons' />
          </div>
    );
};

export default AboutSection;