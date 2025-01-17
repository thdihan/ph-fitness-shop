import { BiEdit, BiTrash } from "react-icons/bi";
import {
    useGetAllProductsQuery,
    useUpdateProductMutation,
} from "../../redux/api/baseApi";
import { Link } from "react-router-dom";
import { TProduct } from "../../types";
import DeleteProductModel from "./DeleteProductModel";
import { useState } from "react";

const ProductTable = () => {
    const { data } = useGetAllProductsQuery(undefined);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState("");

    const [updateProduct] = useUpdateProductMutation();

    const changeFeatured = async (id: string, product: TProduct) => {
        try {
            const isFeatured = !product.isFeatured;
            await updateProduct({
                id,
                data: { ...product, isFeatured },
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <table className="w-[1000px] lg:w-full  border-2">
            <thead className="bg-gray-400">
                <tr className="text-left">
                    <th className="p-3 w-[100px]">Image</th>
                    <th className="p-3 w-[100px]">Product</th>
                    <th className="p-3 w-[30px]">Featured?</th>
                    <th className="p-3 w-[100px]">Category</th>
                    <th className="p-3 w-[50px]">Price</th>
                    <th className="p-3 w-[50px]">Stock</th>
                    <th className="p-3 w-[100px]">Action</th>
                </tr>
            </thead>

            <tbody>
                {data?.data?.map((product: TProduct) => (
                    <tr className="border-b-2">
                        <td className="p-3 w-[100px]">
                            <img
                                src={
                                    product?.image ||
                                    "https://via.placeholder.com/150"
                                }
                                alt="product"
                                className="w-[80px] h-[80px] object-cover"
                            />
                        </td>
                        <td className="p-3 w-[100px]">{product?.name}</td>
                        <td className="p-3 w-[30px] mx-auto">
                            <input
                                type="checkbox"
                                name=""
                                id=""
                                className="size-5 accent-[#FF5252]"
                                checked={product?.isFeatured}
                                onChange={() =>
                                    changeFeatured(product._id, product)
                                }
                            />
                        </td>
                        <td className="p-3 w-[100px]">{product?.category}</td>
                        <td className="p-3 w-[50px]">{product?.price}</td>
                        <td className="p-3 w-[50px]">{product?.stock}</td>
                        <td className="p-3 w-[100px] space-x-2">
                            <div className="space-x-4 flex items-center">
                                <Link to={`/update/${product._id}`}>
                                    <BiEdit className="text-2xl" />
                                </Link>
                                <BiTrash
                                    onClick={() => {
                                        setItemToDelete(product?._id);
                                        setIsModalOpen(true);
                                    }}
                                    className="text-2xl text-[#FF5252] cursor-pointer"
                                />
                                <DeleteProductModel
                                    isModalOpen={isModalOpen}
                                    setIsModalOpen={setIsModalOpen}
                                    itemToDelete={itemToDelete}
                                />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductTable;
