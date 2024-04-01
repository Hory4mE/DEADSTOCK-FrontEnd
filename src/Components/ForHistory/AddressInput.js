// PaymentInput.js
import React from 'react';

function AddressInput({ label, placeholder, className, onChange , value}) {
    return (
        <div className={`justify-center items-start px-3.5 py-3 mb-5 max-w-[400px] text-base tracking-wider bg-white rounded-3xl border border-black border-solid text-stone-500 max-md:pr-5 max-md:max-w-full ${className}`}>
            <label htmlFor={label} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input type="text" 
            id={label} 
            placeholder={placeholder} 
            aria-label={placeholder} 
            defaultValue={value}
            className="w-full bg-transparent outline-none" 
            onChange={onChange} 
            />
        </div>
    );
}

export default AddressInput;
 