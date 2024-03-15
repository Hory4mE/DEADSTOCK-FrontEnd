import * as React from "react";

function HeroSection() {
  return (
    <section className="flex relative flex-col justify-center items-start px-16 py-20 mix-blend-darken bg-black bg-opacity-50 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col mt-32 mb-28 ml-44 max-w-full w-[480px] max-md:my-10">
        <header className="text-3xl font-bold tracking-widest text-white max-md:max-w-full">
          <h1 className="text-4xl font-medium">
            Vintage Boutique Store Online
          </h1>
          <p className="text-lg font-medium">
            The all-in-one platform to buy & sell vintage and designer fashion securely.
          </p>
        </header>
        <button className="justify-center self-start px-10 py-3.5 mt-3.5 text-xs font-medium tracking-wide text-black whitespace-nowrap bg-white rounded-3xl max-md:px-5">
          SHOP NOW
        </button>
      </div>
    </section>
  );
}

export default HeroSection;