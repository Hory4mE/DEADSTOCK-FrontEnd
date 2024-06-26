import React , {useState ,useEffect} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import { config } from "../../apiData/api";


function ProductCard({ product }) {
  const productDetailsUrl = `/productDetails?product=${product.product_id}`;
  
  return (
    <Link to={productDetailsUrl} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full transition-transform duration-300 transform hover:scale-110">
      <div className="flex flex-col grow text-black max-md:mt-9">
        <img
          loading="lazy"
          src={product.image_url}     
          alt={product.product_name}
          className="w-full aspect-[0.77]"
        />
        <div className="mt-2 text-lg tracking-wider">{product.product_name} ({product.size})</div>
        <div className="mt-5 text-base font-medium tracking-wider">
          {product.price} $
        </div>
      </div>
    </Link>
  );
}

function ProductGrid({ products }) {
  return (
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

function WhatsNew() {
  const navigate = useNavigate();
  // const products = [
  //   {
  //     name: "PUMA SWEATER (XXS)",
  //     price: "1950.00 $",
  //     image:
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/51c5ed47f82482e0d472498bcc1e725e6f0d4ff314415adfdb16af68e173ef86?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
  //   },
  //   {
  //     name: "PUMA SWEATER (XXS)",
  //     price: "1950.00 $",
  //     image:
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/3af186bee0e96b7e4e1ca0863a03ae08876653c347feeb5ff29b80be383e39dc?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
  //   },
  //   {
  //     name: "PUMA SWEATER (XXS)",
  //     price: "1950.00 $",
  //     image:
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/703af5f1274bc534816388d4fced379db752bcd821fed8a54308c9a0f8f4fa71?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
  //   },
  //   {
  //     name: "PUMA SWEATER (XXS)",
  //     price: "1950.00 $",
  //     image:
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/51c5ed47f82482e0d472498bcc1e725e6f0d4ff314415adfdb16af68e173ef86?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
  //   },
  //   {
  //     name: "PUMA SWEATER (XXS)",
  //     price: "1950.00 $",
  //     image:
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/6fbd0d88eafb21e5bbcf6755f6312619716f5d090384ef718bc0947b107065ae?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
  //   },
  //   {
  //     name: "PUMA SWEATER (XXS)",
  //     price: "1950.00 $",
  //     image:
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/51c5ed47f82482e0d472498bcc1e725e6f0d4ff314415adfdb16af68e173ef86?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
  //   },
  //   {
  //     name: "PUMA SWEATER (XXS)",
  //     price: "1950.00 $",
  //     image:
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/3af186bee0e96b7e4e1ca0863a03ae08876653c347feeb5ff29b80be383e39dc?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
  //   },
  //   {
  //     name: "PUMA SWEATER (XXS)",
  //     price: "1950.00 $",
  //     image:
  //       "https://cdn.builder.io/api/v1/image/assets/TEMP/703af5f1274bc534816388d4fced379db752bcd821fed8a54308c9a0f8f4fa71?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
  //   },
  // ];
  const [products, setProducts] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.api}/product/get-all`);
        // console.log(response.data.products);
        if (response.data) {
          setProducts(response.data.products);
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

  


  return (
    <center>
      <section className="flex flex-col self-center px-5 mt-14 w-full max-w-[1170px] max-md:mt-10 max-md:max-w-full">
        <h2 className="text-3xl tracking-widest text-black max-md:max-w-full">
          What's New?
        </h2>
        <div className="mt-10 max-md:mt-10 max-md:max-w-full">
          <ProductGrid products={products.slice(0, 4)} />
        </div>
        <div className="mt-9 max-md:max-w-full">
          <ProductGrid products={products.slice(4)} />
        </div>
        {
          products.length > 0 ?
          <button 
            onClick={() => navigate('/product')} 
            className={`justify-center self-center px-5 py-2 mt-12 text-base font-medium tracking-wider text-center text-white whitespace-nowrap bg-black rounded-3xl max-md:px-5 max-md:mt-10 ${isHovered ? 'hover:bg-gray-900 hover:text-md transform scale-110 transition duration-800' : 'transition duration-300'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            View all
          </button>
          :
          <>
            <p>No Products Found!</p>
          </>    
        }
  
      </section>{" "}
    </center>
  );
}

export default WhatsNew;
