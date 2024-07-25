import { RiDeleteBin2Line } from "react-icons/ri";
import trademill from "../../assets/trademill.jpg";
import { TCartProduct } from "../../types";
import { useAppDispatch } from "../../redux/hooks";
import { deleteCart, updateCart } from "../../redux/features/cart/cartSlice";
import { FormEvent, useState } from "react";
const CartTableRow = ({ product }: { product: TCartProduct }) => {
    const dispatch = useAppDispatch();
    const handleDelete = () => {
        dispatch(deleteCart(product?._id));
    };

    const [qty, setQty] = useState(product?.qty);
    const handleCartUpdate = (e: FormEvent) => {
        e.preventDefault();

        if (product?.stock >= parseInt(e.target?.value)) {
            console.log(product?.stock, " ", parseInt(e.target?.value));
            setQty(parseInt(e.target?.value));

            dispatch(
                updateCart({
                    id: product?._id,
                    value: parseInt(e.target?.value),
                })
            );
        } else {
            console.log(product?.stock, " ", parseInt(e.target?.value));

            console.log("Not enough in stock");
        }
    };
    return (
        <tr className="text-center border-b-2">
            <td className="p-3 w-[100px]">
                <img src={trademill} alt="" className="w-[125px]" />
            </td>
            <td className="p-3 w-[100px]">{product?.name}</td>
            <td className="p-3 w-[50px]">{product?.qty}</td>
            <td className="p-3 w-[50px]">{product?.price}</td>
            <td className="p-3 w-[50px]">{product?.qty * product?.price}</td>

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
