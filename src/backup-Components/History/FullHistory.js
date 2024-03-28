import * as React from "react";

function Header() {
  return (
    <>
      <div className="justify-center items-center px-16 py-3 text-sm tracking-wider text-white bg-black max-md:px-5 max-md:max-w-full">
        welcome you to our world. 🌎
      </div>
      <nav className="flex justify-center items-center px-16 py-8 text-sm tracking-wider text-black whitespace-nowrap bg-white shadow-sm max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1147px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 items-center my-auto max-md:flex-wrap max-md:max-w-full">
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
            <div className="self-stretch my-auto">Accessorires</div>
          </div>
          <div className="flex gap-5 justify-between items-center">
            <form className="flex flex-col justify-center self-stretch">
              <div className="flex gap-5 justify-between px-5 py-1.5 bg-white rounded-2xl border border-black border-solid">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search"
                  className="my-auto"
                />
                <button type="submit">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1256cc4b7c5b7a87ce2e9cceaffd4ed30171387ed9ea9b5cc1da59ce81a7241?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
                    alt="Search"
                    className="shrink-0 aspect-square w-[18px]"
                  />
                </button>
              </div>
            </form>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3d34e98f599fc114daa286ae8cbf018ae5b049750fe68aa428dee2953b45065?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
              alt=""
              className="shrink-0 self-stretch my-auto aspect-square w-[18px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/52700ad77c8b4a13ebcead47f78edda057adad634d19e59720dc9549fe533340?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
              alt=""
              className="shrink-0 self-stretch my-auto aspect-square w-[18px]"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

function OrderHistory() {
  const orders = [
    {
      id: "#21 - 1840",
      date: "March 8, 2024",
      paymentStatus: "Pending",
      fulfillmentStatus: "Unfulfilled",
      total: "81.43 ฿ THB",
    },
  ];

  return (
    <div className="flex flex-col grow shrink-0 px-5 font-medium text-black basis-0 w-fit max-md:max-w-full">
      <h2 className="text-base max-md:max-w-full">Order history</h2>
      <div className="flex gap-5 justify-between px-9 py-7 mt-4 text-xs bg-white border border-solid border-zinc-400 text-neutral-500 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div>ORDER</div>
        <div>DATE</div>
        <div>PAYMENT STATUS</div>
        <div>FULLFILLMENT STATUS</div>
        <div className="text-black">TOTAL</div>
      </div>
      {orders.map((order) => (
        <div
          key={order.id}
          className="flex gap-5 justify-between items-center px-9 py-5 text-sm bg-white border-r border-b border-l border-solid border-zinc-400 max-md:flex-wrap max-md:px-5 max-md:max-w-full"
        >
          <div className="justify-center self-stretch px-2 py-2.5 text-xs bg-white border border-solid border-zinc-400">
            {order.id}
          </div>
          <div className="self-stretch my-auto">{order.date}</div>
          <div className="self-stretch my-auto">{order.paymentStatus}</div>
          <div className="self-stretch my-auto">{order.fulfillmentStatus}</div>
          <div className="self-stretch my-auto">{order.total}</div>
        </div>
      ))}
    </div>
  );
}

function AccountDetails() {
  return (
    <div className="flex flex-col self-start px-5">
      <h2 className="text-lg font-medium text-black">Account details</h2>
      <div className="mt-3 text-sm text-neutral-500">
        <br />
        เเทนนี้ เเทนนนั้น 456 Thailand 149/10 sarABURI Saraburi 18180 Thailand
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="flex justify-center items-center px-16 py-16 mt-24 text-black bg-stone-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 items-start w-full max-w-[1021px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col self-stretch">
          <h3 className="text-xl font-medium tracking-wider">Customer Care</h3>
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

function MyComponent() {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <main>
        <h2 className="self-start mt-20 ml-36 text-4xl text-black max-md:mt-10 max-md:ml-2.5">
          Account
        </h2>
        <div className="flex flex-col self-center mt-11 w-full max-w-[1018px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-2 self-start text-sm text-black">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3d34e98f599fc114daa286ae8cbf018ae5b049750fe68aa428dee2953b45065?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
              alt=""
              className="shrink-0 aspect-square w-[18px]"
            />
            <div className="underline">Log out</div>
          </div>
          <div className="flex gap-5 mt-14 max-md:flex-wrap max-md:mt-10">
            <OrderHistory />
            <AccountDetails />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}