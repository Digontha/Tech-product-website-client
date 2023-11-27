import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductDetails from "../Component/ProductDetails/ProductDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import TrandingDetails from "../Component/TrandingDetails/TrandingDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../Pages/Dashboard";
import MyProduct from "../Component/DashboardElement/MyProduct";
import AddProduct from "../Component/DashboardElement/AddProduct";
import MyProfile from "../Component/DashboardElement/MyProfile";
import Payment from "../Component/Payment/Payment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                
            },
            {
                path: "/products",
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader:()=>fetch("http://localhost:5000/allProductCount")

            },
            {
                path: "allProduct/:id",
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/AllProduct/${params.id}`)
            }
            ,
            {
                path: "/featuredProduct/:id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/featuredProduct/${params.id}`)

            }
            ,
            {
                path: "/trandingProduct/:id",
                element: <PrivateRoute><TrandingDetails></TrandingDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/trandingProduct/${params.id}`)

            }
            ,
            {
                path: "/payment",
                element: <Payment></Payment>
            },
            {
                path: "/login",
                element: <Login></Login>,

            }
            ,
            {
                path: "/register",
                element: <Register></Register>,

            },

        ]
    },

    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <MyProfile></MyProfile>
            },
            {
                path: "/dashboard/addProduct",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/dashboard/myProduct",
                element: <MyProduct></MyProduct>
            }
        ]
    },
]);

export default router