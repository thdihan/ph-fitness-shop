import { Badge, Button, ConfigProviderProps } from "antd";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { getCartProducts } from "../../redux/features/cart/cartSlice";

type SizeType = ConfigProviderProps["componentSize"];
const Header = () => {
    const navigate = useNavigate();
    const cartProducts = useAppSelector(getCartProducts);
    return (
        <div className="flex space-x-6 items-center pt-6 lg:pt-0">
            <div className="w-full">
                <Link to={`/cart`}>
                    <Badge count={cartProducts?.length}>
                        <FiShoppingCart className="text-3xl font-bold " />
                    </Badge>
                </Link>
            </div>
            <div className="w-full">
                <Button
                    type="primary"
                    className="bg-[#FF5252] hover:bg-[#fff] hover:border-[#FF5252] hover:text-[#FF5252] border-[#FF5252] text-white font-normal"
                    size={"large" as SizeType}
                    danger
                    onClick={() => {
                        navigate("/product-management");
                    }}
                >
                    Product Management
                </Button>
            </div>
        </div>
    );
};

export default Header;
