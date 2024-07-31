import { RiDeleteBin2Line } from "react-icons/ri";
import trademill from "../../assets/trademill.jpg";
import { TCartProduct } from "../../types";
import { useAppDispatch } from "../../redux/hooks";
import { deleteCart, updateCart } from "../../redux/features/cart/cartSlice";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import { useGetSingleProductQuery } from "../../redux/api/baseApi";
const CartTableRow = ({
    product,
    setCheckoutButton,
}: {
    product: TCartProduct;
}) => {
    const dispatch = useAppDispatch();
    const handleDelete = () => {
        dispatch(deleteCart(product?._id));
    };

    const [qty, setQty] = useState(product?.qty);

    const { data: productDetails } = useGetSingleProductQuery(product._id);
    console.log("Product Details", productDetails);

    useEffect(() => {
        if (productDetails?.data) {
            const isAvailable = productDetails?.data?.stock >= product.qty;
            console.log("IsAvailable", isAvailable);
            setCheckoutButton((prev: boolean) => prev && isAvailable);
        }
    }, [productDetails, product]);

    const handleCartUpdate = (e: FormEvent) => {
        e.preventDefault();

        if (productDetails?.data?.stock >= parseInt(e.target?.value)) {
            console.log(
                productDetails?.data?.stock,
                " ",
                parseInt(e.target?.value)
            );
            setQty(parseInt(e.target?.value));

            dispatch(
                updateCart({
                    id: productDetails?.data?._id,
                    value: parseInt(e.target?.value),
                })
            );
        } else {
            // console.log(product?.stock, " ", parseInt(e.target?.value));
            toast.error("Not enough in stock");
            console.log("Not enough in stock");
        }
    };
    return (
        <tr className="text-center border-b-2">
            <td className="p-3 w-[100px]">
                <img src={trademill} alt="" className="w-[125px]" />
            </td>
            <td className="p-3 w-[100px]">{productDetails?.data?.name}</td>
            <td className="p-3 w-[50px]">
                {productDetails?.data?.stock ? (
                    <p className="bg-green-300 border-2 border-green-500 text-sm font-semibold py-1">
                        In Stock
                    </p>
                ) : (
                    <p className="bg-red-300 border-2 border-red-500 text-sm font-semibold py-1">
                        Stock Out
                    </p>
                )}
            </td>
            <td className="p-3 w-[50px]">{product?.qty}</td>
            <td className="p-3 w-[50px]">{productDetails?.data?.price}</td>
            <td className="p-3 w-[50px]">
                {product?.qty * productDetails?.data?.price}
            </td>

            <td className="p-3 w-[100px]">
                <div>
                    <input
                        type="number"
                        name="qty"
                        id=""
                        className="border-2 p-2 w-[100px]"
                        value={qty}
                        onChange={(e) => handleCartUpdate(e)}
                        min={1}
                    />
                </div>
            </td>
            <td className="p-3 w-[50px]">
                <div className="text-2xl text-[#FF5252] cursor-pointer">
                    <RiDeleteBin2Line onClick={handleDelete} />
                </div>
            </td>
        </tr>
    );
};

export default CartTableRow;
