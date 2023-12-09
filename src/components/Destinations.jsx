import React from "react";
import "./components_css/Destinations.css";

import ImgNum1 from "../assets/30.jpg";
import ImgNum2 from "../assets/31.jpg";

import ImgNum3 from "../assets/32.jpg";
import ImgNum4 from "../assets/3.jpg";

const Destinations = () => {
  return (
    <div className="destinations_component">
      <h1 className="destinations_section_heading">Popular Destinations</h1>
      <p className="destinations_section_subheading">
        Our tours give you the opportunity to see a lot, within a time frame
      </p>

      <div className="description_rows">
        <div className="description_row">
          <div className="description_row_text_container">
            <h2 className="description_row_heading">Taal Volcano, Batangas</h2>

            <p className="description_row_text">
              One of the most iconic views in Luzon, Mt. Taal boasts a volcano
              inside a lake inside an island. If you fancy a closer look, the
              hike up to the crater is a mere 45 minutes, and is easy enough for
              beginners. Guides will assist you most of the way, and you'll see
              the peculiar environment found on an active volcano, including
              volcanic rocks and steam vents. The hike can be dusty and hot, so
              plan for an early morning trip, and then unwind with some bulalo
              before heading back home!
            </p>
          </div>

          <div className="description_row_image_container">
            <img src={ImgNum1} alt="image-1" />
            <img className="higher_img" src={ImgNum2} alt="image-2" />
          </div>
        </div>

        <div className="description_row">
          <div className="description_row_image_container">
            <img src={ImgNum3} alt="image-3" />
            <img className="higher_img" src={ImgNum4} alt="image-4" />
          </div>

          <div className="description_row_text_container">
            <h2 className="description_row_heading">Paris, France</h2>

            <p className="description_row_text">
              Paris, capital of France, is one of the most important and
              influential cities in the world. Some of the most memorable things
              to do in Paris include visiting the Eiffel Tower, The Arc de
              Triomphe, and Notre Dame Cathedral. During the evening,
              experiencing one of the legendary Moulin Rouge cabaret shows,
              strolling through some of the most picturesque neighborhoods, like
              Montmartre, or climbing the montparnasse Tower is a must.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
