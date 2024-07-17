import ProductList from "../components/Products/ProductList";
import Searchbar from "../components/SearchAndFilter/Searchbar";

const AllProducts = () => {
    return (
        <div className="px-16">
            <Searchbar />
            <ProductList criteria={`all`} />
        </div>
    );
};

export default AllProducts;
