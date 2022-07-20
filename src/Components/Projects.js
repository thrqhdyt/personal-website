import React from 'react';
import '../Styles/projects.css';
import ProjectsList from './ProjectsList';
import Bounce from 'react-reveal/Bounce';

function Projects() {
  return (
    <div className="projects" id='projects'>
      <div className="projects-title">
        <h2>My Lates Projects</h2>
        <p>theese are some of the projects have done</p>
      </div>
      <div className="project-list">
        <Bounce right duration={1500}>
          <ProjectsList />
          </Bounce>
      </div>
    </div>
  );
}

export default Projects;
