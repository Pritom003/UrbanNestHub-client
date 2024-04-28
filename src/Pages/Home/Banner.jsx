import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import image1 from '../../assets/banner.3.jpg';
import image2 from '../../assets/banner.jpg';
import logo from '../../assets/icons8-real-estate-50 (1).png';
// import moduleName from '../../assets/Yellow Orange Blue White Minimalist Illustration Animation Youtube Intro (1).mp4';

const Banner = () => {
  const {user}=useAuth()
  return (
<div   >
<div className="hero min-h-[60vh]" style={{backgroundImage: `url(${image2})`}}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">URBAN NEST HUBS</h1>
      <p className="mb-5 text-2xl">
      Elevate Your Living, Find Your Haven
UrbanNestHubs, Your Gateway to Home </p>
    </div>
  </div>
</div>
</div>

  );
};

export default Banner;