import * as React from "react";

const products = [
  {
    id: 1,
    name: "712Puma Sweater",
    size: "XL",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/96b9fc1089ec1bec9b688e9d6466d82e10453b39411a53936e27c35e94da6853?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
  },
];

function InputField({ label, placeholder, className }) {
  return (
    <div className={`justify-center items-start px-3.5 py-5 text-base tracking-wider bg-white rounded-3xl border border-black border-solid text-stone-500 max-md:pr-5 max-md:max-w-full ${className}`}>
      <label htmlFor={label} className="sr-only">
        {label}
      </label>
      <input type="text" id={label} placeholder={placeholder} aria-label={placeholder} className="w-full bg-transparent outline-none" />
    </div>
  );
}

function Checkbox({ label, className }) {
  return (
    <div className={`flex gap-4 p-4 text-base tracking-wider text-black bg-white rounded-xl border border-black border-solid max-md:flex-wrap ${className}`}>
      <input type="checkbox" id={label} className="shrink-0 bg-white rounded-xl border border-black border-solid h-[15px] w-[15px]" />
      <label htmlFor={label} className="flex-auto">
        {label}
      </label>
    </div>
  );
}

function ProductItem({ product }) {
  return (
    <div className="flex gap-2 self-start text-lg">
      <img src={product.image} alt={product.name} className="shrink-0 max-w-full aspect-[0.9] w-[126px]" />
      <div className="flex flex-col flex-1 self-start mt-6">
        <div className="text-black">{product.name}</div>
        <div className="mt-3.5 text-black text-opacity-50">{product.size}</div>
      </div>
    </div>
  );
}

function MyComponent() {
  return (
    <div className="flex gap-5 justify-between items-start self-center px-5 mt-36 max-md:flex-wrap max-md:mt-10">
      <div className="flex flex-col justify-end self-stretch pt-2.5 mt-3 max-md:max-w-full">
        <h2 className="text-2xl font-medium tracking-wider text-black max-md:max-w-full">Contact</h2>
        <InputField label="Email" placeholder="Email" />
        <div className="flex gap-2 self-start mt-4 ml-3.5 text-base tracking-wider text-black max-md:ml-2.5">
          <input type="checkbox" className="shrink-0 self-start w-2.5 h-2.5 bg-white rounded-sm border border-black border-solid" />
          <div className="flex-auto">Email me with news and offers</div>
        </div>
        <h2 className="mt-5 text-2xl font-medium tracking-wider text-black max-md:max-w-full">Delivery</h2>
        <InputField label="Country / Region" placeholder="Country / Region" />
        <div className="flex gap-2 mt-4 text-base tracking-wider text-stone-500 max-md:flex-wrap max-md:max-w-full">
          <InputField label="First Name" placeholder="First Name" className="px-3.5 py-5" />
          <InputField label="Last Name" placeholder="Last Name" className="px-4 py-5" />
        </div>
        <InputField label="Company (optional)" placeholder="Company (optional)" className="mt-3 w-[216px]" />
        <InputField label="Address" placeholder="Address" />
        <InputField label="Address 2" placeholder="Address 2" className="mt-1.5" />
        <div className="flex gap-2 mt-1.5 text-base tracking-wider text-stone-500 max-md:flex-wrap max-md:max-w-full">
          <InputField label="City" placeholder="City" className="px-4 py-4" />
          <InputField label="Province" placeholder="Province" className="px-4 py-5" />
          <InputField label="Postal Code" placeholder="Postal Code" className="px-3 py-5" />
        </div>
        <InputField label="Phone (optional)" placeholder="Phone (optional)" className="mt-1.5" />
        <h2 className="mt-6 text-2xl font-medium tracking-wider text-black max-md:max-w-full">Payment</h2>
        <Checkbox label="Kerry Express" className="mt-3.5" />
        <Checkbox label="Puma Faster Express" className="mt-3" />
        <h2 className="mt-5 text-2xl font-medium tracking-wider text-black max-md:max-w-full">Billing Address</h2>
        <Checkbox label="Same as shipping address" className="mt-3.5" />
        <div className="flex flex-col py-1 mt-3.5 rounded-xl bg-zinc-300 max-md:max-w-full">
          <div className="flex gap-4 p-4 bg-white rounded-xl border border-black border-solid max-md:flex-wrap">
            <div className="flex flex-col justify-center items-center px-0.5 bg-white rounded-xl border border-black border-solid h-[15px] w-[15px]">
              <div className="shrink-0 bg-black rounded-xl border border-black border-solid h-[11px] w-[11px]" />
            </div>
            <div className="flex-auto text-base tracking-wider text-black">Use a different billing address</div>
          </div>
          <InputField label="Country/Region" placeholder="Country/Region" className="mt-3 mr-5 ml-4 w-[413px]" />
          <div className="flex gap-1 mt-2 mr-5 ml-4 text-base tracking-wider text-stone-500 max-md:mx-2.5">
            <InputField label="First Name" placeholder="First Name" className="py-5" />
            <InputField label="Last Name" placeholder="Last Name" className="px-2.5 py-5" />
          </div>
          <InputField label="Address" placeholder="Address" className="mt-1.5 mr-5 ml-4 w-[413px]" />
          <div className="flex gap-1 mt-1.5 mr-5 ml-4 text-base tracking-wider text-stone-500 max-md:mx-2.5">
            <InputField label="City" placeholder="City" className="px-2.5 py-4" />
            <InputField label="Province" placeholder="Province" className="px-3 py-5" />
            <InputField label="Postal Code" placeholder="Postal Code" className="px-2.5 py-5" />
          </div>
          <InputField label="Phone (optional)" placeholder="Phone (optional)" className="mr-5 ml-4 w-[413px]" />
        </div>
      </div>
      <div className="shrink-0 mt-3 w-px border border-solid bg-black bg-opacity-30 border-black border-opacity-30 h-[904px]" />
      <div className="flex flex-col max-md:max-w-full">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
        <form className="flex gap-5 items-start mt-5 max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col grow shrink-0 justify-center text-lg basis-0 text-black text-opacity-60 w-fit">
            <label htmlFor="discountCode" className="sr-only">
              Discount Code
            </label>
            <input
              type="text"
              id="discountCode"
              placeholder="Discount Code"
              aria-label="Discount Code"
              className="justify-center items-start px-3.5 py-4 bg-white rounded-3xl border border-black border-solid max-md:pr-5"
            />
          </div>
          <button type="submit" className="flex flex-col justify-center text-xl text-black whitespace-nowrap rounded-xl">
            <div className="justify-center px-7 py-4 rounded-xl bg-zinc-300 max-md:px-5">Apply</div>
          </button>
        </form>
        <div className="flex gap-5 justify-center mt-12 text-black max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="text-lg">Subtotal</div>
          <div className="text-xl">1980.00 $</div>
        </div>
        <div className="flex gap-5 justify-center mt-6 text-black max-md:flex-wrap max-md:max-w-full">
          <div className="text-lg">Shipping</div>
          <div className="text-xl">120.00 $</div>
        </div>
        <div className="flex gap-5 justify-center mt-5 font-medium text-black max-md:flex-wrap max-md:max-w-full">
          <div className="text-lg">Total</div>
          <div className="text-xl">9240.00 $</div>
        </div>
        <button className="justify-center items-center px-16 py-4 mt-20 text-base tracking-wider text-white bg-black rounded-3xl border border-black border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full">
          Complete Order
        </button>
      </div>
    </div>
  );
}

export default MyComponent;