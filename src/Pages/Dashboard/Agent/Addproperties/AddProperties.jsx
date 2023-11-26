import { useState } from "react";
import useAuth from "../../../../Hooks/UseAuth";
import useAxios from "../../../../Hooks/UseAxios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProperties = () => {
  const [startDate, setStartDate] = useState(new Date());
  const axiosPublic = useAxios();
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();

  console.log(user.email);

  const onSubmit = async (data) => {
    const imageFile={image:data.image[0]}
    console.log(imageFile);
    const res=await axiosPublic.post(image_hosting_api,imageFile,{
      headers:{
        'content-type':'multipart/form-data'
      }
    })
    // TODO: Add your logic to submit the form data
    console.log("Property Data:", res.data);

if (res.data.success) {
  const propertyData = {
    title: data.title,
    location: data.location,
    descrption: data.description,
    agentName: user?.displayName,
    agentEmail: user?.email,
    agentImage:user?.photoURL,
    time: data.time,
    priceRangeMin: data.priceRangeMin,
    priceRangeMax: data.priceRangeMax,
    imageUrl: res.data.data.display_url,
    status:'pending'
  };
  console.log(propertyData);
  const properties=await axiosPublic.post('/properties',propertyData)

  if(properties.data.insertedId){
    // show success popup
    // reset();
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.title} is added to the properties.`,
        showConfirmButton: false,
        timer: 1500
      });
}




}



  };

  return (
    <div className="bg-gray-400">
      <div className="grid justify-center items-center">
        <div>
          <h2 className="text-2xl font-bold text-center m-4 text-purple-800">
            Add property
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
        >
          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-purple-700">
              Properties image
            </label>
            <input
              type="file"
              name="image"
              {...register("image", { required: true })}
              className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
            />
          </div>
          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-purple-700">
              Properties title
            </label>
            <input
              type="text"
              name="title"
              {...register("title", { required: true })}
              className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
            />
          </div>
          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-purple-700">
              Property location
            </label>
            <input
              type="text"
              name="location"
              {...register("location", { required: true })}
              className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
            />
          </div>
          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-purple-700">
              property details
            </label>

            <textarea  {...register("description", { required: true })}
              className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
            
          name="description"
          
        ></textarea>
            
             
          </div>
          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-purple-700">
              Agent name
            </label>
            <input
              type="text"
              name="agentName"
              value={user?.displayName}
              readOnly
              className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
            />
          </div>
          
          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-purple-700">
              Agent email
            </label>
            <input
              type="email"
              name="agentEmail"
              value={user?.email}
              readOnly
              className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
            />
          </div>
          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-purple-700">
              Time
            </label>
            <input
              type="time"
              name="time"
              {...register("time", { required: true })}
              className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
            />
          </div>
          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-purple-700">
              Price Range (Min)
            </label>
            <input
              type="number"
              name="priceRangeMin"
              {...register("priceRangeMin", { required: true })}
              className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
            />
          </div>
          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-purple-700">
              Price Range (Max)
            </label>
            <input
              type="number"
              name="priceRangeMax"
              {...register("priceRangeMax", { required: true })}
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperties;
