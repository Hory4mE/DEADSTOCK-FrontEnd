import * as React from "react";

const DashboardIcon = () => (
  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ef939b49a1d550b490f2a8e0da943aa9d1744a165c4f9c0646420eb0cb1b03a?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&" alt="Dashboard icon" className="shrink-0 w-3 aspect-[0.75]" />
);

const ProductsIcon = () => (
  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fe7c0773ee1537a25652d9ae0807dc3c16a7af71392a7a8b293022b59d548c2?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&" alt="Products icon" className="shrink-0 self-stretch w-6 aspect-square" />
);

const OrdersIcon = () => (
  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d436954de593ec919b21d217bc0d246be46f30701546ac1c3e383bef3069af0?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&" alt="Orders icon" className="shrink-0 w-6 aspect-square" />
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
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7558c4cefed73594ff68341bb6a240dd068f0be3f9ea57827c7d650a7a0475e2?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&" alt="" className="shrink-0 self-stretch my-auto w-3 border-2 border-black border-solid aspect-[2] stroke-[2px] stroke-black" />
  </div>
);

const OrderCard = ({ title, value, borderColor, bgColor }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow justify-center text-black max-md:mt-6">
      <div className="flex flex-col justify-center px-4 py-6 w-full bg-white rounded-xl border border-solid border-stone-300 border-opacity-50">
        <div className={`flex gap-5 justify-between items-start pr-px pb-8 pl-3 bg-white border-${borderColor} border-solid border-l-[5px]`}>
          <div className="flex flex-col">
            <div className="text-sm">{title}</div>
            <div className="mt-5 text-2xl font-bold">{value}</div>
          </div>
          <div className={`shrink-0 w-10 h-10 bg-${bgColor} rounded-xl`} />
        </div>
      </div>
    </div>
  </div>
);

const OrderRow = ({ id, customerName, productName, amount, orderDate, deliveryDate, paymentMethod, status }) => (
  <div className="flex gap-5 justify-between px-10 py-5 w-full bg-white border border-solid border-stone-300 border-opacity-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
    <div className="flex gap-5 justify-between self-start mt-1">
      <div>{id}</div>
      <div>{customerName}</div>
      <div>{productName}</div>
    </div>
    <div className="flex gap-5 justify-between self-start">
      <div>{amount}</div>
      <div>{orderDate}</div>
      <div>{deliveryDate}</div>
    </div>
    <div className="my-auto">{paymentMethod}</div>
    <div className="flex gap-5 justify-between whitespace-nowrap">
      <div className={`justify-center px-7 py-1 my-auto ${status === 'PENDING' ? 'bg-orange-100' : status === 'CANCELLED' ? 'bg-red-300' : 'bg-teal-100'} rounded-md max-md:px-5`}>
        {status}
      </div>
      <div className="flex flex-col justify-center items-center w-5 h-5 bg-violet-50 rounded-md">
        <div className="flex z-10 flex-col justify-center">
          <div className="flex flex-col py-2.5 w-5 h-5 bg-violet-50 rounded-md">
            <div>...</div>
            <div>...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const orderData = [
  {
    id: 'TBT11',
    customerName: 'Richard Jenkins',
    productName: 'Stussy T-shirt',
    amount: '฿203.65',
    orderDate: '08 Oct, 2021',
    deliveryDate: '24 Oct, 2021',
    paymentMethod: 'Visa',
    status: 'PENDING',
  },
  {
    id: 'TBT11',
    customerName: 'Richard Jenkins',
    productName: 'Afork-1',
    amount: '฿203.65',
    orderDate: '08 Oct, 2021',
    deliveryDate: '24 Oct, 2021',
    paymentMethod: 'Visa',
    status: 'CANCELLED',
  },
  {
    id: 'TBT11',
    customerName: 'Richard Jenkins',
    productName: 'Carhatt jackets',
    amount: '฿203.65',
    orderDate: '08 Oct, 2021',
    deliveryDate: '24 Oct, 2021',
    paymentMethod: 'Visa',
    status: 'CANCELLED',
  },
  {
    id: 'TBT11',
    customerName: 'Richard Jenkins',
    productName: 'Sweater 1980',
    amount: '฿203.65',
    orderDate: '08 Oct, 2021',
    deliveryDate: '24 Oct, 2021',
    paymentMethod: 'Visa',
    status: 'DELIVERED',
  },
  {
    id: 'TBT11',
    customerName: 'Richard Jenkins',
    productName: 'Double knee',
    amount: '฿203.65',
    orderDate: '08 Oct, 2021',
    deliveryDate: '24 Oct, 2021',
    paymentMethod: 'Visa',
    status: 'CANCELLED',
  },
  {
    id: 'TBT11',
    customerName: 'Richard Jenkins',
    productName: 'watch patlek',
    amount: '฿203.65',
    orderDate: '08 Oct, 2021',
    deliveryDate: '24 Oct, 2021',
    paymentMethod: 'Visa',
    status: 'DELIVERED',
  },
];

function MyComponent() {
  return (
    <div className="flex flex-col pb-11 bg-white">
      <header className="flex flex-col justify-center w-full text-xl text-black whitespace-nowrap max-md:max-w-full">
        <nav className="flex gap-5 px-20 py-5 w-full bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <NavItem icon={<DashboardIcon />} label="Dashboard" />
          <NavItemWithArrow icon={<ProductsIcon />} label="Products" />
          <NavItem icon={<OrdersIcon />} label="Orders" />
        </nav>
      </header>
      <main className="flex flex-col px-12 mt-10 w-full max-md:px-5 max-md:max-w-full">
        <section className="ml-3.5 max-w-full w-[976px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <OrderCard title="NEW ORDERS" value="200.32k" borderColor="indigo-100" bgColor="indigo-100" />
            <OrderCard title="PENDING ORDERS" value="35.21k" borderColor="blue-100" bgColor="blue-100" />
            <OrderCard title="DELIVERED ORDERS" value="647.32k" borderColor="orange-100" bgColor="orange-100" />
          </div>
        </section>
        <section className="flex flex-col justify-center mt-10 text-xs text-black max-md:max-w-full">
          <div className="flex flex-col pb-6 bg-white rounded-xl border border-solid border-stone-300 border-opacity-50 max-md:max-w-full">
            <div className="flex gap-5 justify-between px-8 py-6 w-full text-sm font-bold rounded-xl border border-solid bg-slate-100 border-stone-300 border-opacity-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 self-start">
                <div>Order ID </div>
                <div className="flex-auto">Customer Name</div>
                <div>Product Name</div>
              </div>
              <div className="flex gap-5 justify-between">
                <div>Amount</div>
                <div>Order Date</div>
                <div>Delivery Date</div>
              </div>
              <div className="flex gap-5">
                <div className="flex-auto">Payment Method</div>
                <div className="flex-auto">Delivery Status</div>
                <div>Action</div>
              </div>
            </div>
            {orderData.map((order, index) => (
              <OrderRow key={index} {...order} />
            ))}
            <div className="flex gap-3 self-end mt-6 mr-11 text-xs whitespace-nowrap max-md:mr-2.5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ff6b4b321c330d05ff03e5e13163d4c961eb8bc6781db0130d7eb204f01d967?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&" alt="" className="shrink-0 rounded-md border border-solid aspect-[1.08] border-stone-300 border-opacity-50 w-[27px]" />
              <div className="justify-center py-2.5 bg-blue-500 rounded-md border border-solid border-stone-300 border-opacity-50">
                1
              </div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/233c19cf87b30dcf8e5138d30e6180b30e482292e6f659b50d37245f4830de15?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&" alt="" className="shrink-0 rounded-md border border-solid aspect-[1.04] border-stone-300 border-opacity-50 w-[26px]" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MyComponent;