import React from "react";
import "./components_css/Navbar.css";
import { Link } from "react-router-dom";

import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaAddressBook,
  FaImage,
} from "react-icons/fa";

import Home from "../pages/Home";

const Navbar = () => {
  return (
    <>
      <nav className="navbar_items">
        <h1 className="navbar_logo">TripAway</h1>

        <ul className="nav_menu">
          <li>
            <Link to="/tripaway_travel_agency/">
              <FaHome /> Home
            </Link>
          </li>

          <li>
            <Link to="/tripaway_travel_agency/about">
              <FaInfoCircle /> About
            </Link>
          </li>

          <li>
            <Link to="/tripaway_travel_agency/service">
              <FaBriefcase /> Service
            </Link>
          </li>

          <li>
            <Link to="/tripaway_travel_agency/contact">
              <FaAddressBook /> Contact
            </Link>
          </li>

          <li>
            <Link to="/tripaway_travel_agency/gallery">
              <FaImage /> Gallery
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
