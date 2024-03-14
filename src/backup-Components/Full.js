import * as React from "react";

function Header() {
  return (
    <header className="flex justify-center items-center px-16 py-8 w-full text-sm tracking-wider text-black whitespace-nowrap bg-white shadow-sm max-md:px-5 max-md:max-w-full">
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
              alt="Clothing icon"
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
                type="text"
                id="search"
                placeholder="Search"
                className="my-auto"
                aria-label="Search"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c0aa996fc4584d547a77379de1f22e4cb30e4900b5b7d1f5c7ceed493d66ec8?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
                alt="Search icon"
                className="shrink-0 aspect-square w-[18px]"
              />
            </div>
          </form>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/958a286ffd0e768cef7c402512f9df78b2526d5adad0c72e0dfb55b20703ff4c?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
            alt="User icon"
            className="shrink-0 self-stretch my-auto aspect-square w-[18px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3be0dbe071019cdd38d2d5fea243d0b5d03b797052b9cb7708b862fd40b2671?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
            alt="Cart icon"
            className="shrink-0 self-stretch my-auto aspect-square w-[18px]"
          />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center w-full mix-blend-darken min-h-[570px] max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd5218a16fcb43ea48128a4c8f14e95191770264b6dfefad2cc1798bddece944?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
        alt="Hero background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col justify-center items-start px-16 py-20 mix-blend-darken bg-black bg-opacity-50 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-32 mb-28 ml-44 max-w-full w-[480px] max-md:my-10">
          <h2 className="text-3xl font-bold tracking-widest text-white max-md:max-w-full">
            <span className="text-4xl font-medium">
              Vintage Boutique Store Online
            </span>
            <br />
            <span className="text-lg font-medium">
              The all-in-one platform to buy & sell vintage and designer
              fashion securely.
            </span>
          </h2>
          <button className="justify-center self-start px-10 py-3.5 mt-3.5 text-xs font-medium tracking-wide text-black whitespace-nowrap bg-white rounded-3xl max-md:px-5">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}

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
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a259e885fcf42171c345c322c7db06acc8ab6cea9804a402360ba0eef368d46?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
    {
      name: "PUMA SWEATER (XXS)",
      price: "1950.00 $",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3af186bee0e96b7e4e1ca0863a03ae08876653c347feeb5ff29b80be383e39dc?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
    {
      name: "PUMA SWEATER (XXS)",
      price: "1950.00 $",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/703af5f1274bc534816388d4fced379db752bcd821fed8a54308c9a0f8f4fa71?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
    {
      name: "PUMA SWEATER (XXS)",
      price: "1950.00 $",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/51c5ed47f82482e0d472498bcc1e725e6f0d4ff314415adfdb16af68e173ef86?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
    {
      name: "PUMA SWEATER (XXS)",
      price: "1950.00 $",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6fbd0d88eafb21e5bbcf6755f6312619716f5d090384ef718bc0947b107065ae?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
    {
      name: "PUMA SWEATER (XXS)",
      price: "1950.00 $",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/51c5ed47f82482e0d472498bcc1e725e6f0d4ff314415adfdb16af68e173ef86?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
    {
      name: "PUMA SWEATER (XXS)",
      price: "1950.00 $",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3af186bee0e96b7e4e1ca0863a03ae08876653c347feeb5ff29b80be383e39dc?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
    {
      name: "PUMA SWEATER (XXS)",
      price: "1950.00 $",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/703af5f1274bc534816388d4fced379db752bcd821fed8a54308c9a0f8f4fa71?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
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

function FeatureCard({ title, subtitle, icon, alt }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center text-center text-black max-md:mt-4">
        <div className="flex flex-col items-center px-20 py-8 w-full bg-neutral-100 max-md:px-5">
          <div className="text-3xl font-bold tracking-widest">
            <span className="text-xl font-medium">{title}</span>
            <br />
            <span className="text-xs font-medium">{subtitle}</span>
          </div>
          <div className="flex gap-2 mt-7 text-xs font-medium tracking-wide whitespace-nowrap">
            <div>{title.split(" ")[0]}</div>
            <img
              loading="lazy"
              src={icon}
              alt={alt}
              className="shrink-0 w-4 aspect-[1.23]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Features() {
  const features = [
    {
      title: "Worldwide Shipping ✈️",
      subtitle: "We Ship worldwide via UPS",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/12aebb4629ab3031a4f6bdabe9b35683d9d6a9cc9735be02a3430b3745e92089?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
      alt: "Shipping icon",
    },
    {
      title: "We accept returns 📬",
      subtitle: "Changed your mind? We're here for you",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/12aebb4629ab3031a4f6bdabe9b35683d9d6a9cc9735be02a3430b3745e92089?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
      alt: "Returns icon",
    },
    {
      title: "Our customers say it best 🌟",
      subtitle: "Rating 4.5/5 on Trustpilot",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/12aebb4629ab3031a4f6bdabe9b35683d9d6a9cc9735be02a3430b3745e92089?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
      alt: "Reviews icon",
    },
  ];

  return (
    <section className="mt-16 max-md:mt-10 max-md:mr-2 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            subtitle={feature.subtitle}
            icon={feature.icon}
            alt={feature.alt}
          />
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section>
      <div className="flex gap-5 self-center mt-36 text-3xl font-medium tracking-widest text-black whitespace-nowrap max-md:flex-wrap max-md:mt-10">
        <div className="flex-auto my-auto">
          See our <span className="font-bold">96,450</span> reviews on{" "}
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ca8455edb1c721f6f997f100d32202d3239da33cccc1051e43775e44d4bb67c?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
          alt="Trustpilot logo"
          className="shrink-0 max-w-full aspect-[3.45] w-[177px]"
        />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d928f55411deaa22de2747320504036cd0287697157d7db23bc8813f6df07ba?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
        alt="Reviews"
        className="mt-7 w-full aspect-[2.44] max-md:mr-1 max-md:max-w-full"
      />
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex justify-center items-center px-16 py-16 mt-24 w-full text-black bg-stone-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 justify-between items-start w-full max-w-[1021px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col self-stretch">
          <h3 className="text-xl font-medium tracking-wider whitespace-nowrap">
            Customer Care
          </h3>
          <div className="mt-8 text-base tracking-wider">
            <br />
            Sell <br />
            Discord <br />
            Brands <br />
            Outlet <br />
            FAQs <br />
            Shipping <br />
            Returns <br />
            Payment <br />
            Size chart <br />
            Contact
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-medium tracking-wider">About</h3>
          <div className="mt-8 text-base tracking-wider">
            <br />
            Who we are? <br />
            Magazine <br />
            Consigning terms <br />
            Privacy policy <br />
            Cookie <br />
            Terms & Conditions <br />
            Legal notice
          </div>
        </div>
        <div className="flex-auto text-3xl font-bold tracking-widest">
          DEADSTOCK
        </div>
      </div>
    </footer>
  );
}

function DeadstockStore() {
  return (
    <div className="flex flex-col bg-white">
      <div className="justify-center items-center px-16 py-3 w-full text-sm tracking-wider text-white whitespace-nowrap bg-black max-md:px-5 max-md:max-w-full">
        welcome you to our world. 🌎
      </div>
      <Header />
      <Hero />
      <WhatsNew />
      <Features />
      <Reviews />
      <Footer />
    </div>
  );
}

export default DeadstockStore;