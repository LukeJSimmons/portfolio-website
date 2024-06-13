import './SubstackSection.css';

import React from "react";

import SubstackFeed from "../SubstackFeed";

const SubstackSection = () => {
    return (
        <div id="substack" className="bottom-border flex">
            <h2>Newsletter</h2>

            <SubstackFeed/>

            <a href="https://lukesimmons.substack.com/" target="_blank" rel="noreferrer"><button>See More</button></a>
        </div>
    );
};

export default SubstackSection;