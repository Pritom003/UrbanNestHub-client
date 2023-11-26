import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";

const AgentHome = () => {
  const { user } = useAuth();
  const axiossecure = useAxiosSecure();

  const { data: agentData = [], isLoading } = useQuery({
    queryKey: ["agentdata"],
    queryFn: async () => {
      const res = await axiossecure.get(`/user`);
      return res.data;
    },
  });

  const realAgent = agentData.find((data) => user?.email.toLowerCase() === data.email);

  const realRole = agentData.find((data) => data.role === 'agent');
  console.log('therle', realRole);

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-900">Welcome {user.displayName}</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : realAgent ? (
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
        <p>User not found or not an agent.</p>
      )}
    </div>
  );
};

export default AgentHome;
