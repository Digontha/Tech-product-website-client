import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductDetails from "../Component/ProductDetails/ProductDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import TrandingDetails from "../Component/TrandingDetails/TrandingDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/products",
            element:<Products></Products>

        }
         ,
        {
            path:"/featuredProduct/:id",
            element:<ProductDetails></ProductDetails>,
            loader:({params})=>fetch(`http://localhost:5000/featuredProduct/${params.id}`)

        }
         ,
        {
            path:"/trandingProduct/:id",
            element:<TrandingDetails></TrandingDetails>,
            loader:({params})=>fetch(`http://localhost:5000/trandingProduct/${params.id}`)

        }
         ,
        {
            path:"/login",
            element:<Login></Login>,

        }
         ,
        {
            path:"/register",
            element:<Register></Register>,

        }
      ]
    },
  ]);

  export default router