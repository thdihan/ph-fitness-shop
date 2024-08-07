import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import ProductDetails from "../components/Products/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProductManagement from "../pages/ProductManagement";
import AddProduct from "../pages/AddProduct";
import UpdateProduct from "../components/ProductManagement/UpdateProduct";
import ConfirmOrder from "../pages/ConfirmOrder";

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
                path: "/update/:productId",
                element: <UpdateProduct />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/checkout",
                element: <Checkout />,
            },
            {
                path: "/product-management",
                element: <ProductManagement />,
            },
            {
                path: "/add-product",
                element: <AddProduct />,
            },
            {
                path: "/confirm-order/",
                element: <ConfirmOrder />,
            },
        ],
    },
]);

export default router;
