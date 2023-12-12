
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/UseAuth";
import { FaPen, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
const Reviewsection = ({title,prpagentName}) => {
  
  const { register, handleSubmit } = useForm();
  const axiossecure=useAxiosSecure()
  
  const {user}=useAuth()


  const { data:reviewsData = [], isLoading ,refetch} = useQuery({
    queryKey: ["reviewdata"],
    queryFn: async () => {
      const res = await axiossecure.get(`/reviews`);
      return res.data;
    },
  });


  const onSubmit = async (data) => {

    const reviewsData = {
      Reviewstime: data.time,
    reviews:data.reviews,
    revieweremail:user.email,
    reviewerImage:user.photoURL,
    reviewerName:user.displayName,
    PropertyAgentName:prpagentName,
    peopertyTile:title,


    }
    console.log(reviewsData);


    const properties=await axiossecure.post('/reviews',reviewsData)

    if(properties.data.insertedId){
      // show success popup
    
      refetch()
      Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Your review has been submitted`,
          showConfirmButton: false,
          timer: 1500
        });
  }
  







  }



console.log(reviewsData);

  return (
    <div>


      
        <div className="grid grid-cols-2 lg:grid-cols-3 justify-center mt-4 ">
        {reviewsData
  .filter((data) => data.peopertyTile === title)
  .map((data, index) => (
 <div className="card p-10 contailner" key={index}>

<div   className="chat chat-start">
  <div className="avatar flex justify-end align-bottom items-end">
    <div className="w-10 rounded-full">
      {
        data.reviewerImage?<img alt="Tailwind CSS chat bubble component" 
        src={data.reviewerImage}/>:<FaUser className="text-3xl text-center"></FaUser>

      }
      
    </div>
  </div>
  <div className="chat-bubble">{data. reviews} <br />
  <p>{data.revieweremail}</p></div>
</div>
 </div>






  ))}


{/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>add review</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-slate-400">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
<div className="mx-auto  h-56">
<form onSubmit={handleSubmit(onSubmit)} >

<div className="mb-4 sm:mb-0 grid w-full ">
    <label className="block text-sm font-medium gap-2 flex text-black">
    <FaPen></FaPen> Your feedback about the property
    </label>

    <textarea  {...register("reviews", { required: true })}
      className="mt-1 p-2 rounded-lg border border-gray-300 text-black focus:ring focus:ring-indigo-200 focus:outline-none w-full"
    
  name="reviews"
  
></textarea>
     
  </div>
  <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-purple-700">
              Time
            </label>
            <input
              type="date"
              name="time"
              {...register("time", { required: true })}
              className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
            />
          </div>
          <button type="submit" className="btn btn-outline w-full mx-auto bg-slate-400 btn-primary"> submit review</button>
     
</form>
</div>
  </div>
</dialog>













      </div>
    </div>
  );
};

export default Reviewsection;