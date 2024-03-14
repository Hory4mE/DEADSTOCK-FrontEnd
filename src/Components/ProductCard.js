function ProductCard({ product }) {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-black max-md:mt-9">
        <img
          loading="lazy"
          src={product.image}
          alt={product.name}
          className="w-full aspect-[0.77]"
        />
        <div className="mt-2 text-lg tracking-wider">{product.name}</div>
        <div className="mt-5 text-base font-medium tracking-wider">
          {product.price}
        </div>
      </div>
    </div>
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
  const products = [
    {
      name: "PUMA SWEATER (XXS)",
      price: "1950.00 $",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6a259e885fcf42171c345c322c7db06acc8ab6cea9804a402360ba0eef368d46?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
    {
      name: "PUMA SWEATER (XXS)",
      price: "1950.00 $",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3af186bee0e96b7e4e1ca0863a03ae08876653c347feeb5ff29b80be383e39dc?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
    {
      name: "PUMA SWEATER (XXS)",
      price: "1950.00 $",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/703af5f1274bc534816388d4fced379db752bcd821fed8a54308c9a0f8f4fa71?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
    {
      name: "PUMA SWEATER (XXS)",
      price: "1950.00 $",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/51c5ed47f82482e0d472498bcc1e725e6f0d4ff314415adfdb16af68e173ef86?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
    {
      name: "PUMA SWEATER (XXS)",
      price: "1950.00 $",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6fbd0d88eafb21e5bbcf6755f6312619716f5d090384ef718bc0947b107065ae?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
    {
      name: "PUMA SWEATER (XXS)",
      price: "1950.00 $",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/51c5ed47f82482e0d472498bcc1e725e6f0d4ff314415adfdb16af68e173ef86?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
    {
      name: "PUMA SWEATER (XXS)",
      price: "1950.00 $",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3af186bee0e96b7e4e1ca0863a03ae08876653c347feeb5ff29b80be383e39dc?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
    {
      name: "PUMA SWEATER (XXS)",
      price: "1950.00 $",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/703af5f1274bc534816388d4fced379db752bcd821fed8a54308c9a0f8f4fa71?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
  ];

  return (
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
      <button className="justify-center self-center px-9 py-5 mt-12 text-base font-medium tracking-wider text-center text-white whitespace-nowrap bg-black rounded-3xl max-md:px-5 max-md:mt-10">
        View all
      </button>
    </section>
  );
}


export default WhatsNew;