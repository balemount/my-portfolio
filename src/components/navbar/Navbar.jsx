import React from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1 id="nav-name">damien<span>erin</span></h1>
        <ul className="nav-menu">
          <li>
            <AnchorLink className="anchor-link" offset={100} href="#home">
              <p>Home</p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={200} href="#about">
              <p>About Me</p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={200} href="#projects">
              <p>Projects</p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={200} href="#certifications">
              <p>Certifications</p>
            </AnchorLink>
          </li>
        </ul>
        <div className="nav-contact"><AnchorLink className="anchor-link" offset={80} href="#contact">Contact Me</AnchorLink></div>
    </div>
  )
}

export default Navbar