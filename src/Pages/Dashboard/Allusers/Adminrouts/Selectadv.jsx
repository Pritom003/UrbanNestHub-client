import React from 'react';
import useAxios from '../../../../Hooks/UseAxios';
import { useQuery } from '@tanstack/react-query';

const Selectadv = () => {
  const axiosPublic=useAxios()
  const { data: properties = [],refetch } = useQuery({
    queryKey: ['allusers'],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get('/properties');
        return res.data;
      } catch (error) {
        throw new Error('Failed to fetch user data');
      }
    },
  });



  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Property Image</th>
            <th>Property Title</th>
            <th>Price Range</th>
            <th>Agent Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property._id}>
              <td>
                <img src={property.imageUrl} alt={property.title} style={{ width: '50px', height: '50px' }} />
              </td>
              <td>{property.title}</td>
              <td>{`${property.priceRangeMin} - ${property.priceRangeMax}`}</td>
              <td>{property.agentName}</td>
              {/* <td>
                {advertisedProperties.some((adv) => adv._id === property._id) ? (
                  <button onClick={() => handleRemoveAdvertisement(property._id)} disabled={removeAdvertisement.isLoading}>
                    Remove Advertise
                  </button>
                ) : (
                  <button onClick={() => handleAdvertise(property._id)} disabled={advertiseProperty.isLoading}>
                    Advertise
                  </button>
                )}
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

  

export default Selectadv;