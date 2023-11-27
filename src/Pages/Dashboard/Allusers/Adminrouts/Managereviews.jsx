import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
import { FaTrash } from 'react-icons/fa';

const Managereviews = () => {
  const axiossecure = useAxiosSecure();

  const { data: managereviewData = [], isLoading, refetch } = useQuery({
    queryKey: ['managereviewData'],
    queryFn: async () => {
      const res = await axiossecure.get(`/reviews`);
      return res.data;
    },
  });

  const handleDeleteReview = async (reviewId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await axiossecure.delete(`/reviews/${reviewId}`);
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "this review has been deleted.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error deleting review:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
      });
    }
  };


  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center p-6 mx-auto">
      {managereviewData.map((data) => (
        <div key={data._id} className="card w-96 max-h-64 bg-base-100 shadow-xl mb-4">
          <div className="card-body">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                {data.reviewerImage ? (
                  <img
                    className="w-10 h-10 rounded-full mr-2"
                    src={data.reviewerImage}
                    alt="Reviewer"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
                )}
                <div>
                  <p className="font-bold">{data.reviewerName}</p>
                  <p className="text-gray-500">{data.revieweremail}</p>
                </div>
              </div>
             
            </div>
            <p className="bg-slate-500 text-white rounded-lg p-3">
              <span className="text-black">Review:</span> {data.reviews}
            </p>
            <button
                className="btn btn-danger flex justify-center bg-red-800"
                onClick={() => handleDeleteReview(data._id, data.revieweremail)}
              >
                Delete Review <FaTrash></FaTrash>
              </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Managereviews;
