
import useAxios from '../../../Hooks/UseAxios';
import { useQuery } from '@tanstack/react-query';
import { Avatar, Card } from 'keep-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    // autoplay: true,
    rows: 1,
    slidesPerRow: 1
  };

  return (
    <div>
      <div className="text-center mt-20 mb-5">
        <h1 className="text-4xl font-semibold">Latest Reviews</h1>
        <h5 className="text-[#93b4ce] text-xl font-medium">What Our Clients Say</h5>
      </div>

      <div className='grid p-20 justify-center align-middle items-center mx-auto grid-cols-3 gap-4'>
      {/* card .....*/}
      {latestReviews.map((review) => (
            <div  key={review._id} className=' ' >
            
<div className="card w-72  bg-base-200 shadow-xl">
  <figure className="px-10 pt-10 border-b-8">
  <div className="avatar h-16 w-16 flex">
  <div className="w-24 rounded-full">
    <img src={review.reviewerImage} />
  </div>
</div>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{review.reviewerName}</h2>
    <p>{review.reviews}</p>
  
  </div>
</div>



      </div>
))}
      </div>
    </div>
  );
};

export default UserReview;
