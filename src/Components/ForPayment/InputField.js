// InputField.js
import React from 'react';

const InputField = ({ label }) => {
    return (
        <div className="InputBar w-96 h-12 justify-center items-center inline-flex">
            <input
                type="text"
                className="w-full h-full bg-white rounded-2xl border border-black px-3"
                placeholder={label}
            />
        </div>
    );
}

export default InputField;
