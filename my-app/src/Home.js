import React from "react";
import pic2 from './img/pic2.PNG';
import './App.css';
import './techstack';
import TechStack from "./techstack";

function Home() {
  return (
    <div>
      <div className="picture-container">
        <div className="picture-container-row">
          <img src={pic2} className="picture" alt="Profile" />
          <div className="himarios">
            Hey, I'm Marios Karaiskos <div className="wave-emoji">👋</div>
          </div>
        </div>
        <div className="status">
          <span className="status-dot online"></span>
          <span className="status-text">Available to work</span>
        </div>
      </div>

      <p className="description">
        A passionate and driven 22-year-old software developer currently graduating from New York College Athens,
        I dedicate much of my free time creating projects with different technologies and troubleshooting code on various platforms.
      </p>

      <p className="tech-stack">current tech stack:</p>
      <div className="tech-stack-div">
      <TechStack />
      </div>
    </div>
  );
}

export default Home;
