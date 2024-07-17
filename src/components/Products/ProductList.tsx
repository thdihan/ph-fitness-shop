import ProductCard from "./ProductCard";

const ProductList = ({ criteria }) => {
    return (
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
    );
};

export default ProductList;
