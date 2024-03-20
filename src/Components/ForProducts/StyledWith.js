function ProductCard({ product }) {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-black max-md:mt-4">
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
function StyledWith() {
  const styledWithProducts = [
    {
      name: "PUMA SWEATER (XXS)",
      price: "1950.00 $",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6fbd0d88eafb21e5bbcf6755f6312619716f5d090384ef718bc0947b107065ae?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
    {
      name: "PUMA PANTS (XXS)",
      price: "1950.00 $",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/51c5ed47f82482e0d472498bcc1e725e6f0d4ff314415adfdb16af68e173ef86?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
    {
      name: "PUMA SHOES (XXS)",
      price: "1950.00 $",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/703af5f1274bc534816388d4fced379db752bcd821fed8a54308c9a0f8f4fa71?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
    {
      name: "PUMA GLASSES (XXS)",
      price: "1950.00 $",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/703af5f1274bc534816388d4fced379db752bcd821fed8a54308c9a0f8f4fa71?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
  ];

  return (
    <center>
      <section className="flex flex-col self-center px-5 mt-12 w-full max-w-[1153px] max-md:mt-10 max-md:max-w-full">
        <h2 className="text-3xl text-black max-md:max-w-full">Styled with</h2>
        <div className="self-end mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {styledWithProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>
    </center>
  );
}
export default StyledWith;
