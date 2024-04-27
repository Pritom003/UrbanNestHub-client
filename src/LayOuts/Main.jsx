
import { Navbar } from 'keep-react';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
       <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;