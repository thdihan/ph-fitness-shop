import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
    return (
        <div className="px-16 py-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Featured Product</h2>
                <Link to="/">All Products</Link>
            </div>

            <div className="my-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-2 border-grey-100 md:divide-x-2 divide-y-2 ">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default FeaturedProducts;
