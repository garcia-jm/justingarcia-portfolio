import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Skill, SubHeading } from "../../components";
import "./ProjectItem.css";
const ProjectItem = ({ title, skills, description, imgUrl }) => {
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="portfolio__projectItem">
      <div className="portfolio__projectItem-content">
        <h2 className="p__cormorant">
          <SubHeading title={title} />
        </h2>
        <Skill skills={skills} />
        <p className="p__opensans">{description}</p>
      </div>
      <div className="portfolio__projectItem-images">
        <div
          className="portfolio__projectItem-images_container"
          ref={scrollRef}
        >
          {imgUrl.map((image, index) => (
            <div
              className="portfolio__projectItem-images_card flex__center"
              key={`image-${index + 1}`}
            >
              <img src={image} alt="image" />
            </div>
          ))}
        </div>
        {imgUrl.length > 1 ? (
          <div className="portfolio__projectItem-images_arrows">
            <BsArrowLeftShort
              className="image__arrow-icons"
              onClick={() => scroll("left")}
            />
            <BsArrowRightShort
              className="image__arrow-icons"
              onClick={() => scroll("right")}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
