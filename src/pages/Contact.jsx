import React from "react";
import HeroSection from "../components/HeroSection";
import ContactHeroImg from "../assets/26.jpg";
import "./pages_css/Contact.css";

const Contact = () => {
  return (
    <div>
      <HeroSection
        class_name={"hero_section"}
        hero_img={ContactHeroImg}
        hero_text={"Contact"}
      />

      <div className="input_container">
        <h1 className="heading">Contact Us</h1>

        <form action="">
          <input type="text" placeholder="First Name" />

          <input type="text" placeholder="Last Name" />

          <input type="email" placeholder="Email" />

          <textarea placeholder="Message" rows="4"></textarea>

          <button className="send_btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
