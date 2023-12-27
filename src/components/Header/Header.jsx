import React from "react";
import LinkIcons from "../LinkIcons/LinkIcons";
import "./Header.css";
const Header = () => {
  return (
    <div className="portfolio__header section__padding" id="home">
      <div className="portfolio__header-content">
        <h1 className="portfolio__header-name headtext__cormorant">
          Hi, I'm Justin
        </h1>
        <div className="portfolio__header-title p__cormorant">
          <p>a</p>
          <div className="portfolio__header-title_words">
            <span>Front-End Developer</span>
            <span>Back-End Developer</span>
            <span>Software Developer</span>
            <span>Web Developer</span>
            <span>Front-End Developer</span>
          </div>
        </div>
        <div class="portfolio__header-link_icons">
          <LinkIcons />
        </div>
        <div className="portfolio__header-message p__opensans">
          Welcome to my page. I love making websites beautiful, responsive and
          interactive. Exploring and discovering new things in programming is
          what I love doing and you know what's crazy?{" "}
          <span className="portfolio__header-message_highlight p__opensans">
            THERE'S A PLETHORA OF STUFF IN PROGRAMMING TO LEARN!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
