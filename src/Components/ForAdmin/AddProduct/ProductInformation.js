import React, { useEffect, useState } from "react";

function ProductInformation({ onProductInfoChange }) {
  const [productInfo, setProductInfo] = useState({
    product_name: "",
    description: "",
    productCategory: ""
  });


  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProductInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
    onProductInfoChange(productInfo);
    console.log(name , value , productInfo)
  };

  return (
    <div className="flex flex-col justify-center border border-solid border-zinc-200 max-md:max-w-full">
      <div className="flex flex-col py-4 border border-solid border-zinc-200 max-md:max-w-full">
        <div className="flex gap-5 justify-between self-start ml-9 text-sm max-md:ml-2.5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5b674bf50c852ac13ccc7e5b8c3560192742a5e78ece53add0a33f2dc3c8351?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&" alt="Product information icon" className="shrink-0 aspect-square w-[50px]" />
          <div className="flex flex-col self-start mt-3.5">
            <h2 className="font-bold text-black">Product Information</h2>
            <p className="mt-3 text-zinc-500">Fill all information below</p>
          </div>
        </div>
        <hr className="shrink-0 mt-6 h-px border border-solid bg-zinc-200 border-zinc-200 max-md:max-w-full" />
        <div className="flex flex-col px-9 mt-6 max-md:px-5 max-md:max-w-full">
          <label htmlFor="product_name" className="text-xs font-bold text-black max-md:max-w-full">
            Product Title
          </label>
          <div className="flex flex-col justify-center mt-2.5 max-md:max-w-full">
            <input type="text" id="product_name" name="product_name" value={productInfo.product_name} onChange={handleInputChange} className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300 max-md:max-w-full" required/>
          </div>
          <label htmlFor="description" className="mt-4 text-xs font-bold text-black max-md:max-w-full">
            Product Description
          </label>
          <div className="flex flex-col justify-center mt-2 max-md:max-w-full">
            <textarea id="description" name="description" value={productInfo.description} onChange={handleInputChange} className="shrink-0 bg-white border-2 border-solid border-stone-300 h-[134px] max-md:max-w-full" required></textarea>
          </div>
          <label htmlFor="productCategory" className="mt-3.5 text-xs font-bold text-black max-md:max-w-full">
            Product Category
          </label>
          <div className="flex flex-col justify-center mt-1.5 max-md:max-w-full">
            <select id="productCategory" name="productCategory" value={productInfo.productCategory} onChange={handleInputChange} className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300 max-md:max-w-full" required>
              <option value="1">shoes</option>
              <option value="2">accessories</option>
              <option value="3">jacket</option>
              <option value="4">shirt</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInformation;
