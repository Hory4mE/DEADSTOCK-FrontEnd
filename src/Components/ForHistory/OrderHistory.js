import axios from "axios";
import { useState , useEffect } from "react";

import { config } from "../../apiData/api";


function OrderHistory() {

    const [orders ,setOrders] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
    
            const accessToken = localStorage.getItem("access_token");
            const response = await axios.get(
              `${config.api}/user/get-order-by-user`,
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );
    
            if (response.data.orders) {
              const orderData = response.data.orders.map((order , index) => ({
                id: index + 1,
                order_id: order.order_id,
                date: order.order_date,
                paymentStatus: order.shipping_status,
                fulfillmentStatus: order.fullfill_status,
                total: order.total_price,
              }));
              setOrders(orderData);
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

    return (
        <div className="flex flex-col grow shrink-0 px-5 font-medium text-black basis-0 w-fit max-md:max-w-full">
            <h2 className="text-lg font-medium text-black">Order history</h2>
            <div className="flex gap-40 justify-between px-9 py-7 mt-4 text-xs bg-white border border-solid border-zinc-400 text-neutral-500 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <div>ORDER</div>
                <div>DATE</div>
                <div>PAYMENT STATUS</div>
                <div>FULLFILLMENT STATUS</div>
                <div className="text-black">TOTAL</div>
            </div>
            {orders.map((order) => (
                <div
                    key={order.id}
                    className="flex gap-5 justify-between items-center px-9 py-5 text-sm bg-white border-r border-b border-l border-solid border-zinc-400 max-md:flex-wrap max-md:px-5 max-md:max-w-full"
                >
                    <div className="justify-center self-stretch px-2 py-2.5 text-xs bg-white border border-solid border-zinc-400">
                        {order.id}
                    </div>
                    <div className="self-stretch my-auto">{new Date(order.date).toISOString().split('T')[0]}</div>
                    <div className="self-stretch my-auto">{order.paymentStatus}</div>
                    <div className="self-stretch my-auto">{order.fulfillmentStatus}</div>
                    <div className="self-stretch my-auto">{order.total}</div>
                </div>
            ))}
        </div>
    );
}

export default OrderHistory;