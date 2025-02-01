import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDetails } from '../features/warehouses/warehousesSlice';
import { MapPin, Building2, Layers } from 'lucide-react';

const WarehouseCard = ({ id, name, city, spaceAvailable, type }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getDetails(id));
  };

  return (
    <Link to={`/warehouse/${id}`}>
      <div 
        className="bg-white shadow-lg rounded-xl p-5 mb-4 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl"
        onClick={handleClick}
      >
        {/* Warehouse Name */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>

        {/* City & Type */}
        <div className="flex justify-between items-center text-gray-500 text-sm mb-2">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <p>{city}</p>
          </div>
          <div className="flex items-center gap-2">
            <Building2 size={16} />
            <p>{type}</p>
          </div>
        </div>

        {/* Space Available */}
        <div className="flex items-center gap-2 text-gray-700 font-medium mt-3">
          <Layers size={18} className="text-blue-500" />
          <p>Space Available: <span className="text-blue-600 font-semibold">{spaceAvailable} sq. ft.</span></p>
        </div>
      </div>
    </Link>
  );
};

export default WarehouseCard;
