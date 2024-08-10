import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
    return (
        // <div className="my-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-2 border-grey-100 md:divide-x-2 divide-y-2 ">
        <div className="my-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 ">
            {products?.map((product) => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
