import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../Hooks/UseAuth';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import { Link } from 'react-router-dom';
import useAxios from '../../Hooks/UseAxios';
import { FaMoneyBill, FaRegistered } from 'react-icons/fa';
import Navbar from '../Shared/Navbar/Navbar';

const Allproperites = () => {
  const { user } = useAuth();
  // const axiossecure = useAxiosSecurpe();
  const axiospublic = useAxios();
  const { data: verifieddata = [], isLoading, refetch } = useQuery({
    queryKey: ['verifieddata'],
    queryFn: async () => {
      try {
        const res = await axiospublic.get(`/properties`);
        return res.data;
      } catch (error) {
        console.error('Error fetching properties:', error);
        throw error;
      }
    },
  });

  return (
   <div>
    <Navbar></Navbar>
     <div className="grid grid-cols-1 p-5 max-w-4xl mx-auto  gap-4 justify-center">
     <div className='grid  justify-center align-middle items-center'>
     <div className=''>
     <h1 className='text-4xl underline font-bold text-blue-600'>All Properties</h1>
     <p>Total verified properties: {verifieddata.filter((data) => data.status === 'verified').length}</p>
     </div>
     

     </div>
      {verifieddata
        .filter((data) => data.status === 'verified')
        .map((data, index) => (
          <div key={index} className="card bg-slate-200 grid items-center card-compact bg-base-100 shadow-xl text-center">
                <h2 className=" text-center p-6 text-3xl font-bold text-blue-950">{data.title}</h2>
            <figure>
              <img src={data.imageUrl} alt={data.title} />
            </figure>
            <div className="card-body">
          
              <p className='font-bold'>{data.location}</p>
              <p  className='font-bold'>{data.agentName}</p>
              <p className='font-bold'> prce range : <span className='font-extrabold'>${`${data.priceRangeMin} -$ ${data.priceRangeMax}`}</span></p>
              <p className="text-green-500 font-bold">Verified  </p>
              <div className="card-actions justify-center mt-4">
                {/* Add your Buy Now or other actions here */}
                <Link to={`/properties/${data._id}`}>
                  <button className="btn bg-black text-white">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
   </div>
  );
};

export default Allproperites;
