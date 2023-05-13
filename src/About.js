import React from 'react';
import './About.css';

function About() {
  return (
    <div>
      <div className="header">
        <img src="https://picsum.photos/200" alt="Header" className="header-image" />
      </div>
      <div className="content">
        <h2>About Me</h2>
        <p>
          Hi, I'm Thomas, a software engineer at CGI. In my spare time, I enjoy training kung fu, cooking, and exploring various projects, including experimenting with ChatGPT.
        </p>
        <h2>Skills</h2>
        <ul className="skills">
          <li>
            <span className="skill">Angular</span>
          </li>
          <li>
            <span className="skill">Node.js</span>
          </li>
          <li>
            <span className="skill">JavaScript</span>
          </li>
          <li>
            <span className="skill">Java</span>
          </li>
          <li>
            <span className="skill">C++</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
