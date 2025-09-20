import React from "react";
import logo from "../assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="address-info">
          <img src={logo} alt="" />
          <div className="info">
            <h2 className="text-2xl font-bold text-orange-600">Car Travel Agency In Kakinada</h2>
            <p>Kakinada, Andhra Pradesh</p>
            <p>contact@vamsitravelskakinada.com</p>
            <p>8143413999 || 9966238008</p>
          </div>
        </div>
        <div className="our-offeres">
          <ul>
            <li>Srisailam Tour</li>
            <li>Tirupathi Trip</li>
            <li>Aruku Package</li>
            <li>Annavaram Temple</li>
            <li>Bhadrachalam </li>
            <li>Vijayawada Plan</li>
          </ul>
        </div>
        <div className="our-keyword">
          <ul>
            <li>Best Travel Service in Kakinada</li>
            <li>Best Car Rentals in Kakinada</li>
            <li>Best Travelling Offers</li>
            <li>Cab Services in Kakinada</li>
            <li>Taxi Services in Kakinada</li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright">
        <p>
          Copyright 2025 Vamsi Travels. All Rights Reserved. Developed By <span style={{color:"orangered",opacity:"0.8"}}><a href="https://innosify.com/">Innosify Pvt Ltd</a></span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
