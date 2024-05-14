import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../Hooks/UseAuth';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import { Link } from 'react-router-dom';
import useAxios from '../../Hooks/UseAxios';
import { FaMoneyBill, FaRegistered } from 'react-icons/fa';
import Navbar from '../Shared/Navbar/Navbar';
import DiccountBanner from './DiccountBanner';

const Allproperites = () => {
  const { user } = useAuth();
  // const axiossecure = useAxiosSecurpe();
  const axiospublic = useAxios();
  const { data: verifieddata = [], isLoading, refetch } = useQuery({
    queryKey: ['verrrifieddata'],
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
    <div className='mx-auto w-full'>
      <DiccountBanner></DiccountBanner>
    </div>
     
     <div className='grid  justify-center align-middle items-center'>
  
     <div className="text-center mt-5  mb-5">
<h1 className="text-4xl font-semibold">All Propertiese</h1>
    <h5 className="text-[#93b4ce] text-xl font-medium">Total verified properties: {verifieddata.filter((data) => data.status === 'verified').length}</h5>

  </div>

     </div>
     <div className="grid  md:grid-cols-2 grid-cols-1 xl:grid-cols-2 mt-16
      mx-auto  gap-10 justify-center align-middle items-center ">
      {verifieddata
        .filter((data) => data.status === 'verified')
        .map((data, index) => (

<div key={index} className="relative flex w-80 mx-auto md:w-[40vw] flex-col rounded-xl 
bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-t-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
    {/* Add the image here */}
    <img src={data.imageUrl} alt={data.title} className="object-cover h-full w-full" />
  </div>
  <div className="p-6 bg-slate-">
    <h5 className="mb-2 block font-sans text-xl uppercase font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {data.title}
    </h5>
    <p className="block font-sans font-semibold text-base  leading-relaxed text-inherit antialiased">
     {data.description}
    </p>
    {/* Add other data here */}
    <p className="block font-sans font-semibold text-base  leading-relaxed text-inherit antialiased">
      Location: {data.location}
    </p>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
      Agent: {data.agentName}
    </p>
    <p className="block font-sans text-base text-green-700 font-medium font-light leading-relaxed text-inherit antialiased">
      Price Range: ${data.priceRangeMin} - ${data.priceRangeMax}
    </p>
  </div>
  <div className="p-6 pt-0">
  <Link to={`/properties/${data._id}`}>
                 <button className="btn bg-black text-white">View Details</button>
               </Link>
  </div>
</div>



        ))}
    </div>
   </div>
  );
};

export default Allproperites;
