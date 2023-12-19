import React from "react";
import "./Skill.css";
const Skill = ({ skills }) => {
  return (
    <div className="portfolio__skill p__opensans">
      {skills.map((skill) => (
        <p>{skill}</p>
      ))}
    </div>
  );
};

export default Skill;
