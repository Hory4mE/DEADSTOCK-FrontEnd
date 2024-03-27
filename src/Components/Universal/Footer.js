function Footer() {
  return (
    <footer className="flex flex-col items-center px-16 py-16 mt-24 w-full text-black bg-stone-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="mt-8 text-3xl font-bold tracking-widest">DEADSTOCK</div>
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
      </div>
    </footer>
  );
}

export default Footer;
