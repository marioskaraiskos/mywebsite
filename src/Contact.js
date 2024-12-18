import React from "react";
import './App.css';
import githublogoblack from "./img/github-mark-white.png";
import linkedin from "./img/linkedin.png";
import githublogowhite from "./img/github-mark.png";  

function Contact({theme}) {
    return (
        <div className="contact-page">
      <div className="github-container">
        <img src={theme === "light" ? githublogoblack : githublogowhite} alt="Github" className="github-icon"/>
        <a href="https://github.com/marioskaraiskos" target="_blank" rel="noopener noreferrer" className="github">
          My Github
        </a>
      </div>
      <div className="linkedin-container">
      <img src={linkedin} alt="Github" className="github-icon"/>
      <a href="https://www.linkedin.com/in/marios-karaiskos/" target="_blank" rel="noopener noreferrer" className="github">
        My LinkedIn
       </a>
      </div>
      </div>
    );
  }

export default Contact;