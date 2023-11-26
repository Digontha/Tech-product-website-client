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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/products",
                element: <Products></Products>

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
                path: "dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "/login",
                element: <Login></Login>,

            }
            ,
            {
                path: "/register",
                element: <Register></Register>,

            }
        ]
    },
]);

export default router