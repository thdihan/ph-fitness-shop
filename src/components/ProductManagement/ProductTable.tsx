import { BiEdit, BiTrash } from "react-icons/bi";
import {
    useDeleteProductMutation,
    useGetAllProductsQuery,
    useUpdateProductMutation,
} from "../../redux/api/baseApi";
import { Link } from "react-router-dom";
import { TProduct } from "../../types";
import { toast } from "sonner";

const ProductTable = () => {
    const { data } = useGetAllProductsQuery(undefined);

    const [updateProduct] = useUpdateProductMutation();
    const [deleteProduct] = useDeleteProductMutation();

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

    const handleDelete = async (id: string) => {
        try {
            await deleteProduct(id);
            toast.success("Product deleted successfully");
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
                {data?.data?.map((product) => (
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
                                    onClick={() => handleDelete(product._id)}
                                    className="text-2xl text-[#FF5252] cursor-pointer"
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
