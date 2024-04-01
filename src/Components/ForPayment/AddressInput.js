// AddressInput.js
import React from 'react';
import InputBar from './SmallComponents/InputBar';

const AddressInput = ({ label }) => {
    return (
        <div className="w-96 h-12 justify-center items-center inline-flex">
            <InputBar label={label} />
        </div>
    );
}

export default AddressInput;
