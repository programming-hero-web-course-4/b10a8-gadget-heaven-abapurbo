import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Dashboard from "../Page/Dashboard/Dashboard";
import ProductDetails from "../ProductDetails/ProductDetails";
import DifferentCategory from "../Home/DifferentCategory";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import About from "../Page/Aboutus/About";





const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/gadgets.json'),
                errorElement: <ErrorPage></ErrorPage>,
                children: [
                    {
                        path: '/differentCategory/:categoryName',
                        loader: () => fetch('/gadgets.json'),
                        element: <DifferentCategory></DifferentCategory>
                    },

                ]

            },
            {
                path: '/productDetails/:id',
                loader: () => fetch('/gadgets.json'),
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/dashboard',
                loader: () => fetch('/gadgets.json'),
                element: <Dashboard></Dashboard>,
               
            },
            {
                path:'/about',
                element:<About></About>
            }
        ]
    }

]);
export default router