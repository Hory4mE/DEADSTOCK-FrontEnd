import React, { useState } from "react";

const initialProducts = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6a259e885fcf42171c345c322c7db06acc8ab6cea9804a402360ba0eef368d46?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    description: "PUMA SWEATER (XXS)",
    price: "1950.00 $",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/51c5ed47f82482e0d472498bcc1e725e6f0d4ff314415adfdb16af68e173ef86?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    description: "ADIDAS JACKET (S)",
    price: "2250.00 $",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3af186bee0e96b7e4e1ca0863a03ae08876653c347feeb5ff29b80be383e39dc?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    description: "NIKE TRACK PANTS (M)",
    price: "1875.00 $",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6fbd0d88eafb21e5bbcf6755f6312619716f5d090384ef718bc0947b107065ae?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    description: "REBOOK CLASSIC SHOES (8)",
    price: "1590.00 $",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6fbd0d88eafb21e5bbcf6755f6312619716f5d090384ef718bc0947b107065ae?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    description: "PUMA SWEATER (XXS)",
    price: "1950.00 $",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/51c5ed47f82482e0d472498bcc1e725e6f0d4ff314415adfdb16af68e173ef86?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    description: "ADIDAS JACKET (S)",
    price: "2250.00 $",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3af186bee0e96b7e4e1ca0863a03ae08876653c347feeb5ff29b80be383e39dc?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    description: "NIKE TRACK PANTS (M)",
    price: "1875.00 $",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/703af5f1274bc534816388d4fced379db752bcd821fed8a54308c9a0f8f4fa71?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    description: "REBOOK CLASSIC SHOES (8)",
    price: "1590.00 $",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/51c5ed47f82482e0d472498bcc1e725e6f0d4ff314415adfdb16af68e173ef86?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    description: "ADIDAS JACKET (S)",
    price: "2250.00 $",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3af186bee0e96b7e4e1ca0863a03ae08876653c347feeb5ff29b80be383e39dc?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    description: "NIKE TRACK PANTS (M)",
    price: "1875.00 $",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/703af5f1274bc534816388d4fced379db752bcd821fed8a54308c9a0f8f4fa71?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    description: "REBOOK CLASSIC SHOES (8)",
    price: "1590.00 $",
  },
];

function Product({ imageUrl, description, price }) {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-black max:mt-7">
        <img
          loading="lazy"
          src={imageUrl}
          alt={description}
          className="w-full aspect-[0.77]"
        />
        <div className="mt-2 text-lg tracking-wider">{description}</div>
        <div className="mt-5 text-base font-medium tracking-wider">{price}</div>
      </div>
    </div>
  );
}

function ProductList() {
  const [page, setPage] = useState(1);
  const productsPerPage = 6; // Changed to 4 for displaying 4 products per row
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = page * productsPerPage;
  const products = initialProducts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(initialProducts.length / productsPerPage);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <center>
      <div className="flex flex-col bg-white">
        <section>
          <div className="self-start mt-16 ml-32 text-4xl font-light text-black max-md:mt-10 max-md:max-w-full">
            Vintage & Second Hand Designer Outwear
          </div>
          <div className="flex gap-5 justify-between self-center px-5 mt-16 w-full text-base max-w-[1153px] text-neutral-500 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-2.5 self-start whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4faec16c35582902258a584fee8e5da17a50d8e3a62b7f1055563fe7cb7874c4?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
                alt="Filter icon"
                className="shrink-0 self-start aspect-square w-[18px]"
              />
              <div className="grow">Filter and sort</div>
            </div>
            <div>8 product</div>
          </div>
          <div className="self-center px-5 mt-10 w-full max-w-[1154px] max-md:max-w-full">
            <div className="flex flex-wrap justify-between gap-5 max-md:flex-col max-md:gap-0">
              {products.map((product, index) => (
                <Product
                  key={index}
                  imageUrl={product.imageUrl}
                  description={product.description}
                  price={product.price}
                />
              ))}
            </div>
            <div className="mt-5 flex justify-center items-center">
              <div>
                <button
                  className="px-4 py-2 mr-2 bg-gray-300 text-gray-700 rounded-md transition-colors duration-300 hover:bg-gray-400"
                  disabled={page === 1}
                  onClick={handlePrevPage}
                >
                  Previous
                </button>
                {pageNumbers.map((pageNumber) => (
                  <button
                    key={pageNumber}
                    className={`px-4 py-2 mx-1 bg-gray-300 text-gray-700 rounded-md transition-colors duration-300 hover:bg-gray-400 ${
                      pageNumber === page ? "bg-blue-500 text-white" : ""
                    }`}
                    onClick={() => handlePageClick(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                ))}
                <button
                  className="px-4 py-2 ml-2 bg-gray-300 text-gray-700 rounded-md transition-colors duration-300 hover:bg-gray-400"
                  disabled={page === totalPages}
                  onClick={handleNextPage}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </center>
  );
}


export default ProductList;
