import { Link } from "react-router-dom";

import ProductList from "./ProductList";
import { useGetAllProductsQuery } from "../../redux/api/baseApi";
import { useEffect, useState } from "react";
import { TProduct } from "../../types";

const FeaturedProducts = () => {
    const { data: products } = useGetAllProductsQuery(undefined);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    useEffect(() => {
        if (products) {
            const featured = products.data.filter(
                (product: TProduct) => product.isFeatured
            );
            setFeaturedProducts(featured);
        }
    }, [products]);
    return (
        <div className="px-4 md:px-8 lg:px-16 py-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Featured Product</h2>
                <Link to="/">All Products</Link>
            </div>

            <ProductList products={featuredProducts} />
        </div>
    );
};

export default FeaturedProducts;
