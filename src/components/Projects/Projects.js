import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Project from '../Project/Project';

const Projects = () => (
  <div>
    <Carousel autoplay>
      <Project />
    </Carousel>
  </div>
);

export default Projects;