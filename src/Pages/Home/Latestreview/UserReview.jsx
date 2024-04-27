import React from 'react';
import useAxios from '../../../Hooks/UseAxios';
import { useQuery } from '@tanstack/react-query';
import { Avatar, Card } from 'keep-react';
import bg from '../../../../src/assets/bgre.png'
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
  //   <div>

  
  //   </div>
<div>

<div className="">
<div className="text-center mt-20  mb-5">
<h1 className="text-4xl font-semibold">Latest Reviews</h1>
      <h5 className="text-[#93b4ce] text-xl font-medium">What Our Clients Say</h5>
   
    </div>
      <div
        id="my-id"
        className="min-h-[60vh] hero py-8 bg-cover bg-no-repeat bg-[#252121] bg-blend-overlay items-center bg-fixed"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/rkzVdJG/pexels-lisa-fotios-1092671.jpg)",
        }}
      >
        <div className=" text-2xl  bg-transparent font-bold">
         <div className='flex justify-center align-middle '>
        {latestReviews.map((review) => (
          <Card key={review._id} className="max-w-xs bg-transparent p-6 md:max-w-lg">
            <Card.Description className='text-white'>
              {review.reviews}
            </Card.Description>
            <Card.Container className="flex items-center">
              <Avatar size="sm" className='h-10' shape="circle" img={review.reviewerImage} />
              <Card.Container className="ml-3">
                <Card.Title className="text-body-5 text-white font-semibold md:text-body-4">
                  {review.reviewerName}
                </Card.Title>
                <Card.Title className="!text-body-6 text-white font-normal  md:text-body-5">
                  {review.peopertyTile}
                </Card.Title>
              </Card.Container>
            </Card.Container>
          </Card>
        ))}
      </div>
        </div>
      </div>
</div>
</div>
  );
};

export default UserReview;
