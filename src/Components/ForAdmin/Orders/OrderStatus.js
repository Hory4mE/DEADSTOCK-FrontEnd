import { useState, useEffect } from "react";
import React from "react";
import AdminNav from "../AdminNav";
import axios from "axios";
import OrderRow from "./OrderRows";

const OrderCard = ({ title, value, borderColor, bgColor }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow justify-center text-black max-md:mt-6">
      <div className="flex flex-col justify-center px-4 py-6 w-full bg-white rounded-xl border border-solid border-stone-300 border-opacity-50">
        <div
          className={`flex gap-5 justify-between items-start pr-px pb-8 pl-3 bg-white border-${borderColor} border-solid border-l-[5px]`}
        >
          <div className="flex flex-col">
            <div className="text-sm">{title}</div>
            <div className="mt-5 text-2xl font-bold">{value}</div>
          </div>
          <div className={`shrink-0 w-10 h-10 bg-${bgColor} rounded-xl`} />
        </div>
      </div>
    </div>
  </div>
);

function Com_OrderStatus() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const accessToken = localStorage.getItem('access_token');
      const response = await axios.get("http://localhost:5000/user/get-all-orders" ,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.data) {
        setOrders(response.data);
      } else {
        console.log("No data received from the API.");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const refreshOrders = () => {
    fetchOrders();
  };

  return (
    <div className="flex flex-col pb-11 bg-white">
      <AdminNav />
      <main className="flex flex-col px-12 mt-10 w-full max-md:px-5 max-md:max-w-full">
        <section className="ml-3.5 max-w-full w-[976px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <OrderCard
              title="NEW ORDERS"
              value="200.32k"
              borderColor="indigo-100"
              bgColor="indigo-100"
            />
            <OrderCard
              title="PENDING ORDERS"
              value="35.21k"
              borderColor="blue-100"
              bgColor="blue-100"
            />
            <OrderCard
              title="DELIVERED ORDERS"
              value="647.32k"
              borderColor="orange-100"
              bgColor="orange-100"
            />
          </div>
        </section>
        <section className="flex flex-col justify-center mt-10 text-s text-black max-md:max-w-full">
          <div className="flex flex-col pb-6 bg-white rounded-xl border border-solid border-stone-300 border-opacity-50 max-md:max-w-full">
            <table className="w-full">
              <thead>
                <tr className="text-xl font-bold bg-slate-100 border border-solid border-stone-300 border-opacity-50">
                  <th>Order ID</th>
                  <th>Customer ID</th>
                  <th>Invoice ID</th>
                  <th>Amount</th>
                  <th>Order Date</th>
                  <th>Shipping Status</th>
                  <th>Fulfillment Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders && orders.length > 0 ? (
                  orders.map((order, index) => (
                    <OrderRow refresh={refreshOrders} key={index} {...order} />
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center">
                      No orders found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Com_OrderStatus;
