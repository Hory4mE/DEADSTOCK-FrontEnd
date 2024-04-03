import React from 'react';

const InputField = ({ label, onChange, value }) => {
    // Determine the width based on label length, except for "Address1" and "Address2"
    const inputWidth = label === 'Address1' || label === 'Address2' ? 'w-full' : label.length < 10 ? 'w-1/2' : 'w-full';

    return (
        <div className={`InputBar h-12 justify-center items-center inline-flex mt-4 ${inputWidth}`}>
            <input
                type="text"
                className="w-full h-full bg-white rounded-2xl border border-black px-3"
                placeholder={label}
                defaultValue={value}
                onChange={onChange} 
            />
        </div>
    );
}

export default InputField;