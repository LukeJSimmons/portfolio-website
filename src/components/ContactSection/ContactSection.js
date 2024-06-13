import './ContactSection.css';

import React from "react";

import instagram from '../../images/InstagramLogo.png';
import twitter from '../../images/twitterLogo.png';
import linkedIn from '../../images/linkedInLogo.png';

const ContactSection = () => {
    return (
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
    );
};

export default ContactSection;