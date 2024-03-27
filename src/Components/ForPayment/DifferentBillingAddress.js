// DifferentBillingAddress.js
import React, { useState } from 'react';
import InputBar from './InputField';

const DifferentBillingAddress = ({ onToggleBillingAddress, onToggleSameAddress }) => {
    const [useSameAddress, setUseSameAddress] = useState(true);

    const handleBillingAddressCheckboxChange = () => {
        setUseSameAddress(false);
        onToggleBillingAddress(true);
        onToggleSameAddress(false);
    };

    const handleSameAddressCheckboxChange = () => {
        setUseSameAddress(true);
        onToggleBillingAddress(false);
        onToggleSameAddress(true);
    };

    return (
        <div>
            <div className="flex flex-col gap-4 p-4 bg-white rounded-xl border border-black border-solid max-md:flex-wrap">
                <div className="flex items-center">
                    <input type="checkbox" checked={useSameAddress} onChange={handleSameAddressCheckboxChange} />
                    <label className="text-base tracking-wider text-black">Use the same address as delivery address</label>
                </div>
            </div>
            <div className="flex flex-col gap-4 p-4 bg-white rounded-xl border border-black border-solid max-md:flex-wrap ">
                <div className="flex items-center">
                    <input type="checkbox" checked={!useSameAddress} onChange={handleBillingAddressCheckboxChange} />
                    <label className="text-base tracking-wider text-black">Use a different billing address</label>
                </div>
            </div>
        </div>
    );
}

export default DifferentBillingAddress;
