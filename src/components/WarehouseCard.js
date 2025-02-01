import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDetails } from '../features/warehouses/warehousesSlice';

const WarehouseCard = ({ id, name, city, spaceAvailable, type }) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getDetails(id));
  }

  return (
    <Link to={`/warehouse/${id}`}>
      <div className="bg-gray-100 shadow-md rounded-lg p-4 mb-4 cursor-pointer" onClick={handleClick}>
        <h2 className="text-lg font-semibold">{name}</h2>
        <div className="flex justify-between mt-2">
          <p className="text-gray-600">{city}</p>
          <p className="text-gray-600">{type}</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-gray-600">Space Available: {spaceAvailable} sq. ft.</p>
        </div>
      </div>
    </Link>
  );
};

export default WarehouseCard;
