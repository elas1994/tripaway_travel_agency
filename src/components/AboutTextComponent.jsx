import React from "react";
import "./components_css/AboutTextComponent.css";

const AboutTextComponent = (props) => {
  return (
    <div className="about_text_container">
      <h1 className="about_heading">{props.heading}</h1>

      <p className="about_description">{props.description}</p>
    </div>
  );
};

export default AboutTextComponent;
