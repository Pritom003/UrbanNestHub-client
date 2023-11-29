import { useQuery } from '@tanstack/react-query';
// import useAxios from '../../../Hooks/UseAxios';
import { FaTrash, FaUser } from 'react-icons/fa';
import useAxiosSecure from '../../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
import AllUsersMaterialTable from './AllUsersTable';

const Allusers = () => {
  // const axiosPublic = useAxios();
  const axiosSecure=useAxiosSecure()
  const { data: users = [],refetch } = useQuery({
    queryKey: ['allusers'],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get('/user');
        return res.data;
      } catch (error) {
        throw new Error('Failed to fetch user data');
      }
    },
  });

  console.log(users, 'helloooo');







  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/user/${user._id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch(error => {
            console.error('Error deleting user:', error);
            Swal.fire({
              title: "Error",
              text: "Failed to delete user.",
              icon: "error",
            });
          });
      }
    });
  };


const handleMakeAdmin=user=>{
  axiosSecure.patch(`/user/admin/${user._id}`)
  .then(res=>{
      console.log(res.data)
      if(res.data.modifiedCount>0){
          refetch();
          Swal.fire({
              title:`${user.name} is an admin Now!`,
              
              icon: "success"
            });
      }
  })
}
const handleMakeAgent=user=>{
  axiosSecure.patch(`/user/agent/${user._id}`)
  .then(res=>{
      console.log(res.data)
      if(res.data.modifiedCount>0){
          refetch();
          Swal.fire({
              title:`${user.name} is an agent Now!`,
              
              icon: "success"
            });
      }
  })
}

const handlefraud = async (user) => {
  const fraudagentEmail = user.email;

  try {
    const response = await axiosSecure.patch(`/user/fraud/${user._id}`, { agentEmail: fraudagentEmail });

    console.log(response.data);

    if (response.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        title: `${user.name} is marked as fraud!`,
        icon: "success"
      });
    }
  } catch (error) {
    console.error('Error marking as fraud:', error.message);
    Swal.fire({
      title: "Error",
      text: `${error.message}`,
      icon: "error",
    });
  
  }
};


  return (
    <div className="overflow-x-auto bg-slate-200">
    {/* ... (other JSX) */}
    <AllUsersMaterialTable
      users={users}
      handleDeleteUser={handleDeleteUser}
      handleMakeAdmin={handleMakeAdmin}
      handleMakeAgent={handleMakeAgent}
      handleFraud={handlefraud}
    />
  </div>


  )
};

export default Allusers;
