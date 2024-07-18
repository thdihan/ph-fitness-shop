import { Button } from "antd";
import { SizeType } from "../types";

const ProductManagement = () => {
    return (
        <div className="px-16">
            <div className="flex justify-between mt-6">
                <h2 className="text-2xl flex items-center space-x-2 font-semibold text-[#FF5252]">
                    <span>Product Management</span>
                </h2>
                <Button
                    type="primary"
                    className="bg-[#FF5252] hover:bg-[#fff] hover:border-[#FF5252] hover:text-[#FF5252] border-[#FF5252] text-white font-normal"
                    size={"large" as SizeType}
                    danger
                >
                    Add Product
                </Button>
            </div>

            <div className="mt-6 overflow-auto">
                <table className="w-full border-2">
                    <thead className="bg-gray-400">
                        <tr className="text-left">
                            <th className="p-3 w-[100px]">Image</th>
                            <th className="p-3 w-[100px]">Product</th>
                            <th className="p-3 w-[100px]">Category</th>
                            <th className="p-3 w-[50px]">Price</th>
                            <th className="p-3 w-[50px]">Stock</th>
                            <th className="p-3 w-[100px]">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border-b-2">
                            <td className="p-3 w-[100px]">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="product"
                                    className="w-20 h-20 object-cover"
                                />
                            </td>
                            <td className="p-3 w-[100px]">Product Name</td>
                            <td className="p-3 w-[100px]">Category</td>
                            <td className="p-3 w-[50px]">Price</td>
                            <td className="p-3 w-[50px]">Stock</td>
                            <td className="p-3 w-[100px] space-x-2">
                                <Button
                                    type="primary"
                                    className="bg-[#FF5252] hover:bg-[#fff] hover:border-[#FF5252] hover:text-[#FF5252] border-[#FF5252] text-white font-normal"
                                    size={"large" as SizeType}
                                    danger
                                >
                                    Edit
                                </Button>
                                <Button
                                    type="primary"
                                    className="bg-[#FF5252] hover:bg-[#fff] hover:border-[#FF5252] hover:text-[#FF5252] border-[#FF5252] text-white font-normal"
                                    size={"large" as SizeType}
                                    danger
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                        <tr className="border-b-2">
                            <td className="p-3 w-[100px]">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="product"
                                    className="w-20 h-20 object-cover"
                                />
                            </td>
                            <td className="p-3 w-[100px]">Product Name</td>
                            <td className="p-3 w-[100px]">Category</td>
                            <td className="p-3 w-[50px]">Price</td>
                            <td className="p-3 w-[50px]">Stock</td>
                            <td className="p-3 w-[100px] space-x-2">
                                <Button
                                    type="primary"
                                    className="bg-[#FF5252] hover:bg-[#fff] hover:border-[#FF5252] hover:text-[#FF5252] border-[#FF5252] text-white font-normal"
                                    size={"large" as SizeType}
                                    danger
                                >
                                    Edit
                                </Button>
                                <Button
                                    type="primary"
                                    className="bg-[#FF5252] hover:bg-[#fff] hover:border-[#FF5252] hover:text-[#FF5252] border-[#FF5252] text-white font-normal"
                                    size={"large" as SizeType}
                                    danger
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductManagement;
