import { Button, ConfigProviderProps } from "antd";
import { FiShoppingCart } from "react-icons/fi";

type SizeType = ConfigProviderProps["componentSize"];
const Header = () => {
    return (
        <div className="flex space-x-6 items-center ">
            <div>
                <FiShoppingCart className="text-3xl font-bold " />
            </div>
            <div>
                <Button
                    type="primary"
                    className="bg-[#FF5252] hover:bg-[#fff] hover:border-[#FF5252] hover:text-[#FF5252] border-[#FF5252] text-white font-normal"
                    size={"large" as SizeType}
                    danger
                >
                    Product Management
                </Button>
            </div>
        </div>
    );
};

export default Header;