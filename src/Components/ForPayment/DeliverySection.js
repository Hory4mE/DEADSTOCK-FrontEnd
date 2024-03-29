import React, { useState } from 'react';
import InputField from './InputField';
// import Checkbox from './Checkbox';

const DeliverySection = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address_line1: "",
        address_line2: "",
        city: "",
        postal_code: "",
        country: "",
        phone_number: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

  


    return (
        <div>
          <h2 className="mt-5 text-2xl font-medium tracking-wider text-black max-md:max-w-full">Delivery</h2>

            <InputField label="Country / Region" placeholder="Country / Region" required />
            <InputField label="FirstName" placeholder="First Name" required />
            <InputField label="LastName" placeholder="Last Name" required />
            <InputField label="Company" placeholder="Company (optional)" />
            <InputField label="Address1" placeholder="Address" required />
            <InputField label="Address2" placeholder="Address 2" required />
            <InputField label="City" placeholder="City" required />
            <InputField label="Province" placeholder="Province" required />
            <InputField label="Phone" placeholder="Phone Number" required />

          

            {/* <div className="flex flex-col gap-4 p-4 bg-white rounded-xl border border-black border-solid max-md:flex-wrap">
                <div className="flex items-center">
                    <input type="checkbox" checked={useSameAddress} onChange={handleSameAddressCheckboxChange} />
                    <label className="text-base tracking-wider text-black"> Puma Fast Express</label>
                </div>
            </div>
            <div className="flex flex-col gap-4 p-4 bg-white rounded-xl border border-black border-solid max-md:flex-wrap">
                <div className="flex items-center">
                    <input type="checkbox" checked={!useSameAddress} onChange={handleBillingAddressCheckboxChange} />
                    <label className="text-base tracking-wider text-black">Kerry Xpress</label>
                </div>
            </div> */}

            <h2 className="mt-5 text-2xl font-medium tracking-wider text-black max-md:max-w-full">Payment</h2>
        </div>
    );
}

export default DeliverySection;
