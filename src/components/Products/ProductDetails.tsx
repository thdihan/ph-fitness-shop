import { Button } from "antd";
import trademill from "../../assets/trademill.jpg";
import { SizeType } from "../../types";
const ProductDetails = () => {
    return (
        <div className="px-16 flex py-6">
            <div className="flex-1 border-2">
                <img src={trademill} alt="" />
            </div>
            <div className="flex-1 p-6">
                <div>
                    <p className="bg-green-200 w-[80px] text-center py-1 font-semibold text-sm rounded-sm border-2 border-green-400">
                        In Stock
                    </p>
                    <h1 className="text-xl font-semibold mt-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Cum, deleniti. Placeat porro provident autem enim?
                    </h1>
                    <div className="mt-2">
                        <p className="text-[#FF5252] font-semibold text-sm">
                            Category-1
                        </p>
                    </div>
                    <p className="text-gray-600 mt-6">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Molestiae ad labore voluptates unde? Doloremque,
                        optio quod laboriosam animi delectus facilis iusto
                        quaerat architecto distinctio culpa excepturi, quia
                        laudantium corrupti illum libero quasi saepe nihil.
                        Quaerat ullam ipsum nesciunt perferendis modi fugit
                        aliquid cum expedita, magni doloremque amet voluptates
                        est architecto?
                    </p>
                </div>
                <div className="mt-6 ">
                    <p>
                        <span className="font-semibold">
                            Available in Stock:{" "}
                        </span>
                        <span>100</span>
                    </p>
                </div>

                <div className="mt-6 flex items-center space-x-4">
                    <div>
                        <label htmlFor="quantity" className="font-semibold">
                            Quantity:{" "}
                        </label>
                        <input
                            type="number"
                            name="quantity"
                            id="quantity"
                            className="border-2 border-gray-400  w-20 p-2 ml-2 rounded-md"
                        />
                    </div>
                    <div>
                        <Button
                            type="primary"
                            className="bg-[#FF5252] hover:bg-[#fff] hover:border-[#FF5252] hover:text-[#FF5252] border-[#FF5252] text-white font-normal"
                            size={"large" as SizeType}
                            danger
                        >
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
