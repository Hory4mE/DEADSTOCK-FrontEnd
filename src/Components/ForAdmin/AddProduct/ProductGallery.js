import React, { useState } from "react";

function ProductGallery({ onFileSelect }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [url, setUrl] = useState("");


    const handleFileChange = (e) => {
        const file = e.target.files;
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

    const handleUrlChange = (e) => {
        const newUrl = e.target.value;
        setUrl(newUrl);
        onFileSelect({ url: newUrl });;
    };
    
    


    return (
        <div className="flex flex-col px-8 pt-4 pb-8 mt-3.5 text-sm border border-solid border-zinc-200 max-md:px-5 max-md:max-w-full">
            <div className="flex items-center gap-5">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/366bd92de4d256fee2b7b91dc466dcbbf41759880e54d8df9a9ef0e60c407468?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
                    alt="Product gallery icon"
                    className="shrink-0 aspect-square w-[50px]"
                />
                <div className="flex flex-col">
                    <h2 className="font-bold text-black">Product Gallery</h2>
                    <p className="mt-2.5 text-zinc-500">Add product photo gallery images.</p>
                </div>
            </div>
            <label htmlFor="fileInput" className="flex justify-center items-center px-16 py-12 mt-4 font-bold text-black bg-white border border-black border-dashed max-md:px-5 max-md:max-w-full cursor-pointer">
                <div className="flex flex-col max-w-full w-[222px] justify-center items-center relative">
                    <input type="file" id="fileInput" onChange={handleFileChange} className="hidden position-absolute z-1" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bb7afb7e87f11420843e87ff160c0c90b0151e8377b87a03ba2cc208695106a?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&" alt="Upload icon" className="aspect-square w-[50px]" />
                    {fileName && (
                        <div className="flex items-center mt-3">
                            <p className="mr-2">{`File: ${fileName}`}</p>
                            <button onClick={handleRemoveFile} className="text-red-600 z-10">x</button>
                        </div>
                    )}
                    {!fileName && (
                        <p className="mt-3">Drop files here or click to upload.</p>
                    )}
                </div>
            </label>
            <div className="flex flex-col mt-4">
                <div className="flex flex-col justify-center mt-3.5">
                    <label htmlFor="manufacturerName" className="text-sm font-bold text-black">
                        Or use Image URL
                    </label>
                    <input
                        type="text"
                        id="urlName"
                        name="urlName"
                        value={url.img_url}
                        onChange={handleUrlChange}
                        className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300"
                        required />
                </div>

            </div>
        </div>
    );
}

export default ProductGallery;
