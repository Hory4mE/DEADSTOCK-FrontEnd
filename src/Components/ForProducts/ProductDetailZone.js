function ProductDetails() {
  return (
    <center>
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
    </center>
  );
}

export default ProductDetails;
