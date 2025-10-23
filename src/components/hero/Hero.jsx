import React from 'react'
import './Hero.css'
import profilepic from '../../assets/profilepic.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home" className="hero">
        <div className="hero-text">
            <h1>Hey! I'm <span>Damien Pontanares</span>.</h1>
            <h2>A computer science student and an aspiring frontend developer.</h2>
            <p>I am a future <strong>Computer Science - Software Engineering</strong> graduate interested in learning more and practicing my skills in frontend and UI/UX development.</p>
            <div className="hero-action">
                <div className="hero-contact"><AnchorLink className="anchor-link" offset={80} href="#contact">Contact Me</AnchorLink></div>
                <a
                  className="hero-resume"
                  href="https://docs.google.com/document/d/1ppEj8YVsIZX3ir9xQhxCapDy20tbmprxUy4kqa3o9Lw/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My Resume
                </a>
            </div>
        </div>
        <div className="hero-image">
            <img src={profilepic} alt="Profile"/>
        </div>
    </div>
  )
}

export default Hero