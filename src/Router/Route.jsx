import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductDetails from "../Component/ProductDetails/ProductDetails";

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
      ]
    },
  ]);

  export default router