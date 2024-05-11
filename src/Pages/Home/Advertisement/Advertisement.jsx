import useAxios from '../../../Hooks/UseAxios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChessQueen } from 'react-icons/fa';

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
    slidesToShow: 1, // Default slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200, // Medium devices and up
        settings: {
          slidesToShow: 1,
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
             
              <div className="card 
              lg:card-side  bg-base-100 shadow-xl">
  <figure> <img className='lg:h-[300px] relative
  w-full h-64 lg:w-[600px]' 
  src={property.propertyImage} 
  alt={`Property`} />
     
  </figure>
  <div className="card-body 
  bg-gradient-to-r from-cyan-200
   to-blue-200">
        <div className='tooltip mb-4 w-12  tooltip-bottom' data-tip="Top property" >
<FaChessQueen className='text-3xl tooltip
      text-green-950'/>
</div>
    <h2 className="card-title text-3xl lg:text-5xl
     text-gray-800 ">Location: 
     {property.propertyLocation}  </h2>


    <h2 className="card-title">Price Range $: {property.priceRangeMin} to ${property.priceRangeMax}</h2>
    <p className='text-2xl uppercase'>Status:  {property.verificationStatus}</p>

    <div className="card-actions justify-end"> 

    <Link to={`/properties/${property.propertyId}`}>
                    <button >View details <span className='text-2xl font-bold'></span> </button>
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
