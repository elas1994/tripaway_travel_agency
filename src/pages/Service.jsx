import React from "react";
import HeroSection from "../components/HeroSection";
import ServiceHeroImg from "../assets/22.jpg";
import RecentTrips from "../components/RecentTrips";

const Service = () => {
  return (
    <div>
      <HeroSection
        class_name={"hero_section"}
        hero_img={ServiceHeroImg}
        hero_text={"Service"}
      />

      <RecentTrips />
    </div>
  );
};

export default Service;
