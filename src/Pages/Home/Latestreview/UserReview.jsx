import React from 'react';
import useAxios from '../../../Hooks/UseAxios';
import { useQuery } from '@tanstack/react-query';

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
     <h2 className='font-bold text-center'>Latest Reviews</h2>
      <div className='flex justify-center align-middle 
     bg-green-50 p-10'>
     
      {latestReviews.map((review) => (
        <div key={review._id} className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt={review.reviewerName} src={review.reviewerImage} />
            </div>
          </div>
          <div className="chat-bubble">
            <h4 className="font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {review.reviews}
            </h4>
            <p className="font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            {review.peopertyTile}  
            </p>
            <div className="flex items-center justify-between mt-2">
              <div className="font-sans text-sm antialiased font-normal text-inherit">
                {review.reviewerName}
              </div>
              <div className="font-sans text-sm antialiased font-normal text-inherit">
                January 10
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default UserReview;
