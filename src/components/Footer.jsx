import React from "react";
import "./components_css/Footer.css";

import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top_row">
        <div className="left">
          <h1>TripAway</h1>

          <p>Choose your favorite destination.</p>
        </div>

        <div className="right">
          <a href="#">
            <FaSquareFacebook />
          </a>

          <a href="#">
            <FaSquareInstagram />
          </a>

          <a href="#">
            <FaSquareTwitter />
          </a>
        </div>
      </div>

      <div className="bottom_row">
        <div className="column">
          <h4>Project</h4>
          <p>Status</p>
          <p>License</p>
          <p>All Versions</p>
        </div>

        <div className="column">
          <h4>Community</h4>
          <p>GitHub</p>
          <p>Issues</p>
          <p>Project</p>
          <p>Twitter</p>
        </div>

        <div className="column">
          <h4>Help</h4>
          <p>Support</p>
          <p>Troubleshooting</p>
          <p>Contact Us</p>
        </div>

        <div className="column">
          <h4>Others</h4>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>License</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
