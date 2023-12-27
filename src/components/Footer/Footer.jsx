import React from "react";
import LinkIcons from "../LinkIcons/LinkIcons";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="portfolio__footer section__padding bg__black" id="contact">
      <div className="portfolio__footer-copyright">
        <h1 className="p__cormorant">Justin Mari Garcia</h1>
        <p className="p__opensans">
          &copy; 2023, Built and designed by Justin Mari Garcia
        </p>
      </div>
      <div className="portfolio__footer-links">
        <p className="p__cormorant">Links</p>
        <p className="p__opensans">
          <a href="#about">About Me</a>
        </p>
        <p className="p__opensans">
          <a href="#projects">Projects</a>
        </p>
        <p className="p__opensans">
          <a href="#contact">Contact</a>
        </p>
      </div>
      <div className="portfolio__footer-contact">
        <p className="p__cormorant">Get in touch</p>
        <p className="p__opensans portfolio__footer-email">
          garcia.justinmari@gmail.com
        </p>
        <p>
          <LinkIcons />
        </p>
      </div>
    </div>
  );
};

export default Footer;
