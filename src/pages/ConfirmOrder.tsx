import { Result } from "antd";
import { ButtonPrimary } from "../components/Buttons/Buttons";

const ConfirmOrder = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16">
            <Result
                status="success"
                title="Order Successful"
                extra={[
                    <ButtonPrimary
                        text="Continue Shopping"
                        to="/all-products"
                    />,
                ]}
            />
        </div>
    );
};

export default ConfirmOrder;
