import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../Hooks/UseAuth';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import { Link } from 'react-router-dom';
import useAxios from '../../Hooks/UseAxios';

const Allproperites = () => {
  const { user } = useAuth();
  // const axiossecure = useAxiosSecurpe();
const axiospublic=useAxios()
const { data: verifieddata = [], isLoading, refetch } = useQuery({
  queryKey: ["verifieddata"],
  queryFn: async () => {
    try {
      const res = await axiospublic.get(`/properties`);
      return res.data;
    } catch (error) {
      console.error('Error fetching properties:', error);
      throw error;
    }
  },
})

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {verifieddata
        .filter((data) => data.status === 'verified')
        .map((data, index) => (
          <div key={index} className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={data.imageUrl} alt={data.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.title}</h2>
              <p>{data.location}</p>
              <p>{data.agentName}</p>
              <p>{`${data.priceRangeMin} - ${data.priceRangeMax}`}</p>
              <div className="card-actions justify-end">
                {/* Add your Buy Now or other actions here */}
               <Link to={`/properties/${data._id}`}> <button className="btn bg-black text-white">view details</button></Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Allproperites;
