export default function AdminNav() {

    return (
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
    );
};
