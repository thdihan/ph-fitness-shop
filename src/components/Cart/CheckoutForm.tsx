const CheckoutForm = ({ state, dispatch }) => {
    return (
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
                    value={state.name}
                    onChange={(e) =>
                        dispatch({ type: "name", value: e.target.value })
                    }
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
                    value={state.email}
                    onChange={(e) =>
                        dispatch({ type: "email", value: e.target.value })
                    }
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
                    value={state.contact}
                    onChange={(e) =>
                        dispatch({ type: "contact", value: e.target.value })
                    }
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
                    value={state.address}
                    onChange={(e) =>
                        dispatch({ type: "address", value: e.target.value })
                    }
                ></textarea>
            </div>
            <div className="flex flex-col">
                <label htmlFor="payment" className="">
                    Payment Method:
                </label>
                <div>
                    <div className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="payment"
                            id="payment"
                            className="border-2 border-gray-400 p-2 rounded-md"
                            checked={state.payment === "cash"}
                            onChange={() =>
                                dispatch({ type: "payment", value: "cash" })
                            }
                        />
                        <label htmlFor="payment">Cash On Delivery</label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="payment"
                            id="payment"
                            className="border-2 border-gray-400 p-2 rounded-md"
                            checked={state.payment === "stripe"}
                            onChange={() =>
                                dispatch({ type: "payment", value: "stripe" })
                            }
                        />
                        <label htmlFor="payment">Stripe</label>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CheckoutForm;
