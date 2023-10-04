import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../hotels.json'

const PropertyPage = () => {
  const { id } = useParams();


  const property = data.hotels.find((hotel) => hotel.id === parseInt(id, 10));
console.log(property);
  

  return (
    
      <div className="bg-white rounded overflow-hidden shadow-lg m-4">
        <div className="p-4">
          <p className="text-lg font-semibold">{property.name}</p>
          
        </div>
      </div>
    
  );
};

export default PropertyPage;
