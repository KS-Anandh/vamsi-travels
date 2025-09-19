import React, { useState } from "react";


const ContactUs = ({contactPage}) => {

  const [phone,setPhone]=useState(null);
  const [name,setName]=useState(null);
  const [email,setMail]=useState(null);
  const [message,setMessage]=useState(null);

 

  function whatsappUrl(toPhone, name, email, userPhone, message) {
const text = `I am interested in your car travelling package.\n\nName: ${name}\nEmail: ${email}\nPhone: ${userPhone}\nMessage: ${message}`;
  return `https://wa.me/${toPhone}?text=${encodeURIComponent(text)}`;
}

const handleSubmit=()=>{
  if(!phone || !name || !email || !message){
   return alert("All Fields Are Required.")
  }
  const link=whatsappUrl(8143413999,name,email,phone,message);
  window.open(link, "_blank")

}
  return (
    <div className="contactUs" ref={contactPage}>
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <div className="inner-contactUs">
        <div className="contactForm form"  >
        
          <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
          <input type="text" placeholder="Email" onChange={(e)=>setMail(e.target.value)}/>
          <input type="text" placeholder="Mobile Number" onChange={(e)=>setPhone(e.target.value)}/>
          <textarea name="Message" id="" placeholder="Message" onChange={(e)=>setMessage(e.target.value)}></textarea>
          <button onClick={handleSubmit}>Submit</button>
          
        </div>
        <div className="contactLocation">
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3816.21863395795!2d82.23188867515536!3d16.96379268385295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDU3JzQ5LjciTiA4MsKwMTQnMDQuMSJF!5e0!3m2!1sen!2sin!4v1754752809173!5m2!1sen!2sin"></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
