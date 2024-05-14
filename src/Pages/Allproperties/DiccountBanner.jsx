import React from 'react';
import Slider from "react-slick";
const DiccountBanner = () => {
  
    const settings = {
      dots: true,
      infinite: true,
      
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 200,
      autoplaySpeed: 1000,
      cssEase: "linear"
    };
  return (
    <div className="slider-container">
    <Slider {...settings}>
      <div>
        <img className='w-full h-[80vh]' src={'https://i.ibb.co/cF7nzY7/Screenshot-2024-05-12-012517.png'} alt="" />
      </div>
      <div>
        <img className='w-full h-[80vh]' src={'https://i.ibb.co/7rnnGgc/discount.png'} alt="" />
      </div>

      <div>
        <img className='w-full h-[80vh]' src={'https://i.ibb.co/7rnnGgc/discount.png'} alt="" />
      </div>
      
    </Slider>
  </div>
  );
};

export default DiccountBanner;