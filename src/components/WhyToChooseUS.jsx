import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
const WhyToChooseUS = ({homePage}) => {
  return (
    <div className="whyToChooseUs" ref={homePage}>
      <div className="header">
        
        <h1 className="text-3xl font-bold">Why To Choose Vamsi Travels</h1>
        <p style={{color:"#555"}}>
          <span
            style={{
              marginLeft: "50px",
              color: "orangered",
              fontWeight: "bolder",
            }}
          >
            At Vamsi Travels, Kakinada{" "}
          </span>{" "}
          , we offer reliable and comfortable travel solutions with a wide range
          of well-maintained vehicles. Our professional drivers ensure safe and
          timely journeys every time. We provide custom tour packages at
          affordable prices with no hidden charges. 
        </p>
      </div>
      <div className="specifications">
        <div className="specification indicator avatar">
  <span className="indicator-item badge badge-secondary w-10 h-7">Offer</span>
  

          <h3>Special Offer – Sudden Vehicle One Day Rent</h3>
       
          <ul>
            <li><span className="title">Price:</span> ₹2500</li>
            <li><span className="title">Seating:</span> 4+1 (driver)</li>
            <li><span className="title">Duration:</span> 10 Hours</li>
            <li><span className="title">Free KM:</span> 50 KM included</li>
            <li><span className="title">Extra Charges:</span> After 50 KM, standard per KM charges apply. </li>
            <li style={{textAlign:"start",background:"black",padding:"10px 20px",marginTop:"10px",borderRadius:"10px"}}> ✔ Perfect for quick trips, business travel, or short journeys. </li>
          </ul>
        </div>
         <div className="specification indicator avatar">
<span className="indicator-item badge badge-secondary w-10 h-7">Offer</span>
          <h3>Special Offer – Heavy Vehicle One Day Rent</h3>
       
          <ul>
            <li><span className="title">Price:</span> ₹3000</li>
            <li><span className="title">Seating:</span> 6+1 (driver)</li>
            <li><span className="title">Duration:</span> 10 Hours</li>
            <li><span className="title">Free KM:</span> 50 KM included</li>
            <li><span className="title">Extra Charges:</span> After 50 KM, standard per KM charges apply. </li>
            <li style={{textAlign:"start",background:"black",padding:"10px 20px",marginTop:"10px",borderRadius:"10px"}}> ✔ Perfect for goods transport, bulk travel, or long business trips. </li>
          </ul>
        </div>
         <div className="specification indicator avatar">
<span className="indicator-item badge badge-secondary w-10 h-7">Offer</span>
          <h3>Special Offer – Innova Crista One Day Rent</h3>
       
          <ul>
            <li><span className="title">Price:</span> ₹3500</li>
            <li><span className="title">Seating:</span> 6+1 (driver)</li>
            <li><span className="title">Duration:</span> 10 Hours</li>
            <li><span className="title">Free KM:</span> 50 KM included</li>
            <li><span className="title">Extra Charges:</span> After 50 KM, standard per KM charges apply. </li>
            <li style={{textAlign:"start",background:"black",padding:"10px 20px",marginTop:"10px",borderRadius:"10px"}}> ✔ Perfect for family trips, airport transfers, and luxury business travel.. </li>
          </ul>
        </div>
         <div className="specification indicator">

  <span className="indicator-item badge badge-primary w-10 h-7">New</span>

          <h3>🌟 Special Offer – Next Trip Discount</h3>
       
          <ul>
            <li><span className="title">Offer:</span> 10% off on your next trip</li>
            <li><span className="title">Applies To:</span> Any vehicle </li>
            <li><span className="title">Validity:</span> Within 2 Months of your current booking</li>
            <li><span className="title">How to Avail:</span> Automatically applied</li>
            <li><span className="title">Bonus:</span>  Priority booking for this offer. </li>
         
          </ul>
        </div>
     
      </div>
    </div>
  );
};

export default WhyToChooseUS;
