import React from 'react';

const InputField = ({ label }) => {
    // Determine the width based on label length, except for "Address1" and "Address2"
    const inputWidth = label === 'Address1' || label === 'Address2' ? 'w-full' : label.length < 10 ? 'w-1/2' : 'w-full';

    return (
        <div className={`InputBar h-12 justify-center items-center inline-flex ${inputWidth}`}>
            <input
                type="text"
                className="w-full h-full bg-white rounded-2xl border border-black px-3"
                placeholder={label}
            />
        </div>
    );
}

export default InputField;
