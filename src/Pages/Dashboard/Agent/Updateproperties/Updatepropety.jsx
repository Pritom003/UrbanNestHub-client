// ... (previous imports)

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
// import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import useAxios from "../../../../Hooks/UseAxios";

const Updatepropety = ({ propertyId }) => {
  const axiosPublic = useAxios();
  const { register, handleSubmit, setValue } = useForm();
  const naviate=useNavigate()
  // const [propertyData, setPropertyData] = useState({});
  const {
    _id,
    title,
    location,
    descrption,
    priceRangeMin,
    priceRangeMax,
  
  } = useLoaderData();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const updatedProperty = {
        title: data.title,
        location: data.location,
        descrption: data.descrption,
        priceRangeMin: data.priceRangeMin,
        priceRangeMax: data.priceRangeMax,
      };
  
      const response = await axiosPublic.put(`/properties/${_id}`, updatedProperty);
      const result = response.data; 
  
      // Show success popup
      if (result.success) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.title} is updated.`,
          showConfirmButton: false,
          timer: 1500,
        });
        naviate('/')
      } else {
        console.log(result);
      }
    } catch (error) {
      console.error("Error updating property:", error);
    }
  };
  

  return (
    <div className="bg-gray-400">
      <div className="grid justify-center items-center">
        <div>
          <h2 className="text-2xl font-bold text-center m-4 text-purple-800">
            Update Property
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
        >
          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-purple-700">
              Property Title
            </label>
            <input
              type="text"
              name="title"
              {...register("title", { required: true })}
              defaultValue={title}
              className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
            />
          </div>

          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-purple-700">
              Property Location
            </label>
            <input
              type="text"
              name="location"
              {...register("location", { required: true })}
              defaultValue={location}
              className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
            />
          </div>

          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-purple-700">
              Property Description
            </label>
            <textarea
              name="descrption"
              {...register("descrption", { required: true })}
              defaultValue={descrption}
              className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
            />
          </div>
     

          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-purple-700">
              Minimum Price
            </label>
            <input
              type="number"
              name="priceRangeMin"
              {...register("priceRangeMin", { required: true })}
              defaultValue={priceRangeMin}
              className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
            />
          </div>

          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-purple-700">
              Maximum Price
            </label>
            <input
              type="number"
              name="priceRangeMax"
              {...register("priceRangeMax", { required: true })}
              defaultValue={priceRangeMax}
              className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
            />
          </div>

          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="btn mb-10 btn-primary py-2 px-10"
              style={{
                background:
                  "linear-gradient(135deg, #7B64B6, #C898B9)",
              }}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Updatepropety;
