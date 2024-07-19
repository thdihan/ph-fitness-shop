import ImageUploader from "../components/ProductManagement/ImageUploader";
import AddProductForm from "../components/ProductManagement/AddProductForm";

const AddProduct = () => {
    return (
        <div className="px-8 lg:px-16 py-6">
            <div className="flex justify-between">
                <h2 className="text-2xl flex items-center space-x-2 font-semibold text-[#FF5252]">
                    <span>Add Product</span>
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-6">
                <ImageUploader />
                <AddProductForm />
            </div>
        </div>
    );
};

export default AddProduct;
