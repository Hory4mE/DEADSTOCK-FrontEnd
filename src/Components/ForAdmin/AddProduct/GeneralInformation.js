import React, { useState } from "react";

function GeneralInformation({ onGeneralInfoChange }) {
  const [generalInfo, setGeneralInfo] = useState({
    manufacturerName: "",
    manufacturerBrand: "",
    stocks: "",
    price: "",
    discount: "",
    orders: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
    onGeneralInfoChange(generalInfo);
  };

  return (
    <div className="flex flex-col pt-5 pb-12 mt-9 border border-solid border-zinc-200 max-md:max-w-full">
      <div className="flex gap-5 justify-between self-start ml-9 text-sm max-md:ml-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc2bd46ee9a6393a3646d5babaa1e16638bf0e41e721d2626a20cd19bcd3a073?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
          alt="General information icon"
          className="shrink-0 aspect-square w-[50px]"
        />
        <div className="flex flex-col my-auto">
          <h2 className="font-bold text-black">General Information</h2>
          <p className="mt-3 text-zinc-500">Fill all information below</p>
        </div>
      </div>
      <hr className="shrink-0 mt-5 h-px border border-solid bg-zinc-200 border-zinc-200 max-md:max-w-full" />
      <div className="flex flex-col pr-20 pl-10 mt-6 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-wrap max-md:mr-2 max-md:max-w-full">
          <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
            <label htmlFor="manufacturerName" className="text-sm font-bold text-black">
              Manufacturer Name
            </label>
            <div className="flex flex-col justify-center mt-3.5">
              <input
                type="text"
                id="manufacturerName"
                name="manufacturerName"
                value={generalInfo.manufacturerName}
                onChange={handleInputChange}
                className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
            <label htmlFor="manufacturerBrand" className="text-sm font-bold text-black">
              Manufacturer Brand
            </label>
            <div className="flex flex-col justify-center mt-3.5">
              <input
                type="text"
                id="manufacturerBrand"
                name="manufacturerBrand"
                value={generalInfo.manufacturerBrand}
                onChange={handleInputChange}
                className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-start mt-5 max-md:flex-wrap max-md:mr-2">
          <div className="flex flex-col flex-1">
            <label htmlFor="stocks" className="text-sm font-bold text-black">
              Stocks
            </label>
            <div className="flex flex-col justify-center mt-3.5">
              <input
                type="number"
                id="stocks"
                name="stocks"
                value={generalInfo.stocks}
                onChange={handleInputChange}
                className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="price" className="text-sm font-bold text-black">
              Price (฿)
            </label>
            <div className="flex flex-col justify-center mt-3">
              <input
                type="number"
                id="price"
                name="price"
                value={generalInfo.price}
                onChange={handleInputChange}
                className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="discount" className="text-sm font-bold text-black">
              Discount (%)
            </label>
            <div className="flex flex-col justify-center mt-2.5">
              <input
                type="number"
                id="discount"
                name="discount"
                value={generalInfo.discount}
                onChange={handleInputChange}
                className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 mt-1">
            <label htmlFor="orders" className="text-sm font-bold text-black">
              Orders
            </label>
            <div className="flex flex-col justify-center mt-2.5">
              <input
                type="number"
                id="orders"
                name="orders"
                value={generalInfo.orders}
                onChange={handleInputChange}
                className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5 self-end mt-3.5 mr-14 text-xs text-black whitespace-nowrap max-md:mr-2.5">
          <div className="flex flex-col flex-1 justify-center">
            <div className="justify-center items-center px-1.5 rounded-full bg-zinc-300 h-[25px] w-[25px]">XS</div>
          </div>
          <div className="flex flex-col flex-1 justify-center">
            <div className="justify-center items-center px-2.5 rounded-full bg-zinc-300 h-[25px] w-[25px]">S</div>
          </div>
          <div className="flex flex-col flex-1 justify-center">
            <div className="justify-center items-center rounded-full bg-zinc-300 h-[25px] w-[25px]">M</div>
          </div>
          <div className="flex flex-col flex-1 justify-center">
            <div className="justify-center items-center px-2.5 rounded-full bg-zinc-300 h-[25px] w-[25px]">L</div>
          </div>
          <div className="flex flex-col flex-1 justify-center">
            <div className="justify-center items-center px-1.5 rounded-full bg-zinc-300 h-[25px] w-[25px]">XL</div>
          </div>
          <div className="flex flex-col flex-1 justify-center">
            <div className="justify-center items-center px-1 rounded-full bg-zinc-300 h-[25px] w-[25px]">2XL</div>
          </div>
          <div className="flex flex-col flex-1 justify-center">
            <div className="justify-center items-center px-1 rounded-full bg-zinc-300 h-[25px] w-[25px]">3XL</div>
          </div>
          <div className="flex flex-col flex-1 justify-center">
            <div className="justify-center items-center px-1 rounded-full bg-zinc-300 h-[25px] w-[25px]">4XL</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralInformation;
