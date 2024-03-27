import ContactSection from './ContactSection';
import DeliverySection from './DeliverySection';
import BillingAddressSection from './BillingAddressSection';
import SummarySection from './SummarySection';
import DifferentBillingAddress from './DifferentBillingAddress';

function PaymentForm({ products }) {
    return (
        <div className="flex gap-5 justify-between items-start self-center px-5 mt-36 max-md:flex-wrap max-md:mt-10">
            <ContactSection />
            <DeliverySection />
            <BillingAddressSection />
            <DifferentBillingAddress />
            <SummarySection products={products} />
        </div>
    );
}

export default PaymentForm;
