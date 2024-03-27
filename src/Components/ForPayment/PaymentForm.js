import React, { useState } from 'react';
import ContactSection from './ContactSection';
import DeliverySection from './DeliverySection';
import BillingAddressSection from './BillingAddressSection';
import SummarySection from './SummarySection';
import DifferentBillingAddress from './DifferentBillingAddress';

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
            <div className="flex justify-between items-start" style={{ width: '60%' }}>
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

export default PaymentForm;
