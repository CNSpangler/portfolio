import React from 'react';

const Project = ({alt, img, title, live, github, description}) => (
  <div className="slide-container">
    <div className="slide-element" >
      <img alt={alt} src={img} />
    </div>
    <div className="slide-element slide-text">
      <div id="slide-header">
        <h2>{title}</h2>
        <div id="project-links">
          <a href={live}>Live Site</a>
          <a href={github}>GitHub</a>
        </div>
      </div>
      <p>{description}</p>
    </div>
  </div>
);

export default Project;