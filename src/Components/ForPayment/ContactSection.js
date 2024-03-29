// ContactSection.js
import React from 'react';
import InputField from './InputField';
import Checkbox from './Checkbox';

const ContactSection = () => {
    return (
        <div className="flex flex-col self-stretch pt-2.5 mt-3 max-md:max-w-full">
            <h2 className="text-2xl font-medium tracking-wider text-black max-md:max-w-full">Contact</h2>
            <InputField label="Email" placeholder="Email" />
            <Checkbox label="Email me with news and offers" className="mt-4 ml-3.5" />
        </div>
    );
}

export default ContactSection;
