import './Project.css';

import React from "react";

const Project = ({title, link, img}) => {
    return (
        <a className="project" href={link} style={{backgroundImage: `url(${img})`}} target="_blank" rel="noreferrer">
            <h3>{title}</h3>
        </a>
    );
};

export default Project;