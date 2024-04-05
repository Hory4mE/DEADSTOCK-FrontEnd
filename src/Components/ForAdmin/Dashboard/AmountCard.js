import * as React from "react";

function AmountCard({ total }) {
  return (
    <div className="px-5 mt-8">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center text-black max-md:mt-6">
            <div className="flex flex-col justify-center px-4 py-6 w-full bg-white rounded-xl border border-solid border-stone-300 border-opacity-50">
              <div className="flex gap-5 justify-between items-start pr-px pb-7 pl-3 bg-white border-indigo-100 border-solid border-l-[5px]">
                <div className="flex flex-col">
                  <div className="text-sm">TOTAL EARNINGS</div>
                  <div className="mt-5 text-2xl font-bold">${total.total_earning}</div>
                </div>
                <div className="shrink-0 w-10 h-10 bg-indigo-100 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center text-black whitespace-nowrap max-md:mt-6">
            <div className="flex flex-col justify-center px-4 py-6 w-full bg-white rounded-xl border border-solid border-stone-300 border-opacity-50">
              <div className="flex gap-5 justify-between items-start pr-px pb-7 pl-3 bg-white border-blue-100 border-solid border-l-[5px]">
                <div className="flex flex-col">
                  <div className="text-sm">ORDERS</div>
                  <div className="mt-5 text-2xl font-bold">{total.total_orders}</div>
                </div>
                <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center text-black whitespace-nowrap max-md:mt-6">
            <div className="flex flex-col justify-center px-4 py-6 w-full bg-white rounded-xl border border-solid border-stone-300 border-opacity-50">
              <div className="flex gap-5 justify-between items-start pr-px pb-7 pl-3 bg-white border-orange-100 border-solid border-l-[5px]">
                <div className="flex flex-col">
                  <div className="text-sm">CUSTOMERS</div>
                  <div className="mt-5 text-2xl font-bold">{total.total_customers}</div>
                </div>
                <div className="shrink-0 w-10 h-10 bg-orange-100 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center text-black whitespace-nowrap max-md:mt-6">
            <div className="flex flex-col justify-center px-4 py-6 w-full bg-white rounded-xl border border-solid border-stone-300 border-opacity-50">
              <div className="flex gap-5 justify-between items-start pr-px pb-7 pl-3 bg-white border-blue-100 border-solid border-l-[5px]">
                <div className="flex flex-col">
                  <div className="text-sm">PRODUCTS</div>
                  <div className="mt-5 text-2xl font-bold">{total.total_products}</div>
                </div>
                <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AmountCard;
