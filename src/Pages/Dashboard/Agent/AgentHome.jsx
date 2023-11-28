import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import bg from '../../../assets/bg.jpg';
import agent from '../../../assets/agent.webp';

const AgentHome = () => {
  const { user } = useAuth();
  console.log(user.photoURL);
  const axiossecure = useAxiosSecure();
  const cardStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const { data: agentData = [], isLoading } = useQuery({
    queryKey: ["agentdata"],
    queryFn: async () => {
      const res = await axiossecure.get(`/user`);
      return res.data;
    },
  });

  const realAgent = agentData.find((data) => user?.email.toLowerCase() === data.email);

  return (
    <div>
    <h1 className="text-3xl font-bold text-blue-900">Welcome {user.displayName}</h1>
    {isLoading ? (
      <p>Loading...</p>
    ) : realAgent ? (
      <div className="hero min-h-screen bg-base-200" style={cardStyle}>
        <div className="hero-content flex-col lg:flex-row">
          {
            user.photoURL ? (
              <img src={user.photoURL} alt=''className="max-w-sm rounded-lg shadow-2xl" />
            ) : (
              <img src={agent} className="max-w-sm rounded-lg shadow-2xl" />
            )
          }
          <div>
            <h1 className="text-2xl font-bold">Name: {user.displayName}</h1>
            <p className="py-6">Role: {realAgent.role}.</p>
            <p className="py-6">Email: {realAgent.email}.</p>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
              You are now part of UrbanNest Hub as an Agent. Your role is crucial in connecting buyers and sellers, ensuring a seamless real estate experience.
            </p>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Feel free to explore the platform, and remember that you have the ability to buy or sell authentic properties. Your contributions make UrbanNest Hub a trusted destination for real estate transactions.
            </p>
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
