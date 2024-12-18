import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import Sun and Moon icons
import './App.css';
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "./Projects";
import Contact from "./Contact";

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
    <Router basename="/">
      <div className="App">
        <nav className="navbar">
          <form className="container-fluid justify-content-start">
            <div className="buttonContainer">
              <div className="left">
                <Link to="/" className="marioskaraiskos">
                  <span className="letter">M</span>
                  <span className="letter">A</span>
                  <span className="letter">R</span>
                  <span className="letter">I</span>
                  <span className="letter">O</span>
                  <span className="letter">S</span>
                  <span className="letter">_</span>
                  <span className="letter">K</span>
                  <span className="letter">A</span>
                  <span className="letter">R</span>
                  <span className="letter">A</span>
                  <span className="letter">I</span>
                  <span className="letter">S</span>
                  <span className="letter">K</span>
                  <span className="letter">O</span>
                  <span className="letter">S</span>
                </Link>
              </div>
              <div className="right">
                <Link to="/projects" className="projects">
                  Projects
                </Link>
                <Link to="/contact" className="contact">
                  Contact
                </Link>
                {/* Theme Toggle Button */}
                <button className="theme-toggle-btn" onClick={toggleTheme}>
                  {theme === "light" ? <FaMoon size={24} /> : <FaSun size={24} />}
                </button>
              </div>
            </div>
          </form>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;