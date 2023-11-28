import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';

const MaKeOffer = () => {
  const { register, handleSubmit,  watch } = useForm();
  const axiossecure=useAxiosSecure()
  const {
    agentemail,
    propertyId,
    proimage,
    wishedtitle,
    prolocation,
    agentname,
    minprice,
    maxprice,
    wisheremail,
    wishername,
  } = useLoaderData();

  
  const offeredAmount = watch('offeredAmount');

  const onSubmit = async (data) => {
    try {
      const offerdata = {
        propertyTitle: data.propertyTitle,
        propertyLocation: data.propertyLocation,
        agentName: data.agentName,
        propertyImage: data.propertyImage,
        offeredAmount: data.offeredAmount,
        buyerEmail: data.buyerEmail,
        buyerName: data.buyerName,
        buyingDate: data.buyingDate,
        request: 'pending',
        agentEmail: data.agentEmail,   
        propertyId: data.propertyId 
      };
  
      console.log('Offer data:', offerdata);
  
    
      const response = await axiossecure.post('/offers', offerdata);
  
      if (response.data && response.data.insertedId) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your offer is sent to the agent.',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to submit the offer. Please try again.',
        });
      }
    } catch (error) {
      console.error('Error submitting offer:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again later.',
      });
    }
  };

  return (
    <div className="bg-gray-400">
      <div className="grid justify-center items-center">
        <div>
          <h2 className="text-2xl font-bold text-center m-4 text-blue-800">
            Make an Offer :
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
        >
          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-blue-800">
              Property Title :
            </label>
            <input
            className='md:w-56  w-44 rounded-lg text-center text-black'
              type="text"
              value={wishedtitle}
              readOnly
              {...register('propertyTitle')}
            />
          </div>
          
          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-blue-800">
              Property Image :
            </label>
            <input
  className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
  type="text"
  value={proimage} 
  readOnly
  {...register('propertyImage')}
/>
          </div>
          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-blue-800">
              Property Location :
            </label>
            <input
              className='w-56 h-10 rounded-lg text-center text-black'
              type="text"
              value={prolocation}
              readOnly
              {...register('propertyLocation')}
            />
          </div>
          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-blue-800">
              Agent Name :
            </label>
            <input
              className='w-56 h-10 rounded-lg text-center text-black'
              type="text"
              value={agentname}
              readOnly
              {...register('agentName')}
            />
          </div>
          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-blue-800">
              Offered Amount :
            </label>
            <input
              className='w-56 h-10 rounded-lg text-center text-black'
              type="number"
              {...register('offeredAmount', {
                required: true,
                validate: (value) =>
                  Number(value) >= Number(minprice) &&
                  Number(value) <= Number(maxprice),
              })}
            />
            {offeredAmount &&
              (Number(offeredAmount) < Number(minprice) ||
                Number(offeredAmount) > Number(maxprice)) && (
                <p className="text-red-500">
                  Offered amount must be in the range of ${minprice} to ${maxprice}.
                </p>
              )}
          </div>
          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-blue-800">
              Buyer Email :
            </label>
            <input
              className='w-56 h-10 rounded-lg text-center text-black'
              type="text"
              value={wisheremail}
              readOnly
              {...register('buyerEmail')}
            />
          </div>
          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-blue-800">
              Agent Email:
            </label>
            <input
              className='w-56 h-10 rounded-lg text-center text-black'
              type="text"
              value={agentemail}
              readOnly
              {...register('agentEmail')}
            />
          </div>
          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-blue-800">
              Property ID:
            </label>
            <input
              className='w-56 h-10 rounded-lg text-center text-black'
              type="text"
              value={propertyId}
              readOnly
              {...register('propertyId')}
            />
          </div>

          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-blue-800">
              Buyer Name :
            </label>
            <input
              className='w-56 h-10 rounded-lg text-center text-black'
              type="text"
              value={wishername}
              readOnly
              {...register('buyerName')}
            />
          </div>
          <div className="mb-4 sm:mb-0">
            <label className="block text-sm font-medium text-blue-800">
              Buying Date :
            </label>
            <input
              className='w-56 h-10 rounded-lg text-center text-black'
              type="date"
              {...register('buyingDate', { required: true })}
            />
          </div>
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="btn mb-10 bg-blue-950 text-white py-2 px-10"
              
            >
              Submit Offer :
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MaKeOffer;
