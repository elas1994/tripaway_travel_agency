import React from "react";
import HeroSection from "../components/HeroSection";
import GalleryHeroImg from "../assets/33.jpg";

const Gallery = () => {
  return (
    <div>
      <HeroSection
        class_name={"hero_section"}
        hero_img={GalleryHeroImg}
        hero_text={"Gallery"}
        object_position={"bottom"}
      />
    </div>
  );
};

export default Gallery;
