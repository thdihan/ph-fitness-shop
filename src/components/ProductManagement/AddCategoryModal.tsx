import { Modal } from "antd";
import { useState } from "react";
import { ButtonSecondary } from "../Buttons/Buttons";
import { useAddNewCategoryMutation } from "../../redux/api/baseApi";
import { toast } from "sonner";

const AddCategoryModal = ({
    isModalOpen,
    setIsModalOpen,
}: {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
}) => {
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [addCategory] = useAddNewCategoryMutation();
    const handleOk = async () => {
        setIsLoading(true);
        console.log("Category", category);
        await addCategory({ category, image });
        setIsModalOpen(false);
        toast.success("Category Added Successfully");
        setIsLoading(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <Modal
            title="Add Category"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            <div className="space-y-3">
                <input
                    type="text"
                    className="p-2 border-2 w-full border-gray-400 rounded-md"
                    placeholder="Category Name"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <input
                    type="text"
                    value={image}
                    placeholder="Image URL (optional)"
                    className="p-2 border-2 w-full border-gray-400 rounded-md"
                    onChange={(e) => setImage(e.target.value)}
                />
                <ButtonSecondary
                    text="Add Category"
                    clickAction={handleOk}
                    loading={isLoading}
                />
            </div>
        </Modal>
    );
};

export default AddCategoryModal;
