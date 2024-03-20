import * as React from "react";

function CartZone() {

  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-col pb-20 w-full text-sm tracking-wider max-md:max-w-full">
      </div>
      <main className="flex flex-col self-center px-5 mt-4 w-full max-w-[1181px] max-md:max-w-full">
        <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col">
            <h1 className="text-4xl text-black">Your cart</h1>
            <div className="mt-16 text-lg text-black text-opacity-60 max-md:mt-10">
              PRODUCT
            </div>
          </div>
          <div className="flex-auto self-start mt-1.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
                <div className="mt-24 text-lg text-black text-opacity-60 max-md:mt-10">
                  QUANTITY
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10">
                  <a
                    href="#"
                    className="justify-center text-xl text-black underline"
                  >
                    Continue shopping
                  </a>
                  <div className="self-end mt-16 text-lg text-black text-opacity-60 max-md:mt-10 max-md:mr-2.5">
                    TOTAL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="shrink-0 mt-3.5 h-px border border-solid bg-black bg-opacity-30 border-black border-opacity-30 max-md:max-w-full" />
        <div className="flex gap-5 justify-between items-center self-center mt-9 w-full text-xl text-black max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between self-stretch">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/57d56057f290030860acaa3f53b87ed2e7fca5f415a0f12c753d736d5d006a2f?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
              alt="1980s ADIDAS Jacket (L)"
              className="shrink-0 max-w-full aspect-[0.83] w-[108px]"
            />
            <div className="flex flex-col self-start mt-1.5">
              <div>1980s ADIDAS Jacket (L)</div>
              <div className="mt-4">1980.00 $</div>
            </div>
          </div>
          <div className="flex gap-2 self-stretch my-auto whitespace-nowrap">
            <div className="justify-center items-start px-12 py-5 bg-white border border-solid border-black border-opacity-30 rounded-[30px] max-md:px-5">
              1
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9f6ee43231a571b35f4c7e108b332ddf15bf79c386b6cde035bdefee2234cdd?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
              alt=""
              className="shrink-0 my-auto w-6 aspect-[0.57]"
            />
          </div>
          <div className="self-stretch my-auto">1980.00 $</div>
        </div>
        <hr className="shrink-0 mt-16 h-px border border-solid bg-black bg-opacity-30 border-black border-opacity-30 max-md:mt-10 max-md:max-w-full" />
        <div className="self-end mt-16 text-xl text-black max-md:mt-10">
          Subtotal 1,746 $฿
        </div>
        <div className="flex flex-col justify-center self-end mt-4 max-w-full text-base tracking-wider text-white w-[379px]">
          <button className="justify-center items-center px-16 py-4 bg-black rounded-3xl border border-black border-solid max-md:px-5">
            Check out
          </button>
        </div>
      </main>
    </div>
  );
}

export default CartZone;
