import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Advertisement from './Advertisement/Advertisement';
import UserReview from './Latestreview/UserReview';
import About from './About';
import Connectus from './ConnetctUs.jsx/Connectus';
import Sopnser from './Sopnser';
import PontsAbout from './PontsAbout';

const Home = () => {
  return (
    <div >
     
     <Navbar></Navbar>
        <Banner></Banner>
        <Advertisement></Advertisement>
        <div className='xl:max-h-full lg:max-w-[1400px] md:max-w-[700px] max-w-[450px] mx-auto'>
      
        <UserReview></UserReview>
       
 <About></About>
 <Sopnser></Sopnser>
 <PontsAbout></PontsAbout>
        <Connectus></Connectus> 
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;