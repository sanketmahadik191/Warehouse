import React, { useState } from 'react';
import warehousesData from '../warehouses.json';
import { useDispatch } from 'react-redux';
import { searchByName, filterWarehouses } from '../features/warehouses/warehousesSlice';

const WarehouseFilter = ({ warehouses, onFilter }) => {
  const [city, setCity] = useState('');
  const [cluster, setCluster] = useState('');
  const [spaceLimit, setSpaceLimit] = useState('');

  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(filterWarehouses({ city, cluster, spaceLimit }));
  };

  const handleSearch = (e) => {
    const warehouseName = e.target.value.toLowerCase();
    dispatch(searchByName(warehouseName));
  };

  // Sort warehouses by space_available in ascending order
  const sortedWarehouses = [...warehousesData].sort(
    (a, b) => a.space_available - b.space_available
  );

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="flex flex-wrap justify-between">
        {/* Search */}
        <div className="w-[250px]">
          <input
            type="text"
            placeholder="Search by Warehouse Name"
            onChange={(e) => handleSearch(e)}
            className="p-2 border rounded-lg w-full"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-between gap-4">
          {/* City */}
          <select
            value={city}
            onChange={(e) => {
              setCity(e.target.value === 'City' ? '' : e.target.value);
            }}
            className="p-2 border rounded-lg"
          >
            <option selected>City</option>
            {[...new Set(warehousesData.map((warehouse) => warehouse.city))].map(
              (city, index) => (
                <option key={index}>{city}</option>
              )
            )}
          </select>

          {/* Cluster */}
          <select
            value={cluster}
            onChange={(e) => {
              setCluster(e.target.value === 'Cluster' ? '' : e.target.value);
            }}
            className="p-2 border rounded-lg"
          >
            <option selected>Cluster</option>
            {[...new Set(warehousesData.map((warehouse) => warehouse.cluster))].map(
              (cluster, index) => (
                <option key={index}>{cluster}</option>
              )
            )}
          </select>

          {/* Space Available (Sorted) */}
          <select
            value={spaceLimit}
            onChange={(e) => {
              setSpaceLimit(e.target.value === 'Space Available' ? '' : e.target.value);
            }}
            className="p-2 border rounded-lg"
          >
            <option selected>Space Available</option>
            {[...new Set(sortedWarehouses.map((warehouse) => warehouse.space_available))].map(
              (space, index) => (
                <option key={index}>{space}</option>
              )
            )}
          </select>

          <button
            onClick={handleFilter}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarehouseFilter;
