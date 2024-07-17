import { Link } from "react-router-dom";
import trademill from "../../assets/trademill.jpg";
import { Button } from "antd";
const ProductCard = () => {
    return (
        <div className="bg-white px-4 py-6 min-h-[300px] space-y-8 ">
            <div className="flex justify-center">
                <img src={trademill} alt="" className="w-[150px]" />
            </div>

            <div className="space-y-1">
                <p className="text-sm text-gray-600">Trademill</p>
                <Link to="">
                    <h2 className="text-lg font-semibold text-left hover:text-[#FF5252] transition-all duration-300">
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h2>
                </Link>
                <p>Stock: 5</p>
                <p className="text-lg text-[#FF5252] font-semibold">$10</p>
                <Button className="w-full bg-[#FF5252] text-white font-semibold">
                    View Details
                </Button>
            </div>
        </div>
    );
};

export default ProductCard;
