import { useEffect, useState } from "react";
import ProductList from "../components/Products/ProductList";
import Searchbar from "../components/SearchAndFilter/Searchbar";
import { useGetAllProductsQuery } from "../redux/api/baseApi";
import { TProduct } from "../types";
import { useParams } from "react-router-dom";

const CategoryProducts = () => {
    const { category } = useParams<{ category: string }>();
    const { data } = useGetAllProductsQuery(category);
    console.log("Products", category);

    const [filteredList, setFilteredList] = useState<TProduct[]>([]);
    const [categoryFilter, setCategoryFilter] = useState<string[] | null>([]);
    const [sortFilter, setSortFilter] = useState<string>("default");
    const [searchFilter, setSearchFilter] = useState<string>("");

    useEffect(() => {
        if (data?.data?.length > 0) {
            let tempProducts = [...(data?.data ?? [])];
            if (categoryFilter?.length !== 0) {
                tempProducts = tempProducts?.filter((product) => {
                    return categoryFilter?.includes(product.category);
                });
            }
            if (sortFilter === "low") {
                tempProducts.sort((a, b) => {
                    console.log("A: ", a, "B: ", b);
                    return a.price - b.price;
                });
            } else if (sortFilter === "high") {
                tempProducts = tempProducts.sort((a, b) => b.price - a.price);
            }

            if (searchFilter) {
                tempProducts = tempProducts.filter((product) => {
                    return product.name
                        .toLowerCase()
                        .includes(searchFilter.toLowerCase());
                });
            }
            setFilteredList(tempProducts);
        }
    }, [data?.data, categoryFilter, sortFilter, searchFilter]);
    return (
        <div className="px-4 md:px-8 lg:px-16">
            <Searchbar
                searchFilter={searchFilter}
                setSearchFilter={setSearchFilter}
                sortFilter={sortFilter}
                setSortFilter={setSortFilter}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
            />
            <h2 className="text-xl font-bold text-[#FF5252]">
                Category: {category}
            </h2>
            <ProductList products={filteredList} />
        </div>
    );
};

export default CategoryProducts;
