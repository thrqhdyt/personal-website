import React from 'react';
import cv from '../document/curiculum-vitae.pdf';

function ServicesContent() {
  return (
    <div className="services-content">
      <h2>What Do I Help?</h2>
      <p>I will help you with finding a solution and solve your problem. Iam Junior Front-End Developer but i have a huge motivation for become a programmer expert. </p>
      <a className="btn-download" href={cv} download>
        Download CV
      </a>
    </div>
  );
}

export default ServicesContent;
