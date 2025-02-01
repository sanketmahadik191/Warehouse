import { createSlice } from "@reduxjs/toolkit";
import warehouses from '../../warehouses.json';

const warehousesSlice = createSlice({
    name: 'warehouses',
    initialState: 
        {
            allWarehouses: warehouses,
            filteredWarehouses: warehouses,
            warehouseDetails: {
                id: '',
                name: '',
                city: '',
                cluster: '',
                spaceAvailable: '',
                liveStatus: '',
            },
        }
    ,
    reducers: {
        searchByName(state, action) {
            const query = action.payload;
            state.filteredWarehouses = state.allWarehouses.filter((warehouse) => {
                return warehouse.name.toLowerCase().includes(query)
            });
        },
        filterWarehouses(state, action) {
            const { city, cluster, spaceLimit } = action.payload;
            state.filteredWarehouses = state.allWarehouses.filter((warehouse) => {
                return ((warehouse.city === city || city === '') && (warehouse.cluster === cluster || cluster === '') && (warehouse.space_available.toString() === spaceLimit || spaceLimit === ''))
            })
        },
        getDetails(state,action) {
            const warehouse = state.allWarehouses.find((warehouse) => {
                return warehouse.id === action.payload;
            });
            state.warehouseDetails = {
                id: warehouse.id,
                name: warehouse.name,
                city: warehouse.city,
                cluster: warehouse.cluster,
                spaceAvailable: warehouse.space_available,
                liveStatus: warehouse.is_live,
            }
        },
        changeDetails(state,action) {
            const key = action.payload[0];
            const value = action.payload[1];
            state.warehouseDetails[key] = value;
        },
        updateDetails(state,action) {
            const [id, name, city, cluster, spaceAvailable, liveStatus] = action.payload;
            const updatedWarehouses = state.allWarehouses.map((warehouse) => {
                if (warehouse.id === id) {
                    console.log(warehouse.id);
                    warehouse.name = name;
                    warehouse.city = city;
                    warehouse.cluster = cluster;
                    warehouse.space_available = spaceAvailable;
                    warehouse.is_live = liveStatus;
                }
                return warehouse;
            });
            state.allWarehouses = updatedWarehouses;
            state.filteredWarehouses = updatedWarehouses;
        }
    },
})


export const { searchByName, filterWarehouses, getDetails, changeDetails, updateDetails } = warehousesSlice.actions;
export default warehousesSlice.reducer;
