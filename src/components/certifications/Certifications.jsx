import React from 'react'
import './Certifications.css';
import pmiBadge from '../../assets/pmi-badge.png';
import pythonBadge from '../../assets/python-badge.png';
import javaBadge from '../../assets/java-badge.png';

const Certifications = () => {
  return (
    <div id="certifications" className="certifications">
        <div className="certifications-title">
            <h1>My <span>Certifications</span></h1>
        </div>
        <div className="certifications-content">
            <div className="certification-item">
                <a href="https://www.credly.com/users/damien-erin-pontanares/badges#credly" target="_blank"><img src={pmiBadge} alt="PMI Badge" /></a>
                <h3>PMI - Project Management Ready</h3>
                <p>Issued on 03/25/2025</p>
            </div>
            <div className="certification-item">
                <a href="https://www.credly.com/users/damien-erin-pontanares/badges#credly" target="_blank"><img src={pythonBadge} alt="Python Badge" /></a>
                <h3>Certiport - IT Specialist Python</h3>
                <p>Issued on 07/14/2024</p>
            </div>
            <div className="certification-item">
                <a href="https://www.credly.com/users/damien-erin-pontanares/badges#credly" target="_blank"><img src={javaBadge} alt="Java Badge" /></a>
                <h3>Certiport - IT Specialist Java</h3>
                <p>Issued on 12/08/2024</p>
            </div>
        </div>
    </div>
  )
}

export default Certifications