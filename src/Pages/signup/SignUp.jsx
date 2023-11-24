
import { Link } from 'react-router-dom';
import google from '../../assets/icons8-google.svg';

const SignUp = () => {
  return (

<div className=''>
<div className="hero   bg-base-200">
  <div className="hero-content  flex-col lg:flex-row">
     <div className='grid  align-middle items-center justify-center'>
     <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold text-[#7C93C3] ">Sign UP</h1>
      </div>
  <form  className="card-body max-h-[80vh] ">
  <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input type="photo" name='image' placeholder="url" className="input input-bordered w-96" required />
          </div>
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
            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
            <p>
            Have an account?{' '}
            <Link className='underline-offset-8 
             text-cyan-600 font-bold' to='/login'>
              Login
            </Link>
          </p>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#265073] text-white font-bold text-xl">Sign up</button>
          </div>
        
        </form>


     </div>







    <div>
    <button className='flex h-20 btn btn-outline text-white bg-[#265073] justify-center  items-center align-middle'> signup with
    <img className='h-[60px]' src={google} alt="" />Google </button>

    </div>
  </div>
</div>
</div>






















  );
};

export default SignUp;