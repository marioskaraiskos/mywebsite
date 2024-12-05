import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import Sun and Moon icons
import pic2 from './img/pic2.PNG';
import './App.css';

function App() {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage or default to light
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <form className="container-fluid justify-content-start">
          <div className="buttonContainer">
            <div className="left">
              <button className="marioskaraiskos" type="button" id="marioskaraiskos">
                <span className="letter">M</span>
                <span className="letter">a</span>
                <span className="letter">r</span>
                <span className="letter">i</span>
                <span className="letter">o</span>
                <span className="letter">s</span>
                <span className="letter">_</span>
                <span className="letter">K</span>
                <span className="letter">a</span>
                <span className="letter">r</span>
                <span className="letter">a</span>
                <span className="letter">i</span>
                <span className="letter">s</span>
                <span className="letter">k</span>
                <span className="letter">o</span>
                <span className="letter">s</span>
              </button>
            </div>
            <div className="right">
              <button className="projects" type="button" id="projects">Projects</button>
              <button className="contact">Contact</button>
              {/* Theme Toggle Button */}
              <button className="theme-toggle-btn" onClick={toggleTheme}>
                {theme === "light" ? <FaMoon size={24} /> : <FaSun size={24} />}
              </button>
            </div>
          </div>
        </form>
      </nav>

      <div className="picture-container">
        <div className="picture-container-row">
        <img src={pic2} className="picture"></img>
        <div className="himarios">Hey, I'm Marios Karaiskos  <div className="wave-emoji">👋</div></div></div>
        <div className="status">
        <span className="status-dot online"></span>
        <span className="status-text">Available to work</span>
        </div>
      </div>
      
      <p className="description">
        A passionate and driven 22-year-old software developer currently graduating from New York College Athens,
         i dedicate much of my free time creating projects with different technologies and troubleshoot code on various platforms.
      </p>
    </div>
  );
}

export default App;
