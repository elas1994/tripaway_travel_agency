import React from "react";
import "./components_css/RecentTrips.css";
import RecentTripCard from "./RecentTripCard";

import CardImg1 from "../assets/35.jpg";
import CardImg2 from "../assets/19.jpg";
import CardImg3 from "../assets/29.jpg";

const RecentTrips = () => {
  return (
    <div className="recent_trips">
      <h1 className="section_heading">Recent Trips</h1>
      <p className="section_subheading">
        Discover unique destinations Together
      </p>

      <div className="card_container">
        <RecentTripCard
          card_img={CardImg1}
          card_heading={"Trip in Indonesia"}
          card_description={
            "Indonesia, officially Republic of Indonesia, is a country in Southeast Asia and Oceania. Between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Jawa, Sulawesi, and parts of Borneo and New Guinea."
          }
        />

        <RecentTripCard
          card_img={CardImg2}
          card_heading={"Trip in Malaysia"}
          card_description={
            "Malaysia is a Southeast Asia country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influence."
          }
        />

        <RecentTripCard
          card_img={CardImg3}
          card_heading={"Trip to Iceland"}
          card_description={
            "Every day, there is an adventure waiting to happen in Iceland, With it's abundance of mountains, volcanoes, glaciers, rivers, lakes, caves and otherwise rough terrain waiting to be tackled, iceland is truly and outdoor enthusiast's paradise."
          }
        />
      </div>
    </div>
  );
};

export default RecentTrips;
