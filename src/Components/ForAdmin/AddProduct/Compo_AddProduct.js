import React, { useState, useEffect } from "react";
import ProductInformation from "./ProductInformation";
import ProductGallery from "./ProductGallery";
import GeneralInformation from "./GeneralInformation";
import PublishSection from "./PublishSection";

function Compo_addProduct() {

  const [productData, setProductData] = useState({
    productTitle: "",
    productDescription: "",
    productCategory: "",
    manufacturerName: "",
    manufacturerBrand: "",
    stocks: "",
    price: "",
    discount: "",
    orders: "",
    status: "",
    visibility: "",
    publishDateTime: "",
    shortDescription: ""
  });


  const handleProductInfoChange = (info) => {
    // Update the local state with a delay
    setProductData((prevData) => ({
      ...prevData,
      ...info
    }));
  };
  
  const handleFileChange = (info) => {
    // Update the local state with a delay
    setProductData((prevData) => ({
      ...prevData,
      ...info
    }));
  };

  const handleGeneralInfoChange = (info) => {
    // Update the local state with a delay
    setProductData((prevData) => ({
      ...prevData,
      ...info
    }));
  };


  // UseEffect to log updated product data when it changes
  useEffect(() => {
    console.log("Product data updated:", productData);
  }, [productData]); // Run this effect whenever productData changes

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product data submitted:", productData);
    // You can perform further actions with the productData object, like sending it to a server
  };

  return (
    <div className="flex flex-col px-16 mt-7 w-full max-md:px-5 max-md:max-w-full">
      <h1 className="self-start ml-7 text-sm font-bold text-black max-md:ml-2.5">Create Product</h1>
      <div className="mt-6 max-md:max-w-full">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-6 max-md:max-w-full">
                <ProductInformation onProductInfoChange={handleProductInfoChange} />
                <ProductGallery onFileSelect={handleFileChange}/>
                <GeneralInformation onGeneralInfoChange={handleGeneralInfoChange} />
              </div>
            </div>
            <aside className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <PublishSection />
            </aside>
          </div>
          <div className="flex flex-col justify-center self-center mt-5 max-w-full text-base text-white whitespace-nowrap w-[132px]">
            <button type="submit" className="justify-center px-10 py-4 bg-blue-500 rounded-md border border-solid border-stone-300 max-md:px-5">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Compo_addProduct;
