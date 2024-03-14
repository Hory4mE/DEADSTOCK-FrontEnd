import React from 'react';

const ProductCard = ({ imageSrc, altText, productName, price }) => {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-black max-md:mt-7">
        <img loading="lazy" src={imageSrc} alt={altText} className="w-full aspect-[0.77]" />
        <p className="mt-2 text-lg tracking-wider">{productName}</p>
        <p className="mt-5 text-base font-medium tracking-wider">{price}</p>
      </div>
    </div>
  );
};

const ProductGallery = () => {
  const products = [
    { id: 1, imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6a259e885fcf42171c345c322c7db06acc8ab6cea9804a402360ba0eef368d46?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&', altText: 'Puma Sweater', productName: 'PUMA SWEATER (XXS)', price: '1950.00 $' },
    { id: 2, imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/51c5ed47f82482e0d472498bcc1e725e6f0d4ff314415adfdb16af68e173ef86?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&', altText: 'Puma Sweater', productName: 'PUMA SWEATER (XXS)', price: '1950.00 $' },
    { id: 3, imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3af186bee0e96b7e4e1ca0863a03ae08876653c347feeb5ff29b80be383e39dc?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&', altText: 'Puma Sweater', productName: 'PUMA SWEATER (XXS)', price: '1950.00 $' },
    { id: 4, imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6fbd0d88eafb21e5bbcf6755f6312619716f5d090384ef718bc0947b107065ae?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&', altText: 'Puma Sweater', productName: 'PUMA SWEATER (XXS)', price: '1950.00 $' },
  ];

  return (
    <section className="self-center px-5 mt-10 w-full max-w-[1154px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageSrc={product.imageSrc}
            altText={product.altText}
            productName={product.productName}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGallery;