import ProductList from "../components/Products/ProductList";
import Searchbar from "../components/SearchAndFilter/Searchbar";
import { useGetAllProductsQuery } from "../redux/api/baseApi";

const AllProducts = () => {
    const { data } = useGetAllProductsQuery(undefined);
    console.log("Products", data);
    return (
        <div className="px-4 md:px-8 lg:px-16">
            <Searchbar />
            <ProductList criteria={`all`} />
        </div>
    );
};

export default AllProducts;
