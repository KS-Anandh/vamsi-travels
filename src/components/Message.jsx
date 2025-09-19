import React from "react";
import message from "../assets/images/message.jpg";

const Message = () => {
  return (
    <div className="message">
      <img src={message} alt="" />
      <div className="info">
        <h3 className="text-xl font-bold">Care and Safety Beyond Travel @ Vamsi Travel ... </h3>
        <p>
          We <span style={{color:"orangered",fontWeight:"bold"}}>Promise</span> utmost care and assuring safe journey at our Vamsi travels
          which makes us special in this field,and making us close to the heart
          of our customers....
        </p>
      </div>
    </div>
  );
};

export default Message;
