import { Button } from "antd";
import { SizeType, TCartProduct } from "../../types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { FormEvent, useEffect, useState } from "react";
import {
    addToCart,
    getCartProducts,
} from "../../redux/features/cart/cartSlice";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/api/baseApi";
import { toast } from "sonner";
import parser from "html-react-parser";
const ProductDetails = () => {
    const { id } = useParams();
    const { data } = useGetSingleProductQuery(id);
    const dispatch = useAppDispatch();
    const products = useAppSelector(getCartProducts);
    const [qty, setQty] = useState(1);
    const [description, setDescription] = useState("");

    const [addCartButton, setAddCartButton] = useState(false);
    useEffect(() => {
        const getProduct = products?.find(
            (product: TCartProduct) => product._id === data?.data?._id
        );

        setAddCartButton(data?.data?.stock === 0);
        if (getProduct) {
            const isTrue = getProduct?.qty >= data?.data?.stock;
            setAddCartButton(isTrue);
        }
    }, [products, data]);

    const handleAddToCart = (e: FormEvent) => {
        e.preventDefault();

        // console.log(products);
        const getProduct = products?.find(
            (product: TCartProduct) => product._id === data?.data?._id
        );

        // console.log("Get Product", getProduct);
        // console.log(getProduct?.qty, " ", qty);
        if (getProduct && getProduct?.qty === data?.data?.stock) {
            // console.log("Not enough in stock");
            toast.error("Not enough in stock");
        } else if (getProduct && getProduct?.qty + qty > data?.data?.stock) {
            toast.error("Not enough in stock");
        } else {
            dispatch(
                addToCart({
                    _id: data?.data?._id,
                    qty,
                    price: data?.data?.price,
                })
            );
        }
    };

    useEffect(() => {
        console.log(data?.data?.description);
        const description =
            `<p>` +
            data?.data?.description.replaceAll("\\n", "<br />") +
            `</p>`;
        console.log(description);
        setDescription(description);
    }, [data]);

    return (
        <div className="px-4 md:px-8 lg:px-16 flex py-6 flex-col lg:flex-row">
            <div className="flex-1 border-2">
                <img src={data?.data?.image} alt="" />
            </div>
            <div className="flex-1 p-6">
                <div>
                    {data?.data?.stock > 0 ? (
                        <p className="bg-green-200 w-[80px] text-center py-1 font-semibold text-sm rounded-sm border-2 border-green-400">
                            In Stock
                        </p>
                    ) : (
                        <p className="bg-red-200 w-[80px] text-center py-1 font-semibold text-sm rounded-sm border-2 border-red-400">
                            Out of Stock
                        </p>
                    )}

                    <h1 className="text-xl font-semibold mt-2">
                        {data?.data?.name}
                    </h1>
                    <div className="mt-2">
                        <p className="text-[#FF5252] font-semibold text-sm">
                            {data?.data?.category}
                        </p>
                    </div>
                    <p className="text-gray-600 mt-6">
                        {/* // replace all \n to <br> tag */}
                        {parser(description)}
                    </p>
                </div>
                <div className="mt-6 ">
                    <p>
                        <span className="font-semibold">Price: </span>
                        <span>{data?.data?.price}tk</span>
                    </p>
                    <p>
                        <span className="font-semibold">
                            Available in Stock:{" "}
                        </span>
                        <span>{data?.data?.stock}</span>
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
                            value={qty}
                            onChange={(e) => setQty(parseInt(e.target.value))}
                            min={1}
                        />
                    </div>
                    <div>
                        <Button
                            type="primary"
                            className="bg-[#FF5252] hover:bg-[#fff] hover:border-[#FF5252] hover:text-[#FF5252] border-[#FF5252] text-white font-normal"
                            size={"large" as SizeType}
                            danger
                            onClick={handleAddToCart}
                            disabled={addCartButton}
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
