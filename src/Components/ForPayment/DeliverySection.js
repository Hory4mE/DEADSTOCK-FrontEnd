// DeliverySection.js
import React from 'react';
import InputField from './InputField';

const DeliverySection = () => {
    return (
        <div>
            <h2 className="mt-5 text-2xl font-medium tracking-wider text-black max-md:max-w-full">Delivery</h2>
            <InputField label="Country / Region" placeholder="Country / Region" required/>
            <InputField label="FirstName" placeholder="First Name" required/>
            <InputField label="LastName" placeholder="Last Name" required/>
            <InputField label="Company" placeholder="Company (optional)" />
            <InputField label="Address1" placeholder="Address" required/>
            <InputField label="Address2" placeholder="Address 2" required/>
            <InputField label="City" placeholder="City" required/>
            <InputField label="Province" placeholder="Province" required/>
            <InputField label="Phone" placeholder="Phone Number" required/>
        </div>
    );
}

export default DeliverySection;
