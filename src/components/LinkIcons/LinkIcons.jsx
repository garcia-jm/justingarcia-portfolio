import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import "./LinkIcons.css";

const LinkIcons = () => {
  return (
    <div className="portfolio__link-icons">
      <a href="https://github.com/garcia-jm" target="_blank">
        <BsGithub className="portfolio__link-icons_github" />
      </a>
      <a href="https://www.linkedin.com/in/garcia-jm/" target="_blank">
        <BsLinkedin className="portfolio__link-icons_linkedin" />
      </a>
    </div>
  );
};

export default LinkIcons;
