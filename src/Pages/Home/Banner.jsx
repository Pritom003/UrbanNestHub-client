import image2 from '../../assets/banner.jpg';
import { TypeAnimation } from 'react-type-animation';
// import moduleName from '../../assets/Yellow Orange Blue White Minimalist Illustration Animation Youtube Intro (1).mp4';

const Banner = () => {
  return (
<div   >
<div className="hero min-h-[80vh]" style={{backgroundImage: `url(${image2})`}}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
    <h1 className="mb-5 text-5xl font-bold">URBAN NEST HUBS</h1>
    <TypeAnimation
      sequence={[
        
        ' Elevate Your Living, Find Your Haven UrbanNestHubs, Your Gateway to Home',
        1000, 
   
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2rem',
       display: 'inline-block' }}
      repeat={Infinity}
    />

   
   
    </div>
  </div>
</div>
</div>

  );
};

export default Banner;