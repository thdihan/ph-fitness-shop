import { Button } from "antd";
import { useRef, useState } from "react";
import { SizeType } from "../types";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const inputRef = useRef(null);

    const navigate = useNavigate();

    const [image, setImage] = useState({});
    const [dragging, setDragging] = useState(false);
    const onSelectClick = () => {
        inputRef?.current?.click();
    };

    const onDraging = (e) => {
        e.preventDefault();
        setDragging(true);
        e.dataTransfer.dropEffect = "copy";
    };

    const dragLeave = () => {
        setDragging(false);
    };

    const onDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        console.log(e.dataTransfer.files);
        setImage({
            file: e.dataTransfer.files[0],
            url: URL.createObjectURL(e.dataTransfer.files[0]),
        });
    };

    const deleteImage = () => {
        setImage({});
    };
    return (
        <div className="px-16 py-6">
            <div className="flex justify-between">
                <h2 className="text-2xl flex items-center space-x-2 font-semibold text-[#FF5252]">
                    <span>Add Product</span>
                </h2>
            </div>

            <div className="flex space-x-6">
                <div className="flex-1 mt-3">
                    <h2 className="font-semibold">Image Upload</h2>
                    <div className="mt-2">
                        <div
                            className="w-full h-[380px] border-4 border-dotted border-[#FF5252] flex justify-center items-center relative"
                            onDragOver={onDraging}
                            onDragLeave={dragLeave}
                            onDrop={onDrop}
                        >
                            {image?.url ? (
                                <>
                                    <div
                                        className="absolute bg-[#FF5252] px-3 py-1 rounded-lg font-medium text-white top-5 right-5 cursor-pointer"
                                        onClick={deleteImage}
                                    >
                                        X Delete
                                    </div>
                                    <img
                                        src={image?.url}
                                        alt=""
                                        className="p-2 w-full"
                                    />
                                </>
                            ) : (
                                <p>
                                    {dragging ? (
                                        <span>Drop Here</span>
                                    ) : (
                                        <>
                                            <span>Drag & Drop here or </span>
                                            <span
                                                className="text-[#FF5252] font-semibold italic cursor-pointer"
                                                onClick={onSelectClick}
                                            >
                                                {" "}
                                                Select
                                            </span>
                                        </>
                                    )}
                                </p>
                            )}
                        </div>
                        <input
                            type="file"
                            name=""
                            id=""
                            className="hidden"
                            ref={inputRef}
                        />
                    </div>
                </div>
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
                        <div className="flex space-x-3">
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
                            <label htmlFor="description">
                                Product Description
                            </label>
                            <textarea
                                name="description"
                                id="description"
                                className="p-2 border-2 border-gray-400 rounded-md"
                            ></textarea>
                        </div>

                        <div>
                            <Button
                                type="primary"
                                className="bg-[#FF5252] hover:bg-[#fff] hover:border-[#FF5252] hover:text-[#FF5252] border-[#FF5252] text-white font-normal"
                                size={"large" as SizeType}
                                danger
                                onClick={() => navigate("/add-product")}
                            >
                                Add Product
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
