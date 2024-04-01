import * as React from "react";

function FilterSection() {
  return (
    <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-4 max-md:max-w-full">
        <div className="flex gap-5 justify-between px-7 py-11 text-black bg-white border border-black border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <h2 className="text-3xl">Filter</h2>
          <button className="text-2xl underline">clear all</button>
        </div>
        <div className="flex z-10 flex-col items-start pt-5 pr-20 pb-10 pl-7 text-base text-black whitespace-nowrap bg-white border border-black border-solid max-md:px-5 max-md:max-w-full">
          <h3 className="text-zinc-600">PRODUCTS</h3>
          <div className="mt-8">Shoes</div>
          <div className="mt-5">Clothes</div>
          <div className="mt-5">Accessories</div>
        </div>
        <div className="flex flex-col py-5 pr-16 pl-7 bg-white border border-black border-solid max-md:px-5 max-md:max-w-full">
          <h3 className="text-base text-zinc-600">PRICE</h3>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/30356f338c8bfb0a46c2e00886340eea218ca4068b3bce5749b7b0c68700855a?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
            alt="Price range slider"
            className="mt-3.5 ml-6 max-w-full aspect-[10] w-[314px] max-md:ml-2.5"
          />
          <div className="flex gap-3 px-px mt-2">
            <div className="flex flex-col justify-center">
              <input
                type="number"
                className="shrink-0 bg-white border-2 border-solid border-stone-300 h-[29px]"
                aria-label="Minimum price"
              />
            </div>
            <div className="my-auto text-base text-zinc-600">to</div>
            <div className="flex flex-col justify-center">
              <input
                type="number"
                className="shrink-0 bg-white border-2 border-solid border-stone-300 h-[29px]"
                aria-label="Maximum price"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start py-5 pr-20 pl-7 whitespace-nowrap bg-white border border-black border-solid max-md:px-5 max-md:max-w-full">
          <h3 className="text-base text-zinc-600">SIZES</h3>
          <div className="flex gap-3.5 px-px mt-3.5 text-xs text-black">
            {["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"].map((size) => (
              <div key={size} className="flex flex-col flex-1 justify-center">
                <div className="justify-center items-center px-1 rounded-full bg-zinc-300 h-[15px] w-[15px]">
                  {size}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductItem({ product }) {
  return (
    <>
      <div className="flex gap-5 ml-4 max-w-full w-[804px] max-md:flex-wrap">
        <div className="flex gap-2">
          <img
            loading="lazy"
            src={product.image}
            alt={product.name}
            className="shrink-0 border border-black border-solid aspect-[0.71] w-[42px]"
          />
          <div className="flex flex-col self-start mt-1">
            <h3 className="text-sm font-bold">{product.name}</h3>
            <div className="mt-6 text-xs">Category : {product.category}</div>
          </div>
        </div>
        <div className="flex flex-auto gap-5 justify-between my-auto text-xs max-md:flex-wrap max-md:max-w-full">
          <div>{product.available}</div>
          <div>{product.rating}</div>
          <div>฿ {product.price}</div>
          <div>{product.orders}</div>
          <div>{product.publishDate}</div>
          <div>...</div>
        </div>
      </div>
      <div className="shrink-0 self-stretch mt-4 h-px border border-solid bg-zinc-200 border-zinc-200 max-md:max-w-full" />
    </>
  );
}

function MyComponent() {
  const products = [
    {
      name: "CASINO HOTEL SWEATER",
      category: "Clothes",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4329d4a3e5387575844c83ab50da8342df52cbf9b44d4f3fe0598e3f6a322a48?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
      available: 1,
      rating: 4.9,
      price: 1250,
      orders: 1,
      publishDate: "12 Oct , 2021",
    },
    {
      name: "NIKE Air force 1",
      category: "Sneakers",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd0b752760b48fc84b61c5e503a05365eb1b2255b44daa9aba126325902f56f1?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
      available: 1,
      rating: 4.9,
      price: 1250,
      orders: 1,
      publishDate: "12 Oct , 2021",
    },
    {
      name: "CASINO HOTEL SWEATER",
      category: "Sneakers",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc7458715125a675f246a4e51991bed5cda45bff72c6c83e29a415eb367c7d37?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
      available: 1,
      rating: 4.9,
      price: 1150,
      orders: 1,
      publishDate: "12 Oct , 2021",
    },
    {
      name: "STÜSSY T-Shirt (L)",
      category: "Clothes",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a35a3e6f0bc765e2563bf3bd92535f10d4e6da63977befe577bbd08942d29863?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
      available: 1,
      rating: 4.9,
      price: 1150,
      orders: 1,
      publishDate: "12 Oct , 2021",
    },
  ];

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
                <div className="flex gap-5 justify-between px-8 py-6 mt-8 w-full text-sm font-bold rounded-xl border border-solid bg-slate-100 border-stone-300 border-opacity-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                  <div>Product Name</div>
                  <div className="flex gap-5 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                    <div className="grow">Avaliable</div>
                    <div>Rate</div>
                    <div>Price</div>
                    <div>Orders</div>
                    <div>Publish</div>
                    <div>Action</div>
                  </div>
                </div>
                <div className="flex z-10 flex-col items-start py-4 border border-solid border-zinc-200 max-md:max-w-full">
                  {products.map((product, index) => (
                    <ProductItem key={index} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex gap-5 self-end mt-4 max-w-full w-[867px] max-md:flex-wrap">
        <div className="flex-auto text-base text-zinc-600">
          Showing 1 to 4 of 8 results
        </div>
        <nav className="flex flex-1 gap-2 items-start pr-0.5 -mr-px ml-52 text-xs text-black whitespace-nowrap">
          <div className="flex flex-col justify-center">
            <button className="justify-center px-1.5 py-2.5 ml-0 bg-white rounded-md border border-solid border-stone-300">
              Previous
            </button>
          </div>
          <div className="flex flex-col justify-center text-white">
            <button
              aria-current="page"
              className="justify-center items-center px-2.5 ml-0 bg-indigo-500 rounded-md border border-solid border-stone-300 h-[25px] w-[25px]"
            >
              1
            </button>
          </div>
          <div className="flex flex-col justify-center">
            <button className="justify-center items-center px-2.5 ml-0 bg-white rounded-md border border-solid border-stone-300 h-[25px] w-[25px]">
              2
            </button>
          </div>
          <div className="flex flex-col justify-center">
            <button className="justify-center px-3.5 py-2.5 ml-0 bg-white rounded-md border border-solid border-stone-300">
              Next
            </button>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default MyComponent;