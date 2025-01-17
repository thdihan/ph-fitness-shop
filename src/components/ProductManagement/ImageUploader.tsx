/* eslint-disable @typescript-eslint/no-explicit-any */
import { DragEvent, FormEvent, useRef, useState } from "react";

const ImageUploader = ({
    image,
    setImage,
}: {
    image: { file: any; url: string };
    setImage: (image: { file: any; url: string }) => void;
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [dragging, setDragging] = useState(false);
    const onSelectClick = () => {
        inputRef?.current?.click();
    };

    const onDraging = (e: DragEvent) => {
        e.preventDefault();
        setDragging(true);
        e.dataTransfer.dropEffect = "copy";
    };

    const dragLeave = () => {
        setDragging(false);
    };

    const onDrop = (e: DragEvent) => {
        e.preventDefault();
        setDragging(false);
        console.log(e.dataTransfer.files);
        setImage({
            file: e.dataTransfer.files[0],
            url: URL.createObjectURL(e.dataTransfer.files[0]),
        });
    };

    const deleteImage = () => {
        setImage({
            file: undefined,
            url: "",
        });
    };
    return (
        <div className="flex-1 mt-3">
            <h2 className="font-semibold">Image Upload</h2>
            <div className="mt-2">
                <div
                    className="w-full min-w-[380px] h-[380px] border-4 border-dotted border-[#FF5252] flex justify-center items-center relative"
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
                                className="p-2 w-full h-full"
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
                    onChange={(e: FormEvent) => {
                        const inputElement = e.target as HTMLInputElement;
                        const file = inputElement.files?.[0];
                        if (file) {
                            setImage({
                                file,
                                url: URL.createObjectURL(file),
                            });
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default ImageUploader;
