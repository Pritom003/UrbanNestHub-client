import useAxios from '../../../Hooks/UseAxios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChessQueen, FaEye } from 'react-icons/fa';

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

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,

    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
 <div className='mt-32 max-w-[360px] mx-auto md:max-w-[700px] lg:max-w-[1200px]'>
      <div className="text-center mt-5 ">
    <h1 className="text-4xl font-semibold">Our Properties</h1>
      <h5 className="text-[#93b4ce] text-xl font-medium">We offer the best for you</h5>
 
    </div>
     <div className="slider-container ">
      <Slider {...settings}>
        {advertised.map((property) => (
          <div key={property._id} className='my-10 '>
            <div className="card lg:w-[500px] w-96 h-[500px] mx-auto bg-base-100 shadow-xl">
              <figure>
                <img className='lg:h-[300px] relative w-96 h-64 lg:w-[600px]' src={property.propertyImage} alt={`Property`} />
              </figure>
              <div className="card-body bg-white">
                <div className='tooltip mb-4 w-12 tooltip-bottom' data-tip="Top property">
                  <FaChessQueen className='text-3xl tooltip text-green-950'/>
                </div>
                <h2 className="card-title text-2xl text-gray-800">Location: {property.propertyLocation}</h2>
                <h2 className="card-title">Price Range $: {property.priceRangeMin} to ${property.priceRangeMax}</h2>
                <p className='text-2xl uppercase'>Status: {property.verificationStatus}</p>
                <div className="card-actions justify-end"> 
                  <Link to={`/properties/${property.propertyId}`}>
                    <button className='flex justify-center align-middle items-center gap-1 border-2 p-4 border-black rounded-lg font-bold'>
                      Details <span className='text-2xl font-bold'></span> <FaEye />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
<div className='flex place-content-end  w-full mt-10 bg-'>
<Link to='allproperties' className="btn btn-wide mx-auto bg-[#d8ad63]  text-white text-2xl uppercase">view All</Link>
</div>
 </div>
  );
};

export default Advertisement;
