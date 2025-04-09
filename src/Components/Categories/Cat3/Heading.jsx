import React from "react";
import "./Heading.css";

const Heading = ({ title }) => {
  return (
    <div className="heading-container">
      <h2 className="heading-title">{title}</h2>
      <div className="heading-underline"></div>
    </div>
  );
};

export default Heading;
