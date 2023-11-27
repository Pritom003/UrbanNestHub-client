import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/UseAuth";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const Myreviews = () => {
  const { user } = useAuth();
  const axiossecure = useAxiosSecure();

  const { data: myreviewData = [], isLoading, refetch } = useQuery({
    queryKey: ["reviewdata"],
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
          text: "Your review has been deleted.",
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
      {myreviewData
        .filter((data) => data.revieweremail === user.email)
        .map((data, index) => (
          <div key={index} className="card w-96 bg-base-100 shadow-xl mb-4">
            <div className="card-body">
              <h2 className="card-title">{data.peopertyTile}</h2>
              <p>Agent Name: {data.PropertyAgentName}</p>
              <p>Review Time: {data.Reviewstime}</p>
              <p className="bg-slate-500 text-white rounded-lg p-3">
                <span className="text-black">Review Description:</span> {data.reviews}
              </p>
              <div className="card-actions justify-between">
                <button
                  className="btn btn-primary"
                  onClick={() => handleDeleteReview(data._id)}
                >
                  Delete Review
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Myreviews;
