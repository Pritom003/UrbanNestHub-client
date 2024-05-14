import bannerimg from '../../assets/finaal.jpg';

const Banner = () => {
  return (
    <div
    className="h-[400px]  md:min-h-[80vh] grid 
  
    bg-cover bg-no-repeat bg-[#756844cf] bg-blend-overlay "
    style={{
      backgroundImage: `url(${bannerimg})`,
    }}
  >
 <div className='absolute left-0 top-72 lg:top-96 ml-8'>

  
        <h1 className="text-white text-4xl md:text-6xl font-bold">UrbansNestHub</h1>
        <h1 className="text-white text-3xl md:text-6xl font-bold"> Your dream our destination</h1>
      </div>
 
    </div>
  );
};

export default Banner;
