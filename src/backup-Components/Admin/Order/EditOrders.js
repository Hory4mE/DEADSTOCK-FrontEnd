import * as React from "react";

function EditOrderForm() {
  return (
    <form className="flex flex-col px-3.5 w-full text-xs text-black">
      <h2 className="text-sm font-bold">Edit Order</h2>
      <label htmlFor="orderId" className="mt-6">
        Order ID
      </label>
      <input
        type="text"
        id="orderId"
        value="#TBT11"
        readOnly
        className="justify-center items-start px-3.5 py-3 mt-1.5 whitespace-nowrap bg-white rounded-md border border-solid border-stone-300"
      />
      <label htmlFor="customerName" className="mt-5">
        Customer Name
      </label>
      <input
        type="text"
        id="customerName"
        value="Richard Jenkins"
        readOnly
        className="justify-center items-start px-3.5 py-3 mt-1.5 bg-white rounded-md border border-solid border-stone-300"
      />
    </form>
  );
}

function CategorySelect() {
  return (
    <div className="flex flex-col pl-3.5">
      <label htmlFor="category" className="justify-center self-start text-xs font-medium whitespace-nowrap text-zinc-800">
        Category
      </label>
      <div className="flex gap-5 justify-between items-start px-4 py-2.5 mt-1 text-sm text-black bg-white rounded-lg border border-solid border-stone-300">
        <div className="justify-center">T-Shirt</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8329510fd488410c1594bef3023de35a8c6f87e0517b717f56a4941f7949c8a2?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
          alt=""
          className="shrink-0 mt-1.5 w-3 border border-black border-solid aspect-[2] stroke-[1.4px] stroke-black"
        />
      </div>
    </div>
  );
}

function OrderDetails() {
  return (
    <div className="flex gap-5 mt-4 text-xs text-black">
      <div className="flex flex-col flex-1 px-5">
        <label htmlFor="orderDate">Order Date</label>
        <input
          type="text"
          id="orderDate"
          value="08 Oct, 2021"
          readOnly
          className="justify-center items-start px-4 py-2.5 mt-1.5 bg-white rounded-md border border-solid border-stone-300"
        />
        <label htmlFor="amount" className="mt-5">
          Amount
        </label>
        <input
          type="text"
          id="amount"
          value="฿203.65"
          readOnly
          className="justify-center items-start px-3.5 py-2.5 mt-1.5 whitespace-nowrap bg-white rounded-md border border-solid border-stone-300"
        />
      </div>
      <div className="flex flex-col flex-1 px-5">
        <label htmlFor="deliveryDate">Delivery Date</label>
        <input
          type="text"
          id="deliveryDate"
          value="24 Oct, 2021"
          readOnly
          className="justify-center items-start px-3 py-2.5 mt-1 bg-white rounded-md border border-solid border-stone-300"
        />
        <label htmlFor="paymentMethod" className="mt-5">
          Payment Method
        </label>
        <input
          type="text"
          id="paymentMethod"
          value="Visa"
          readOnly
          className="justify-center items-start p-3 whitespace-nowrap bg-white rounded-md border border-solid border-stone-300"
        />
      </div>
    </div>
  );
}

function DeliveryStatus() {
  return (
    <div className="flex z-10 flex-col py-1.5 pl-3.5 mt-2.5 -mb-2 text-xs">
      <label htmlFor="deliveryStatus" className="justify-center self-start text-black">
        Delivery Status
      </label>
      <div className="flex gap-5 justify-between items-start px-4 py-2.5 mt-1.5 text-sm text-black whitespace-nowrap bg-white rounded-lg border border-solid border-stone-300">
        <div className="justify-center">PENDING</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8329510fd488410c1594bef3023de35a8c6f87e0517b717f56a4941f7949c8a2?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
          alt=""
          className="shrink-0 mt-1.5 w-3 border border-black border-solid aspect-[2] stroke-[1.4px] stroke-black"
        />
      </div>
    </div>
  );
}

function EditOrderActions() {
  return (
    <div className="flex gap-5 justify-between self-end mt-5 whitespace-nowrap">
      <button type="button" className="my-auto text-red-400">
        close
      </button>
      <button type="submit" className="flex flex-col justify-center text-white">
        <div className="justify-center px-5 py-1.5 bg-blue-500 rounded-md">Update</div>
      </button>
    </div>
  );
}

function EditOrder() {
  return (
    <div className="flex flex-col justify-center max-w-[370px]">
      <div className="flex flex-col pt-8 pb-2 w-full bg-white rounded-xl">
        <EditOrderForm />
        <div className="flex flex-col py-0.5 mt-4 w-full">
          <CategorySelect />
          <OrderDetails />
          <DeliveryStatus />
          <EditOrderActions />
        </div>
      </div>
    </div>
  );
}

export default EditOrder;