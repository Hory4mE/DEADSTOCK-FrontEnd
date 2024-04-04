const DashboardIcon = () => (
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ef939b49a1d550b490f2a8e0da943aa9d1744a165c4f9c0646420eb0cb1b03a?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
    alt="Dashboard icon"
    className="shrink-0 w-3 aspect-[0.75]"
  />
);

const ProductsIcon = () => (
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fe7c0773ee1537a25652d9ae0807dc3c16a7af71392a7a8b293022b59d548c2?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
    alt="Products icon"
    className="shrink-0 self-stretch w-6 aspect-square"
  />
);

const OrdersIcon = () => (
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d436954de593ec919b21d217bc0d246be46f30701546ac1c3e383bef3069af0?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
    alt="Orders icon"
    className="shrink-0 w-6 aspect-square"
  />
);

const NavItem = ({ icon, label }) => (
  <div className="flex gap-3.5 justify-center my-auto">
    {icon}
    <div>{label}</div>
  </div>
);

const NavItemWithArrow = ({ icon, label }) => (
  <div className="flex gap-2 items-center">
    {icon}
    <div className="self-stretch my-auto">{label}</div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7558c4cefed73594ff68341bb6a240dd068f0be3f9ea57827c7d650a7a0475e2?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
      alt=""
      className="shrink-0 self-stretch my-auto w-3 border-2 border-black border-solid aspect-[2] stroke-[2px] stroke-black"
    />
  </div>
);

function AdminNav() {
    return (
        <header className="flex flex-col justify-center w-full text-xl text-black whitespace-nowrap max-md:max-w-full">
        <nav className="flex gap-5 px-20 py-5 w-full bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <NavItem icon={<DashboardIcon />} label="Dashboard" />
          <NavItemWithArrow icon={<ProductsIcon />} label="Products" />
          <NavItem icon={<OrdersIcon />} label="Orders" />
        </nav>
      </header>
    )
}


export default AdminNav;