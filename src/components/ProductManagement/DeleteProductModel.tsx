import { Modal } from "antd";
import { ButtonSecondary, ButtonWithoutBorder } from "../Buttons/Buttons";
import { toast } from "sonner";
import { useDeleteProductMutation } from "../../redux/api/baseApi";

const DeleteProductModel = ({ isModalOpen, setIsModalOpen, itemToDelete }) => {
    const [deleteProduct] = useDeleteProductMutation();

    const handleOk = async () => {
        try {
            await deleteProduct(itemToDelete);
            toast.success("Product deleted successfully");
            setIsModalOpen(false);
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
                <ButtonSecondary text="Delete" clickAction={handleOk} />
                <ButtonWithoutBorder
                    text={`Cancel`}
                    clickAction={handleCancel}
                />
            </div>
        </Modal>
    );
};

export default DeleteProductModel;
