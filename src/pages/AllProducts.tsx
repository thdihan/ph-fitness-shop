import { useEffect, useState } from "react";
import ProductList from "../components/Products/ProductList";
import Searchbar from "../components/SearchAndFilter/Searchbar";
import { useGetAllProductsQuery } from "../redux/api/baseApi";
import { TProduct } from "../types";
import { useParams } from "react-router-dom";
import { Tag } from "antd";

const AllProducts = () => {
    const { category } = useParams<{ category: string }>();
    const { data } = useGetAllProductsQuery(undefined);
    console.log("Products", data);

    const [filteredList, setFilteredList] = useState<TProduct[]>([]);
    const [categoryFilter, setCategoryFilter] = useState<string[] | null>(
        category ? [category] : []
    );
    const [sortFilter, setSortFilter] = useState<string>("default");
    const [searchFilter, setSearchFilter] = useState<string>("");
    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);

    useEffect(() => {
        if (data?.data?.length > 0) {
            const minPrice = Math.min(
                ...(data?.data.map((product: TProduct) => product.price) ?? [])
            );
            const maxPrice = Math.max(
                ...(data?.data.map((product: TProduct) => product.price) ?? [])
            );
            setMinValue(minPrice);
            setMaxValue(maxPrice);
        }
    }, [data?.data]);

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

            if (minValue && maxValue) {
                tempProducts = tempProducts.filter((product) => {
                    return (
                        product.price >= minValue && product.price <= maxValue
                    );
                });
            }
            setFilteredList(tempProducts);
        }
    }, [
        data?.data,
        categoryFilter,
        sortFilter,
        searchFilter,
        minValue,
        maxValue,
    ]);
    return (
        <div className="px-4 md:px-8 lg:px-16">
            <Searchbar
                searchFilter={searchFilter}
                setSearchFilter={setSearchFilter}
                sortFilter={sortFilter}
                setSortFilter={setSortFilter}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
                minValue={minValue}
                setMinValue={setMinValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
            />
            <div className="flex flex-col lg:flex-row lg:space-x-4">
                <h2 className="text-xl font-bold text-[#FF5252]">
                    All Product
                </h2>
                <div className="">
                    {sortFilter === "low" ? (
                        <Tag color="error" className="font-semibold border-2">
                            Low To High
                        </Tag>
                    ) : sortFilter === "high" ? (
                        <Tag color="success" className="font-semibold border-2">
                            High To Low
                        </Tag>
                    ) : (
                        ""
                    )}

                    {categoryFilter &&
                        categoryFilter?.length > 0 &&
                        categoryFilter?.map((cat: string) => (
                            <Tag
                                color="processing"
                                className="font-semibold border-2"
                            >
                                {cat}
                            </Tag>
                        ))}
                </div>
            </div>
            <ProductList products={filteredList} />
        </div>
    );
};

export default AllProducts;
