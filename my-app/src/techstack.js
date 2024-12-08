import React from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import "./TechStack.css"; // Add a CSS file

const TechStack = () => {
  const techs = [
    { name: "Next.js", icon: <SiNextdotjs />, color: "green" },
    { name: "HTML 5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS 3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {techs.map((tech) => (
        <div
          key={tech.name}
          className="tech-item"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <div
            className="tech-icon"
            style={{ fontSize: "3rem", color: "inherit",  margin: "30px" }}
            onMouseEnter={(e) => (e.target.style.color = tech.color)}
            onMouseLeave={(e) => (e.target.style.color = "inherit")}
          >
            {tech.icon}
          </div>
          <span style={{ marginTop: "0.5rem", fontSize: "1rem", textAlign: "center" }}>
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
