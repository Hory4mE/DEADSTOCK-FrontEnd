import React, { useState } from 'react';
import ContactSection from './ContactSection';
import DeliverySection from './DeliverySection';
import BillingAddressSection from './BillingAddressSection';
import SummarySection from './SummarySection';
import DifferentBillingAddress from './DifferentBillingAddress';

function PaymentForm({ products }) {
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
            <div className="flex justify-between items-start">
                <div className="flex-1 mr-5">
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
                <SummarySection products={products} />
            </div>
        </div>
    );
}

export default PaymentForm;
