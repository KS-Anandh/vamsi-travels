import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
const WhyToChooseUS = ({homePage}) => {
  return (
    <div className="whyToChooseUs" ref={homePage}>
      <div className="header">
        
        <h1>Why To Choose Vamsi Travels</h1>
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
          affordable prices with no hidden charges. Available 24/7, we’re ready
          to serve your travel needs anytime. Choose us for a smooth,
          stress-free, and enjoyable travel experience.
        </p>
      </div>
      <div className="specifications">
        <div className="specification">

          <h3> Trusted Local Travel Partner </h3>
       
          <p>
            With years of experience serving the people of Kakinada and
            surrounding areas, Vamsi Travels is a name you can trust for safe,
            reliable, and affordable travel.
          </p>
        </div>
        <div className="specification">
          <h3> Wide Range of Vehicles </h3>
          <p>
            From hatchbacks and sedans to luxury cars, SUVs, and tempo
            travellers – we have a vehicle for every need and group size.
          </p>
        </div>
        <div className="specification">
          <h3> Professional & Friendly Drivers</h3>
          <p>
            Our drivers are well-trained, courteous, and familiar with all major
            routes and tourist spots. Your safety and comfort are always our
            priority.
          </p>
        </div>
        <div className="specification">
          <h3> Affordable Pricing </h3>
          <p>
            No hidden charges – just clear, transparent rates for every ride. We
            offer competitive pricing for both short trips and long-distance
            travel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyToChooseUS;
