import React, { useState , useEffect } from 'react';
import InputField from './SmallComponents/InputField';
import Checkbox from './SmallComponents/Checkbox';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const DeliverySection = () => {
    const stripePromise = loadStripe('pk_test_51OyzLYJHd0FBaagmdsd179kXymr9MT5Dy9zyDFkJfqW3YXf9nPDWylE9la6qcUayOqImnI5We35gRz5e8zVaEDvI00tjbl3NBn');
    // useState สำหรับข้อมูลการจัดส่ง (shippingData) และข้อมูลที่อยู่ในการเรียกใช้งาน (billingData)
    const [shippingData, setShippingData] = useState({
        country: '',
        recipient_name: '',
        address_line1: '',
        address_line2: '',
        city: '',
        postal_code: '',
        phone_number: ''
    });


    const [billingData, setBillingData] = useState({
        country: '',
        recipient_name: '',
        address_line1: '',
        address_line2: '',
        city: '',
        postal_code: '',
        phone_number: ''
    });



    
    const handleCompleteOrder = async () => {
        console.log({
            shippingAddressData: [shippingData],
            billingAddressData: [billingData]
        })
        try {
            const access_token = localStorage.getItem('access_token');
            const response = await axios.post('http://localhost:5000/user/create-order', {
                shippingAddressData: [shippingData],
                billingAddressData: [billingData]
            } ,
            {
                headers: {
                  Authorization: `Bearer ${access_token}`,
                },
            });
            const session = response.data;
            console.log(session);
            const stripe = await stripePromise;
            stripe.redirectToCheckout({
                sessionId: session.id,
            });

            console.log('Order completed:', response.data);
        } catch (error) {
            console.error('Error completing order:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = localStorage.getItem("access_token");
                const response = await axios.get(
                    `http://localhost:5000/user/get-address`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );

                if (response.data.address) {
                    const firstAddress = response.data.address[0];
                    setShippingData({
                        address_line1: firstAddress.address_line1 || '',
                        address_line2: firstAddress.address_line2 || '',
                        city: firstAddress.city || '',
                        postal_code: firstAddress.postal_code || '',
                        country: firstAddress.country || ''
                    });
                } else {
                    console.log("No data received from the API.");
                }
            } catch (error) {
                console.error("Error fetching cart products: ", error);
            }
        };

        fetchData();
    }, [setShippingData]);

    useEffect(() => {
        const loadStripeJs = async () => {
          await stripePromise;
        };
        loadStripeJs();
    }, []);
  
    const handleInputChange = (e, field) => {
        const value = e.target.value;
            setShippingData(prevData => ({
                ...prevData,
                [field]: value
            }));
        console.log('Check data shipping',shippingData);
    };


    const handleBillingChange = (e, field) => {
        const value = e.target.value;
            // For other fields, update normally
            setBillingData(prevData => ({
                ...prevData,
                [field]: value
            }));
        console.log('Check data billing 1', billingData);
    };

  
    return (
        <>
        <div className="flex-3 mr-5">
            <h2 className="mt-5 text-2xl font-medium tracking-wider text-black max-md:max-w-full">Delivery</h2>
            <InputField label="Recipient Name" value={shippingData.recipient_name} onChange={(e) => handleInputChange(e, 'recipient_name')} />
            <InputField label="Address Line 1" value={shippingData.address_line1} onChange={(e) => handleInputChange(e, 'address_line1')} />
            <InputField label="Address Line 2" value={shippingData.address_line2} onChange={(e) => handleInputChange(e, 'address_line2')} />
            <InputField label="City" value={shippingData.city} onChange={(e) => handleInputChange(e, 'city')} />
            <InputField label="Postal Code" value={shippingData.postal_code} onChange={(e) => handleInputChange(e, 'postal_code')} />
            <InputField label="Country" value={shippingData.country} onChange={(e) => handleInputChange(e, 'country')} />
            <InputField label="Phone Number" value={shippingData.phone_number} onChange={(e) => handleInputChange(e, 'phone_number')} />


            <h2 className="mt-5 text-2xl font-medium tracking-wider text-black max-md:max-w-full">Billing</h2>
            <InputField label="Recipient Name" onChange={(e) => handleBillingChange(e, 'recipient_name')} />
            <InputField label="Address Line 1" onChange={(e) => handleBillingChange(e, 'address_line1')} />
            <InputField label="Address Line 2" onChange={(e) => handleBillingChange(e, 'address_line2')} />
            <InputField label="City" onChange={(e) => handleBillingChange(e, 'city')} />
            <InputField label="Postal Code" onChange={(e) => handleBillingChange(e, 'postal_code')} />
            <InputField label="Country" onChange={(e) => handleBillingChange(e, 'country')} />
            <InputField label="Phone Number" onChange={(e) => handleBillingChange(e, 'phone_number')} />
        </div>
        <div className="flex-1">
            <SummarySection />
            <button onClick={handleCompleteOrder} className="justify-center items-center px-16 py-4 mt-20 ms-8 text-base tracking-wider text-white bg-black rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
                Complete Order
            </button>
        </div>
        </>

       
    );
}

const ProductItem = ({ product }) => {
    return (
        <div className="flex py-4 border-b border-gray-200">
            <img src={product.imageUrl} alt={product.name} className="w-24 h-24 mr-4 rounded-lg object-cover" />
            <div className="flex flex-col justify-between flex-1">
                <div>
                    <h2 className="text-gray-800 font-semibold">{product.name}</h2>
                    <p className="text-gray-600 text-sm">{product.price} $</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-700 font-bold">Size {product.size}</span>
                </div>
            </div>
        </div>
    );0
};


const SummarySection = () => {
   
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            const accessToken = localStorage.getItem('access_token');
    
            try {
                const response = await axios.get(`http://localhost:5000/user/cart`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                console.log(response.data.products)
                if (response.data) {
                    setProducts(response.data.products);
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, []);
    return (
        <div>
            <div style={{ position: 'relative' }}>
                <div className="shrink-0 mt-3 absolute top-0 border border-solid bg-black bg-opacity-30 border-black border-opacity-30 h-[980px]" style={{ left: '1rem' }} />
                <div className="flex flex-col max-md:max-w-full" style={{ marginLeft: '2rem' }}>
                    {products.map((product) => (
                        <ProductItem key={product.id} product={product} />
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
                    {products.map((product) => (
                        <div key={product.id}>
                            <div className="flex justify-between gap-5 mt-12 max-md:max-w-full">
                                <div className="text-lg">Subtotal</div>
                                <div className="text-xl">{product.price.toFixed(2)} $</div>
                            </div>
                            <div className="flex justify-between gap-5 mt-6 max-md:max-w-full">
                                <div className="text-lg">Shipping</div>
                                <div className="text-xl">0.00 $</div>
                            </div>
                            <div className="flex justify-between gap-5 mt-5 font-medium max-md:max-w-full">
                                <div className="text-lg">Total</div>
                                <div className="text-xl">{product.price.toFixed(2)} $</div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function PaymentForm() {
  
    const [products, setProducts] = useState([]);



    useEffect(() => {
        const fetchProduct = async () => {
            const accessToken = localStorage.getItem('access_token');
    
            try {
                const response = await axios.get(`http://localhost:5000/user/cart`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                console.log(response.data.products)
                if (response.data) {
                    setProducts(response.data.products);
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, []);


    return (
        <div className="max-w-screen-lg mx-auto px-10 max-md:flex-wrap max-md:mt-15" style={{ marginTop:'55px' }}>
            <div className="flex justify-between items-start" style={{ width: '100%' }}>
                <DeliverySection />            
            </div>
        </div>
    );
}



export default PaymentForm;