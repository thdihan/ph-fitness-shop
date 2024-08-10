import { Button, Modal } from "antd";
import { useState } from "react";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { useGetAllCategoriesQuery } from "../../redux/api/baseApi";

import { RxCross1 } from "react-icons/rx";

const Searchbar = ({
    searchFilter,
    setSearchFilter,
    sortFilter,
    setSortFilter,
    categoryFilter,
    setCategoryFilter,
    minValue,
    setMinValue,
    maxValue,
    setMaxValue,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data: categories } = useGetAllCategoriesQuery(undefined);
    console.log("Categories: ", categories);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onReset = () => {
        setSearchFilter("");
        setCategoryFilter([]);
        setSortFilter("default");
        setIsModalOpen(false);
    };
    return (
        <div className="py-6 flex space-x-3 ">
            <div className="w-full relative">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search by Name"
                    className="w-full border-2 focus:outline-2 focus:outline-[#FF5252] py-2 rounded-lg px-4 border-gray-400"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                />
                {searchFilter.length > 0 && (
                    <RxCross1
                        onClick={() => setSearchFilter("")}
                        className="absolute top-[32%] right-[1%] cursor-pointer"
                    />
                )}
            </div>
            <Button
                onClick={showModal}
                className="py-5 px-3 border-gray-400 border-2 text-2xl"
            >
                <TbAdjustmentsHorizontal />
            </Button>
            <Modal
                title="Filter"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div>
                    <Button onClick={onReset}>Clear Filter</Button>
                </div>
                <div className="mt-3">
                    <h3 className="font-semibold">Sort By Price</h3>
                    <form>
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="price"
                                id="lowToHigh"
                                checked={sortFilter === "low"}
                                value="low"
                                onChange={(e) => setSortFilter("low")}
                            />
                            <label htmlFor="lowToHigh">Low to High</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="price"
                                id="highToLow"
                                value="high"
                                checked={sortFilter === "high"}
                                onChange={(e) => setSortFilter("high")}
                            />
                            <label htmlFor="lowToHigh">High to Low</label>
                        </div>
                    </form>
                </div>

                <div className="mt-6">
                    <h3 className="font-semibold">Price Range</h3>
                    <form className="flex space-x-3 items-center">
                        <div className="space-x-2">
                            <label htmlFor="min">Min</label>
                            <input
                                type="number"
                                name=""
                                id="min"
                                className="p-1 border-2 border-gray-400 w-20 rounded-md"
                                min={0}
                                max={maxValue}
                                value={minValue}
                                onChange={(e) => setMinValue(e.target.value)}
                            />
                        </div>
                        <div className="align-middle">-</div>
                        <div className="space-x-2">
                            <label htmlFor="max">Max</label>
                            <input
                                type="number"
                                name=""
                                id="max"
                                className="p-1 border-2 border-gray-400 w-20 rounded-md"
                                min={minValue}
                                value={maxValue}
                                onChange={(e) => setMaxValue(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
                <div className="mt-6">
                    <h3 className="font-semibold">Categories</h3>
                    <form>
                        {categories?.data?.map((category) => (
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    value={category.name}
                                    checked={categoryFilter?.includes(
                                        category.name
                                    )}
                                    onChange={(e) => {
                                        if (
                                            categoryFilter?.includes(
                                                category.name
                                            )
                                        ) {
                                            setCategoryFilter(
                                                categoryFilter?.filter(
                                                    (cat) =>
                                                        cat !== category.name
                                                )
                                            );
                                        } else {
                                            setCategoryFilter([
                                                ...categoryFilter,
                                                category.name,
                                            ]);
                                        }
                                    }}
                                />
                                <label htmlFor="category-1">
                                    {category.name}
                                </label>
                            </div>
                        ))}
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default Searchbar;
