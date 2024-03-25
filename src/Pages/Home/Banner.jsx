import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import moduleName from '../../assets/banner.3.jpg';
// import moduleName from '../../assets/Yellow Orange Blue White Minimalist Illustration Animation Youtube Intro (1).mp4';

const Banner = () => {
  const {user}=useAuth()
  return (
    <div className="hero min-h-[30vh] bg-transparent bg-[#d9dfe4] shadow-lg mb-10">
    <div className="hero-content justify-between md:gap-36 flex-col lg:flex-row-reverse">
     
     
      <img src={moduleName} className="max-w-sm w-1/2 rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl w-1/2 font-bold">UrbanNestHubs</h1>
        <p className="py-6">Elevate Your Living, Find Your Haven <br />
        <span className='font-bold italic'> UrbanNestHubs</span>, Your Gateway to Home.</p>
      {
        user?.email?<Link to='/dashboard'>  <button className="btn bg-[#265073] text-white">Get Started</button>
        </Link>:<Link to='/login'>  <button className="btn bg-[#265073] text-white">Get Started</button></Link>
      }
      </div>
    </div>
  </div>
  );
};

export default Banner;