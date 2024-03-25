import React from 'react';
import useAxios from '../../../Hooks/UseAxios';
import { useQuery } from '@tanstack/react-query';
import { Avatar, Card } from 'keep-react';

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

  return (
    <div>
  <div className="text-center mt-20  mb-5">
      <h5 className="text-[#93b4ce] text-xl font-medium">What Our Clients Say</h5>
      <h1 className="text-4xl font-semibold">Latest Reviews</h1>
    </div>
      <div className='flex justify-center align-middle bg-green-50 p-10'>
        {latestReviews.map((review) => (
          <Card key={review._id} className="max-w-xs p-6 md:max-w-lg">
            <Card.Description>
              {review.reviews}
            </Card.Description>
            <Card.Container className="flex items-center">
              <Avatar size="sm" shape="circle" img={review.reviewerImage} />
              <Card.Container className="ml-3">
                <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">
                  {review.reviewerName}
                </Card.Title>
                <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5">
                  {review.peopertyTile}
                </Card.Title>
              </Card.Container>
            </Card.Container>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserReview;
