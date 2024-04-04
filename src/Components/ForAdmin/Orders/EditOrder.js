import React, { useState } from "react";

function DeliveryStatus({ initialStatus, onUpdateStatus, onClose }) {
  const [status, setStatus] = useState(initialStatus);

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  const handleUpdateStatus = () => {
    onUpdateStatus(status);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="flex flex-col justify-center max-w-[370px] bg-white rounded-xl p-8">
        <form className="flex flex-col px-3.5 w-full text-xs text-black">
          <h2 className="text-sm font-bold">Edit Delivery Status</h2>
          <div className="relative">
            <select
              value={status}
              onChange={handleChange}
              className="w-full px-2 py-1.5 border border-solid border-gray-300 rounded-md appearance-none"
            >
              <option value="Pending">Pending</option>
              <option value="Canceled">Canceled</option>
              <option value="Delivered">Delivered</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8329510fd488410c1594bef3023de35a8c6f87e0517b717f56a4941f7949c8a2?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
                alt=""
                className="h-4 w-4"
              />
            </div>
          </div>
        </form>
        <div className="flex gap-5 justify-between self-end mt-5 whitespace-nowrap">
          <button type="button" className="my-auto text-red-400" onClick={onClose}>
            Close
          </button>
          <button type="submit" className="flex flex-col justify-center text-white" onClick={handleUpdateStatus}>
            <div className="justify-center px-5 py-1.5 bg-blue-500 rounded-md">Update</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryStatus;
