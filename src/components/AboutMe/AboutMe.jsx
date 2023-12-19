import React from "react";
import { SubHeading, Card } from "../../components";
import { images, data } from "../../constants";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="portfolio__aboutme section__padding bg__black">
      <SubHeading title={"About Me"} />
      <div className="portfolio__aboutme-content">
        <div className="portfolio__aboutme-content_image">
          <img src={images.aboutmelogo} alt="aboutme logo" />
        </div>
        <div className="portfolio__aboutme-content_text">
          <h1 className="headtext__cormorant">I love building stuff!</h1>
          <p className="p__opensans">
            My dad introduced computer to us when I was 5 years old. I witness
            the success and innovation of technology, and how it grew and slowly
            changed into something that we all use in our daily lives. I want to
            be part of that innovation and help create new technologies.
          </p>
        </div>
      </div>
      <div className="portfolio__skills-and-tools_content">
        <div className="portfolio__skills-and-tools_title">
          <SubHeading title={"Skills and Tools"} />
          <p className="p__opensans">
            Here are the things that I can do and offer.
          </p>
        </div>
        <div className="portfolio__skills-and-tools_skills">
          {data.skillSets.map((skill, index) => (
            <Card
              className="portfolio__card"
              title={skill.title}
              description={skill.description}
              image={skill.image}
              key={skill.title + index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
