import React from "react";
import "./components_css/HeroSection.css";

const HeroSection = (props) => {
  return (
    <div className={props.class_name}>
      <img
        loading="lazy"
        className="hero_section_img"
        src={props.hero_img}
        alt="hero-section-img"
        style={{ objectPosition: `${props?.object_position}` }}
      />
      <div className="hero_text_container">
        <h1 className="hero_text">{props.hero_text}</h1>
      </div>
    </div>
  );
};

export default HeroSection;
