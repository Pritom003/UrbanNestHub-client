import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../assets/icons8-google.svg';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer';
import useAuth from '../../Hooks/UseAuth';
import useAxios from '../../Hooks/UseAxios';
import Swal from 'sweetalert2';
const Login = () => {

  const location=useLocation()
  console.log(location);
  const navigate=useNavigate()
  const { loginuser} = useAuth()

const axiosPublic=useAxios()




  const handlelogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // const info = { email, password };
    loginuser(email, password)
    .then((res) => {
      console.log(res.user);
      const user={email}
      console.log(user);

    
     navigate(location?.state? location.state :'/')

  })
    .catch((error) => {
      console.error(error);
    })}
    // const handlegooglepop = () => {
    //   creategooglesignup()
    //     .then((res) => {
    //       console.log('user', res.user);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //       Swal.fire({
    //         icon: 'error',
    //         text: 'Email and password do not match, please try again!',
    //       })})
    // };










  return (
  <div>
    <Navbar></Navbar>
      <div className="hero min-h-[70vh] bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
       <div className='grid  align-middle items-center justify-center'>
       <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-[#7C93C3] ">Login Now</h1>
        </div>
    <form onSubmit={handlelogin} className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' 
              placeholder="password" className="input  w-96 input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
            <button className="btn bg-[#265073]
             text-white font-bold text-xl">Login</button>
          </div>
            <p>
              Have an account?{' '}
              <Link className='underline-offset-8 
               text-cyan-600 font-bold' to='/regi'>
                SignUP
              </Link>
            </p>
          </form>
  
  
       </div>
  
  
  
  
  
  
  
       {/* <div>
    <button onClick={handleGoogleSignIn} className='flex h-20 btn btn-outline text-white bg-[#265073] justify-center  items-center align-middle'> Login
    <img className='h-[60px]' src={google} alt="" />Google </button>

    </div> */}
    </div>
  </div>
  <Footer></Footer>
  </div>
  );
};

export default Login;