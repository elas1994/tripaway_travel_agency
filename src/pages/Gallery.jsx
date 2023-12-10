import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import GalleryHeroImg from "../assets/33.jpg";
import GalleryImageContainer from "../components/GalleryImageContainer";
import "./pages_css/Gallery.css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Gallery = () => {
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  const [imgIndex, setImgIndex] = useState(null);

  function zoomOnClick(index) {
    setImgIndex(index);
    setIsImageZoomed(true);
  }

  function removeZoom() {
    setImgIndex(null);
    setIsImageZoomed(false);
  }

  function nextSlide() {
    setImgIndex(
      GalleryImageContainer.length - 1 >= imgIndex + 1 ? imgIndex + 1 : 0
    );
  }

  function previousSlide() {
    setImgIndex(
      imgIndex - 1 >= 0 ? imgIndex - 1 : GalleryImageContainer.length - 1
    );
  }

  return (
    <div>
      <HeroSection
        class_name={"hero_section"}
        hero_img={GalleryHeroImg}
        hero_text={"Gallery"}
        object_position={"bottom"}
      />

      <h1 className="heading">Picture Say More Than a Hundred Words</h1>

      <div className="image_container">
        {GalleryImageContainer.map((item, index) => {
          return (
            <img
              loading="lazy"
              className="item_img"
              src={item}
              alt="img"
              key={index}
              onClick={() => zoomOnClick(index)}
            />
          );
        })}
      </div>

      {isImageZoomed && imgIndex !== null && (
        <div className="zoomed_img_overlay">
          <button className="previous_img_btn" onClick={previousSlide}>
            <FaArrowLeft />
          </button>

          <img
            loading="lazy"
            className="zoomed_image"
            src={GalleryImageContainer[imgIndex]}
            alt="img"
          />

          <button className="close_zoom" onClick={removeZoom}>
            <FaXmark />
          </button>

          <button className="next_img_btn" onClick={nextSlide}>
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
