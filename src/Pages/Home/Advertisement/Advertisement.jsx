import React from 'react';
import useAxios from '../../../Hooks/UseAxios';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
// import './styles.css';

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

  return (
  <div className='bg-blue-50 p-10'>
    <h1 className='text-3xl font-bold text-blue-900 text-center p-4 underline'> Featured Properties </h1>
     <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      className="mySwiper "
    >
      {advertised.map((property) => (
        <SwiperSlide key={property._id}>
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
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
};

export default Advertisement;
