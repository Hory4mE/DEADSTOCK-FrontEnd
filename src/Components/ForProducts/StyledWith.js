import React, { useState , useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const productDetailsUrl = `/productDetails?product=${product.product_id}`;
  return (
    <Link to={productDetailsUrl} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full transition-transform duration-300 transform hover:scale-110">
      <div className="flex flex-col grow text-black max-md:mt-4">
        <img
          loading="lazy"
          src={product.image_url}
          alt={product.product_name}
          className="w-full aspect-[0.77]"
        />
        <div className="mt-2 text-lg tracking-wider">{product.product_name}</div>
        <div className="mt-5 text-base font-medium tracking-wider">
          {product.price} ฿
        </div>
      </div>
    </Link>
  );
}

function StyledWith() {
  const [styledWithProducts , setStyledWithProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/product/get-all');
        console.log(response.data.products);
        if (response.data) {
          setStyledWithProducts(response.data.products);
          console.log('Fetch all Products Success');
        } else {
          console.log('No data received from the API.');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } 
    };

   
    fetchData();
  }, []); 



  // const styledWithProducts = [
  //   {
  //     name: "PUMA SWEATER (XXS)",
  //     price: "1950.00 $",
  //     image:
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/6fbd0d88eafb21e5bbcf6755f6312619716f5d090384ef718bc0947b107065ae?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
  //   },
  //   {
  //     name: "PUMA PANTS (XXS)",
  //     price: "1950.00 $",
  //     image:
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/51c5ed47f82482e0d472498bcc1e725e6f0d4ff314415adfdb16af68e173ef86?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
  //   },
  //   {
  //     name: "PUMA SHOES (XXS)",
  //     price: "1950.00 $",
  //     image:
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/703af5f1274bc534816388d4fced379db752bcd821fed8a54308c9a0f8f4fa71?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
  //   },
  //   {
  //     name: "PUMA GLASSES (XXS)",
  //     price: "1950.00 $",
  //     image:
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/703af5f1274bc534816388d4fced379db752bcd821fed8a54308c9a0f8f4fa71?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
  //   },
  // ];


  return (
    <>
      <section className="flex flex-col justify-center px-5 mt-12 w-full max-w-[1153px] max-md:mt-10 max-md:max-w-full mx-auto">
        <h2 className="text-3xl text-black max-md:max-w-full">Styled with</h2>
        <div className="self-center mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {styledWithProducts.map((product, index) => ( // Swap index and product
              <ProductCard key={index} product={product} /> // Use product's unique identifier as key
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default StyledWith;
