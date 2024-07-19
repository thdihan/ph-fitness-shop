import ProductTable from "../components/ProductManagement/ProductTable";
import { ButtonPrimary } from "../components/Buttons/Buttons";

const ProductManagement = () => {
    return (
        <div className="px-8 lg:px-16">
            <div className="flex justify-between mt-6">
                <h2 className="text-2xl flex items-center space-x-2 font-semibold text-[#FF5252]">
                    <span>Product Management</span>
                </h2>

                <ButtonPrimary text="Add Product" to="/add-product" />
            </div>

            <div className="my-6 overflow-auto">
                <ProductTable />
            </div>
        </div>
    );
};

export default ProductManagement;
