import { BiBasket, BiEdit, BiTrash } from "react-icons/bi";
import { ButtonPrimary, ButtonSecondary } from "../Buttons/Buttons";

const ProductTable = () => {
    return (
        <table className="w-[1000px] lg:w-full  border-2">
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
                            className="w-[80px] h-[80px] object-cover"
                        />
                    </td>
                    <td className="p-3 w-[100px]">Product Name</td>
                    <td className="p-3 w-[100px]">Category</td>
                    <td className="p-3 w-[50px]">Price</td>
                    <td className="p-3 w-[50px]">Stock</td>
                    <td className="p-3 w-[100px] space-x-2">
                        <div className="space-x-4 flex items-center">
                            <BiEdit className="text-2xl" />
                            <BiTrash className="text-2xl text-[#FF5252]" />
                        </div>
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
                    <td className="p-3 w-[100px] ">
                        <div className="space-x-4 flex items-center">
                            <BiEdit className="text-2xl" />
                            <BiTrash className="text-2xl text-[#FF5252]" />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default ProductTable;
