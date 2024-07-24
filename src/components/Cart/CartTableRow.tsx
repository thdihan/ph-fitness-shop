import { RiDeleteBin2Line } from "react-icons/ri";
import trademill from "../../assets/trademill.jpg";
import { TCartProduct } from "../../types";
const CartTableRow = ({ product }: { product: TCartProduct }) => {
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
                    />
                </div>
            </td>
            <td className="p-3 w-[50px]">
                <div className="text-2xl text-[#FF5252] cursor-pointer">
                    <RiDeleteBin2Line />
                </div>
            </td>
        </tr>
    );
};

export default CartTableRow;
