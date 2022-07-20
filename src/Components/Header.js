import React from 'react';
import '../Styles/header.css';
import HeaderImage from './HeaderImage';

function Header() {
  return (
    <div className="header-content">
      <div className="title-content">
        <h1>
          Hey There, <br /> I'm Thoriq
        </h1>
        <h4>Front End Web Developer</h4>

        <p>@thoriq1130@gmail.com</p>

        <div className="text-projects">
          <h3>
            10<span>+</span>
          </h3>
          <p>
            Project <br /> Done
          </p>
        </div>
      </div>

      <HeaderImage />

      <div className="text-content">
        <div className="top-text">
          <p>Front End Developer is practice of producing HTML, CSS and JavaScript for a website</p>
        </div>
        <div className="bottom-text">
          <span className="html-icons">
            <i className="fab fa-html5"></i>
          </span>
          <span className="css-icons">
            <i className="fab fa-css3-alt"></i>
          </span>
          <span className="js-icons">
            <i className="fab fa-js"></i>
          </span>
          <span className="react-icons">
            <i className="fab fa-react"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
