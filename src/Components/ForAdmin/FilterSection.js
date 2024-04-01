import React, { useState, useEffect } from "react";
import axios from "axios";

function FilterSection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/category/get-all"
        );
        const types = response.data.map(({ type_name }) => type_name);
        console.log(types);
        if (response.data) {
          setCategories(types);
          console.log("Fetch all Categories Success");
        } else {
          console.log("No data received from the API.");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-4 max-md:max-w-full">
        <div className="flex gap-5 justify-between px-7 py-11 text-black bg-white border border-black border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <h2 className="text-3xl">Filter</h2>
          <button className="text-2xl underline">clear all</button>
        </div>
        <div className="flex z-10 flex-col items-start pt-5 pr-20 pb-10 pl-7 text-base text-black whitespace-nowrap bg-white border border-black border-solid max-md:px-5 max-md:max-w-full">
          <h3 className="text-zinc-600">PRODUCTS</h3>
          {categories.map((category, index) => (
            <div key={index} className="mt-8">
              {category}
            </div>
          ))}
        </div>
        <div className="flex flex-col py-5 pr-16 pl-7 bg-white border border-black border-solid max-md:px-5 max-md:max-w-full">
          <h3 className="text-base text-zinc-600">PRICE</h3>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/30356f338c8bfb0a46c2e00886340eea218ca4068b3bce5749b7b0c68700855a?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
            alt="Price range slider"
            className="mt-3.5 ml-6 max-w-full aspect-[10] w-[314px] max-md:ml-2.5"
          />
          <div className="flex gap-3 px-px mt-2">
            <div className="flex flex-col justify-center">
              <input
                type="number"
                className="shrink-0 bg-white border-2 border-solid border-stone-300 h-[29px]"
                aria-label="Minimum price"
              />
            </div>
            <div className="my-auto text-base text-zinc-600">to</div>
            <div className="flex flex-col justify-center">
              <input
                type="number"
                className="shrink-0 bg-white border-2 border-solid border-stone-300 h-[29px]"
                aria-label="Maximum price"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start py-5 pr-20 pl-7 whitespace-nowrap bg-white border border-black border-solid max-md:px-5 max-md:max-w-full">
          <h3 className="text-base text-zinc-600">SIZES</h3>
          <div className="flex gap-3.5 px-px mt-3.5 text-xs text-black">
            {["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"].map((size, index) => (
              <div key={index} className="flex flex-col flex-1 justify-center">
                <div className="justify-center items-center px-1 rounded-full bg-zinc-300 h-[15px] w-[15px]">
                  {size}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
