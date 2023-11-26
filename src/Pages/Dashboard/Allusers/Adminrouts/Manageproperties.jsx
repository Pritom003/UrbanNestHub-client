import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/UseAuth";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const Manageproperties = () => {
  const { user } = useAuth();
  const axiossecure = useAxiosSecure();

  const { data: propertydata = [], isLoading, refetch } = useQuery({
    queryKey: ["allproperties"],
    queryFn: async () => {
      const res = await axiossecure.get(`/properties`);
      return res.data;
    },
  });



  const handlemakeverify=data=>{
    axiossecure.patch(`/properties/${data._id}`)
    .then(res=>{
        console.log(res.data)
        if(res.data.modifiedCount>0){
            refetch();
            Swal.fire({
                title:`${data.title} is verified Now!`,
                
                icon: "success"
              });
        }
    })
  }








  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {propertydata?.map((data, index) => (
        <div key={index} className="card bg-base-100 shadow-xl">
          <figure>
            <img src={data.imageUrl} alt="Property Image" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{data.title}</h2>
            <p>{data.location}</p>
            <p>{data.agentName}</p>
            <p>{`${data.priceRangeMin} - ${data.priceRangeMax}`}</p>
            <div className="card-actions">
              {/* Add your Verify, Reject, and Details logic here */}
              <button onClick={()=>handlemakeverify(data)} className="btn btn-ghost btn-xs">Verify</button>
              <button className="btn btn-ghost btn-xs">Reject</button>
              <button className="btn btn-ghost btn-xs">Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Manageproperties;
