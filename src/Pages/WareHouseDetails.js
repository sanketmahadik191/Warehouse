import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDetails, updateDetails } from '../features/warehouses/warehousesSlice';
import { useNavigate } from 'react-router-dom';

const WarehouseDetails = () => {

  const { id, name, city, cluster, spaceAvailable, liveStatus } = useSelector(state => state.warehouses.warehouseDetails);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    if (id === '' || name === '' || city === '' || cluster === '' || spaceAvailable === '' || liveStatus === '') {
      alert('All fields should have a value');
      return;
    }
    dispatch(updateDetails([id, name, city, cluster, spaceAvailable, liveStatus]))
    alert('Warehouse details updated successfully');
    navigate('/');
  }

  return (
    <form className="bg-gray-100 p-4 rounded-lg shadow-md">
     
      <h2 className="text-lg font-semibold mb-4">Edit Warehouse</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Warehouse Name</label>
        <input
          onChange={(e)=>dispatch(changeDetails(['name',e.target.value]))}
          required
          value={name}
          type="text"
          className="p-2 border rounded-lg w-full"
        />
      </div>
     
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">City</label>
        <input
          onChange={(e)=>dispatch(changeDetails(['city',e.target.value]))}
          required
          value={city}
          type="text"
          className="p-2 border rounded-lg w-full"
        />
      </div>
      
     
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Cluster</label>
        <input
          onChange={(e)=>dispatch(changeDetails(['cluster',e.target.value]))}
          required
          value={cluster}
          type="text"
          className="p-2 border rounded-lg w-full"
        />
      </div>
      
     
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Space Available (sq. ft.)</label>
        <input
          onChange={(e)=>dispatch(changeDetails(['spaceAvailable',e.target.value]))}
          required
          value={spaceAvailable}
          type="number"
          className="p-2 border rounded-lg w-full"
        />
      </div>
    
     
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Warehouse Live Status</label>
        <select
          onChange={(e)=>dispatch(changeDetails(['liveStatus',e.target.value]))}
          required
          value={liveStatus}
          className="p-2 border rounded-lg w-full"
        >
          <option value="true">Live</option>
          <option value="false">Not Live</option>
        </select>
      </div>
      
    
      <button
        type='submit'
        onClick={handleUpdate}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Update Warehouse
      </button>
    
    </form>
  );
};

export default WarehouseDetails;
