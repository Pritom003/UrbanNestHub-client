import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/UseAuth";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { Avatar, Card } from "keep-react";
import { FaFacebook } from "react-icons/fa";
import SecondHome from "../../../../Routs/SecondHome";

const AdminHome = () => {
  const { user } = useAuth();
  const axiossecure = useAxiosSecure();

  const { data: adminData = [], isLoading } = useQuery({
    queryKey: ["admindata"],
    queryFn: async () => {
      const res = await axiossecure.get(`/user`);
      return res.data;
    },
  });

  const realRole = adminData.find((data) => user?.email.toLowerCase() === data.email);

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-blue-900">Welcome {user.displayName}</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : realRole ? (
          
         <div>
     
           <Card  className="max-w-full p-6">
         <Card.Container className="flex items-center justify-center">
           <Avatar
             shape="circle"
             img={user.photoURL}
             statusPosition="bottom-right"
             size="2xl"
           />
         </Card.Container>
         <Card.Container className="text-center">
           <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">
           {user.displayName}
           </Card.Title>
           <Card.Title className="!text-body-6 font-normal text-metal-400 
           md:text-body-5">Role: {realRole.role} <br /> Email: {realRole.email}. </Card.Title>
         </Card.Container>
         <Card.Container className="circled mx-auto flex max-w-[220px]
          items-center justify-center divide-x divide-metal-200 rounded-md 
          border border-metal-200 p-1 md:p-2">
          
         
         </Card.Container>
       </Card> </div>
        ) : (
          <p>User not found or not an admin.</p>
        )}
      </div>
    </div>
  );
};

export default AdminHome;
