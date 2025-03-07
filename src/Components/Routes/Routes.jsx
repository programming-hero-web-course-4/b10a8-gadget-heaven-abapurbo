import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Dashboard from "../Page/Dashboard/Dashboard";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:"/",
                loader:()=>fetch('/gadgets.json'),
                element:<Home></Home>
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            }
        ]
    }
    
]);
export default router