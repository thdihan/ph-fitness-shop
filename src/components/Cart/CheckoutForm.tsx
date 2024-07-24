const CheckoutForm = () => {
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
                        />
                        <label htmlFor="payment">Cash On Delivery</label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="payment"
                            id="payment"
                            className="border-2 border-gray-400 p-2 rounded-md"
                        />
                        <label htmlFor="payment">Stripe</label>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CheckoutForm;
