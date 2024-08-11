import { Modal } from "antd";
import { ButtonSecondary, ButtonWithoutBorder } from "../Buttons/Buttons";
import { toast } from "sonner";
import { useDeleteProductMutation } from "../../redux/api/baseApi";
import { useState } from "react";

const DeleteProductModel = ({
    isModalOpen,
    setIsModalOpen,
    itemToDelete,
}: {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
    itemToDelete: string;
}) => {
    const [deleteProduct] = useDeleteProductMutation();
    const [isLoading, setIsLoading] = useState(false);

    const handleOk = async () => {
        try {
            setIsLoading(true);
            await deleteProduct(itemToDelete);
            toast.success("Product deleted successfully");
            setIsModalOpen(false);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
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
                <ButtonSecondary
                    text="Delete"
                    clickAction={handleOk}
                    loading={isLoading}
                />
                <ButtonWithoutBorder
                    text={`Cancel`}
                    clickAction={handleCancel}
                />
            </div>
        </Modal>
    );
};

export default DeleteProductModel;
