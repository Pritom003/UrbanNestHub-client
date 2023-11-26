import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/UseAuth";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";

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
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img src={user.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-2xl font-bold">Name: {user.displayName}</h1>
                <p className="py-6">Role: {realRole.role}.</p>
                <p className="py-6">Email: {realRole.email}.</p>
              </div>
            </div>
          </div>
        ) : (
          <p>User not found or not an admin.</p>
        )}
      </div>
    </div>
  );
};

export default AdminHome;
