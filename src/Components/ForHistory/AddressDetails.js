import axios from "axios";
import React, { useState, useEffect } from "react";
import AddressInput from './AddressInput';

import { config } from "../../apiData/api";


function AccountDetails() {
    const [validate , setValidate] = useState(false);
    const [formData, setFormData] = useState({
        address_line1: '',
        address_line2: '',
        city: '',
        postal_code: '',
        country: ''
    });

    const sanitizeInput = (input) => {
        return input
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#x27;")
            .replace(/\//g, "&#x2F;");
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = localStorage.getItem("access_token");
                const response = await axios.get(
                    `${config.api}/user/get-address`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );

                if (response.data.address) {
                    const firstAddress = response.data.address[0];
                    setFormData({
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
    }, [setFormData]);

    const handleInputChange = (e, field) => {
        const value = e.target.value;
        setFormData(prevState => ({
            ...prevState,
            [field]: sanitizeInput(value)
        }));

        console.log(sanitizeInput(value))
    };

   

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const accessToken = localStorage.getItem("access_token");
            const response = await axios.put(
                `${config.api}/user/save-address`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            );

            if (response.status == 200) {
                console.log("Update address Success");
                setValidate(true);
                console.log("true")
            } else {
                console.log("No data received from the API.");
            }
        } catch (error) {
            console.error("Error save address: ", error);
        }
    };

    return (
      <>
        <div className="flex flex-col self-start px-5" style={{ width: '500px' }}>
            <h2 className="text-lg font-medium text-black">Address details</h2>
            <div className="text-sm text-neutral-500">
                <br />
                <form onSubmit={handleSubmit}>
                    <div>
                        <AddressInput
                            label="address_line1"
                            placeholder="Address Line 1"
                            value={formData.address_line1}
                            onChange={(e) => handleInputChange(e, 'address_line1')}
                        />
                        <AddressInput
                            label="address_line2"
                            placeholder="Address Line 2"
                            value={formData.address_line2}
                            onChange={(e) => handleInputChange(e, 'address_line2')}
                        />
                        <AddressInput
                            label="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={(e) => handleInputChange(e, 'city')}
                        />
                        <AddressInput
                            label="postal_code"
                            placeholder="Postal Code"
                            value={formData.postal_code}
                            onChange={(e) => handleInputChange(e, 'postal_code')}
                        />
                        <AddressInput
                            label="country"
                            placeholder="Country"
                            value={formData.country}
                            onChange={(e) => handleInputChange(e, 'country')}
                        />
                    </div>
                    <div>
                        <button
                            className="justify-center items-center text-white px-16 py-4 bg-black rounded-3xl border border-black border-solid max-md:px-5 hover:bg-gray-500"
                        >
                            Save Address
                        </button>
                    </div>
                </form>
            </div>
            {validate && (
              <center>
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
                  <div className="bg-white p-8 rounded-xl text-center">
                    <h2 className="text-2xl font-bold mb-4">Success!</h2>
                    <p>Save Address Sucess</p>
                    <button
                      className="bg-black text-white font-bold py-2 px-4 rounded mt-4"
                      onClick={() => setValidate(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </center>
            )}
        </div>
      </>
    );
}

export default AccountDetails;
