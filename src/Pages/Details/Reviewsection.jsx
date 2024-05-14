
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/UseAuth";
import { FaPen, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
const Reviewsection = ({title,prpagentName}) => {
  
  const { register, handleSubmit,reset } = useForm();
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
      Reviewstime:new Date().toISOString().slice(0, 10),
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
      reset();
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
    <div className=" mx-auto">

<h1 className="p-10"> Comments :</h1>
<form type="submit" onSubmit={handleSubmit(onSubmit)} >

<div className="mb-4 sm:mb-0 grid w-full ">
    <label  className=" text-black">
   
    </label>

    <input  {...register("reviews", { required: true })}
      className="mt-1 p-2 rounded-lg border w-96
        text-black focus:ring
         focus:ring-indigo-200 focus:outline-none"
          placeholder='Add Your review'
    
  name="reviews"
  
></input>
     
  </div>
 
</form>
        <div className="grid ">
        {reviewsData
  .filter((data) => data.peopertyTile === title)
  .map((data, index) => (
 <div className="card p-10 contailner border-b-2" key={index}>

<div   className="chat chat-start">
  <div className="avatar flex justify-end align-bottom items-end">
    <div className="w-10 rounded-full">
      {
        data.reviewerImage?<img  alt="Tailwind CSS chat bubble component" 
        src={data.reviewerImage}/>:<FaUser className="text-3xl text-center"></FaUser>

      }
      
    </div>
  </div>
  <div className="">{data. reviews} <br />
  <p  className="text-xs font-extralight">{data.revieweremail}</p></div>
</div>
 </div>






  ))}  </div>


{/* You can open the modal using document.getElementById('ID').showModal() method */}
<div className="flex justify-center " >


</div>













    
    </div>
  );
};

export default Reviewsection;