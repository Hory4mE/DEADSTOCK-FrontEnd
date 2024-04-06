
import React , {useState , useEffect} from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';

import { config } from "../../apiData/api";


function ProductDetails() {
  const [validated , setValidated] = useState(false);
  const [product, setProduct] = useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get('product');

  useEffect(() => {
    const fetchProduct = async () => {
      
      console.log(productId);
      try {
        const response = await axios.get(`${config.api}/product/get-id/${productId}`);
        if (response.data) {
          setProduct(response.data);
          setValidated(true);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [productId]);
 
  const measurementLines = product.measurement;
  
  const handleAddCart = async () => {
    const cartData = {
      cart: [
        {
          product_id: product.product_id, 
          quantity: 1
        }
      ]
    };
  
    try {
      const accessToken = localStorage.getItem("access_token");
      const response = await axios.post(
        `${config.api}/user/add-cart`,
        cartData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      
      console.log(response.status);
      if (response.status === 200) {
        window.location.href = "/cart";
      } else {
        window.location.href = "/login";
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log("Access token expired.");
      } else {
        console.error("Error fetching cart products: ", error);
        window.location.href = "/login";
      }
    }
  }


  return (
    <section className="flex flex-col self-center px-5 mt-16 w-full max-w-[1153px] max-md:mt-10 max-md:max-w-full mx-auto">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={product.image_url}
              alt={product.name}
              className="grow w-full aspect-[0.83] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-black max-md:mt-10 max-md:max-w-full">
              <h2 className="text-5xl max-md:max-w-full max-md:text-4xl">
                {product.product_name}
              </h2>
              <div className="mt-6 text-2xl max-md:max-w-full">
                {product.price} ฿
              </div>
              <div className="flex flex-col mt-10 max-md:max-w-full">
              { product.in_stock_quantity === 0 ?
                    (
                      <button onClick={handleAddCart} disabled className="justify-center items-center px-16 py-4 text-base tracking-wider bg-gray-500 text-white rounded-3xl border border-black border-solid max-md:px-5 max-md:max-w-full"
                      >
                        Out of Stock.
                      </button>
                    )
                    :
                    (
                      <button
                        onClick={handleAddCart}
                        className="justify-center items-center px-16 py-4 text-base tracking-wider bg-black text-white rounded-3xl border border-black border-solid max-md:px-5 max-md:max-w-full hover:bg-gray-500"
                      >
                        Add to cart
                      </button>
                    )
                }
                <div className="mt-6 text-1xl max-md:max-w-full">
                  In Stock {product.in_stock_quantity} 
                </div>
                
                <h3 className="mt-14 mr-6 text-lg font-semibold max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                  {product.description}
                </h3>
              </div>
              <p className="mt-3 text-base underline max-md:max-w-full">
                <a
                  href={product.link}
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product.brand}
                </a>{" "}
                {product.details}
              </p>
              <div className="flex gap-2 self-start mt-14 text-xl whitespace-nowrap max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e30408935c3afb6e986eaeb376bb078d57416640e124c393b23d553c7b0923c?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
                  alt=""
                  className="shrink-0 aspect-square w-[18px]"
                />
                <h4 className="flex-auto text-2xl text-black">Measurements</h4>
              </div>
              {
                measurementLines != null ? <p className="mt-5 text-xl max-md:max-w-full">{measurementLines}</p> : null
              }
              <div className="self-end mt-14 text-3xl text-white max-md:mt-10">
                {product.additionalInfo}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;

