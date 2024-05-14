import { FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/icons8-real-estate-50 (1).png';

const Footer = () => {
  return (
    <div className="grid lg:grid-cols-3
     md:grid-cols-1  h-[350px] lg:h-[200px] pt-20 px-8 bg-slate-800 text-white">
<div>
<img className='h-[50px]' src={logo} alt="" />
      <p className="font-bold">
      UrbanNestHubs Ltd. <br/>
      </p> 
     
</div>
<div>
  <p>
    Contact Us : 
  </p>
  <a href="#"> urban@gmail.com</a>
  <a href="#" className='flex  gap02  gap-2 align-middle items-center'> <FaLinkedin></FaLinkedin> Urbans ltd</a>
</div>
<div className='  '>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magni non assumenda tempore, </p>
<p className='pt-2'>Copyright © 2023 - All right reserved</p>
</div>
  </div>
  );
};

export default Footer;