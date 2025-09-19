import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useRef, useEffect } from "react";

import banner1 from "../assets/banner/1.svg";
import banner2 from "../assets/banner/2.svg";
import banner3 from "../assets/banner/3.svg";
import banner4 from "../assets/banner/4.svg";

const Slider = ({ homePage }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // <=768px = mobile
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  const slides = [
    {
      image: banner1,
    },
    {
      image: banner2,
    },
    {
      image: banner3,
    },
    {
      image: banner4,
    },
  ];

  return (
    <div className={`carousel carousel-vertical rounded-box ${isMobile ?'h-45 w-90':'h-80 w-160'} `}>
      {slides.map((item, index) => {
        return (
          <div key={index} className="carousel-item h-full w-full">
            <img
              src={item.image}
              alt={`banner-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
