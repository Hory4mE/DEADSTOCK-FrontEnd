import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductItem from "./ProductItem";
import AdminNav from "./AdminNav"

import { config } from "../../apiData/api";

function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${config.api}/product/get-all`
        );
        console.log(response.data.products);
        if (response.data) {
          setProducts(response.data.products);
          console.log("Fetch all Products Success");
        } else {
          console.log("No data received from the API.");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  // Calculate the index of the last product on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  // Calculate the index of the first product on the current page
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Slice the products array to get the products for the current page
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col bg-white">
      <AdminNav />
      <main className="flex flex-col px-12 mt-11 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-2 max-md:flex-col max-md:gap-2">
            <div className="flex flex-col ml-5 w-[100%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-black max-md:mt-5 max-md:max-w-full">
                  <Link to={`/addProduct`} className="flex justify-end">
                    <button className="py-2.5 max-w-full text-base text-white bg-blue-500 rounded-md border border-solid border-stone-300 w-[125px] max-md:pr-5 mb-5">
                      Add Product
                    </button>
                  </Link>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left border border-gray-200 font-bold">
                          Product Name
                        </th>
                        <th className="px-6 py-3 text-left border border-gray-200 font-bold">
                          Available
                        </th>
                        <th className="px-6 py-3 text-left border border-gray-200 font-bold">
                          Price
                        </th>
                        <th className="px-6 py-3 text-left border border-gray-200 font-bold">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product, index) => (
                        <tr key={index}>
                          <ProductItem product={product} />
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
      <footer className="flex justify-center items-center ms-4 mt-2">
          <div className="flex justify-between items-center py-3 bg-gray-50 border-t border-gray-200 sm:px-6 w-[94%]">
            <p className="text-sm text-gray-700">
              Showing {indexOfFirstProduct + 1} to {indexOfLastProduct} of{" "}
              {products.length} results
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
                disabled={indexOfLastProduct >= products.length}
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

export default ManageProducts;
