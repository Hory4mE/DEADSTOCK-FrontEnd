import React from "react";
import axios from "axios";
import { redirect } from "react-router";


function ProductDetails() {
  const [validated , setValidated] = useState(false);
  const product = {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6fbd0d88eafb21e5bbcf6755f6312619716f5d090384ef718bc0947b107065ae?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    name: "DOLCE & GABBANA Sweater (L)",
    price: 1799,
    description: "Vintage Dolce & Gabbana 'Pump It Up' Sweater",
    link: "/cart",
    // brand: "Dolce & Gabbana ",
    // details:
    //   "sweater in black color. Minor signs of wear. See photos for a detailed look.",
    measurements: "Tagged L Length: 73 cm\n Width: 58 cm\n Sleeve: 80 cm",
    // additionalInfo: "xxxxx",
  };

  return (
    <center>
      <Products product={product} />
    </center>
  );
}

function Products({ product }) {
  // Splitting measurement details into an array of lines
  const measurementLines = product.measurements.split("\n");
  
  const handleAddCart = () => {
    const response = axios.post(`http://localhost:5000/user/add-cart`, {product_id: product.product_id, quantity: product.quantity});
    if(response.status === 200){
      setValidated(true);
      <Navigate to="/cart" />;
    }
    // Handle response or errors here
  }

  return (
    <section className="flex flex-col self-center px-5 mt-16 w-full max-w-[1153px] max-md:mt-10 max-md:max-w-full">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={product.imageUrl}
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
                {product.on_hand_quantity === 0 ?
                    (
                      <button onClick={handleAddCart} disabled className="btn-seconary justify-center items-center px-16 py-4 text-base tracking-wider bg-black text-white rounded-3xl border border-black border-solid max-md:px-5 max-md:max-w-full">
                        Out of Stock.
                      </button>
                    )

                  :

                    (
                      <button onClick={handleAddCart} className="justify-center items-center px-16 py-4 text-base tracking-wider bg-black text-white rounded-3xl border border-black border-solid max-md:px-5 max-md:max-w-full">
                      Add to cart
                      </button>
                    )
                }
                
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
              {/* Rendering each line of measurement */}
              {measurementLines.map((line, index) => (
                <p key={index} className="mt-5 text-xl max-md:max-w-full">
                  {line}
                </p>
              ))}
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
