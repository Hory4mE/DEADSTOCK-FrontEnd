function OrderHistory() {

    //STATIC ORDERS
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

export default OrderHistory;