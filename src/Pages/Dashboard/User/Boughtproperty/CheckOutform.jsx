import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../Hooks/UseAxiosSecure';
import useAuth from '../../../../Hooks/UseAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckOutform = ({price,soldprptitle, propertyLocation,agentName,agentEmail,propertyId,pMntId}) => {
  const elements =useElements()
  const {user}=useAuth()
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('')
  const [transactionId, setTransactionId] = useState('');
  const stripe=useStripe()
  const navegate=useNavigate()
const axiossecure=useAxiosSecure()

  useEffect( () => {
    // Create PaymentIntent as soon as the page loads
       axiossecure.post("/create-payment-intent", {price:price})
        .then(res=>{
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret)
        })
  }, [axiossecure,price]);








  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return
  }
  const card = elements.getElement(CardElement)
  if (card === null) {
    return
}

const {error, paymentMethod} = await stripe.createPaymentMethod({
  type: 'card',
  card,
});
if (error) {
  console.log('[error]', error);
  setError(error.message)
} else {
  console.log('[PaymentMethod]', paymentMethod);
  setError('')
}
              


const {paymentIntent, error: confirmerror} = await stripe.confirmCardPayment(clientSecret,
  {
    payment_method: {
      card: card,
      billing_details: {
        email: user?.email || 'anonymous',
        name: user?.displayName || 'anonymous'
      },
    },
  },
);

if (confirmerror) {
  console.log('confirm error')
}

else {
  console.log('payment intent', paymentIntent)}

  if (paymentIntent.status === 'succeeded') {
console.log('tans id', paymentIntent.id);
setTransactionId( paymentIntent.id)

  }

const payment={
  buyeremail:user.email,
  buyername:user.displayName,
  soldprice:price,
  soldprptitle:soldprptitle,
  propertyLocation:propertyLocation,
  agentName:agentName,
  agentEmail:agentEmail,
  propertyId:propertyId,
  transactionId:paymentIntent.id,
  status:'paymentpending'
  

}
 const res=await axiossecure.post('/payments',payment)
 console.log('saved pament',res.data);
//  refetch();
 if (res.data.acknowledged) {
     Swal.fire({
         position: "top-end",
         icon: "success",
         title: "Thank you for the taka payment",
         showConfirmButton: false,
         timer: 1500
     });}
     navegate('/')






  }

  const handlestautsupdata = async (_id) => {
    try {
      await axiossecure.patch(`/offers/payed/${_id}`, { request: 'payed' });
      // refetch();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };
  



  return (
    <div>
       <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
        <button onClick={()=>handlestautsupdata(pMntId)} className="btn btn-sm text-white bg-emerald-950 my-4" 
            type="submit" disabled={!stripe ||!clientSecret }>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600"> 
            Your transaction id: {transactionId}</p>}
        </form>
    </div>
  );
};

export default CheckOutform;