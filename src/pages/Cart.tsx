import { TbShoppingCartFilled } from "react-icons/tb";
import CartTableRow from "../components/Cart/CartTableRow";
import { Button } from "antd";
import { SizeType } from "../types";
const Cart = () => {
    return (
        <div className="px-16 py-6">
            <div>
                <h2
                    className="text-2xl flex items-center space-x-2 font-semibold text-[#FF5252]
                "
                >
                    <TbShoppingCartFilled /> <span>Cart</span>
                </h2>
            </div>
            <div className="flex space-x-2">
                <div className="overflow-auto mt-6 flex-[3]">
                    <table className="w-full border-2">
                        <thead className="bg-gray-400">
                            <tr className="">
                                <th className="py-3 w-[100px]">Image</th>
                                <th className="py-3 w-[100px]">Product</th>
                                <th className="py-3 w-[50px]">Quantity</th>
                                <th className="py-3 w-[50px]">Price</th>
                                <th className="py-3 w-[50px]">Total</th>
                                <th className="py-3 w-[100px]">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <CartTableRow />
                            <CartTableRow />
                            <CartTableRow />
                        </tbody>
                    </table>
                </div>

                <div className=" mt-6 flex-1">
                    <div>
                        <h2 className="text-xl  bg-gray-400 p-3">
                            Cart Summery
                        </h2>
                        <table className="w-full text-center border-2">
                            <tr className="border-b-2 divide-x-2">
                                <td className="w-[100px] p-3">Subtotal</td>
                                <td className="w-[100px]  p-3">100</td>
                            </tr>
                            <tr className="border-b-2 divide-x-2">
                                <td className="w-[100px]  p-3">Shipping</td>
                                <td className="w-[100px]  p-3">100</td>
                            </tr>
                            <tr className="border-b-2 divide-x-2">
                                <td className="w-[100px]  p-3">Total</td>
                                <td className="w-[100px]  p-3">100</td>
                            </tr>
                        </table>
                    </div>

                    <div className="flex justify-end mt-3">
                        <Button
                            type="primary"
                            className="bg-[#FF5252] hover:bg-[#fff] hover:border-[#FF5252] hover:text-[#FF5252] border-[#FF5252] text-white font-normal"
                            size={"large" as SizeType}
                            danger
                        >
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
