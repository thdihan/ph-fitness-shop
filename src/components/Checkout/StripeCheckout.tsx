import { Button, Modal } from "antd";
import {
    CardElement,
    Elements,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { SizeType } from "../../types";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(
    "pk_test_51Pkp2rLw1MUS3mw4qjto8n6YtmTF9VG6SWDtwHO4ULFq0GOKhYStOeSPmd6euEOJyUfIhFUEBKW71p0h4enwEr3Q00AoaW6cOx"
);
const StripeCheckout = ({ isModalOpen, setIsModalOpen }) => {
    const handleOk = async () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Modal
            title="Stripe Payment"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
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

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5001/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price: 500 }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

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
