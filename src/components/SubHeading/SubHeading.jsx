import React from "react";
import "./SubHeading.css";
const SubHeading = ({ title }) => {
  return (
    <div className="portfolio__subheading">
      <h1 className="portfolio__subheading-title p__cormorant">{title}</h1>
      <div className="portfolio__subheading-underline" />
    </div>
  );
};

export default SubHeading;
