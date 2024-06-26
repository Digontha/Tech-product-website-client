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
import Update from "../Component/DashboardElement/Update";
import ProductReviewQueue from "../Component/DashboardElement/ProductReviewQueue";
import MyAllProductDetails from "../Component/MyAllProductDetails";
import ManageUser from "../Component/DashboardElement/ManageUser";
import Statistics from "../Component/DashboardElement/Statistics";
import ErrorPage from "../Pages/ErrorPage";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
                
            },
            {
                path: "/products",
                element:<Products></Products>,
                loader:()=>fetch("https://tech-server-omega.vercel.app/allProductCount")

            },
            {
                path: "allProduct/:id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://tech-server-omega.vercel.app/AllProduct/${params.id}`)
            },
            {
                path:"/myProduct/:id",
                element:<Update></Update>,
                loader:({params})=>fetch(`https://tech-server-omega.vercel.app/myProduct/${params.id}`)
            }
            ,
            {
                path: "/featuredProduct/:id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://tech-server-omega.vercel.app/featuredProduct/${params.id}`)

            }
            ,
            {
                path: "/trandingProduct/:id",
                element: <PrivateRoute><TrandingDetails></TrandingDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://tech-server-omega.vercel.app/trandingProduct/${params.id}`)

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
            },
            {
                path:"/dashboard/productReviewQueue",
                element:<ProductReviewQueue></ProductReviewQueue>
            },
            {
                path:"/dashboard/AllMyProduct/:id",
                element:<MyAllProductDetails></MyAllProductDetails>,
                loader:({params})=>fetch(`https://tech-server-omega.vercel.app/myProduct/${params.id}`)
            },
            {
                path:"/dashboard/manageUsers",
                element:<ManageUser></ManageUser>
            },
            {
                path:"/dashboard/statistics",
                element:<Statistics></Statistics>
            }
        ]
    },
]);

export default router