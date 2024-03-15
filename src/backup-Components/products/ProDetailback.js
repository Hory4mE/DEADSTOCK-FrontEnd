import * as React from "react";

function Header() {
  return (
    <>
      <div className="justify-center items-center px-16 py-3 text-sm tracking-wider text-white whitespace-nowrap bg-black max-md:px-5 max-md:max-w-full">
        welcome you to our world. 🌎
      </div>
      <nav className="flex justify-center items-center px-16 py-8 text-sm tracking-wider text-black whitespace-nowrap bg-white shadow-sm max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1147px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between items-center my-auto max-md:flex-wrap max-md:max-w-full">
            <h1 className="grow self-stretch text-3xl font-bold tracking-widest">
              DEADSTOCK
            </h1>
            <div className="flex gap-2 self-stretch my-auto">
              <div className="my-auto">clothing</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca9a5e45fd2df9e49e64483dc0f5a809255417ad46f565b20f629cbe90d5b1d4?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
                alt=""
                className="shrink-0 aspect-square w-[18px]"
              />
            </div>
            <div className="self-stretch my-auto">Shoes</div>
            <div className="grow self-stretch my-auto">Accessorires</div>
          </div>
          <div className="flex gap-5 justify-between items-center">
            <form className="flex flex-col flex-1 justify-center self-stretch">
              <div className="flex gap-5 justify-between px-5 py-1.5 bg-white rounded-2xl border border-black border-solid">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <input
                  type="search"
                  id="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="my-auto"
                />
                <button type="submit" aria-label="Submit search">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c0aa996fc4584d547a77379de1f22e4cb30e4900b5b7d1f5c7ceed493d66ec8?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
                    alt=""
                    className="shrink-0 aspect-square w-[18px]"
                  />
                </button>
              </div>
            </form>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/958a286ffd0e768cef7c402512f9df78b2526d5adad0c72e0dfb55b20703ff4c?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
              alt=""
              className="shrink-0 self-stretch my-auto aspect-square w-[18px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3be0dbe071019cdd38d2d5fea243d0b5d03b797052b9cb7708b862fd40b2671?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
              alt=""
              className="shrink-0 self-stretch my-auto aspect-square w-[18px]"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
    
function ProductDetails() {
  return (
    <section className="flex flex-col self-center px-5 mt-16 w-full max-w-[1153px] max-md:mt-10 max-md:max-w-full">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2b6a87610fea50d188d790fd8a2c63b7e5901fe385e8c8443a5fcd4c413bbc0?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
              alt="DOLCE & GABBANA Sweater (L)"
              className="grow w-full aspect-[0.83] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-black max-md:mt-10 max-md:max-w-full">
              <h2 className="text-5xl max-md:max-w-full max-md:text-4xl">
                DOLCE & GABBANA Sweater (L)
              </h2>
              <div className="mt-6 text-xl max-md:max-w-full">1,746.00 ฿</div>
              <div className="flex flex-col mt-10 max-md:max-w-full">
                <button className="justify-center items-center px-16 py-4 text-base tracking-wider bg-white rounded-3xl border border-black border-solid max-md:px-5 max-md:max-w-full">
                  Add to cart
                </button>
                <h3 className="mt-14 mr-6 text-lg font-semibold max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                  Vintage Dolce & Gabbana 'Pump It Up' Sweater
                </h3>
              </div>
              <p className="mt-3 text-base underline max-md:max-w-full">
                <a
                  href="https://twovaultvintage.com/collections/twovault-vintage-dolce-gabbana"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dolce & Gabbana
                </a>{" "}
                sweater in black color. Minor signs of wear. See photos for a
                detailed look.
              </p>
              <div className="flex gap-2 self-start mt-14 text-xl whitespace-nowrap max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e30408935c3afb6e986eaeb376bb078d57416640e124c393b23d553c7b0923c?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
                  alt=""
                  className="shrink-0 aspect-square w-[18px]"
                />
                <h4 className="flex-auto">Measurements</h4>
              </div>
              <p className="mt-5 text-xl max-md:max-w-full">
                <br /> Tagged L Length: 73 cm Width: 58 cm Sleeve: 80 cm
              </p>
              <div className="self-end mt-14 text-3xl text-white max-md:mt-10">
                xxxxxx
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StyledWith() {
  const products = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6fbd0d88eafb21e5bbcf6755f6312619716f5d090384ef718bc0947b107065ae?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
      name: "PUMA SWEATER (XXS)",
      price: "1950.00 $",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/51c5ed47f82482e0d472498bcc1e725e6f0d4ff314415adfdb16af68e173ef86?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
      name: "PUMA SWEATER (XXS)",
      price: "1950.00 $",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/703af5f1274bc534816388d4fced379db752bcd821fed8a54308c9a0f8f4fa71?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
      name: "PUMA SWEATER (XXS)",
      price: "1950.00 $",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/703af5f1274bc534816388d4fced379db752bcd821fed8a54308c9a0f8f4fa71?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
      name: "PUMA SWEATER (XXS)",
      price: "1950.00 $",
    },
  ];

  return (
    <>
      <h2 className="mt-28 text-3xl text-black max-md:mt-10 max-md:max-w-full">
        Styled with
      </h2>
      <div className="mt-12 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
            >
              <div className="flex flex-col grow text-black max-md:mt-4">
                <img
                  loading="lazy"
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[0.77]"
                />
                <h3 className="mt-2 text-lg tracking-wider">{product.name}</h3>
                <div className="mt-5 text-base font-medium tracking-wider">
                  {product.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function WhyShopWithUs() {
  const reasons = [
    {
      title: "Worldwide Shipping ✈️",
      subtitle: "We Ship worldwide via UPS",
      link: "Shipping",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/12aebb4629ab3031a4f6bdabe9b35683d9d6a9cc9735be02a3430b3745e92089?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
    {
      title: "We accept returns 📬",
      subtitle: "Changed your mind? We're here for you",
      link: "Returns",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/12aebb4629ab3031a4f6bdabe9b35683d9d6a9cc9735be02a3430b3745e92089?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
    {
      title: "Our customers say it best 🌟",
      subtitle: "Rating 4.5/5 on Trustpilot",
      link: "Reviews",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/12aebb4629ab3031a4f6bdabe9b35683d9d6a9cc9735be02a3430b3745e92089?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
  ];

  return (
    <>
      <h2 className="mt-24 text-3xl font-medium tracking-widest text-black max-md:mt-10 max-md:max-w-full">
        Why shop with us?
      </h2>
      <div className="mt-7 max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
            >
              <div className="flex flex-col grow justify-center text-center text-black max-md:mt-4">
                <div className="flex flex-col items-center px-20 py-8 w-full bg-neutral-100 max-md:px-5">
                  <div className="text-3xl font-bold tracking-widest">
                    <span className="text-xl font-medium">{reason.title}</span>
                    <br />
                    <span className="text-xs font-medium">
                      {reason.subtitle}
                    </span>
                  </div>
                  <div className="flex gap-2 mt-7 text-xs font-medium tracking-wide whitespace-nowrap">
                    <div>{reason.link}</div>
                    <img
                      loading="lazy"
                      src={reason.icon}
                      alt=""
                      className="shrink-0 w-4 aspect-[1.23]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="flex justify-center items-center px-16 py-16 mt-16 text-black bg-stone-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 justify-between items-start w-full max-w-[1021px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col self-stretch">
          <h3 className="text-xl font-medium tracking-wider whitespace-nowrap">
            Customer Care
          </h3>
          <div className="mt-8 text-base tracking-wider">
            <br /> Sell <br /> Discord <br /> Brands <br /> Outlet <br /> FAQs{" "}
            <br /> Shipping <br /> Returns <br /> Payment <br /> Size chart{" "}
            <br /> Contact
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-medium tracking-wider">About</h3>
          <div className="mt-8 text-base tracking-wider">
            <br /> Who we are? <br /> Magazine <br /> Consigning terms <br />{" "}
            Privacy policy <br /> Cookie <br /> Terms & Conditions <br /> Legal
            notice
          </div>
        </div>
        <div className="flex-auto text-3xl font-bold tracking-widest">
          DEADSTOCK
        </div>
      </div>
    </footer>
  );
}

function ProductPage() {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <main>
        <ProductDetails />
        <StyledWith />
        <WhyShopWithUs />
      </main>
      <Footer />
    </div>
  );
}

export default ProductPage;