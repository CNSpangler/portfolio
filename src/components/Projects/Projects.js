import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Project from '../Project/Project';
import projectData from './projectsData.json';

const projectSlides = projectData.map(project => (
  <Project {...project} />
))

const Projects = () => (
  <div>
    <Carousel 
      infiniteLoop 
      useKeyboardArrows 
      autoPlay 
      interval="7000" 
      showThumbs={false}
    >
      {projectSlides}
    </Carousel>
  </div>
);

export default Projects;