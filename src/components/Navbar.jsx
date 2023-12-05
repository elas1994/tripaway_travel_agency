import React, { useState } from "react";
import "./components_css/Navbar.css";
import { Link } from "react-router-dom";

import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaAddressBook,
  FaImage,
  FaBars,
} from "react-icons/fa";

import { FaXmark } from "react-icons/fa6";

import Home from "../pages/Home";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <nav className="navbar_items">
        <Link className="logo_link" to="/tripaway_travel_agency/">
          <h1 className="navbar_logo">TripAway</h1>
        </Link>

        <div onClick={() => setMobileMenu(!mobileMenu)} className="menu_icons">
          {mobileMenu ? (
            <FaXmark className="mobile_menu_button" />
          ) : (
            <FaBars className="mobile_menu_button" />
          )}
        </div>

        <ul className={mobileMenu ? "nav_menu active" : "nav_menu"}>
          <li onClick={() => setMobileMenu(!mobileMenu)}>
            <Link className="nav_menu_link" to="/tripaway_travel_agency/">
              <FaHome className="nav_menu_icon" /> Home
            </Link>
          </li>

          <li onClick={() => setMobileMenu(!mobileMenu)}>
            <Link className="nav_menu_link" to="/tripaway_travel_agency/about">
              <FaInfoCircle className="nav_menu_icon" /> About
            </Link>
          </li>

          <li onClick={() => setMobileMenu(!mobileMenu)}>
            <Link
              className="nav_menu_link"
              to="/tripaway_travel_agency/service"
            >
              <FaBriefcase className="nav_menu_icon" /> Service
            </Link>
          </li>

          <li onClick={() => setMobileMenu(!mobileMenu)}>
            <Link
              className="nav_menu_link"
              to="/tripaway_travel_agency/contact"
            >
              <FaAddressBook className="nav_menu_icon" /> Contact
            </Link>
          </li>

          <li onClick={() => setMobileMenu(!mobileMenu)}>
            <Link
              className="nav_menu_link"
              to="/tripaway_travel_agency/gallery"
            >
              <FaImage className="nav_menu_icon" /> Gallery
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
