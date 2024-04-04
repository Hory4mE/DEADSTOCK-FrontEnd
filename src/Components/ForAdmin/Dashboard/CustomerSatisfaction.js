import * as React from "react";

function CustomerSatisfaction({ monthly , categories}) {
  return (
    <div>
      <div className="flex justify-center gap-5 mt-4 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center text-xl font-bold text-black max-md:mt-2.5 max-md:max-w-full">
            <div className="flex flex-col pt-px pb-5 bg-white border border-solid border-stone-300 border-opacity-50 max-md:max-w-full">
              <div className="justify-center items-start px-12 py-8 bg-slate-100 max-md:px-5 max-md:max-w-full">
                Customer Satisfaction
              </div>
              <div className="flex justify-center items-center self-center px-16 py-8 mt-6 max-w-full bg-white border border-solid border-stone-300 border-opacity-50 w-[832px] max-md:px-5">
                <div className="flex gap-5 justify-between items-center max-w-full w-[572px] max-md:flex-wrap">
                  <div className="flex flex-col self-stretch my-auto">
                    {monthly.length > 0 && monthly[0] && (
                        <div className="self-center">${monthly[0].total_earning}</div>
                    )}
                    <div className="mt-2.5">This Month</div>
                  </div>
                  <div className="shrink-0 self-stretch w-px border border-solid bg-stone-300 bg-opacity-50 border-stone-300 border-opacity-50 h-[170px]" />
                  <div className="flex flex-col self-stretch my-auto">
                    {monthly.length > 0 && monthly[1] && (
                        <div className="self-center">${monthly[1].total_earning}</div>
                    )}
                    <div className="mt-3">Last Month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center text-xl font-bold text-black max-md:mt-2.5">
            <div className="flex flex-col pb-5 bg-white border border-solid border-stone-300 border-opacity-50">
              <div className="flex flex-col px-9 pt-8 pb-0.5 bg-slate-100 max-md:px-5">
                <div>Top Categories</div>
                <div className="shrink-0 mt-6 h-px border border-solid bg-stone-300 bg-opacity-50 border-stone-300 border-opacity-50" />
              </div>
              <div className="flex flex-col px-5 mt-5 whitespace-nowrap max-md:px-5">
                {categories && categories.map((data) => (
                    <div key={data.type_name}>  
                        <div className="ml-7 max-md:ml-2.5">{data.type_name}</div>
                    </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CustomerSatisfaction;

