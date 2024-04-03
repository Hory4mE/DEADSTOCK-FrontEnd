import axios from "axios";
import React , {useState , useEffect} from "react";
import { useNavigate } from 'react-router-dom';


function Billing() {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get('id');
  const [orderDetails , setOrderDetails] = useState({
    confirmationNumber: '',
    customerName: '',
    contactEmail: '',
    shippingAddress: '',
    paymentMethod: 'Card',
    billingAddress: '',
    shippingMethod: 'Puma Express',
  });

  const [orderItem , setOrderItem] = useState({
    name: '',
    size: '',
    price: '',
    image: '',
  })
  
 

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const accessToken = localStorage.getItem("access_token");
  //       console.log(orderId);
  //       const response = await axios.get(
  //         `http://localhost:5000/user/get-order/${orderId}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         }
  //       );
  
  //       console.log(response.data);
  //       if (response.data) {
  //         setOrderDetails({
  //           confirmationNumber: response.data.detail[0].order_id,
  //           customerName: response.data.detail[0].first_name + ' ' + response.data.detail[0].last_name,
  //           contactEmail: response.data.detail[0].email,
  //           shippingAddress: response.data.shipping[0].address_line1,
  //           paymentMethod: 'Card',
  //           billingAddress: response.data.billing[0].address_line1,
  //           shippingMethod: 'Puma Express',
  //         });

  //         setOrderItem({
  //           name: response.data.detail[0].product_name,
  //           size: response.data.detail[0].size,
  //           price: response.data.detail[0].subtotal_price,
  //           image: response.data.detail[0].image_url,
  //           total: response.data.detail[0].total_price,
  //         })

  //         console.log("Fetch all cart Products Success");
  //       } else {
  //         console.log("No data received from the API.");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching cart products: ", error);
  //     }
  //   };
  
  //   fetchData();
  // }, [orderId]);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");
        console.log(orderId);
        const response = await axios.get(
          `http://localhost:5000/user/get-order/${orderId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
  
        console.log(response.data);
        if (response.data) {
          var firstName = response.data.detail[0].first_name || '';
          var lastName = response.data.detail[0].last_name || '';     
          var fullName = firstName + ' ' + lastName;

          setOrderDetails({
            confirmationNumber: response.data.detail[0].order_id,
            customerName: fullName,
            contactEmail: response.data.detail[0].email,
            shippingAddress: response.data.shipping[0].address_line1,
            paymentMethod: 'Card',
            billingAddress: response.data.billing[0].address_line1,
            shippingMethod: 'Puma Express',
          });

          console.log("Fetch all cart Products Success");
        } else {
          console.log("No data received from the API.");
        }
      } catch (error) {
        console.error("Error fetching cart products: ", error);
      }
    };
  
    fetchData();
  }, [orderId]);

  const subtotal = parseFloat(orderItem.total);
  const vat = subtotal * 0.07;
  const totalPriceWithVAT = subtotal + vat;


  return (
    <div className="pl-20 bg-white max-md:pl-5">
      {console.log(orderDetails)}
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
          <header className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 self-start mt-16 text-lg font-medium text-neutral-500 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc66e173782cb7721c6fd69c4e970b0a714c3875f49d42ba0b1ea2b585893b1a?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
                alt=""
                className="shrink-0 w-10 aspect-square"
              />
              <div className="flex-auto my-auto">
                Confirmation #{orderDetails.confirmationNumber}
              </div>
            </div>
            <h2 className="self-start mt-2 ml-16 text-4xl font-medium text-neutral-500 max-md:ml-2.5">
              THANK YOU {orderDetails.customerName}
            </h2>
          </header>
          <section className="flex flex-col items-start px-16 pt-12 pb-20 mt-9 bg-white rounded-3xl border border-solid border-zinc-500 max-md:px-5 max-md:max-w-full">
            <div className="max-w-full w-[451px]">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-lg font-medium text-neutral-500 max-md:mt-10">
                    <h3 className="text-2xl">Order details</h3>
                    <h4 className="mt-9 text-black">Contact information</h4>
                    <div className="mt-8 text-sm">
                      {orderDetails.contactEmail}
                    </div>
                    <h4 className="mt-14 text-black max-md:mt-10">
                      Shipping Address
                    </h4>
                    <address className="mt-5 text-sm">
                      {orderDetails.shippingAddress}
                    </address>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow mt-14 text-lg font-medium text-black max-md:mt-10">
                    <h4>Payment method</h4>
                    <div className="mt-7 text-sm text-neutral-500">
                      {orderDetails.shippingMethod}
                    </div>
                    <h4 className="mt-14 max-md:mt-10">Billing Address</h4>
                    <address className="mt-5 text-sm text-neutral-500">
                      {orderDetails.billingAddress}
                    </address>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="mt-24 text-lg font-medium text-black max-md:mt-10 max-md:max-w-full">
              Shipping method
            </h4>
            <div className="mt-6 text-sm font-medium text-neutral-500 max-md:max-w-full">
              {orderDetails.shippingMethod}
            </div>
          </section>
          <button onClick={()=> navigate('/')} className="justify-center items-center self-center px-16 py-4 mt-14 max-w-full text-base tracking-wider text-white bg-black rounded-3xl border border-black border-solid w-[379px] max-md:px-5 max-md:mt-10 hover:bg-gray-500">
            Continue Shopping
          </button>
          <hr className="shrink-0 mt-14 h-px border border-solid bg-zinc-500 border-zinc-500 max-md:mt-10 max-md:max-w-full" />
        </div>
        <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
          <section className="flex flex-col grow px-14 py-20 w-full bg-stone-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">

          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[81%] max-md:ml-0 max-md:w-full">
                    <div className="flex grow gap-1 text-lg font-medium text-black max-md:mt-10">
                        <img
                            loading="lazy"
                            src={orderItem.image}
                            alt={orderItem.name}
                            className="shrink-0 w-20 aspect-[0.77]"
                        />
                        <div className="flex flex-col justify-center">
                            <span>{orderItem.name}</span>
                            <span>{orderItem.size}</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="shrink-0 mt-8 max-w-full h-px border border-solid bg-zinc-500 border-zinc-500 w-[415px] max-md:mr-1.5" />
            <div className="flex gap-5 mt-10 text-xl text-black max-md:pr-5">
              <div className="flex flex-col flex-1">
                <div>Subtotal </div>
                <div className="mt-10">Shipping</div>
                <div className="mt-10 max-md:mt-10">VAT 7 %</div>
              </div>
              <div className="flex flex-col flex-1">
                <div>{orderItem.price} $</div>
                <div className="mt-9">0.00 $</div>
                <div className="mt-10">{vat} $</div>
              </div>
            </div>
            <hr className="shrink-0 mt-9 max-w-full h-px border border-solid bg-zinc-500 border-zinc-500 w-[415px] max-md:mr-1.5" />
            <div className="flex gap-5 mt-14 text-black max-md:mt-10">
              <div className="text-2xl">Total</div>
              <div className="flex-auto text-3xl font-medium">
                {totalPriceWithVAT.toFixed(2)} $
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Billing;