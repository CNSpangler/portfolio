import React from 'react';

const Project = () => (
  <div className="slide-container">
    <div className="slide-element" >
      <img alt="DisasterProof shield logo" src="disasterproof.png" />
    </div>
    <div className="slide-element slide-text">
      <div id="slide-header">
        <h1>DisasterProof</h1>
        <div id="project-links">
          <a href="https://disasterproof.me">Live Site</a>
          <a href="https://github.com/Safety-Dance/disaster-prep-app">GitHub</a>
        </div>
      </div>
      <p>I conceived of DisasterProof as a way to make home disaster preparation less overwhelming. My team helped make this vision a reality in a one-week sprint using vanilla JavaScript.</p>
    </div>
  </div>
);

export default Project;