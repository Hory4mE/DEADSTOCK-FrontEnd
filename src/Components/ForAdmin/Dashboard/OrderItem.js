import React from "react";

function OrderItem({ order }) {
    return (
        <>
        <td className="px-5 py-4 whitespace-nowrap">
            <div className="flex items-center whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{order.order_id}</div>
            </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">{order.first_name} {order.last_name}</td>
        <td className="px-6 py-4 whitespace-nowrap">${order.total_price}</td>
        <td className="px-6 py-4 whitespace-nowrap">{order.order_date}</td>
        <td className="px-6 py-4 whitespace-nowrap">{order.fullfill_status}</td>
        <td className="px-6 py-4 whitespace-nowrap">{order.shipping_status}</td>    
        </>
  );
}

export default OrderItem;
