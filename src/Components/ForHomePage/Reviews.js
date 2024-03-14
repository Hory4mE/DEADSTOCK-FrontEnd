function Reviews() {
  return (
    <center>
      <section>
        <div className="flex gap-5 self-center mt-36 text-3xl font-medium tracking-widest text-black whitespace-nowrap max-md:flex-wrap max-md:mt-10">
          <div className="flex-auto my-auto">
            See our <span className="font-bold">96,450</span> reviews on{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ca8455edb1c721f6f997f100d32202d3239da33cccc1051e43775e44d4bb67c?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
              alt="Trustpilot logo"
              className="shrink-0 max-w-full aspect-[3.45] w-[177px]"
            />
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d928f55411deaa22de2747320504036cd0287697157d7db23bc8813f6df07ba?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
          alt="Reviews"
          className="mt-7 w-full aspect-[2.44] max-md:mr-1 max-md:max-w-full"
        />
      </section>
    </center>
  );
}

export default Reviews;
