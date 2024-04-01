import axios from "axios";
import React , {useState , useEffect} from "react";


function Billing() {
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get('id');
  // const [orderDetails , setOrderDetails] = useState([]);
  // const [orderItem , setOrderItem] = useState([]);
  const orderDetails = {
    confirmationNumber: "REC1234",
    customerName: "PHOOMRAPEE",
    contactEmail: "64050191@kmitl.ac.th",
    shippingAddress: `เเทนนี้ เเทนนนั้น 456 Thailand 149/10 sarABURI Saraburi 18180 Thailand`,
    paymentMethod: "Bank Deposit",
    billingAddress: `เเทนนี้ เเทนนนั้น 456 Thailand 149/10 sarABURI Saraburi 18180 Thailand`,
    shippingMethod: "Puma Express",
  };

  const orderItem = {
    name: "1980s ADIDAS Jacket (L)",
    size: "L",
    price: 1980,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ed1eac13796a280fd3e760ce298827ab57ab1aae09f591a2faddf3e70cd23f96?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
  };

//   {
//     "head": [
//         {
//             "order_id": "cb55be85-ac6f-4f91-ae7c-b16ec9127375",
//             "user_id": 9,
//             "invoice_id": null,
//             "order_date": "2024-03-29T09:52:26.000Z",
//             "shipping_status": "Pending",
//             "fullfill_status": "complete",
//             "total_price": "246.00",
//             "session_id": "cs_test_a1GKtVQBE5m8WviL0Bc4dGtlT3s5Kr6a6V9gImT0wqd9aA1grXIllOOOLB",
//             "Province": null
//         }
//     ],
//     "detail": [
//         {
//             "product_name": "product1",
//             "size": "M",
//             "image_url": "https://cdn.builder.io/api/v1/image/assets/TEMP/51c5ed47f82482e0d472498bcc1e725e6f0d4ff314415adfdb16af68e173ef86?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
//             "quantity": 1,
//             "subtotal_price": "123.00"
//         }
//     ]
// }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");
        const response = await axios.get(
          `http://localhost:5000/user/get-order/${orderId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        
        if (response.data && response.data.head) {
          // Convert the received data into items format
          const orderDetails = response.data.detail.map((order , index) => ({
            confirmationNumber: index + 1,
            customerName:  `${order.first_name} ${order.last_name}`,
            contactEmail: order.email,
            shippingAddress: `เเทนนี้ เเทนนนั้น 456 Thailand 149/10 sarABURI Saraburi 18180 Thailand`,
            paymentMethod: "Credit Card",
            billingAddress: `เเทนนี้ เเทนนนั้น 456 Thailand 149/10 sarABURI Saraburi 18180 Thailand`,
            shippingMethod : "Puma Express"
          }));

            const orderHeader = response.data.head.map((order , index) => ({           
            confirmationNumber: index + 1,
            customerName:  `${order.first_name} ${order.last_name}`,
            contactEmail: order.email,
            shippingAddress: `เเทนนี้ เเทนนนั้น 456 Thailand 149/10 sarABURI Saraburi 18180 Thailand`,
            paymentMethod: "Credit Card",
            billingAddress: `เเทนนี้ เเทนนนั้น 456 Thailand 149/10 sarABURI Saraburi 18180 Thailand`,
            shippingMethod : "Puma Express"
          }));

          setOrderDetails(orderDetails);

          console.log("Fetch all cart Products Success");
        } else {
          console.log("No data received from the API.");
        }
      } catch (error) {
        console.error("Error fetching cart products: ", error);
      }
    };

    fetchData();
  }, []);


  const calculateTotals = () => {
    const subtotal = 1746;
    const shipping = 0;
    const vat = 240;
    const total = subtotal + shipping + vat;
    return { subtotal, shipping, vat, total };
  };

  return (
    <div className="pl-20 bg-white max-md:pl-5">
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
                      {orderDetails.paymentMethod}
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
          <button className="justify-center items-center self-center px-16 py-4 mt-14 max-w-full text-base tracking-wider text-white bg-black rounded-3xl border border-black border-solid w-[379px] max-md:px-5 max-md:mt-10">
            Continue Shopping
          </button>
          <hr className="shrink-0 mt-14 h-px border border-solid bg-zinc-500 border-zinc-500 max-md:mt-10 max-md:max-w-full" />
        </div>
        <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
          <section className="flex flex-col grow px-14 py-20 w-full bg-stone-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div>
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[81%] max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-5 justify-between text-lg font-medium text-black max-md:mt-10">
                    <img
                      loading="lazy"
                      src={orderItem.image}
                      alt={orderItem.name}
                      className="shrink-0 w-20 aspect-[0.77]"
                    />
                    <div>
                      {orderItem.name}
                      <br />
                      {orderItem.size}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
                  <div className="mt-7 text-xl text-black max-md:mt-10">
                    {orderItem.price.toFixed(2)} $
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
                <div>{calculateTotals().subtotal} $฿</div>
                <div className="mt-9">{calculateTotals().shipping} $฿</div>
                <div className="mt-10">{calculateTotals().vat} $฿</div>
              </div>
            </div>
            <hr className="shrink-0 mt-9 max-w-full h-px border border-solid bg-zinc-500 border-zinc-500 w-[415px] max-md:mr-1.5" />
            <div className="flex gap-5 mt-14 text-black max-md:mt-10">
              <div className="text-2xl">Total</div>
              <div className="flex-auto text-3xl font-medium">
                {calculateTotals().total.toFixed(2)} $
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Billing;