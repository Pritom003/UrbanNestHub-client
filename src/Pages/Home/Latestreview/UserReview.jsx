import React from 'react';
import useAxios from '../../../Hooks/UseAxios';
import { useQuery } from '@tanstack/react-query';
import { Avatar, Card } from 'keep-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UserReview = () => {
  const axiosPublic = useAxios();
  const { data: latestReviews = [], isLoading, refetch } = useQuery({
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
      <div className="slider-container">
        <Slider {...settings}>
          {latestReviews.map((review) => (
            <div key={review._id}>
              <Card className="max-w-xs h-36 bg-white text-black p-6 md:max-w-lg">
                <Card.Description className='text-black'>
                  {review.reviews}
                </Card.Description>
                <Card.Container className="flex items-center">
                  <Avatar size="sm" className='h-10' shape="circle" img={review.reviewerImage} />
                  <Card.Container className="ml-3">
                    <Card.Title className="text-body-5 text-black font-semibold md:text-body-4">
                      {review.reviewerName}
                    </Card.Title>
                    <Card.Title className="!text-body-6 text-black font-normal  md:text-body-5">
                      {review.peopertyTile}
                    </Card.Title>
                  </Card.Container>
                </Card.Container>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default UserReview;
