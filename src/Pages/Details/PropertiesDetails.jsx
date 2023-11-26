import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const PropertiesDetails = () => {
  const { descrption, title, priceRangeMin, priceRangeMax, agentName } = useLoaderData();

  return (
    <div>
      <Navbar />
      <div className="card w-full bg-blue-950 text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl font-bold text-blue-600">{title}</h2>
          <p className="text-lg font-bold"> description {descrption}</p>
          <p className="text-lg font-bold">Agent name: {agentName}</p>
          <p className="text-lg font-bold">
            Price Range: ${priceRangeMin} - ${priceRangeMax}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-accent">Add whislist</button>
            <button className="btn btn-outline btn-primary">review</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesDetails;
