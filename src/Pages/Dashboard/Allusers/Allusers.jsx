import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../Hooks/UseAxios';
import { FaUser } from 'react-icons/fa';

const Allusers = () => {
  const axiosPublic = useAxios();
  const { data: users = [] } = useQuery({
    queryKey: ['allusers'],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get('/user');
        return res.data;
      } catch (error) {
        throw new Error('Failed to fetch user data');
      }
    },
  });

  console.log(users, 'helloooo');

  return (
<div className="overflow-x-auto bg-slate-200">
  <table className="table">
    {/* head */}
    <thead>
    <tr className='bg-gradient-to-r from-blue-500 to-blue-950 text-white'>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>role</th>
        <th>make admin</th>
        <th>remove user</th>
      </tr>
    </thead>
    <tbody>
      {users?.map((users,index)=> <tr key={index}>
         <td>{index}</td>
        <td>{users.name}</td>
        <td>{users.email}</td>
        <td>{users.role}</td>
        <td>

        <button  className="btn border border-blue-900 bg-blue-200 px-6">
         <FaUser></FaUser> user</button>
        </td>
        <td>delete</td>
      </tr>)}
      
     
     
    </tbody>
  </table>
</div>


  )
};

export default Allusers;
