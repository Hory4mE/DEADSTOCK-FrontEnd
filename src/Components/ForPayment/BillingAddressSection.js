import React from 'react';
import InputBar from './SmallComponents/InputBar';
import Checkbox from './Checkbox';

const BillingAddressSection = ({ showBillingAddress }) => {
    const inputWidth = (label) => {
        // Check label length to determine input field width
        return label.length < 10 ? 'w-1/2' : 'w-full';
    };

    return (
        <div className={`py-1 mt-3.5 rounded-xl bg-zinc-300 ${showBillingAddress ? '' : 'hidden'}`}>
            <div className="flex flex-wrap">
                <InputBar label="Country/Region" placeholder="Country/Region" className={`mt-3 mr-5 ml-4 ${inputWidth('Country/Region')}`} />
                <InputBar label="FirstName" placeholder="First Name" className={`mt-3 mr-5 ml-4 ${inputWidth('FirstName')}`} />
                <InputBar label="LastName" placeholder="Last Name" className={`mt-3 mr-5 ml-4 ${inputWidth('LastName')}`} />
                <InputBar label="Address" placeholder="Address" className={`mt-3 mr-5 ml-4 ${inputWidth('Address')}`} />
                <InputBar label="City" placeholder="City" className={`mt-3 mr-5 ml-4 ${inputWidth('City')}`} />
                <InputBar label="Province" placeholder="Province" className={`mt-3 mr-5 ml-4 ${inputWidth('Province')}`} />
                <InputBar label="PostalCode" placeholder="Postal Code" className={`mt-3 mr-5 ml-4 ${inputWidth('PostalCode')}`} />
                <InputBar label="Phone" placeholder="Phone Number" className={`mt-3 mr-5 ml-4 ${inputWidth('Phone')}`} />
            </div>
        </div>
    );
}

export default BillingAddressSection;
