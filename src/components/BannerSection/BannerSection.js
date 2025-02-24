import './BannerSection.css';

import React from "react";

const BannerSection = () => {
    return (
        <div id="banner" className="flex">
            <h1 className='bowlby-one-sc-regular'><em>Luke Simmons</em></h1>
            <hr className='rounded' />
            <h4 className='bowlby-one-sc-regular'>Coder ~ Designer ~ Podcaster</h4>
            {/* <img src={bannerTitle} alt='Luke Simmons: Coder, Designer, Podcaster'/> */}
        </div>
    );
};

export default BannerSection;