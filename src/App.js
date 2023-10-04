import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CityTabs from './components/CityTabs';
import PropertyCard from './components/PropertyCard';
import PropertyPage from './components/PropertyPage';
import data from './hotels.json'
function App() {
  const [activeCity, setActiveCity] = useState(data.cities[0].id);
  const [visibleProperties, setVisibleProperties] = useState(3);
  const filteredHotels = data.hotels.filter(
    (hotel) => hotel.cityId === activeCity
  );
  const visibleHotels = filteredHotels.slice(0, visibleProperties);

  const handleShowMore = () => {
    setVisibleProperties((prevCount) => prevCount + 3);
  };
  return (
    <>
      <div className="w-[100%] h-screen p-4 bg-[#f3ecf8]">
       <div className='w-[100%] h-[94%] '>
        <Router>
        <CityTabs
          cities={data.cities}
          activeCity={activeCity}
          onTabClick={setActiveCity}
        />
          <div className="flex flex-wrap w-[100%] h-[48%] items-center justify-center">
            {visibleHotels.map((hotel) => (
              <PropertyCard key={hotel.id} {...hotel} />
            ))}
          </div>

          <Routes>
            <Route path="/property/:id" element={<PropertyPage/>} />
          </Routes>
        </Router>
        </div>
        <div className='flex items-center justify-center '>
        <button
          className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600 text-center"
          onClick={handleShowMore}
        >
          Show More
        </button>
        </div>
        
      </div>
    </>
  );
}

export default App;
