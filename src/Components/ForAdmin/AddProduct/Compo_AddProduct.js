import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductInformation from "./ProductInformation";
import ProductGallery from "./ProductGallery";
import GeneralInformation from "./GeneralInformation";

function Compo_addProduct() {
  const [productData, setProductData] = useState({
    product_name: "",
    description: "",
    price: "",
    image_url: "",
    measurement: "",
    on_hand_quantity: "",
    size: "",
    productCategory: "",
    product_type_id: ""
  });

  const handleProductInfoChange = (e) => {
    const { name , value} = e.target;
    // Update the local state with the new information
    setProductData((prevData) => ({
      ...prevData,
      [name] : value
    }));
    console.log(name , value);
  };





  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Product data submitted:", productData);
  
    try {
      // Check if the product_type_id is properly set
      const accessToken = localStorage.getItem('access_token');
      // Send productData to the backend
      const response = await axios.post("http://localhost:5000/product/create", productData , 
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("Product data saved to database:", response.data);
      // Optionally, you can handle success or show a message to the user
    } catch (error) {
      console.error("Error saving product data:", error);
      // Optionally, you can handle the error or show an error message to the user
    }
  };
  

  return (
    <div className="flex flex-col px-16 mt-7 w-full max-md:px-5 max-md:max-w-full">
      <h1 className="self-start ml-7 text-sm font-bold text-black max-md:ml-2.5">Create Product</h1>
      <div className="mt-6 max-md:max-w-full">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 justify-center items-center">
            <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-6 max-md:max-w-full">
                <ProductInformation onProductInfoChange={handleProductInfoChange}/>
                <ProductGallery onFileSelect={handleProductInfoChange} />
                <GeneralInformation onGeneralInfoChange={handleProductInfoChange} />
              </div>
            </div>
          </div>       
          <div className="flex flex-col justify-center self-center mt-5 max-w-full text-base text-white whitespace-nowrap w-[125px]" style={{ marginLeft: '268px' }}>
            <button type="submit" className="justify-center py-3 bg-blue-500 rounded-md border border-solid border-stone-300 max-md:px-5">
              CREATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Compo_addProduct;
