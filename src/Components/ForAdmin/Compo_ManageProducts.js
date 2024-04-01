import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterSection from "./FilterSection";
import ProductItem from "./ProductItem";

function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/product/get-all"
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
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  

  return (
    <div className="flex flex-col bg-white">
      <header className="flex gap-5 px-20 py-5 w-full text-xl text-black whitespace-nowrap bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-3.5 justify-center my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ef939b49a1d550b490f2a8e0da943aa9d1744a165c4f9c0646420eb0cb1b03a?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
            alt="Dashboard icon"
            className="shrink-0 w-3 aspect-[0.75]"
          />
          <div>Dashboard</div>
        </div>
        <div className="flex gap-2 items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc8dcd2319341d3e0c229be7d0143a18a11b330a0ad27bca7469b22c8a4979d9?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
            alt="Products icon"
            className="shrink-0 self-stretch w-6 aspect-square"
          />
          <div className="self-stretch my-auto">Products</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7558c4cefed73594ff68341bb6a240dd068f0be3f9ea57827c7d650a7a0475e2?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
            alt="Arrow icon"
            className="shrink-0 self-stretch my-auto w-3 border-2 border-black border-solid aspect-[2] stroke-[2px] stroke-black"
          />
        </div>
        <div className="flex gap-2 justify-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d436954de593ec919b21d217bc0d246be46f30701546ac1c3e383bef3069af0?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
            alt="Orders icon"
            className="shrink-0 w-6 aspect-square"
          />
          <div className="my-auto">Orders</div>
        </div>
      </header>
      <main className="flex flex-col px-12 mt-11 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <FilterSection />
            <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-black max-md:mt-5 max-md:max-w-full">
                <button className="justify-center items-start px-4 py-3.5 max-w-full text-base text-white bg-blue-500 rounded-md border border-solid border-stone-300 w-[141px] max-md:pr-5">
                  + Add Product
                </button>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left border border-gray-200 font-bold">Product Name</th>
                        <th className="px-6 py-3 text-left border border-gray-200 font-bold">Available</th>
                        <th className="px-6 py-3 text-left border border-gray-200 font-bold">Price</th>
                        <th className="px-6 py-3 text-left border border-gray-200 font-bold">Action</th>
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
      <footer className="flex justify-between items-center px-6 py-3 bg-gray-50 border-t border-gray-200 sm:px-6">
        <p className="text-sm text-gray-700">
          Showing {indexOfFirstProduct + 1} to {indexOfLastProduct} of {products.length} results
        </p>
        <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
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
      </footer>
    </div>
  );
}

export default ManageProducts;
