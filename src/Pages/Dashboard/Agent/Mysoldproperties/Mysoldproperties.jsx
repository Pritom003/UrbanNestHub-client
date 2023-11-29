import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/UseAuth";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";

const Mysoldproperties = () => {
  const { user } = useAuth();
  const axiossecure = useAxiosSecure();
  const { data: payments = [], isLoading } = useQuery({
    queryKey: ['payments'],
    queryFn: async () => {
      const res = await axiossecure.get(`/offers`);
      return res.data;
    },
  });
  console.log(payments,user.email);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Property title</th>
              <th>Property location</th>
              <th>Buyer email</th>
              <th>Buyer name</th>
              <th>Sold price</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {payments
              .filter((data) => data.agentEmail === user.email.toLowerCase() && data.request === 'payed')
              .map((data, index) => (
                <tr key={index}>
                  <td>{data.propertyTitle}</td>
                  <td>{data.propertyLocation}</td>
                  <td>{data.buyerEmail}</td>
                  <td>{data.buyerName}</td>
                  <td>{data.offeredAmount}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mysoldproperties;
