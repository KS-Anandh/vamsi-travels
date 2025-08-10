import React from 'react'
import thirumala from '../assets/places/thirumala.jpg'
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiLoginBoxFill } from "react-icons/ri";
const OfferCard = ({TravelRoute,image,CoveredAreas,Days,TripType,Note,contactPage}) => {
  return (
    <div className='offerCard'>
        <div className="image">
            <p style={{display:"flex",alignItems:"center",justifyContent:"center",columnGap:"10px"}}> <FaMapLocationDot size={30} color='red'/>   {TravelRoute}</p>
            <img src={image} alt="" />        
        </div>
        <div className="info">
            <p><b>Area Covered</b> : {CoveredAreas}</p>
            <p><b>Days</b> : {Days}</p>
            <p><b>Trip</b> :{TripType}</p>
            <p><b>Note : {Note} - <span style={{color:"orangered",fontWeight:"900"}}> Free</span></b></p>
        </div>
        <div className="buttons">
            <button> <BiSolidPhoneCall size={20}/><a href="tel:9876765678">Call Now</a></button>
            <button onClick={()=>{
              contactPage.current.scrollIntoView({ behavior: "smooth" });
            }}> <RiLoginBoxFill size={20} />Enquiry</button>
        </div>
    </div>
  )
}

export default OfferCard