import React, { useState } from "react";

function ProductGallery({ onFileSelect }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            // Extracting file name and extension
            const splitName = file.name.split(".");
            const extension = splitName.pop();
            const name = splitName.join(".");
            // Set the file name and extension to state
            setFileName(`${name}.${extension}`);
            handleUpload(file);
        }
    };

    const handleUpload = (file) => {
        // Send the selected file to the parent component
        if (file) {
            onFileSelect(file);
        } else {
            console.log("No file selected");
        }
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        setFileName("");
    };

    return (
        <div className="flex flex-col px-8 pt-4 pb-8 mt-3.5 text-sm border border-solid border-zinc-200 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between self-start">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/366bd92de4d256fee2b7b91dc466dcbbf41759880e54d8df9a9ef0e60c407468?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
                    alt="Product gallery icon"
                    className="shrink-0 aspect-square w-[50px]"
                />
                <div className="flex flex-col self-start mt-3">
                    <h2 className="font-bold text-black">Product Gallery</h2>
                    <p className="mt-2.5 text-zinc-500">Add product Photo gallery images.</p>
                </div>
            </div>
            <label htmlFor="fileInput" className="flex justify-center items-center px-16 py-12 mt-4 font-bold text-black bg-white border border-black border-dashed max-md:px-5 max-md:max-w-full cursor-pointer">
                <div className="flex flex-col max-w-full w-[222px] justify-center items-center relative">
                    <input type="file" id="fileInput" onChange={handleFileChange} className="hidden position-absolute z-1" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bb7afb7e87f11420843e87ff160c0c90b0151e8377b87a03ba2cc208695106a?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&" alt="Upload icon" className="aspect-square w-[50px]" />
                    {fileName && (
                        <div className="flex items-center mt-7">
                            <p className="mr-2">{`File: ${fileName}`}</p>
                            <button onClick={handleRemoveFile} className="text-red-600 z-10">x</button>
                        </div>
                    )}
                    {!fileName && <p className="mt-7">Drop files here or click to upload.</p>}
                </div>
            </label>
        </div>
    );
}

export default ProductGallery;
