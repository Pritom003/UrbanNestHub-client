import moduleName from '../../assets/banner.3.jpg';

const Banner = () => {
  return (
    <div className="hero min-h-[30vh] mb-10">
    <div className="hero-content justify-between md:gap-36 flex-col lg:flex-row-reverse">
     
     
      <img src={moduleName} className="max-w-sm w-1/2 rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl w-1/2 font-bold">UrbanNestHubs</h1>
        <p className="py-6">Elevate Your Living, Find Your Haven <br />
        <span className='font-bold italic'> UrbanNestHubs</span>, Your Gateway to Home.</p>
        <button className="btn bg-[#265073] text-white">Get Started</button>
      </div>
    </div>
  </div>
  );
};

export default Banner;