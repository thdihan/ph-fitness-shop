import { useState } from "react";
import { ButtonSecondary } from "../Buttons/Buttons";
import AddCategoryModal from "./AddCategoryModal";
import { useGetAllCategoriesQuery } from "../../redux/api/baseApi";

const AddProductForm = ({
    handleSubmit,
    product,
    dispatch,
    update = false,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data: categories } = useGetAllCategoriesQuery(undefined);
    return (
        <div className="flex-[2] mt-3">
            <AddCategoryModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
            <h2 className="font-semibold">Product Information</h2>
            <form className="mt-2 space-y-2 flex flex-col">
                <div className="flex flex-col space-y-1">
                    <label htmlFor="product-name">Product Name</label>
                    <input
                        type="text"
                        name="productName"
                        id="product-name"
                        className="p-2 border-2 border-gray-400 rounded-md"
                        value={product.name}
                        onChange={(e) =>
                            dispatch({
                                type: "name",
                                payload: e.target.value,
                            })
                        }
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
                            value={product.stock}
                            onChange={(e) =>
                                dispatch({
                                    type: "stock",
                                    payload: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex  flex-1 flex-col space-y-1">
                        <label htmlFor="product-name">Price</label>
                        <input
                            type="text"
                            name="productName"
                            id="product-name"
                            className="p-2 border-2 border-gray-400 rounded-md"
                            value={product.price}
                            onChange={(e) =>
                                dispatch({
                                    type: "price",
                                    payload: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>

                <div className="flex flex-col space-y-1">
                    <label htmlFor="category">Product Category</label>
                    <select
                        name=""
                        id=""
                        className="p-2 border-2 border-gray-400 rounded-md"
                        value={product.category}
                        onChange={(e) =>
                            dispatch({
                                type: "category",
                                payload: e.target.value,
                            })
                        }
                    >
                        {categories?.data?.map(
                            (category: { _id: string; name: string }) => (
                                <option value={category.name}>
                                    {category.name}
                                </option>
                            )
                        )}
                    </select>
                    <div>
                        <p
                            className="text-[#FF5252] font-bold cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        >
                            + Add new category
                        </p>
                    </div>
                </div>

                <div className="flex flex-col space-y-1">
                    <label htmlFor="description">Product Description</label>
                    <textarea
                        name="description"
                        id="description"
                        className="p-2 border-2 border-gray-400 rounded-md"
                        value={product.description}
                        onChange={(e) =>
                            dispatch({
                                type: "description",
                                payload: e.target.value,
                            })
                        }
                    ></textarea>
                </div>

                <div>
                    <ButtonSecondary
                        text={update ? "Update Product" : "Add Product"}
                        clickAction={handleSubmit}
                    />
                </div>
            </form>
        </div>
    );
};

export default AddProductForm;
