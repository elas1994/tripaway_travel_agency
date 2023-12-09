import React from "react";
import HeroSection from "../components/HeroSection";
import ContactHeroImg from "../assets/26.jpg";

const Contact = () => {
  return (
    <div>
      <HeroSection
        class_name={"hero_section"}
        hero_img={ContactHeroImg}
        hero_text={"Contact"}
      />
    </div>
  );
};

export default Contact;
