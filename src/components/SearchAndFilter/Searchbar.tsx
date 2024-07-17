import { Button, Modal } from "antd";
import { useState } from "react";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

const Searchbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="py-6 flex space-x-3">
            <input
                type="text"
                name=""
                id=""
                placeholder="Search by Name"
                className="w-full border-2 focus:outline-2 focus:outline-[#FF5252] py-2 rounded-lg px-4 border-gray-400"
            />
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
                    <Button>Clear Filter</Button>
                </div>
                <div className="mt-3">
                    <h3 className="font-semibold">Sort By Price</h3>
                    <form>
                        <div className="flex items-center space-x-2">
                            <input type="radio" name="price" id="lowToHigh" />
                            <label htmlFor="lowToHigh">Low to High</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="radio" name="price" id="highToLow" />
                            <label htmlFor="lowToHigh">High to Low</label>
                        </div>
                    </form>
                </div>
                <div className="mt-6">
                    <h3 className="font-semibold">Categories</h3>
                    <form>
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="Category 1"
                                id="category-1"
                            />
                            <label htmlFor="category-1">Low to High</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="Category 1"
                                id="category-1"
                            />
                            <label htmlFor="category-1">Low to High</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="Category 1"
                                id="category-1"
                            />
                            <label htmlFor="category-1">Low to High</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="Category 1"
                                id="category-1"
                            />
                            <label htmlFor="category-1">Low to High</label>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default Searchbar;
