import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { getCartProducts } from "../../redux/features/cart/cartSlice";
import { TCartProduct } from "../../types";

const CartSummery = () => {
    const [total, setTotal] = useState(0);
    const products = useAppSelector(getCartProducts);

    useEffect(() => {
        setTotal(
            products?.reduce((acc: number, product: TCartProduct) => {
                return acc + product.qty * product.price;
            }, 0)
        );
    }, [products]);
    return (
        <div>
            <h2 className="text-md font-bold  bg-gray-400 p-3">Cart Summery</h2>
            <table className="w-full text-center border-2">
                <tr className="border-b-2 divide-x-2">
                    <td className="w-[100px] p-3">Subtotal</td>
                    <td className="w-[100px]  p-3">{total}</td>
                </tr>
                <tr className="border-b-2 divide-x-2">
                    <td className="w-[100px]  p-3">Shipping</td>
                    <td className="w-[100px]  p-3">100</td>
                </tr>
                <tr className="border-b-2 divide-x-2">
                    <td className="w-[100px]  p-3">Total</td>
                    <td className="w-[100px]  p-3">{total + 100}</td>
                </tr>
            </table>
        </div>
    );
};

export default CartSummery;
