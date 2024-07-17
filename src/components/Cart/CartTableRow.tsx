import { RiDeleteBin2Line } from "react-icons/ri";
import trademill from "../../assets/trademill.jpg";
const CartTableRow = () => {
    return (
        <tr className="text-center border-b-2">
            <td className="py-3 w-[100px]">
                <img src={trademill} alt="" className="w-[125px]" />
            </td>
            <td className="py-3 w-[100px]">Product 1</td>
            <td className="py-3 w-[50px]">1</td>
            <td className="py-3 w-[50px]">100</td>
            <td className="py-3 w-[50px]">100</td>

            <td className="py-3 w-[100px]">
                <div className="flex items-center  space-x-4 ">
                    <div>
                        <input
                            type="number"
                            name="qty"
                            id=""
                            className="border-2 p-2 w-[100px]"
                        />
                    </div>
                    <div className="text-2xl text-[#FF5252] cursor-pointer">
                        <RiDeleteBin2Line />
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default CartTableRow;
