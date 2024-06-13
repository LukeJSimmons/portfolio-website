import './ContactSection.css';

import React from "react";

import instagram from '../../images/WEBP/InstagramLogo.webp';
import twitter from '../../images/WEBP/twitterLogo.webp';
import linkedIn from '../../images/WEBP/linkedInLogo.webp';

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