import { Button } from "antd";
import { SizeType } from "../../types";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";

export const ButtonPrimary = ({
    text,
    to,
}: {
    text: string | ReactNode;
    to: string;
}) => {
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

export const ButtonSecondary = ({
    text,
    to,
}: {
    text: string | ReactNode;
    to: string;
}) => {
    const navigate = useNavigate();
    return (
        <Button
            type="primary"
            className="border-[#FF5252] hover:bg-[#fff] hover:border-[#FF5252] hover:text-[#FF5252] text-white font-normal"
            size={"large" as SizeType}
            danger
            onClick={() => navigate(to)}
        >
            {text}
        </Button>
    );
};
