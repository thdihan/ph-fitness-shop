import { Button, Modal } from "antd";
import {
    CardElement,
    Elements,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { useEffect, useState } from "react";
import { ButtonSecondary, ButtonWithoutBorder } from "../Buttons/Buttons";
import { useCreateOrderMutation } from "../../redux/api/baseApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { clearCart } from "../../redux/features/cart/cartSlice";

const stripePromise = loadStripe(
    "pk_test_51Pkp2rLw1MUS3mw4qjto8n6YtmTF9VG6SWDtwHO4ULFq0GOKhYStOeSPmd6euEOJyUfIhFUEBKW71p0h4enwEr3Q00AoaW6cOx"
);
const StripeCheckout = ({ isModalOpen, setIsModalOpen, order }) => {
    const [createOrder] = useCreateOrderMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    console.log(order);
    const handleOk = async () => {
        console.log("ORDER", order);

        try {
            const total = order.products.reduce(
                (acc: number, product) => acc + product.price * product.qty,
                0
            );
            const orderData = {
                ...order,
                total,
            };
            await createOrder(orderData);
            toast.success("Order confirmed");
            setIsModalOpen(false);
            dispatch(clearCart());
            navigate("/confirm-order");
        } catch (error) {
            toast.error("Can't confirm order");
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Modal
            title={
                order.payment.method == "stripe"
                    ? "Payment and Confirm Order"
                    : "Confirm Order"
            }
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            {order.payment.method === "stripe" ? (
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        order={order}
                        setIsModalOpen={setIsModalOpen}
                    />
                </Elements>
            ) : (
                <div className="space-x-2">
                    <ButtonSecondary text="Confirm" clickAction={handleOk} />
                    <ButtonWithoutBorder
                        text="Cancel"
                        clickAction={handleCancel}
                    />
                </div>
            )}

            {/* <div className="space-x-2">
                <ButtonSecondary text="Delete" clickAction={handleOk} />
                <ButtonWithoutBorder
                    text={`Cancel`}
                    clickAction={handleCancel}
                />
            </div> */}
        </Modal>
    );
};

const CheckoutForm = ({ order, setIsModalOpen }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [clientSecret, setClientSecret] = useState("");
    const [loading, isLoading] = useState(false);

    const [createOrder] = useCreateOrderMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        const totalPrice = order.products.reduce(
            (acc: number, product) => acc + product.price * product.qty,
            0
        );
        fetch("http://localhost:5001/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price: totalPrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [order]);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            console.log("[error]", error);
        } else {
            console.log("[PaymentMethod]", paymentMethod);
        }

        const { paymentIntent, error: paymentError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card,
                    billing_details: {
                        name: "Jenny Rosen",
                    },
                },
            });

        console.log("Payment Intent", paymentIntent);
        if (paymentIntent?.status === "succeeded") {
            try {
                const total = order.products.reduce(
                    (acc: number, product) => acc + product.price * product.qty,
                    0
                );
                const orderData = {
                    ...order,
                    total,
                    payment: { method: "stripe", status: "done" },
                };
                await createOrder(orderData);
                toast.success("Order confirmed");
                setIsModalOpen(false);
                dispatch(clearCart());
                navigate("/confirm-order");
            } catch (error) {
                toast.error("Can't confirm order");
            }
        } else {
            toast.error("Payment failed, try again");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: "16px",
                            color: "#424770",
                            "::placeholder": {
                                color: "#aab7c4",
                            },
                        },
                        invalid: {
                            color: "#9e2146",
                        },
                    },
                }}
            />

            <button
                type="submit"
                disabled={!stripe || !clientSecret}
                className={` font-normal px-5 py-1 mt-4 rounded-md ${
                    !stripe || !clientSecret
                        ? "bg-gray-400"
                        : "bg-[#FF5252] hover:bg-[#fff] border-2 hover:border-[#FF5252] hover:text-[#FF5252] border-[#FF5252] text-white"
                }`}
            >
                Pay
            </button>
        </form>
    );
};

export default StripeCheckout;
