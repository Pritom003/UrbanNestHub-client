import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/UseAuth";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";


const AgentProperties = () => {
  const {user}=useAuth()
  const axiossecure=useAxiosSecure()
  const {data:agentData=[],refetch,isLoading}=useQuery({
    queryKey:['agentdata'],
    queryFn:async ()=>{
      const res=await axiossecure.get(`/properties/agent/${user.email}`)
      return  res.data;
    }
   })
   console.log('agent data',agentData);

   const handleDeleteUser = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiossecure.delete(`/properties/agent/${user.email}/${_id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
             refetch()
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch(error => {
            console.error('Error deleting user:', error);
            Swal.fire({
              title: "Error",
              text: "Failed to delete user.",
              icon: "error",
            });
          });
      }
    });
  };





















  return (
  <div>
   <h1 className="text-3xl">MY properties </h1>
<div className="grid lg:grid-cols-2 grid-cols-1 justify-center align-middle items-center gap-4 mx-auto p-4 ">
   
      
   {
    agentData? agentData.map((data,index)=>

<div key={index} className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={data.imageUrl} alt="peoperty" /></figure>
  <div className="card-body">
    <h2 className="card-title">{data.title}</h2>



<div>
<p  className="font-bold text-xl">location:{data.location}</p>
<p  className="font-bold text-xl">name:{data.agentName}</p>
<p  className="font-bold ">price range from <span className="text-blue-600">
   ${data.priceRangeMin}</span> to <span className="text-blue-600">${data.priceRangeMax}</span></p>

<div className="avatar flex justify-start items-center align-middle p-4">
       agent :  <div className="w-10 rounded-full">
 <img src={user.photoURL} />
</div>


</div>



    <div className="card-actions justify-end">
    
      <button  className="btn bg-blue-950 text-white">Update Now</button>
  
      <button onClick={()=>handleDeleteUser(data._id)} className="btn text-red-600"><FaTrash></FaTrash></button>
    </div>
  </div>
</div>
               
</div>















  




   ):isLoading}
   </div>
   </div>
  );
};

export default AgentProperties;