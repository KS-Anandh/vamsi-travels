import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";

import model1 from '../assets/carModels/ToyotaFortuner.png'
import model2 from '../assets/carModels/MaruthiSwift.png'
import model3 from '../assets/carModels/mahindraThar.png'
import model4 from '../assets/carModels/carens.png'
import model5 from '../assets/carModels/creta.png'

const CarScroller = ({RentPage}) => {
  const [isMobile, setIsMobile] = useState();
  useEffect(()=>{
    setIsMobile(window.innerWidth < 768)
  },[])
  const cars = [
    {
      id: 1,
      name: "Toyota Fortuner",
      price: "₹3500/day",
      img: model1,
      desc: "Spacious SUV with premium comfort and great mileage.",
    },
    {
      id: 2,
      name: "Maruti Swift",
      price: "₹1500/day",
      img: model2,
      desc: "Compact and fuel-efficient, perfect for city drives.",
    },
    {
      id: 3,
      name: "Mahindra Thar",
      price: "₹4000/day",
      img: model3,
      desc: "Adventure-ready 4x4 with rugged design.",
    },
    {
      id: 4,
      name: "KIA Carens",
      price: "₹2200/day",
      img: model4,
      desc: "Elegant sedan with smooth driving experience.",
    },
    {
      id: 5,
      name: "Hyundai Creta",
      price: "₹2800/day",
      img: model5,
      desc: "Stylish SUV with premium interiors.",
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
        <h1 className="scroller-title text-3xl font-bold"> Our Rental Service Cars</h1>
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
            <h3 className="car-name">{car.name}</h3>
            <p className="car-price">{car.price}</p>
            <p className="car-desc">{car.desc}</p>
            <div className="car-card-btn">
             <button className="enqury-btn"><a href={`https://wa.me/8143413999?text=Hi%2C%20I%20want%20to%20book%20a%20${car.name}%20:%20${car.price}%20car`} target="_blank">Book Now</a> </button>
            <button className="book-btn"> <BiSolidPhoneCall size={20}/> <a href="tel:9876765678">Call Now</a></button>
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
