import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../Hooks/UseAxios';
import { FaRemoveFormat, FaTrash, FaUser } from 'react-icons/fa';
import useAxiosSecure from '../../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';

const Allusers = () => {
  const axiosPublic = useAxios();
  const axiosSecure=useAxiosSecure()
  const { data: users = [],refetch } = useQuery({
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







  const handleDeleteUser = user => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {

            axiosSecure.delete(`/user/${user._id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
        }
    });
}





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
        <td> <button onClick={()=>handleDeleteUser(users)} className='text-red-800'><FaTrash></FaTrash></button></td>
      </tr>)}
      
     
     
    </tbody>
  </table>
</div>


  )
};

export default Allusers;
