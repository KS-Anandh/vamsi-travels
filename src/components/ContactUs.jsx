import React from "react";

const ContactUs = ({contactPage}) => {
  return (
    <div className="contactUs" ref={contactPage}>
      <h1>Contact Us</h1>
      <div className="inner-contactUs">
        <div className="contactForm">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Mobile Number" />
          <textarea name="Message" id="" placeholder="Message"></textarea>
          <button>Submit</button>
        </div>
        <div className="contactLocation">
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3816.21863395795!2d82.23188867515536!3d16.96379268385295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDU3JzQ5LjciTiA4MsKwMTQnMDQuMSJF!5e0!3m2!1sen!2sin!4v1754752809173!5m2!1sen!2sin"></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
