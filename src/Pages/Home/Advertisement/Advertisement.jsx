import useAxios from '../../../Hooks/UseAxios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3, // Default slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200, // Medium devices and up
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Large devices and up
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='mx-auto md:px-24'>
      <div className="text-center mt-5 mb-5">
        <h1 className="text-4xl font-semibold">Discover Your Dream Home</h1>
        <h5 className="text-[#93b4ce] text-xl font-medium">Explore Our Featured Properties</h5>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {advertised.map((property) => (
            <div key={property._id}>
              <div className='bg-gray-400 h-[530px] shadow-lg
               shadow-black p-6 w-72 md:w-96'>
                <img className='h-64' src={property.propertyImage} alt={`Property`} />
                <div className='p-4 h-[220px] bg-blue-950 text-white'>
                  <h3 className='text-2xl'>Location: {property.propertyLocation}</h3>
                  <h3 className='text-2xl'>Price Range $: {property.priceRangeMin} to ${property.priceRangeMax}</h3>
                  <h3 className='text-2xl'>Status: {property.verificationStatus}</h3>
                <div className='flex justify-end py-4 '>
                <Link to={`/properties/${property.propertyId}`}>
                    <button className=' px-6 py-1 border border-white
                     bg-transparent text-white  text-xl '>View details <span className='text-2xl font-bold'>></span> </button>
                  </Link>
                </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Advertisement;
