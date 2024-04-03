import React from "react";


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

export default PublishSection;
