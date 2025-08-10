import React from "react";
import OfferCard from "./OfferCard";
import image1 from '../assets/places/bhadrachalam.jpg'
import image2 from '../assets/places/vijayavada.jpg'
import image3 from '../assets/places/annavaram.jpg'
import image4 from '../assets/places/srisailam.jpg'
import image5 from '../assets/places/mothugudem.jpg'
import image6 from '../assets/places/lambasingi.jpg'
import image7 from '../assets/places/Pancharamalu.webp'
import image8 from '../assets/places/antervedi.jpg'
import image9 from '../assets/places/muramulla.jpg'


const PopularJourney = ({servicePage,contactPage}) => {

const packages=[
  {
    TravelRoute:"Kakinada to Bhadrachalam",
    image:image1,
    CoveredAreas:"Bhadrachalam , Parnasala",
    Days:"1 Day",
    TripType:"Up and Down",
    Note:"Tolls, Driver Beta ",
    category:1
  },
  {
    TravelRoute:"Kakinada to Vijayawada",
    image:image2,
    CoveredAreas:"Vijayawada",
    Days:"1 Day",
    TripType:"Up and Down",
    Note:"Tolls, Driver Beta ",
    category:1
  },
  {
    TravelRoute:"Kakinada to Annavaram",
    image:image3,
    CoveredAreas:"Annavaram",
    Days:"1 Day",
    TripType:"Up and Down",
    Note:"Tolls, Driver Beta ",
    category:1
  },
  {
    TravelRoute:"Kakinada to Srisailam",
    image:image4,
    CoveredAreas:"Srisailam",
    Days:"1 Day",
    TripType:"Up and Down",
    Note:"Tolls, Driver Beta ",
    category:1
  },
  {
    TravelRoute:"Kakinada to Mothugudem",
    image:image5,
    CoveredAreas:"Mothugudem",
    Days:"1 Day",
    TripType:"Up and Down",
    Note:"Tolls, Driver Beta ",
    category:1
  },
  {
    TravelRoute:"Kakinada to Lambasingi",
    image:image6,
    CoveredAreas:"Aruku, Vizag",
    Days:"1 Day",
    TripType:"Up and Down",
    Note:"Tolls, Driver Beta ",
    category:1
  },
  {
    TravelRoute:"Kakinada to Pancharamalu",
    image:image7,
    CoveredAreas:"Five Temples",
    Days:"1 Day",
    TripType:"Up and Down",
    Note:"Tolls, Driver Beta ",
    category:1
  },
  {
    TravelRoute:"Kakinada to Antarvedi",
    image:image8,
    CoveredAreas:"Ainavilli, Appanapalli, Antarvedi",
    Days:"1 Day",
    TripType:"Up and Down",
    Note:"Tolls, Driver Beta ",
    category:1
  },
   {
    TravelRoute:"Kakinada to Muramulla",
    image:image9,
    CoveredAreas:" Muramulla ",
    Days:"1 Day",
    TripType:"Up and Down",
    Note:"Tolls, Driver Beta ",
    category:1
  },
  
]

  return (
    <div className="popularJourney" ref={servicePage}>
      <div className="popularJourney-header">
        <h1>Popular Journey</h1>
        <p>
          Discover our most sought-after travel routes, designed for comfort and
          delight. From sacred pilgrimages to breathtaking escapes, every trip
          is a story worth telling. Travel in style, arrive refreshed, and make
          memories that last a lifetime
        </p>
      </div>
      <div className="journey-buttons">
        <ul>
          {/* <li>See All</li> */}
          <li>Temples</li>
          <li>Droping</li>
          <li>Tourist Place</li>
          <li>Custom Plan</li>
        </ul>
      </div>
    
        <div className="popularJourney-cards">

        {
          packages.map((data,key)=>{
            return(
              <OfferCard contactPage={contactPage} TravelRoute={data.TravelRoute} image={data.image} CoveredAreas={data.CoveredAreas} Days={data.Days} TripType={data.TripType} Note={data.Note} category={data.category}/>
            )
          })
        }
          
          
        </div>
   
    </div>
  );
};

export default PopularJourney;
