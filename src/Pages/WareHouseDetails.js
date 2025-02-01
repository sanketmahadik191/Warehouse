import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDetails, updateDetails } from '../features/warehouses/warehousesSlice';
import { useNavigate } from 'react-router-dom';

const WarehouseDetails = () => {
  const { id, name, city, cluster, spaceAvailable, liveStatus } = useSelector(
    (state) => state.warehouses.warehouseDetails
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!id || !name || !city || !cluster || !spaceAvailable || liveStatus === '') {
      alert('All fields should have a value');
      return;
    }
    dispatch(updateDetails([id, name, city, cluster, spaceAvailable, liveStatus]));
    alert('Warehouse details updated successfully');
    navigate('/');
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-5 text-center">
        Edit Warehouse
      </h2>

      <form className="space-y-4">
        {/* Warehouse Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Warehouse Name
          </label>
          <input
            onChange={(e) => dispatch(changeDetails(['name', e.target.value]))}
            required
            value={name}
            type="text"
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            onChange={(e) => dispatch(changeDetails(['city', e.target.value]))}
            required
            value={city}
            type="text"
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Cluster */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cluster
          </label>
          <input
            onChange={(e) => dispatch(changeDetails(['cluster', e.target.value]))}
            required
            value={cluster}
            type="text"
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Space Available */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Space Available (sq. ft.)
          </label>
          <input
            onChange={(e) => dispatch(changeDetails(['spaceAvailable', e.target.value]))}
            required
            value={spaceAvailable}
            type="number"
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Live Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Warehouse Live Status
          </label>
          <select
            onChange={(e) => dispatch(changeDetails(['liveStatus', e.target.value]))}
            required
            value={liveStatus}
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none bg-white"
          >
            <option value="true">Live</option>
            <option value="false">Not Live</option>
          </select>
        </div>

        {/* Update Button */}
        <button
          type="submit"
          onClick={handleUpdate}
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-200 focus:ring-2 focus:ring-blue-400"
        >
          Update Warehouse
        </button>
      </form>
    </div>
  );
};

export default WarehouseDetails;
