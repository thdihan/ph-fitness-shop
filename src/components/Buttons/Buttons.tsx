import { Button } from "antd";
import { SizeType } from "../../types";
import { useNavigate } from "react-router-dom";

export const ButtonPrimary = ({ text, to }: { text: string; to: string }) => {
    const navigate = useNavigate();
    return (
        <Button
            type="primary"
            className="bg-[#FF5252] hover:bg-[#fff] hover:border-[#FF5252] hover:text-[#FF5252] border-[#FF5252] text-white font-normal"
            size={"large" as SizeType}
            danger
            onClick={() => navigate(to)}
        >
            {text}
        </Button>
    );
};
