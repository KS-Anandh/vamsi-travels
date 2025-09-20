import React, { useState } from "react";
import { ImMenu } from "react-icons/im";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";

const MobileNavBar = ({ homePage, servicePage, contactPage, RentPage }) => {
  const [nav, setNav] = useState(false);

  const navToggle = () => {
    setNav((e) => !e);
  };

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setNav(false);
  };

  return (
    <div className="mobileNavBar-con">
      <div className="mobileNavBar">
        <h2>
          <BiSolidPhoneCall size={25} />
          <a href="tel:8143413999">8143413999</a>
        </h2>

        {!nav ? (
          <ImMenu size={30} onClick={navToggle} />
        ) : (
          <AiFillCloseCircle size={30} onClick={navToggle} />
        )}
      </div>

      {/* animate with class instead of display none */}
      <div className={`Nav-list ${nav ? "open" : ""}`}>
        <ul>
          <li onClick={() => handleScroll(homePage)}>Home</li>
          <li onClick={() => handleScroll(servicePage)}>Services</li>
          <li onClick={() => handleScroll(contactPage)}>Contact Us</li>
          <li onClick={() => handleScroll(RentPage)}>Rental Cars</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavBar;
