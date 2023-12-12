import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import moduleName from '../../assets/animation.png';
const About = () => {
  return (
   
   <div className='flex mt-10 mb-10'>
    <img src={moduleName} className='w-[100px] rounded-full' alt="" />
     <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' UrbanNestHub is more than just a real estate platform  Our mission is to make your real estate platform',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'its a community built on trust, transparency and a shared love for finding and sellind the perfect home ',
        1000,
        'Thank you for choosing and beliving in us  ',
        1000,
        'Enjoy you journey and find your place with us',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em',color:' #00008B.', display: 'inline-block' }}
      repeat={Infinity}
    />
   </div>
  );
};

export default About;
