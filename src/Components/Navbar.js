import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../Styles/navbar.css';

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">
          <h3>Thoriq</h3>
        </div>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <i className="fas fa-align-center"></i>
        </button>

        <div className={isNavExpanded ? 'nav-item expand ' : 'nav-item'}>
          <ul>
            <li className="nav-list left-effect">
              <Link to="services" spy={true} smooth={true} offset={0} duration={500}>
                <a href="Services" className="nav-link">
                  Services
                </a>
              </Link>
            </li>
            <li className="nav-list left-effect">
              <Link to="projects" spy={true} smooth={true} offset={0} duration={750}>
                <a href="Services" className="nav-link">
                  Project
                </a>
              </Link>
            </li>

            <li className="nav-list left-effect">
              <Link to="contact" spy={true} smooth={true} offset={0} duration={1000}>
                <a href="Services" className="nav-link">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="phone-number">
          <p>+628221877230</p>
          <i className="fas fa-phone-alt"></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
