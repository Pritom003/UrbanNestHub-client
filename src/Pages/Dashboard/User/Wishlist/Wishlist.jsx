import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/UseAuth";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const axiossecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: wisheddata = [], isLoading, refetch } = useQuery({
    queryKey: ["wisheddata"],
    queryFn: async () => {
      const res = await axiossecure.get(`/wished/${user.email.toLowerCase()}`);
      return res.data;
    },
  });

  console.log(wisheddata);

  return (
    <div className="grid grid-cols-1 gap-4">
      {wisheddata.map((data) => (
        <div key={data._id} className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={data.proimage} alt={data.wishedtitle} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data.wishedtitle}</h2>
            <p>{data.wisheddes}</p>
            <p>Location: {data.prolocation}</p>
            <p>Agent: {data.agentname}</p>
            <p>Verification Status: {data.verificationstatus}</p>
            <p>Price Range: {data.minprice} - {data.maxprice}</p>
            <div className="card-actions justify-end">
            <Link to={`makeoffer/${data._id}`}>
  <button className="btn btn-primary">Make an Offer</button>
</Link>
              <button className="btn btn-danger">Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
