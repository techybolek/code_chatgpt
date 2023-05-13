import React from 'react';
import projects from './projects.json';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="project-gallery">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {Object.entries(project.links).map(([label, url], linkIndex) => (
                  <a key={linkIndex} href={url} target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
