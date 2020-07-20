import React from 'react';

const Project = ({alt, img, title, live, github, description}) => (
  <div className="slide-container">
    
    <div className="slide-image-container" >
      <img className="slide-image" alt={alt} src={img} />
    </div>

    <div className="slide-text">
      <div id="slide-header">
        <h2 className="slide-title">{title}</h2>
        <div id="project-links">
          {live && <a href={live} target="_blank" rel="noopener noreferrer">Live Site</a>}
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
      <p>{description}</p>
    </div>
  </div>
);

export default Project;
