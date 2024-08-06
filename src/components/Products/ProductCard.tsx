import { Link } from "react-router-dom";
import { Button } from "antd";
import { TProduct } from "../../types";
const ProductCard = ({ product }: { product: TProduct }) => {
    return (
        <div className="bg-white px-4 py-6 min-h-[300px] space-y-8 ">
            <div className="flex justify-center">
                <img src={product?.image} alt="" className="w-[150px]" />
            </div>

            <div className="space-y-1">
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
                <Link to={`/products/${product._id}`}>
                    <Button className="w-full bg-[#FF5252] text-white font-semibold">
                        View Details
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
