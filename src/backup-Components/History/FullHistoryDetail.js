import * as React from "react";


function PriceRow({ label, value }) {

    return (
        <div className="flex justify-between">
            <div>{label}</div>
            <div>{value}</div>
        </div>);
}
function FullHistoryDetail() {

    //STATIC PRICE DATA
    const priceData = [
        { label: "Subtotal", value: "50.89฿ THB" },
        { label: "VAT 7 %", value: "10.00฿ THB" },
        { label: "Shipping", value: "0.00฿ THB" },
        { label: "Total", value: "60.89฿ THB" },];


    return (
        <section className="flex flex-auto gap-5 justify-between self-start px-8 py-6 mx-5 text-sm font-medium text-black bg-white border-r border-b border-l border-solid border-zinc-400 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col gap-5"> <PriceRow label={priceData[0].label} value={priceData[0].value} />
                <PriceRow label={priceData[1].label} value={priceData[1].value} />
                <PriceRow label={priceData[2].label} value={priceData[2].value} />
                <PriceRow label={priceData[3].label} value={priceData[3].value} />
            </div>
            <div className="flex flex-col gap-5"> <div>{priceData[0].value}</div>
                <div>{priceData[1].value}</div> <div>{priceData[2].value}</div>
                <div className="text-xl">{priceData[3].value}</div>
            </div>
        </section>);
}

export default FullHistoryDetail;