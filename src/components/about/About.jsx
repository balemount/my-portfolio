import React from 'react'
import './About.css';

const About = () => {
  return (
    <div id="about" className="about">
        <div className="about-title">
            <h1>About <span>Me</span></h1>
        </div>
        <div className="about-top">
            <h1><span>University:</span> FEU Institute of Technology</h1>
            <h2><span>Degree:</span> Bachelor of Science in Computer Science with Specialization in Software Engineering</h2>
            <h2><span>Relevant Coursework:</span> Web Development, Mobile App Development, Database Management, Project Management, Image Processing, Networking Fundamentals</h2>
            <h2><span>Interests & Hobbies:</span> Video games, Music, Playing drums, Reading comic books</h2>
            <h2><span>Other Skills:</span> English and Filipino fluency, Basic video editing, Communication and team handling, Basic graphic design</h2>
        </div>
        <div className="about-content">
            <div className="about-left">
                <p>I'm currently studying at <strong>FEU Institute of Technology</strong>. When I'm not doing academic work or progamming, I spend a huge chunk of my time playing video games. <strong>Feel free to add me on Steam!</strong></p>
            </div>
            <div className="about-right">
                <h2>Technical Skills</h2>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"65%"}}/></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>C++</p><hr style={{width:"30%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"55%"}}/></div>
                    <div className="about-skill"><p>React</p><hr style={{width:"45%"}}/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About