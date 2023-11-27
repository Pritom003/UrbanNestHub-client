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

  const handlemakeverify = (data) => {
    axiossecure.patch(`/properties/${data._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: `${data.title} is verified Now!`,
          icon: "success",
        });
      }
    });
  };
  const handlrejection = (data) => {
    axiossecure.patch(`/properties/rejected/${data._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: `${data.title} is rejected Now!`,
          icon: "success",
        });
      }
    });
  };


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {propertydata.map((data, index) => (
        <div key={index} className="card bg-base-100 shadow-xl">
          <figure>
            <img src={data.imageUrl} alt="Property Image" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{data.title}</h2>
            <p>{data.location}</p>
            <p>{data.agentName}</p>
            <p>{data.agentEmail}</p>
            <p>${`${data.priceRangeMin} - $ ${data.priceRangeMax}`}</p>
            <div className="card-actions">
              {/* Add your Verify, Reject, and Details logic here */}
              {data.status !== 'verified' && data.status !== 'rejected' ? (
                <>
                  <button onClick={() => handlemakeverify(data)} className="btn btn-ghost btn-xs bg-green-600">
                    Verify
                  </button>
                  <button onClick={() => handlrejection(data)} className="btn btn-ghost btn-xs bg-red-500">Reject</button>
                </>
              ) : data.status === 'verified' ? (
                <div className="badge badge-success gap-2">
         
                Verified
              </div>
              ) : data.status === 'rejected' ? (

                <div className="badge badge-error gap-2">
  <svg fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  rejected X
</div>
               
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Manageproperties;
