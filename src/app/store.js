import { configureStore } from "@reduxjs/toolkit";
import warehousesReducer from '../features/warehouses/warehousesSlice';

export const store = configureStore({
    reducer: {
        warehouses: warehousesReducer,
    },
});

export default store;



