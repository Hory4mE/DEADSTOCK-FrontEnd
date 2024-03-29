import React, { useState } from 'react';
import InputBar from './SmallComponents/InputBar';
import Checkbox from './SmallComponents/Checkbox';


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

const ContactSection = () => {
    return (
        <div className="flex flex-col self-stretch pt-2.5 mt-3 max-md:max-w-full">
            <h2 className="text-2xl font-medium tracking-wider text-black max-md:max-w-full">Contact</h2>
            <InputBar label="Email" placeholder="Email" />
            <Checkbox label="Email me with news and offers" className="mt-4 ml-3.5" />
        </div>
    );
}

const DeliverySection = () => {
    const [useSameAddress, setUseSameAddress] = useState(true);

    const handleBillingAddressCheckboxChange = () => {
        setUseSameAddress(false);
    };

    const handleSameAddressCheckboxChange = () => {
        setUseSameAddress(true);
    };

    return (
        <div>
            <h2 className="mt-5 text-2xl font-medium tracking-wider text-black max-md:max-w-full">Delivery</h2>
            <InputBar label="Country / Region" placeholder="Country / Region" required />
            <InputBar label="FirstName" placeholder="First Name" required />
            <InputBar label="LastName" placeholder="Last Name" required />
            <InputBar label="Company" placeholder="Company (optional)" />
            <InputBar label="Address1" placeholder="Address" required />
            <InputBar label="Address2" placeholder="Address 2" required />
            <InputBar label="City" placeholder="City" required />
            <InputBar label="Province" placeholder="Province" required />
            <InputBar label="Phone" placeholder="Phone Number" required />

            <div className="flex flex-col gap-4 p-4 bg-white rounded-xl border border-black border-solid max-md:flex-wrap">
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
            </div>

            <h2 className="mt-5 text-2xl font-medium tracking-wider text-black max-md:max-w-full">Payment</h2>
        </div>
    );
}

function PaymentForm(/*{ products } ตรงนี้เป็น dynamic*/) {

    //static product
    const products = [
        {
            id: 1,
            name: "712Puma Sweater",
            size: "XL",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/96b9fc1089ec1bec9b688e9d6466d82e10453b39411a53936e27c35e94da6853?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
        },
    ];


    const [showBillingAddress, setShowBillingAddress] = useState(false);
    const [useSameAddress, setUseSameAddress] = useState(false);

    const handleToggleBillingAddress = (show) => {
        setShowBillingAddress(show);
    };

    const handleToggleSameAddress = (same) => {
        setUseSameAddress(same);
    };

    return (
        <div className="max-w-screen-lg mx-auto px-10 mt-36 max-md:flex-wrap max-md:mt-10">
            <div className="flex justify-between items-start" style={{ width: '100%' }}>
                <div className="flex-3 mr-5">
                    <ContactSection />
                    <DeliverySection />
                    <DifferentBillingAddress
                        onToggleBillingAddress={handleToggleBillingAddress}
                        onToggleSameAddress={handleToggleSameAddress}
                    />
                    <BillingAddressSection
                        showBillingAddress={showBillingAddress && !useSameAddress}
                    />
                </div>
                <div className="flex-1">
                    <SummarySection products={products} />
                </div>
            </div>
        </div>
    );
}

const SummarySection = ({ products }) => {
    return (
        <div>
            <div style={{ position: 'relative' }}>
                <div className="shrink-0 mt-3 absolute top-0 border border-solid bg-black bg-opacity-30 border-black border-opacity-30 h-[859px]" style={{ left: '1rem' }} />
                <div className="flex flex-col max-md:max-w-full" style={{ marginLeft: '2rem' }}>
                    {products.map((product) => (
                        <h1 key={product.id} product={product} />
                    ))}
                    <form className="flex flex-col max-md:max-w-full">
                        <div className="flex flex-col max-md:flex-row gap-5 items-start mt-5">
                            <label htmlFor="discountCode" className="sr-only">
                                Discount Code
                            </label>
                            <input
                                type="text"
                                id="discountCode"
                                placeholder="Discount Code"
                                aria-label="Discount Code"
                                className="flex-1 px-3.5 py-4 bg-white rounded-3xl border border-black border-solid max-md:pr-5"
                            />
                            <button type="submit" className="text-xl bg-zinc-300 px-7 py-4 rounded-xl max-md:px-5">
                                Apply
                            </button>
                        </div>
                    </form>
                    <div className="flex justify-between gap-5 mt-12 max-md:max-w-full">
                        <div className="text-lg">Subtotal</div>
                        <div className="text-xl">1980.00 $</div>
                    </div>
                    <div className="flex justify-between gap-5 mt-6 max-md:max-w-full">
                        <div className="text-lg">Shipping</div>
                        <div className="text-xl">120.00 $</div>
                    </div>
                    <div className="flex justify-between gap-5 mt-5 font-medium max-md:max-w-full">
                        <div className="text-lg">Total</div>
                        <div className="text-xl">9240.00 $</div>
                    </div>
                    <button className="justify-center items-center px-16 py-4 mt-20 text-base tracking-wider text-white bg-black rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        Complete Order
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PaymentForm;
