import ImageUploader from "../components/ProductManagement/ImageUploader";
import AddProductForm from "../components/ProductManagement/AddProductForm";
import { useReducer, useState } from "react";
import { toast } from "sonner";
import {
    useAddNewProductMutation,
    useGetAllCategoriesQuery,
} from "../redux/api/baseApi";
import { useNavigate } from "react-router-dom";

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
const AddProduct = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState(initialImage);
    const [url, setUrl] = useState("");

    const [product, dispatch] = useReducer(productReducer, initialProduct);

    const { data } = useGetAllCategoriesQuery(undefined);
    const [addNewProduct] = useAddNewProductMutation();
    console.log("Categories", data);

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
            setUrl(file.url);
            toast.success("Image uploaded successfully");

            // Upload product
            const newProduct = {
                ...product,
                image: file.url,
            };

            console.log("New Product", newProduct);
            await addNewProduct(newProduct);
            toast.success("Product added successfully");
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
                    categories={data?.data}
                    product={product}
                    dispatch={dispatch}
                />
            </div>
        </div>
    );
};

export default AddProduct;
