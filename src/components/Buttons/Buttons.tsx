import { Button, Spin } from "antd";
import { SizeType } from "../../types";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";
import { LoadingOutlined } from "@ant-design/icons";

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
    clickAction,
    loading = false,
}: {
    text: string | ReactNode;
    clickAction: () => void; // Specify the type of clickAction as a function that takes no arguments and returns void
    loading?: boolean;
}) => {
    return (
        <Button
            type="primary"
            className="border-[#FF5252] hover:bg-[#fff] hover:border-[#FF5252] hover:text-[#FF5252] text-white font-normal"
            size={"large" as SizeType}
            danger
            onClick={clickAction}
            disabled={loading}
        >
            {loading ? (
                <Spin
                    className="text-[#FF5252]"
                    indicator={<LoadingOutlined spin />}
                    size="default"
                />
            ) : (
                text
            )}
        </Button>
    );
};
export const ButtonWithoutBorder = ({
    text,
    clickAction,
}: {
    text: string | ReactNode;
    clickAction: () => void; // Specify the type of clickAction as a function that takes no arguments and returns void
}) => {
    return (
        <Button
            className=" text-white font-normal"
            size={"large" as SizeType}
            danger
            onClick={clickAction}
        >
            {text}
        </Button>
    );
};
