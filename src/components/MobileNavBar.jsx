import React, { useState } from "react";
import { ImMenu } from "react-icons/im";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
const MobileNavBar = ({homePage,servicePage,contactPage,RentPage}) => {
    const [nav,setNav]=useState(false);
    const navToggle=()=>{
        setNav((e)=>!nav)
    }
  return (
    <div className="mobileNavBar-con" >
      <div className="mobileNavBar">
        <h2 >
          {" "}
          <BiSolidPhoneCall size={25} />
          <a href="tel:8143413999">
            8143413999
          </a>
    
          
        </h2>
    
        {
            !nav? <ImMenu size={30} onClick={navToggle}/>:<AiFillCloseCircle size={30} onClick={navToggle}/>
        }
      </div>
      <div className="Nav-list" style={{display:nav?"flex":"none"}}>
            <ul>
                <li onClick={()=>{
                    homePage.current.scrollIntoView({ behavior: "smooth" });
                    setNav(false)
                    }}
                    >Home</li>
                <li onClick={()=>{
                    servicePage.current.scrollIntoView({ behavior: "smooth" });
                    setNav(false)
                    }}>Services</li>
                <li onClick={()=>{
                    contactPage.current.scrollIntoView({ behavior: "smooth" });
                    setNav(false)
                    }}>Contact US</li>
                <li onClick={()=>{
                    RentPage.current.scrollIntoView({ behavior: "smooth" });
                    setNav(false)
                    }}>Rental Cars</li>
            </ul>
      </div>
    </div>
  );
};

export default MobileNavBar;
