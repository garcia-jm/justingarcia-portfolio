import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div
      className="portfolio__aboutme bg__black section__padding info__wrapper"
      id="about"
    >
      <div className="portfolio__aboutme-aboutme">
        <div className="portfolio__aboutme-title">
          <SubHeading title="about me" />
        </div>
        <div className="portfolio__aboutme-content">
          <div className="portfolio__aboutme-content_me">
            <h1 className="headtext__cormorant">I love building stuff!</h1>
            <p className="p__opensans">
              My dad introduced computer to us when I was 5 years old. I witness
              the success and innovation of technology, and how it grew and
              slowly changed into something that we all use in our daily lives.
              I want to be part of that innovation and help create new
              technologies.
            </p>
          </div>
          <div className="portfolio__aboutme-content_image">
            <img src={images.aboutme} alt="" />
          </div>
        </div>
      </div>
      <div className="portfolio__aboutme-skills">
        <div className="portfolio__about-skills_title">
          <SubHeading title="skills and tools" />
        </div>
        <div className="portfolio__aboutme-images">
          <div className="portfolio__aboutme-images_skill-icon">
            <img src={images.csharp} alt="csharp" />
            <p className="p__opensans">C#</p>
          </div>
          <div className="portfolio__aboutme-images_skill-icon">
            <img src={images.css3} alt="css3" />
            <p className="p__opensans">CSS3</p>
          </div>
          <div className="portfolio__aboutme-images_skill-icon">
            <img src={images.expressJs} alt="expressJs" />
            <p className="p__opensans">Express.js</p>
          </div>
          <div className="portfolio__aboutme-images_skill-icon">
            <img src={images.git} alt="git" />
            <p className="p__opensans">Git</p>
          </div>
          <div className="portfolio__aboutme-images_skill-icon">
            <img src={images.github} alt="github" />
            <p className="p__opensans">GitHub</p>
          </div>
          <div className="portfolio__aboutme-images_skill-icon">
            <img src={images.html5} alt="html5" />
            <p className="p__opensans">HTML5</p>
          </div>
          <div className="portfolio__aboutme-images_skill-icon">
            <img src={images.java} alt="java" />
            <p className="p__opensans">Java</p>
          </div>
          <div className="portfolio__aboutme-images_skill-icon">
            <img src={images.javascript} alt="javascript" />
            <p className="p__opensans">JavaScript</p>
          </div>
          <div className="portfolio__aboutme-images_skill-icon">
            <img src={images.jquery} alt="jquery" />
            <p className="p__opensans">jQuery</p>
          </div>
          <div className="portfolio__aboutme-images_skill-icon">
            <img src={images.nodejs} alt="nodejs" />
            <p className="p__opensans">Node.js</p>
          </div>
          <div className="portfolio__aboutme-images_skill-icon">
            <img src={images.redis} alt="redis" />
            <p className="p__opensans">Redis</p>
          </div>
          <div className="portfolio__aboutme-images_skill-icon">
            <img src={images.restapi} alt="restapi" />
            <p className="p__opensans">RESTful Api</p>
          </div>
          <div className="portfolio__aboutme-images_skill-icon">
            <img src={images.react} alt="react" />
            <p className="p__opensans">React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
