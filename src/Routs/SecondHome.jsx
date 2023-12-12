import React from 'react';
import useAuth from '../Hooks/UseAuth';
import js from '../assets/Animation - 1702374413877.json'
import Lottie from 'lottie-react';
const SecondHome = () => {
  const {user}=useAuth()
  return (
    <div>
     
      <Lottie height={10} animationData={js}></Lottie>
      <h1 className='text-3xl font-bold'> Enjoy Your journey {user.displayName}</h1>
    </div>
  );
};

export default SecondHome;