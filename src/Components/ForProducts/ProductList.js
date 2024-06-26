import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { config } from "../../apiData/api";

function Product({ imageUrl, description, price, name, product_id }) {
  const productDetailsUrl = `/productDetails?product=${product_id}`;

  return (
    <Link to={productDetailsUrl} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full transition-transform duration-300 transform hover:scale-110">
      <div className="flex flex-col grow text-black max:mt-7">
        <img
          loading="lazy"
          src={imageUrl}
          alt={description}
          className="w-full aspect-[0.77]"
        />
        <div className="mt-2 text-lg tracking-wider">{name}</div>
        <div className="mt-5 text-base font-medium tracking-wider">{price}</div>
      </div>
    </Link>
  );
}

function ProductList() {
  const [page, setPage] = useState(1);
  const [initialProducts, setInitialProducts] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  const queryString = searchParams.get('search');
 
  if(!category && !queryString) {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${config.api}/product/get-all`);
          // console.log(response.data.products);
          if (response.data) {
            setInitialProducts(response.data.products);
            // console.log('Fetch all Products Success');
          } else {
            // console.log('No data received from the API.');
          }
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };


      fetchData();
    }, []);
  }

  /* fix SearchBar */
  useEffect(() => {
    const fetchDataBySearch = async () => {
      try {
        if (!queryString) {
          return;
        }

        const response = await axios.get(`${config.api}/product/search?search=${queryString}`);

        if (response.data) {
          setInitialProducts(response.data);
          // console.log('Fetch all Products Success');
        } else {
          // console.log('No data received from the API.');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchDataBySearch();
  }, [queryString]);

  useEffect(() => {
    const fetchDataByCategory = async () => {
      try {
        if (!category) {
          return;
        }
        // console.log('5555', category)
        const response = await axios.get(`${config.api}/category/get-product-category?category=${category}`);
        if (response.data) {
          setInitialProducts(response.data);
          console.log('Fetch all Products Success');
        } else {
          setInitialProducts([]);
          console.log('No data received from the API.');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setInitialProducts([]);
      }
    };

    fetchDataByCategory();
    // console.log('work2');
  }, [category]);

  const productsPerPage = 6;
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = page * productsPerPage;

  const visibleProducts = initialProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(initialProducts.length / productsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleNextPage = () => {
    setPage(prevPage => Math.min(prevPage + 1, totalPages)); // Ensure next page doesn't exceed total pages
  };

  const handlePrevPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1)); // Ensure previous page doesn't go below 1
  };


  return (
    <>
      <div className="flex flex-col bg-white">
        <section>
          <div style={{ marginLeft: '170px' }} className="self-start mt-20 text-3xl font-light text-black max-md:mt-10 max-md:max-w-full text-left">
            Vintage & Second Hand Designer Outwear
          </div>
        </section>
        <center>
          <section>
            <div className="flex gap-5 justify-between self-center px-5 mt-16 w-full text-base max-w-[1153px] text-neutral-500 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-2.5 self-start whitespace-nowrap">
              </div>
              <div>{initialProducts.length} product</div>
            </div>
            <div className="self-center px-5 mt-10 w-full max-w-[1154px] max-md:max-w-full">
              <div className="flex flex-wrap justify-between gap-5 max-md:flex-col max-md:gap-0">
                {visibleProducts.length > 0 ? (
                  visibleProducts.map((product, index) => (
                    <Product
                      key={index}
                      imageUrl={product.image_url}               
                      description={product.description}
                      price={product.price}
                      name={product.product_name}
                      product_id={product.product_id}
                    />
                  ))
                ) : (
                  <div className="w-full flex items-center justify-center">
                    <p className="text-lg text-gray-500">Sorry, No Products Found</p>
                  </div>
                )}
              </div>
              {totalPages > 1 && ( // Show pagination only if there are more than 1 page
                <div className="mt-5 flex justify-center items-center">
                  <div>
                    <button
                      className={`px-4 py-2 mr-2 bg-gray-300 text-gray-700 rounded-md transition-colors duration-300 ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-400'}`}
                      onClick={handlePrevPage}
                      disabled={page === 1} // Disable button if on the first page
                    >
                      Previous
                    </button>
                    {pageNumbers.map((pageNumber) => (
                      <button
                        key={pageNumber}
                        className={`px-4 py-2 mx-1 bg-gray-300 text-gray-700 rounded-md transition-colors duration-300 ${pageNumber === page ? 'bg-blue-500 text-white' : 'hover:bg-gray-400'}`}
                        onClick={() => setPage(pageNumber)}
                      >
                        {pageNumber}
                      </button>
                    ))}
                    <button
                      className={`px-4 py-2 ml-2 bg-gray-300 text-gray-700 rounded-md transition-colors duration-300 ${page === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-400'}`}
                      onClick={handleNextPage}
                      disabled={page === totalPages} // Disable button if on the last page
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>
        </center>
      </div>
    </>
  );
}


export default ProductList;
