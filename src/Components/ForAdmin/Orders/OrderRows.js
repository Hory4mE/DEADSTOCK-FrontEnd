import React, { useState } from "react";
import DeliveryStatus from "./EditOrder"; // Import the EditOrder modal component
import axios from "axios";

const OrderRow = ({
  order_id,
  user_id,
  invoice_id,
  order_date,
  shipping_status,
  fullfill_status,
  total_price,
}) => {
  const [showModal, setShowModal] = useState(false);

  const updateOrderStatus = async (newStatus) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/user/order/update-order/`,
        { order_id: order_id, status: newStatus }
      );
      console.log("Order status updated:", response.data);
      // If needed, update the state with the updated order status
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const handleActionClick = () => {
    setShowModal(true);
  };

  const handlOnClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <tr>
        <td>{order_id}</td>
        <td>{user_id}</td>
        <td>{invoice_id || "X"}</td>
        <td>{total_price}</td>
        <td>{order_date}</td>
        <td>
          <div
            className={`px-7 py-2 mx-auto ${
              shipping_status === "Pending"
                ? "bg-orange-100"
                : shipping_status === "Closed"
                ? "bg-red-300"
                : shipping_status === "Delivered"
                ? "bg-teal-100"
                : "bg-magenta-100"
            } rounded-md max-md:px-5`}
          >
            {shipping_status}
          </div>
        </td>
        <td>
          <div
            className={`px-4 py-1 mx-auto ${
              fullfill_status === "open"
                ? "bg-teal-100"
                : fullfill_status === "closed"
                ? "bg-red-300"
                : "bg-orange-100"
            } rounded-md max-md:px-5`}
          >
            {fullfill_status}
          </div>
        </td>
        <td className="w-10 h-10">
          <div className="flex justify-center items-center">
            <button onClick={handleActionClick}>...</button>
          </div>
        </td>
      </tr>
      {showModal && (
        <DeliveryStatus
          initialStatus={{
            order_id,
            user_id,
            invoice_id,
            order_date,
            shipping_status,
            fullfill_status,
            total_price,
          }}
          onUpdateStatus={updateOrderStatus}
          onClose={handlOnClose}
        />
      )}
    </>
  );
};

export default OrderRow;
