import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import ProductDetails from "../components/Products/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

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
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/checkout",
                element: <Checkout />,
            },
        ],
    },
]);

export default router;
