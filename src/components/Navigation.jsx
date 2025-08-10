import React from "react";
import logo from "../assets/images/vamsiTravels.svg";
import seel from "../assets/appIcons/seel_1.jpeg";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { BiSolidOffer } from "react-icons/bi";
import { FaHeadphones } from "react-icons/fa";
import { MdCarRental } from "react-icons/md";
import { ImMenu } from "react-icons/im";

const Navigation = ({homePage,servicePage,contactPage,RentPage}) => {
   const scrollToHomePage = () => {
    homePage.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollServicePage = () => {
    servicePage.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContactPage = () => {
    contactPage.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToRentPage = () => {
    RentPage.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="navigation">
      <div className="header">
        <div className="images">
         
          <img src={seel} className="seel" alt="" />
        </div>
        <div className="title">
          <h2>Vamsi Travels </h2>
          <h3><FaLocationDot color="red"/> <span style={{marginLeft:"5px"}}>Kakinada</span></h3>
        </div>
      </div>
      
      <div className="options">
        <ul >
          <li onClick={scrollToHomePage}> <AiFillHome size={20} /> About Us</li>
          <li onClick={scrollServicePage}> <BiSolidOffer size={20}/> Offeres </li>
          <li onClick={scrollToContactPage}> <FaHeadphones size={20} /> Contact Us</li>
          <li onClick={scrollToRentPage}> <MdCarRental size={22} /> Rental Cars</li>
        </ul>
      </div>
      <div className="buttons">
        <ul>
          <li>
            {" "}
            <BiSolidPhoneCall size={20} /> 8143413999{" "}
          </li>
          <li> Book Now </li>
        </ul>
      </div>
     
    </div>
  );
};

export default Navigation;
