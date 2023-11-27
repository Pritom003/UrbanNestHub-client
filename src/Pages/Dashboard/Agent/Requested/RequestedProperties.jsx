import React from 'react';
import useAuth from '../../../../Hooks/UseAuth';
import useAxiosSecure from '../../../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const RequestedProperties = () => {
  const { user } = useAuth();
  const axiossecure = useAxiosSecure();
  const { data: requestedData = [], isLoading, refetch } = useQuery({
    queryKey: ["requested"],
    queryFn: async () => {
      const res = await axiossecure.get(`/offers`);
      return res.data;
    },
  });

  const handleAccept = async (offerId, propertyTitle, propertyLocation, agentName) => {
    
      console.log('Sending request to accept offer:', offerId, propertyTitle, propertyLocation, agentName);
      const res = await axiossecure.patch(`/offers/${offerId}`, {
        request: 'accepted',
        propertyTitle,
        propertyLocation,
        agentName,
      });
  
      console.log('Response from accepting offer:', res);
      console.log('Modified Count:', res.data.modifiedCount,res.data.acknowledge);
  
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: `offer is accepted!`,
          icon: "success",
        });
      } else {
        console.log('error1');
        Swal.fire({
          title: "Error",
          text: "Failed to accept offer.",
          icon: "error",
        });
      }
  
      await axiossecure.patch(`/offers/reject/${offerId}`, { offerId });
      refetch();
    } 
  
  

  const handleReject = async (offerId) => {
    try {
      await axiossecure.patch(`/offers/${offerId}`, { request: 'rejected' });
      refetch();
    } catch (error) {
      console.error('Error rejecting offer:', error);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 justify-center mx-auto">
      {requestedData.map((offer) => (
        <div key={offer._id} className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{offer.propertyTitle}</h2>
            <p className='font-bold'>
              Offered Amount: <span className="text-2xl font-semibold text-blue-800">${offer.offeredAmount}</span>
            </p>
            <p className='font-bold'>Property Location: {offer.propertyLocation}</p>
            <p className='font-bold'>Buyer Email: {offer.buyerEmail}</p>
            <p className='font-bold'>Buyer Name: {offer.buyerName}</p>
          </div>
          {offer.request === 'accepted' || offer.request === 'rejected' ? (
  <p className='font-bold text-center p-5 text-blue-700'>Status: {offer.request}......</p>
) : (
  <div className="card-actions p-10 justify-end">
    {/* Display Accept and Reject buttons */}
    <button
      className="btn btn-primary mx-2"
      onClick={() => handleAccept(offer._id, offer.propertyTitle, offer.propertyLocation, offer.agentName)}
    >
      Accept
    </button>
    <button
      className="btn btn-error mx-2"
      onClick={() => handleReject(offer._id)}
    >
      Reject
    </button>
  </div>
)}

        </div>
      ))}
    </div>
  );
};

export default RequestedProperties;
