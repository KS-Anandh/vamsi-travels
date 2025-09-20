import React, { useEffect, useRef } from 'react'
import Navigation from './components/Navigation'
import Slider from './components/Slider'
import WhyToChooseUS from './components/WhyToChooseUS'
import CarScroll from './components/CarScroller'
import PopularJourney from './components/PopularJourney'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
import MobileNavBar from './components/MobileNavBar'
import Message from './components/Message'
import Hero from './components/Hero'
const App = () => {
      useEffect(() => {
    document.documentElement.classList.remove("dark"); // removes dark mode
  }, []);
  const homePage = useRef(null);
  const servicePage = useRef(null)
  const contactPage= useRef(null)
  const RentPage = useRef(null)

  return (
    <div>
      <Navigation homePage={homePage} servicePage={servicePage} contactPage={contactPage} RentPage={RentPage}/>
      <MobileNavBar homePage={homePage} servicePage={servicePage} contactPage={contactPage} RentPage={RentPage}/>
      
      <div className='line-height' ></div>
      {/* <Message/> */}
      {/* <Slider /> */}
      <Hero/>
      <WhyToChooseUS homePage={homePage}/>
      <CarScroll RentPage={RentPage}/>
      <PopularJourney servicePage={servicePage} contactPage={contactPage}/>    
      <ContactUs contactPage={contactPage}/>
      <Footer/>
      
    </div>
  )
}

export default App