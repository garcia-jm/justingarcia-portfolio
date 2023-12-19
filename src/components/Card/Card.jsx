import React from "react";
import "./Card.css";
const Card = ({ title, description, image }) => {
  return (
    <div className="portfolio__skill-and-tools_card gradient__bg">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="portfolio__skill-and-tools_icons">
        {image.map((item, index) => (
          <div
            className="portfolio__skill-and-tools_icon-and-tooltip"
            data-tooltip={item.name}
            style={{
              backgroundImage: `url(${item.imgUrl})`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Card;
