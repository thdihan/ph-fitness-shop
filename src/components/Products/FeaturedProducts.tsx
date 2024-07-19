import { Link } from "react-router-dom";

import ProductList from "./ProductList";

const FeaturedProducts = () => {
    return (
        <div className="px-8 lg:px-16  py-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Featured Product</h2>
                <Link to="/">All Products</Link>
            </div>

            <ProductList criteria={`featured`} />
        </div>
    );
};

export default FeaturedProducts;
