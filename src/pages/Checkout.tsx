import { Button } from "antd";
import { TbShoppingCartFilled } from "react-icons/tb";
import { SizeType, TCartProduct } from "../types";
import CheckoutForm from "../components/Cart/CheckoutForm";
import CartSummery from "../components/Cart/CartSummery";
import { useReducer, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { getCartProducts } from "../redux/features/cart/cartSlice";
import StripeCheckout from "../components/Checkout/StripeCheckout";

type TInitialState = {
    name: string;
    email: string;
    contact: string;
    address: string;
    payment: string;
    products: TCartProduct[];
};
const initialState: TInitialState = {
    name: "",
    email: "",
    contact: "",
    address: "",
    payment: "",
    products: [],
};

const reducer = (state: any, action: any) => {
    return { ...state, [action.type]: action.value };
};
const Checkout = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const cartProducts = useAppSelector(getCartProducts);

    const handleCheckout = () => {
        console.log("Order Confirmed");
        const order = { ...state, products: cartProducts };
        console.log(order);
        if (state.payment === "stripe") setIsModalOpen(true);
    };
    return (
        <div className="px-4 md:px-8 lg:px-16  py-6">
            <StripeCheckout
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
            <div>
                <h2
                    className="text-2xl flex items-center space-x-2 font-semibold text-[#FF5252]
                "
                >
                    <TbShoppingCartFilled /> <span>Checkout</span>
                </h2>
            </div>

            <div className="flex space-x-0 lg:space-x-8 mt-6 flex-col lg:flex-row">
                <CheckoutForm state={state} dispatch={dispatch} />
                <div className="mt-6 flex-1">
                    <CartSummery />

                    <div className="flex justify-end mt-3">
                        <Button
                            type="primary"
                            className="bg-[#FF5252] hover:bg-[#fff] hover:border-[#FF5252] hover:text-[#FF5252] border-[#FF5252] text-white font-normal"
                            size={"large" as SizeType}
                            danger
                            onClick={handleCheckout}
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
