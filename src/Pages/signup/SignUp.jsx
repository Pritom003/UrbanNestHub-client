
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../assets/icons8-google.svg';
import useAuth from '../../Hooks/UseAuth';
import { updateProfile } from 'firebase/auth';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useAxios from '../../Hooks/UseAxios';

const SignUp = () => {
const { createUser,    creategooglesignup,}=useAuth()
const axios=useAxios()
const [email, setemail] = useState('');
const [socialerr,setsocial]=useState('')
const [password, setpassword] = useState('');
const [passerr, setpasserr] = useState('');
// const location = useLocation();
const navigate = useNavigate();
  const handleregister = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const role = form.role.value;
    const email = form.email.value;
    const password = form.password.value;
console.log(role,image,name,email,password);
    if (!/^.{6,}$/.test(password)) {
      setpasserr('Password should be more than 6 characters');
    } else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).*$/.test(password)) {
      setpasserr('Password should contain at least one capital letter and one special character');
    } else {
      setpasserr('');
      setpassword(password);
      setemail(email);

      createUser(email, password)
        .then((res) => {
          console.log(res.user);
          updateProfile(res.user, {
            displayName: `${name}`,
            photoURL: `${image}`,
          })
            .then(() => {
              // console.log('success image', nameimg);

              const User={
                email:email,
                name:name,
                role:role,
                image:image,

              }

            axios.post('/user',User)
            .then(res=>{
              if (res.data.insertedId) {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Your registration was successful!',
                  showConfirmButton: false,
                  timer: 1500,
                });

                     

                navigate("/");
              }
              else{
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'inseted id null',
                  footer: '<a href=""> try again</a>',
                });
              }
            })

            })
            .catch((err) => {
              console.error(err, 'error img');
            });
        
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'something went wrong',
            footer: '<a href=""> try again</a>',
          });
        });
    }
  };




  const handleGoogle = (e) => {
    e.preventDefault();
    const role = e.target.role.value;

    creategooglesignup()
      .then((res) => {
        const user = {
          email: res.user.email,
          name: res.user.displayName,
          role: role,
          image: res.user.photoURL,
        };
        console.log(user, 'User');

        axios.post('/user', user)
        .then(res => {
          if (res.data.insertedId) {
            Swal.fire({
              title: "Successfully Login!",
              icon: "success"
            });
            navigate(location?.state ? location.state : "/");
          }else{
            console.log('this user already exist');
            navigate(location?.state ? location.state : "/");
          }
        })
        .catch((error) => {
        setsocial(error.message);
        });
      })
      .catch((error) => {
        setsocial(error.message);
      });
  };












  return (

<div className=''>
<div className="hero   bg-base-200">
  <div className="hero-content  flex-col lg:flex-row">
     <div className='grid  align-middle items-center justify-center'>
     <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold text-[#7C93C3] ">Sign UP</h1>
      </div>
  <form onSubmit={handleregister} className="card-body max-h-[90vh] ">
  <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
          </div>



          <div className="form-control">
          <label className="label">
            <span className="label-text">Role</span>
          </label>
          <select
            name="role"
  
            className="select select-bordered w-full"
            required
          >
            <option value="client">Client</option>
            <option value="agent">Agent</option>
          </select>
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
          <div>
            <p>
              {passerr? passerr:''}
            </p>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#265073] text-white font-bold text-xl">Sign up</button>
          </div>
        
        </form>


     </div>

     <form onSubmit={handleGoogle}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Role</span>
        </label>
        <select
          name="role"
          className="select select-bordered w-full"
          required
        >
          <option value="client">Client</option>
          <option value="agent">Agent</option>
        </select>
      </div>
      {
        socialerr? <p className='text-red-600'>{socialerr}</p>:''
      }

      <button type="submit" className='flex h-20 btn btn-outline text-white bg-[#265073] justify-center items-center align-middle'>
        Sign up with
        <img className='h-[60px]' src={google} alt="" />
        Google
      </button>
    </form>




  </div>
</div>
</div>






















  );
};

export default SignUp;