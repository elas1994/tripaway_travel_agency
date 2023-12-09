import React from "react";
import "./components_css/RecentTripCard.css";

const RecentTripCard = (props) => {
  return (
    <div className="card_component">
      <div className="card_img_container">
        <img src={props.card_img} alt="card-image" />
      </div>

      <div className="text_container">
        <h3 className="card_heading">{props.card_heading}</h3>

        <p className="card_description">{props.card_description}</p>
      </div>
    </div>
  );
};

export default RecentTripCard;
