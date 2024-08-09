import { Link } from "react-router-dom";

import ProductList from "./ProductList";
import { useGetAllProductsQuery } from "../../redux/api/baseApi";
import { useEffect, useState } from "react";
import { TProduct } from "../../types";
import { BiSolidRightArrow } from "react-icons/bi";

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
        <div id="featured-product" className="px-4 md:px-8 lg:px-16 py-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Featured Product</h2>
                <Link
                    className="text-[#FF5252] font-semibold flex items-center space-x-1"
                    to="/all-products"
                >
                    <span>Explore More</span> <BiSolidRightArrow />
                </Link>
            </div>

            <ProductList products={featuredProducts} />
        </div>
    );
};

export default FeaturedProducts;
