import { createBrowserRouter } from "react-router-dom"
import Layout from "./layout";
import HomePage from '../Pages/HomePage'
import WarehouseDetails from "../Pages/WareHouseDetails";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>,
            },
            {
                path: '/warehouse/:id',
                element: <WarehouseDetails/>,
            }
        ]
    },
]);

export default route;
