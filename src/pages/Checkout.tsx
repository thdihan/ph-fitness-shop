import { Button } from "antd";
import { TbShoppingCartFilled } from "react-icons/tb";
import { SizeType } from "../types";

const Checkout = () => {
    return (
        <div className="px-16  py-6">
            <div>
                <h2
                    className="text-2xl flex items-center space-x-2 font-semibold text-[#FF5252]
                "
                >
                    <TbShoppingCartFilled /> <span>Checkout</span>
                </h2>
            </div>

            <div className="flex space-x-8 mt-6">
                <form className="flex-[3] space-y-3">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="">
                            Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="border-2 border-gray-400 w-full p-2 rounded-md "
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="flex-1">
                            Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="border-2 border-gray-400 w-full p-2 rounded-md "
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="contact" className="">
                            Contact:
                        </label>
                        <input
                            type="text"
                            name="contact"
                            id="contact"
                            className="border-2 border-gray-400 w-full p-2 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="address" className="">
                            Address:
                        </label>
                        <textarea
                            name="address"
                            id="address"
                            className="border-2 border-gray-400 w-full p-2 rounded-md"
                        ></textarea>
                    </div>
                </form>

                <div className=" flex-1">
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
                            Confirm Order
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
