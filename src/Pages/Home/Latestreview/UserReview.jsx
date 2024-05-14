
import useAxios from '../../../Hooks/UseAxios';
import { useQuery } from '@tanstack/react-query';
import { Avatar, Card } from 'keep-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageBg from '../../../assets/bgre.png';
const UserReview = () => {
  const axiosPublic = useAxios();
  const { data: latestReviews = [],  } = useQuery({
    queryKey: ['review'],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get(`/latest-reviews`);
        return res.data;
      } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;
      }
    },
  });



  return (
    <div className=''>
      <div className="text-center mt-20 mb-5">
        <h1 className="text-4xl font-semibold">Latest Reviews</h1>
        <h5 className="text-[#93b4ce] text-xl font-medium">What Our Clients Say</h5>
      </div>

      <div
      id="my-id"
      className=" min-h-[500px] bg-blend-darken py-8 items-center bg-fixed  "
      style={{
        backgroundImage: `url(https://i.ibb.co/L0Qv9KC/Screenshot-2024-05-11-232324.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover'
      }}
    >
    <div className='grid  justify-center align-middle 
    items-center mx-auto  gap-4'>
      {/* card .....*/}
      {latestReviews.map((review) => (
            <div  key={review._id} className=' ' >
            
<div
data-aos="fade-up"
data-aos-duration="3000"
className="  bg-[#e9d3ad] shadow-xl w-[400px] rounded-3xl h-24">

  <div  className='flex  py-2 pl-4 justify-start  align-middle items-center'>
    <img className='w-16 rounded-full p-2' src={review.reviewerImage} alt="" />
    <div>
    <p>{review.reviews}</p>
      <p>{review.reviewerName}</p>

    </div>
  </div>
</div>



      </div>
))}
      </div>
    </div>

    </div>
  );
};

export default UserReview;
