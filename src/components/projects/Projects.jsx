import React from 'react'
import './Projects.css';
import projects_data from '../../assets/projects_data.js';
import baLogo from '../../assets/ba_logo.png';
import exLogo from '../../assets/ex_logo.png';
import starLogo from '../../assets/star_logo.png';

const Projects = () => {
  return (
    <div id="projects" className="projects">
        <div className="projects-title">
            <h1>My <span>Projects</span></h1>
        </div>
        <div className="project-container">
            {projects_data.map((project, index) => {
                return (
                  <div className="project-card" key={index}>
                    <a href={project.p_githublink} target="_blank">
                        <img src={project.p_img} alt={project.p_name} />
                        <div className="overlay">{project.p_name}</div>
                    </a>
                  </div>
                )
            })}
        </div>

        <div className="project-info">
          <div className="project-item">
            <div className="project-item-txt">
              <h1>Belmont's Arcade: A Personal Gaming Journal</h1>
              <h2>Creator</h2>
              <h3>HTML, CSS, JavaScript</h3>
              <p>I made this project as a way to polish my web development skills, specifically with HTML, CSS, and JavaScript. Belmont's Arcade is my own personal gaming journal that I can share with my friends. It has the games that are currently in my rotation, my gaming backlogs, wishlist, reviews, and my most favorite games of all time. It is currently deployed through Vercel. I'm planning on keeping this website running and active as I have always had a passion for video games.</p>
            </div>
            <div className="project-item-img">
              <img src={baLogo} alt="Belmont's Arcade Logo" />
            </div>
          </div>

          <div className="project-item">
            <div className="project-item-txt">
              <h1>e-Xtract: An E-Waste Extraction Assistant Mobile Application</h1>
              <h2>Co-Creator</h2>
              <h3>Flutter, YOLOv11</h3>
              <p>My friends and I created e-Xtract as our thesis project. The four of us planned, programmed, and presented the project with great success. It was developed using Flutter for Android mobile phones, and it implements the YOLOv11 algorithm which is used for detecting valuable components in electronic waste, specifically in mobile phones, desktop computers, landline phones, laptops, and wireless routers.</p>
            </div>
            <div className="project-item-img">
              <img src={exLogo} alt="e-Xtract Logo" />
            </div>
          </div>

          <div className="project-item">
            <div className="project-item-txt">
              <h1>Starboard: A Productivity Web Extension</h1>
              <h2>Co-Creator</h2>
              <h3>HTML, CSS, JavaScript, Web Extension</h3>
              <p>I started this project with a friend for us to explore the field of web extensions. It is written in fundamental web development languages (HTML, CSS, JavaScript). Starboard turns the empty New Tab page in browsers to a lightweight and interactive productivity dashboard. Some of its feaures are: a to-do list, a pomodoro timer, a calendar, and a motivational quote generator.</p>
            </div>
            <div className="project-item-img">
              <img src={starLogo} alt="Starboard Logo" />
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Projects