import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Reviewsection from "./Reviewsection";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/UseAuth";


const PropertiesDetails = () => {
   
  const { 
    descrption,
     title, 
     priceRangeMin, 
     priceRangeMax,
    location, 
    imageUrl,    
    agentImage,
     agentName ,
     agentEmail,
     _id,} = useLoaderData();
  const axiossecure=useAxiosSecure()
  const {user}=useAuth()
  
const handleAddToWishlist=async()=>{
  const propertyId={
    propertyId:_id,
    wisheremail:user.email,
    wishername:user.displayName,
    wisherImage:user.photoURL,
   wisheddes:descrption,
    wishedtitle:title, 
    minprice:priceRangeMin, 
    maxprice:priceRangeMax,
   prolocation:location, 
   proimage:imageUrl,    
   agentPhoto:agentImage,
    agentname:agentName ,
  agentemail:agentEmail}
  const properties=await axiossecure.post('/wished',propertyId)
  if(properties.data.insertedId){
   
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: `property added to the wish list`,
        showConfirmButton: false,
        timer: 1500
      });
}



}


console.log(agentImage);


  return (
    <div>
      <Navbar />
<div className="lg:flex grid mt-32 gap-10 px-10">
<div className="  mx-auto ">
      <img className="w-[100vw] h-[60vh]" src={imageUrl} alt="" />
    

  
  <div className="w-full mx-auto 
   bg-white border border-gray-200 shadow-md rounded-md p-4">
    <div className="flex justify-between">
      <div>
        <h2 className="text-lg uppercase font-semibold text-blue-900 hover:font-bold">
          {title}
        </h2>
        <p className="text-sm text-gray-600">By {agentName}</p>
      </div>
      {/* Replace this with your actual image */}
      <img src={agentImage} alt="Image" className="bg-blue-500 h-16 border-2 border-black w-16 rounded-full 
      " />
    </div>
    <p className="text-sm text-gray-700 mt-2">
      {descrption}
    </p>
    <dl className="flex justify-between mt-4">
      <div className="flex flex-col">
        <dt className="text-sm font-semibold text-gray-600">Published</dt>
        <dd className="text-xs text-gray-500">31st June, 2021</dd>
      </div>
      <div className="flex flex-col">
        {/* <dt className="text-sm font-semibold text-gray-600">Reading time</dt> */}
        <button className="btn btn-outline btn-accent" 
          onClick={()=>handleAddToWishlist(
             descrption,
            title, 
            priceRangeMin, 
            priceRangeMax,
           location, 
           imageUrl,    
           agentImage,
            agentName ,
            _id,agentEmail)}>
              Add to Wishlist
            </button>
      </div>
    </dl>
  </div>
  </div>
  <div className="bg-slate-100 px-10">
    <Reviewsection title={title} prpagentName={agentName} />
  </div>
</div>
</div>


 
  
  );
};

export default PropertiesDetails;
