import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import ProductDetails from "../components/Products/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/all-products",
                element: <AllProducts />,
            },
            {
                path: "/products/:id",
                element: <ProductDetails />,
            },
        ],
    },
]);

export default router;
