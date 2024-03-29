import React, { useState , useEffect} from 'react';
import ContactSection from './ContactSection';
import DeliverySection from './DeliverySection';
import BillingAddressSection from './BillingAddressSection';
import SummarySection from './SummarySection';
import DifferentBillingAddress from './DifferentBillingAddress';
import axios from 'axios';
import InputField from './InputField';


function PaymentForm(/*{ products }*/) {

    //static product
    // const products = [
    //     {
    //         id: 1,
    //         name: "712Puma Sweater",
    //         size: "XL",
    //         image: "https://cdn.builder.io/api/v1/image/assets/TEMP/96b9fc1089ec1bec9b688e9d6466d82e10453b39411a53936e27c35e94da6853?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    //     },
    // ];

    // "products": [
    //     {
    //         "id": 11,
    //         "name": "product1",
    //         "price": 123,
    //         "size": "M",
    //         "quantity": 1,
    //         "imageUrl": "https://cdn.builder.io/api/v1/image/assets/TEMP/51c5ed47f82482e0d472498bcc1e725e6f0d4ff314415adfdb16af68e173ef86?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
    //     },
    //     {
    //         "id": 12,
    //         "name": "12",
    //         "price": 1233,
    //         "size": "M",
    //         "quantity": 1,
    //         "imageUrl": "https://cdn.builder.io/api/v1/image/assets/TEMP/703af5f1274bc534816388d4fced379db752bcd821fed8a54308c9a0f8f4fa71?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
    //     }
    // ]
    const [products, setProducts] = useState([]);
    const [showBillingAddress, setShowBillingAddress] = useState(false);
    const [useSameAddress, setUseSameAddress] = useState(false);
    const [deliveryFormData, setDeliveryFormData] = useState(null);

    const handleToggleBillingAddress = (show) => {
        setShowBillingAddress(show);
    };

    const handleToggleSameAddress = (same) => {
        setUseSameAddress(same);
    };

    const [formData, setFormData] = useState({
        shippingAddressData: [
            {
                firstName: "",
                lastName: "",
                address_line1: "",
                address_line2: "",
                city: "",
                postal_code: "",
                country: "",
                phone_number: ""
            }
        ]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            shippingAddressData: [
                {
                    ...prevState.shippingAddressData[0], 
                    [name]: value
                }
            ]
        }));
    };

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


    // http://localhost:5000/user/create-order
    // Sample data 
    // {
    //     "shippingAddressData": [
    //       {
    //         "recipient_name": "John Do2",
    //         "address_line1": "123 Main St",
    //         "address_line2": "Apt 101",
    //         "city": "Cityville",
    //         "postal_code": "12345",
    //         "country": "Countryland",
    //         "phone_number": "123-456-7890"
    //       }
    //     ],
    //     "billingAddressData": [
    //       {
    //         "recipient_name": "Jane Doe",
    //         "address_line1": "456 Oak St",
    //         "city": "Townsville",
    //         "postal_code": "54321",
    //         "country": "Countryland",
    //         "phone_number": "987-654-321123"
    //       }
    //     ]
    //   }

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

export default PaymentForm;
