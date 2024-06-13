import './BannerSection.css';

import React from "react";

import bannerTitle from '../../images/WEBP/WebsiteBannerTitle.webp';

const BannerSection = () => {
    return (
        <div id="banner" className="flex">
            <img src={bannerTitle} alt='Luke Simmons: Coder, Designer, Podcaster'/>
        </div>
    );
};

export default BannerSection;