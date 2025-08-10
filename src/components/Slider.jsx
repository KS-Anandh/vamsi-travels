import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useRef,useEffect } from 'react'

import banner1 from '../assets/banner/1.svg'
import banner2 from '../assets/banner/2.svg'
import banner3 from '../assets/banner/3.svg'
import banner4 from '../assets/banner/4.svg'

const Slider = ({homePage}) => {

  const slides = [
  {
    image: banner1,
  },
   {
    image: banner2,
  },
  {
    image: banner3,
  },
  {
    image: banner4,
  },
  
]

  const timer = useRef()
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
  })

  // Auto-slide logic
  useEffect(() => {
    if (!slider) return
    timer.current = setInterval(() => {
      slider.current?.next()
    }, 7000)
    return () => {
      clearInterval(timer.current)
    }
  }, [slider])

  return (
    <div className='slider'>
<div ref={sliderRef} className="keen-slider" >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="keen-slider__slide slide"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
        </div>
      ))}
    </div>
    </div>
  )
}

export default Slider