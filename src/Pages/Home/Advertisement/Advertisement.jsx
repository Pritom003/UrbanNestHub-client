
import useAxios from '../../../Hooks/UseAxios';
import { useQuery } from '@tanstack/react-query';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import { Link } from 'react-router-dom';
// import './styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Component } from "react";
import Slider from "react-slick";
const Advertisement = () => {
  const axiosPublic = useAxios();
  const { data: advertised = [], isLoading, refetch } = useQuery({
    queryKey: ['advdata'],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get(`/advertised`);
        return res.data;
      } catch (error) {
        console.error('Error fetching properties:', error);
        throw error;
      }
    },
  });
  console.log(advertised);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (

<div > 
<div className="text-center mt-5  mb-5">
<h1 className="text-4xl font-semibold">Discover Your Dream Home</h1>
    <h5 className="text-[#93b4ce] text-xl font-medium">Explore Our Featured Properties</h5>

  </div>
  <div className="slider-container">
<Slider {...settings}>
{advertised.map((property) => (
        <div key={property._id}>
          {/* Your content for each slide */}
          <div>
            <img className='h-36 w-30' src={property.propertyImage
} alt={`Property `} />
            <h3>{property.propertyLocation}</h3>
            <h3> Range ${property.priceRangeMin}to ${property.priceRangeMax}</h3>
            <h3>{property.verificationStatus}</h3>
            <Link to={`/properties/${property.propertyId}`}> <button className='btn btn-link'> View details</button></Link>
            {/* Add more details or customize as needed */}
          </div>
        </div>
      ))}
</Slider>
</div>
</div>
  );
};

export default Advertisement;
