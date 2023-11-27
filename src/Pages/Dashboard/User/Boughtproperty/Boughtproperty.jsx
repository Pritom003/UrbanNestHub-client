import React from 'react';
import useAuth from '../../../../Hooks/UseAuth';
import useAxiosSecure from '../../../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const BoughtProperty = () => {
  const { user } = useAuth();
  const axiossecure = useAxiosSecure();
  const { data: myBought = [], isLoading, refetch } = useQuery({
    queryKey: ["boughtdata"],
    queryFn: async () => {
      const res = await axiossecure.get(`/offers`);
      return res.data;
    },
  });
console.log(myBought,'proimg');

  return (
    <div className="grid grid-cols-1  gap-4">
      {myBought
        .filter((data) => data.buyerEmail === user.email)
        .map((data, index) => (
          <div key={index} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={data.propertyImage} alt={data.propertyTitle} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.propertyTitle}</h2>
              <p>{data.propertyLocation}</p>
              <p>Agent: {data.agentName}</p>
              <p>Offered Amount: ${data.offeredAmount}</p>
              <p>Status: {data.request}</p>
              {data.request === 'accepted' && (
                <button className="btn btn-primary" onClick={() => handlePay(data)}>
                  Pay
                </button>
              )}
              {data.request === 'bought' && (
                <p>Transaction ID: {data.transactionId}</p>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default BoughtProperty;
