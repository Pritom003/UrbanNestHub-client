import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Advertisement from './Advertisement/Advertisement';
import UserReview from './Latestreview/UserReview';
import About from './About';
import Connectus from './ConnetctUs.jsx/Connectus';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div >
        <Banner></Banner>
        <Advertisement></Advertisement>
        <UserReview></UserReview>
        <About></About>
        <Connectus></Connectus>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;