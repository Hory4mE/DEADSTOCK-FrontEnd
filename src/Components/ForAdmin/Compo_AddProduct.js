import * as React from "react";

function ProductInformation() {
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
          <label htmlFor="productTitle" className="text-xs font-bold text-black max-md:max-w-full">
            Product Title
          </label>
          <div className="flex flex-col justify-center mt-2.5 max-md:max-w-full">
            <input type="text" id="productTitle" className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300 max-md:max-w-full" />
          </div>
          <label htmlFor="productDescription" className="mt-4 text-xs font-bold text-black max-md:max-w-full">
            Product Description
          </label>
          <div className="flex flex-col justify-center mt-2 max-md:max-w-full">
            <textarea id="productDescription" className="shrink-0 bg-white border-2 border-solid border-stone-300 h-[134px] max-md:max-w-full"></textarea>
          </div>
          <label htmlFor="productCategory" className="mt-3.5 text-xs font-bold text-black max-md:max-w-full">
            Product Category
          </label>
          <div className="flex flex-col justify-center mt-1.5 max-md:max-w-full">
            <input type="text" id="productCategory" className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300 max-md:max-w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductGallery() {
  return (
    <div className="flex flex-col px-8 pt-4 pb-8 mt-3.5 text-sm border border-solid border-zinc-200 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between self-start">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/366bd92de4d256fee2b7b91dc466dcbbf41759880e54d8df9a9ef0e60c407468?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&" alt="Product gallery icon" className="shrink-0 aspect-square w-[50px]" />
        <div className="flex flex-col self-start mt-3">
          <h2 className="font-bold text-black">Product Gallery</h2>
          <p className="mt-2.5 text-zinc-500">Add product Photo gallery images.</p>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-12 mt-4 font-bold text-black bg-white border border-black border-dashed max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[222px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bb7afb7e87f11420843e87ff160c0c90b0151e8377b87a03ba2cc208695106a?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&" alt="Upload icon" className="self-center aspect-square w-[50px]" />
          <p className="mt-7">Drop files here or click to upload.</p>
        </div>
      </div>
    </div>
  );
}

function GeneralInformation() {
  return (
    <div className="flex flex-col pt-5 pb-12 mt-9 border border-solid border-zinc-200 max-md:max-w-full">
      <div className="flex gap-5 justify-between self-start ml-9 text-sm max-md:ml-2.5">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc2bd46ee9a6393a3646d5babaa1e16638bf0e41e721d2626a20cd19bcd3a073?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&" alt="General information icon" className="shrink-0 aspect-square w-[50px]" />
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
              <input type="text" id="manufacturerName" className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300" />
            </div>
          </div>
          <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
            <label htmlFor="manufacturerBrand" className="text-sm font-bold text-black">
              Manufacturer Brand
            </label>
            <div className="flex flex-col justify-center mt-3.5">
              <input type="text" id="manufacturerBrand" className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300" />
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-start mt-5 max-md:flex-wrap max-md:mr-2">
          <div className="flex flex-col flex-1">
            <label htmlFor="stocks" className="text-sm font-bold text-black">
              Stocks
            </label>
            <div className="flex flex-col justify-center mt-3.5">
              <input type="number" id="stocks" className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300" />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="price" className="text-sm font-bold text-black">
              Price (฿)
            </label>
            <div className="flex flex-col justify-center mt-3">
              <input type="number" id="price" className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300" />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="discount" className="text-sm font-bold text-black">
              Discount (%)
            </label>
            <div className="flex flex-col justify-center mt-2.5">
              <input type="number" id="discount" className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300" />
            </div>
            <h3 className="mt-5 text-sm font-bold text-black">Sizes</h3>
          </div>
          <div className="flex flex-col flex-1 mt-1">
            <label htmlFor="orders" className="text-sm font-bold text-black">
              Orders
            </label>
            <div className="flex flex-col justify-center mt-2.5">
              <input type="number" id="orders" className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300" />
            </div>
          </div>
        </div>
        <div className="flex gap-5 self-end mt-3.5 mr-14 text-xs text-black whitespace-nowrap max-md:mr-2.5">
          <div className="flex flex-col flex-1 justify-center">
            <div className="justify-center items-center px-1.5 rounded-full bg-zinc-300 h-[22px] w-[22px]">XS</div>
          </div>
          <div className="flex flex-col flex-1 justify-center">
            <div className="justify-center items-center px-2.5 rounded-full bg-zinc-300 h-[22px] w-[22px]">S</div>
          </div>
          <div className="flex flex-col flex-1 justify-center">
            <div className="justify-center items-center rounded-full bg-zinc-300 h-[22px] w-[22px]">M</div>
          </div>
          <div className="flex flex-col flex-1 justify-center">
            <div className="justify-center items-center px-2.5 rounded-full bg-zinc-300 h-[22px] w-[22px]">L</div>
          </div>
          <div className="flex flex-col flex-1 justify-center">
            <div className="justify-center items-center px-1.5 rounded-full bg-zinc-300 h-[22px] w-[22px]">XL</div>
          </div>
          <div className="flex flex-col flex-1 justify-center">
            <div className="justify-center items-center px-1 rounded-full bg-zinc-300 h-[22px] w-[22px]">2XL</div>
          </div>
          <div className="flex flex-col flex-1 justify-center">
            <div className="justify-center items-center px-1 rounded-full bg-zinc-300 h-[22px] w-[22px]">3XL</div>
          </div>
          <div className="flex flex-col flex-1 justify-center">
            <div className="justify-center items-center px-1 rounded-full bg-zinc-300 h-[22px] w-[22px]">4XL</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PublishSection() {
  return (
    <div className="flex flex-col max-md:mt-6 max-md:max-w-full">
      <div className="flex flex-col pt-6 pb-4 border border-solid border-zinc-200 max-md:max-w-full">
        <h2 className="self-start ml-5 text-sm font-bold text-black max-md:ml-2.5">Publish</h2>
        <hr className="shrink-0 mt-6 h-px border border-solid bg-zinc-200 border-zinc-200 max-md:max-w-full" />
        <div className="flex flex-col px-6 mt-5 max-md:px-5 max-md:max-w-full">
          <label htmlFor="status" className="text-sm font-bold text-black">
            Status (Draft / Scheduled / Published)
          </label>
          <div className="flex flex-col justify-center mt-3">
            <input type="text" id="status" className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300" />
          </div>
          <label htmlFor="visibility" className="mt-8 text-sm font-bold text-black">
            Visibillity (Public / Private / Hidden)
          </label>
          <div className="flex flex-col justify-center mt-2.5">
            <input type="text" id="visibility" className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300" />
          </div>
          <label htmlFor="publishDateTime" className="mt-7 text-sm font-bold text-black">
            Publish Date & Time (DD / MM / YY)
          </label>
          <div className="flex flex-col justify-center mt-3">
            <input type="datetime-local" id="publishDateTime" className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300" />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 py-6 mt-5 border border-solid border-zinc-200 max-md:max-w-full">
        <label htmlFor="shortDescription" className="text-sm font-bold text-black">
          Product Short Description
        </label>
        <div className="flex flex-col justify-center mt-5">
          <textarea id="shortDescription" className="shrink-0 bg-white border-2 border-solid border-stone-300 h-[74px]"></textarea>
        </div>
        <p className="self-center mt-2.5 text-base text-zinc-600">Must Enter minimum of a 100 characters</p>
      </div>
    </div>
  );
}

function addProduct() {
  return (
    <div className="flex flex-col px-16 mt-7 w-full max-md:px-5 max-md:max-w-full">
      <h1 className="self-start ml-7 text-sm font-bold text-black max-md:ml-2.5">Create Product</h1>
      <div className="mt-6 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-6 max-md:max-w-full">
              <ProductInformation />
              <ProductGallery />
              <GeneralInformation />
              <div className="flex flex-col justify-center self-center mt-5 max-w-full text-base text-white whitespace-nowrap w-[132px]">
                <button type="submit" className="justify-center px-10 py-4 bg-blue-500 rounded-md border border-solid border-stone-300 max-md:px-5">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
          <aside className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <PublishSection />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default addProduct;