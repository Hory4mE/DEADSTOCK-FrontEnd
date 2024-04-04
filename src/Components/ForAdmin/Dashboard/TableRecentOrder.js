import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OrderItem from "./OrderItem"


function TableRecentOrder() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
        const response = await axios.get(
          "http://localhost:5000/user/get-all-orders" , 
            {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        console.log(response.data);
        if (response.data) {
          setOrders(response.data);
          console.log("Fetch all Orders Success");
        } else {
          console.log("No data received from the API.");
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchData();
  }, [setOrders]);

  // Calculate the index of the last product on the current page
  const indexOfLastOrder = currentPage * ordersPerPage;
  // Calculate the index of the first product on the current page
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  // Slice the products array to get the products for the current page
  const currentOrders = orders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col bg-white">
      <main className="flex flex-col px-12 mt-11 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-2 max-md:flex-col max-md:gap-2">
            <div className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-black max-md:mt-5 max-md:max-w-full">
                <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 rounded-xl">
                    <thead >
                        <tr>
                            <th className="px-6 py-6 text-left border border-gray-200 font-bold text-2xl">
                                Recent Orders
                            </th>
                        </tr>
                    </thead>
                    <thead style={{ backgroundColor: "#F3F6F9" }}>
                      <tr>
                        <th className="px-6 py-3 text-left border border-gray-200 font-bold">
                          Order ID
                        </th>
                        <th className="px-6 py-3 text-left border border-gray-200 font-bold">
                          Customer Name
                        </th>
                        <th className="px-6 py-3 text-left border border-gray-200 font-bold">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left border border-gray-200 font-bold">
                          Order Date
                        </th>
                        <th className="px-6 py-3 text-left border border-gray-200 font-bold">
                          Payment Status
                        </th>
                        <th className="px-6 py-3 text-left border border-gray-200 font-bold">
                          Shipment Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    {orders.map((order, index) => (
                        <tr key={order.id}>
                            <OrderItem key={order.id} order={order} index={index} />
                        </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex justify-center items-center mt-1">
          <div className="flex justify-between items-center py-3 bg-gray-50 border-t border-gray-200 sm:px-6 w-[94%]">
            <p className="text-sm text-gray-700">
              Showing {indexOfFirstOrder + 1} to {indexOfLastOrder} of{" "}
              {orders.length} results
            </p>
            <nav
              className="inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              >
                Previous
              </button>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={indexOfLastOrder >= orders.length}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              >
                Next
              </button>
            </nav>
          </div>
      </footer>
    </div>
  );
}

export default TableRecentOrder;
