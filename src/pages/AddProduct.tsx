import ImageUploader from "../components/ProductManagement/ImageUploader";
import AddProductForm from "../components/ProductManagement/AddProductForm";
import { useState } from "react";
import { toast } from "sonner";
import { useGetAllCategoriesQuery } from "../redux/api/baseApi";

type TInitialImage = {
    file: File;
    url: string;
};
const initialImage: TInitialImage = {
    file: new File([""], "filename"),
    url: "",
};
const AddProduct = () => {
    const [image, setImage] = useState(initialImage);
    const [url, setUrl] = useState("");

    const { data } = useGetAllCategoriesQuery(undefined);
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
                />
            </div>
        </div>
    );
};

export default AddProduct;
