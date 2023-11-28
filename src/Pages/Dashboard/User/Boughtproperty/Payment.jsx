import React from 'react';
import useAuth from '../../../../Hooks/UseAuth';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutform from './CheckOutform';













// add key
const stripePromise = loadStripe(import.meta.env. VITE_Payment_Gateway_PK);


const Payment = () => {
  const {user}=useAuth()
  const {offeredAmount,propertyTitle,propertyLocation,agentName,agentEmail,propertyId,_id}=useLoaderData()
  const amountAsNumber = parseFloat(offeredAmount); 

  
  console.log(amountAsNumber,offeredAmount,'dlsjdlk');
  return (
    <Elements stripe={stripePromise}>
    {/* <CheckoutForm /> */}
    <CheckOutform price={amountAsNumber} agentEmail={agentEmail} pMntId={_id}  propertyId={propertyId} soldprptitle={propertyTitle} propertyLocation={propertyLocation} agentName={agentName}></CheckOutform>
  </Elements>
  );
};

export default Payment;