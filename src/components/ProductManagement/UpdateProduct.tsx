/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";

import {
    useGetSingleProductQuery,
    useUpdateProductMutation,
} from "../../redux/api/baseApi";
import { useEffect, useReducer, useState } from "react";
import ImageUploader from "./ImageUploader";
import AddProductForm from "./AddProductForm";
import { toast } from "sonner";

type TInitialImage = {
    file: File;
    url: string;
};
const initialImage: TInitialImage = {
    file: new File([""], "filename"),
    url: "",
};
const initialProduct = {
    name: "",
    description: "",
    price: 0,
    stock: 0,
    category: "",
    image: "",
};

const productReducer = (state: any, action: any) => {
    switch (action.type) {
        case "name":
            return { ...state, name: action.payload };
        case "description":
            return { ...state, description: action.payload };
        case "price":
            return { ...state, price: action.payload };
        case "stock":
            return { ...state, stock: action.payload };
        case "category":
            return { ...state, category: action.payload };
        case "image":
            return { ...state, image: action.payload };
        default:
            return state;
    }
};
const UpdateProduct = () => {
    const navigate = useNavigate();
    const { productId } = useParams<{ productId: string }>();
    const { data } = useGetSingleProductQuery(productId);

    const [image, setImage] = useState(initialImage);
    const [product, dispatch] = useReducer(productReducer, initialProduct);
    const [updateProduct] = useUpdateProductMutation();

    useEffect(() => {
        if (data) {
            dispatch({ type: "name", payload: data.data.name });
            dispatch({ type: "description", payload: data.data.description });
            dispatch({ type: "price", payload: data.data.price });
            dispatch({ type: "stock", payload: data.data.stock });
            dispatch({ type: "category", payload: data.data.category });
            dispatch({ type: "image", payload: data.data.image });
            image.url = data.data.image;
        }
    }, [data]);

    const handleSubmit = async () => {
        const data = new FormData();
        data.append("file", image.file);
        data.append("upload_preset", "myCloud");
        data.append("cloud_name", "dyunyevmc");

        try {
            const res = await fetch(
                "https://api.cloudinary.com/v1_1/dyunyevmc/image/upload",
                {
                    method: "POST",
                    body: data,
                }
            );

            const file = await res.json();
            console.log("File", file);
            toast.success("Image uploaded successfully");

            // Upload product
            const newProduct = {
                id: productId,
                data: {
                    ...product,
                    image: file.url,
                },
            };

            console.log("New Product", newProduct);
            await updateProduct(newProduct);
            toast.success("Product Updated successfully");
            navigate("/product-management");
        } catch (error) {
            toast.error("Failed to upload image");
        }
    };
    return (
        <div className="px-8 lg:px-16 py-6">
            <div className="flex justify-between">
                <h2 className="text-2xl flex items-center space-x-2 font-semibold text-[#FF5252]">
                    <span>Add Product</span>
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-6">
                <ImageUploader image={image} setImage={setImage} />
                <AddProductForm
                    handleSubmit={handleSubmit}
                    product={product}
                    dispatch={dispatch}
                    update={true}
                />
            </div>
        </div>
    );
};

export default UpdateProduct;
