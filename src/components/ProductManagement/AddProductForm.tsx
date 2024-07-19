import { ButtonPrimary } from "../Buttons/Buttons";

const AddProductForm = () => {
    return (
        <div className="flex-[2] mt-3">
            <h2 className="font-semibold">Product Information</h2>
            <form className="mt-2 space-y-2 flex flex-col">
                <div className="flex flex-col space-y-1">
                    <label htmlFor="product-name">Product Name</label>
                    <input
                        type="text"
                        name="productName"
                        id="product-name"
                        className="p-2 border-2 border-gray-400 rounded-md"
                    />
                </div>
                <div className="flex  space-x-0 lg:space-x-3 lg:flex-row flex-col ">
                    <div className="flex flex-1 flex-col space-y-1">
                        <label htmlFor="product-name">Stock</label>
                        <input
                            type="text"
                            name="productName"
                            id="product-name"
                            className="p-2 border-2 border-gray-400 rounded-md"
                        />
                    </div>
                    <div className="flex  flex-1 flex-col space-y-1">
                        <label htmlFor="product-name">Price</label>
                        <input
                            type="text"
                            name="productName"
                            id="product-name"
                            className="p-2 border-2 border-gray-400 rounded-md"
                        />
                    </div>
                </div>

                <div className="flex flex-col space-y-1">
                    <label htmlFor="category">Product Category</label>
                    <select
                        name=""
                        id=""
                        className="p-2 border-2 border-gray-400 rounded-md"
                    >
                        <option value="">Category 1</option>
                        <option value="">Category 1</option>
                        <option value="">Category 1</option>
                        <option value="">Category 1</option>
                    </select>
                </div>

                <div className="flex flex-col space-y-1">
                    <label htmlFor="description">Product Description</label>
                    <textarea
                        name="description"
                        id="description"
                        className="p-2 border-2 border-gray-400 rounded-md"
                    ></textarea>
                </div>

                <div>
                    <ButtonPrimary text="Add Product" to={`/add-product`} />
                </div>
            </form>
        </div>
    );
};

export default AddProductForm;
