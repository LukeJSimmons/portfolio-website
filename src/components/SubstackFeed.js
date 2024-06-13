import React, { useEffect } from "react";

const SubstackFeed = () => {
    useEffect(() => {
        window.SubstackFeedWidget = {
            substackUrl: "lukesimmons.substack.com",
            posts: 3,
            layout: "center",
            colors: {
            primary: "#aec3d6",
            secondary: "#aec3d6",
            background: "#0b1424",
            },
        };

        const script = document.createElement('script');
        script.src = "https://substackapi.com/embeds/feed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div id="substack-feed-embed"></div>;
};

export default SubstackFeed;