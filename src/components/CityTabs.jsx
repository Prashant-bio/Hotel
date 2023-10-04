import React from 'react';

const CityTabs = ({ cities, activeCity, onTabClick }) => {
  return (
    <div className="flex space-x-10 mx-48">
      {cities.map((city) => (
        <button
          key={city.id}
          className={`py-2 px-4 border ${
            activeCity === city.id ? 'bg-blue-500 text-white rounded-full' : 'bg-white rounded-full'
          }`}
          onClick={() => onTabClick(city.id)}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default CityTabs;
