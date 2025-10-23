import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <hr />
        <div className="footer-top">
           
            <div className="footer-top-left">
                <p>© 2025 Damien Erin Pontanares. All rights reserved.</p>
            </div>
            <div className="footer-top-right">
                <a href="https://www.facebook.com/damienerinn" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} className="facebookIcon"></FontAwesomeIcon></a>
                <a href="https://www.linkedin.com/in/damien-erin-pontanares-507033347/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="linkedinIcon"></FontAwesomeIcon></a>
                <a href="https://github.com/balemount" target="_blank"><FontAwesomeIcon icon={faGithub} className="githubIcon"></FontAwesomeIcon></a>
            </div>
        </div>
    </div>
  )
}

export default Footer