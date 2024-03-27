// PaymentInput.js
import React from 'react';

function PaymentInput({ label, placeholder, className }) {
    return (
        <div className={`justify-center items-start px-3.5 py-5 text-base tracking-wider bg-white rounded-3xl border border-black border-solid text-stone-500 max-md:pr-5 max-md:max-w-full ${className}`}>
            <label htmlFor={label} className="sr-only">
                {label}
            </label>
            <input type="text" id={label} placeholder={placeholder} aria-label={placeholder} className="w-full bg-transparent outline-none" />
        </div>
    );
}

export default PaymentInput;
