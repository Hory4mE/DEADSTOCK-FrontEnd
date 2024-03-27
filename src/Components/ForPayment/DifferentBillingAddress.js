// DifferentBillingAddress.js
import React from 'react';
import InputBar from './InputField';

const DifferentBillingAddress = () => {
    return (
        <div className="flex gap-4 p-4 bg-white rounded-xl border border-black border-solid max-md:flex-wrap">
            <div className="flex flex-col justify-center items-center px-0.5 bg-white rounded-xl border border-black border-solid h-[15px] w-[15px]">
                <div className="shrink-0 bg-black rounded-xl border border-black border-solid h-[11px] w-[11px]" />
            </div>
            <div className="flex-auto text-base tracking-wider text-black">Use a different billing address</div>
        </div>
    );
}

export default DifferentBillingAddress;
