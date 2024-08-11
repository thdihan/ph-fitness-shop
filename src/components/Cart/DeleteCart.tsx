import { Modal } from "antd";
import { useAppDispatch } from "../../redux/hooks";
import { deleteCart } from "../../redux/features/cart/cartSlice";
import { ButtonSecondary, ButtonWithoutBorder } from "../Buttons/Buttons";

const DeleteCart = ({
    isModalOpen,
    setIsModalOpen,
    itemToDelete,
}: {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
    itemToDelete: string;
}) => {
    const dispatch = useAppDispatch();
    const handleOk = () => {
        dispatch(deleteCart(itemToDelete));
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <Modal
            title="Confirm Delete ? "
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            <div className="space-x-2">
                <ButtonSecondary text="Delete" clickAction={handleOk} />
                <ButtonWithoutBorder
                    text={`Cancel`}
                    clickAction={handleCancel}
                />
            </div>
        </Modal>
    );
};

export default DeleteCart;
