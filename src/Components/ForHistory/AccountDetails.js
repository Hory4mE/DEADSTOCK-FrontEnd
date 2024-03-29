
import axios from "axios";
import React , {useState , useEffect} from "react";


function AccountDetails() {

    // STATIC DATA ACCOUNT

    const [address ,setAddress] = useState([])
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
        
            console.log(response.data);
            if (response.data.address) {
              // Convert the received data into items format
              const addressData = response.data.address.map((address , index) => ({
                id: index + 1,
                address_line : address.address_line1,
                address_line2 : address.address_line2,
                city : address.city,
                postal_code: address.postal_code,
                country: address.country             
              }));
              setAddress(addressData);
              console.log("Fetch all cart Products Success");
            }
            else {
              console.log("No data received from the API.");
            }
          } catch (error) {
            console.error("Error fetching cart products: ", error);
          }
        };
    
        fetchData();
    }, []);

    console.log(address)
    return (
        <div className="flex flex-col self-start px-5">
            <h2 className="text-lg font-medium text-black">Account details</h2>
            <div className="mt-3 text-sm text-neutral-500">
            <br />
                {   
                    address && address.map((data) => (
                        <div key={data.id}>
                            <p>{data.address_line}{data.address_line2}</p>
                            <p>{data.city}</p>
                            <p>{data.postal_code}</p>
                            <p>{data.country}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default AccountDetails;