// BillingAddressSection.js
import React from 'react';
import InputBar from './InputField';
import Checkbox from './Checkbox';

const BillingAddressSection = ({ showBillingAddress }) => {
    return (
        <div className={`py-1 mt-3.5 rounded-xl bg-zinc-300 max-md:max-w-full ${showBillingAddress ? '' : 'hidden'}`}>
            <InputBar label="Country/Region" placeholder="Country/Region" className="mt-3 mr-5 ml-4 w-[413px]" />
            {/* Add more billing address-related input fields */}
        </div>
    );
}

export default BillingAddressSection;
