import React from "react";
import HeroSection from "../components/HeroSection";
import HeroImg from "../assets/27.jpg";
const About = () => {
  return (
    <div>
      <HeroSection
        class_name={"hero_section"}
        hero_img={HeroImg}
        hero_text={"About"}
      />
    </div>
  );
};

export default About;
