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





  return (
    <div>
      <Navbar />
      <div className="card mt-64 w-full bg-blue-950 text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl font-bold text-blue-600">{title}</h2>
          <p className="text-lg font-bold"> description {descrption}</p>
          <p className="text-lg font-bold">Agent name: {agentName}</p>
          <p className="text-lg font-bold">
            Price Range: ${priceRangeMin} - ${priceRangeMax}
          </p>
          <div className="card-actions justify-end">
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
        </div>
      </div>

      <div>
            <Reviewsection title={title} 
            
            prpagentName={agentName}></Reviewsection>
         

          </div>
 
    </div>
  );
};

export default PropertiesDetails;
