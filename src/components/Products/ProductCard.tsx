import { Link } from "react-router-dom";
import { TProduct } from "../../types";
const ProductCard = ({ product }: { product: TProduct }) => {
    return (
        <div className="bg-white px-4 py-6 min-h-[300px] space-y-8 flex flex-col justify-between border-2 border-b-0 last:border-b-2 lg:border-b-2 lg:border-r-0 last:lg:border-r-2">
            <div className="flex justify-center">
                <img src={product?.image} alt="" className="w-[150px]" />
            </div>

            <div className="">
                <div className="mb-4">
                    <p className="text-sm text-gray-600">{product?.category}</p>
                    <Link to={`/products/${product._id}`}>
                        <h2 className="text-lg font-semibold text-left hover:text-[#FF5252] transition-all duration-300">
                            {product?.name}
                        </h2>
                    </Link>
                    <p>Stock: {product?.stock}</p>
                    <p className="text-lg text-[#FF5252] font-semibold">
                        ${product?.price}
                    </p>
                </div>

                <Link to={`/products/${product._id}`}>
                    <button className="w-full p-1 rounded-lg border-2 bg-[#FF5252] border-[#FF5252] hover:bg-[#FF7875] transition-all duration-200 text-white font-medium text-sm">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
