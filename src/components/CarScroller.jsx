import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";

import innovaCrista from '../assets/carModels/1.svg'
import Ertiga from '../assets/carModels/2.svg'
import Swift from '../assets/carModels/3.svg'
import Dzire from '../assets/carModels/4.svg'
import Nexon from '../assets/carModels/5.svg'
import RenoultKiger from '../assets/carModels/6.svg'

const CarScroller = ({RentPage}) => {
  const [isMobile, setIsMobile] = useState();
  useEffect(()=>{
    setIsMobile(window.innerWidth < 768)
  },[])
  const cars = [
  {
    id: 1,
    name: "Toyota Innova Crysta",
    price: "₹3500/day (with driver & fuel)",
    img: innovaCrista,
    desc: "Spacious 7-seater MPV with premium comfort, perfect for family trips and long-distance travel.",
  },
  {
    id: 2,
    name: "Maruti Ertiga",
    price: "₹2500/day (with driver & fuel)",
    img: Ertiga,
    desc: "Economical 7-seater MPV with ample space and great mileage. Ideal for family and group journeys.",
  },
  {
    id: 3,
    name: "Maruti Swift",
    price: "₹2000/day (with driver & fuel)",
    img: Swift,
    desc: "Compact, stylish, and fuel-efficient hatchback. Best suited for city rides and short trips.",
  },
  {
    id: 4,
    name: "Maruti Dzire",
    price: "₹2200/day (with driver & fuel)",
    img: Dzire,
    desc: "Elegant and comfortable sedan with smooth performance. Perfect for business and city travel.",
  },
  {
    id: 5,
    name: "Tata Nexon",
    price: "₹2800/day (with driver & fuel)",
    img: Nexon,
    desc: "Stylish compact SUV with modern features and excellent safety. Great for both city and highway drives.",
  },
  {
    id: 6,
    name: "Renault Kiger",
    price: "₹2500/day (with driver & fuel)",
    img: RenoultKiger,
    desc: "Sporty and efficient compact SUV with a modern design. Perfect for small families and couples.",
  },
];


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile?1:3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="scroller-container" ref={RentPage}>
      <div className="scroller-container-header">
        <h1 className="scroller-title text-3xl font-bold "> Our Rental Service Cars</h1>
        <p className="scroller-container-p">
          Discover the freedom of the open road with our <span style={{fontWeight:"bolder",color:"orangered"}}>Premium Rental Cars</span> .
          Whether you're planning a weekend getaway, a business trip, or an
          adventurous road journey, we have the perfect vehicle to suit your
          needs. All our cars are well-maintained, fully insured, and ready to
          drive  giving you comfort, safety, and style at the best prices. Book
          today and make every journey unforgettable!
        </p>
      </div>
       <div className="car-cards">
      <Slider {...settings}>
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.img} alt={car.name} className="car-image" />
            <h3 className="car-name font-bold text-xl">{car.name}</h3>
            <p className="car-price">{car.price}</p>
            <p className="car-desc">{car.desc}</p>
            <div className="car-card-btn">
             <button className="enqury-btn w-30 px-5 py-10"><a href={`https://wa.me/8143413999?text=Hi%2C%20I%20want%20to%20book%20a%20${car.name}%20:%20${car.price}%20car`} target="_blank">Book Now</a> </button>
            <button className="book-btn w-30 px-5 py-10"> <BiSolidPhoneCall size={20}/> <a href="tel:9876765678">Call Now</a></button>
            </div>
           
          </div>
         
        ))}
      </Slider>
       </div>
    </div>
  );
};

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button className="arrow-btn next" onClick={onClick}>
      <FaChevronCircleRight color="black" size={50}/>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="arrow-btn prev" onClick={onClick}>
     <FaCircleChevronLeft color="black" size={50}/>
    </button>
  );
}

export default CarScroller;
