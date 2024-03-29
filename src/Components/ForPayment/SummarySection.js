import React from 'react';
import InputBar from './InputField';
import ProductItem from './Payment_Product';

const SummarySection = ({ products }) => {
    return (
        <div>
            <div style={{ position: 'relative' }}>
                <div className="shrink-0 mt-3 absolute top-0 border border-solid bg-black bg-opacity-30 border-black border-opacity-30 h-[859px]" style={{ left: '1rem' }} />
                <div className="flex flex-col max-md:max-w-full" style={{ marginLeft: '2rem' }}>
                    {products.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                    <form className="flex flex-col max-md:max-w-full">
                        <div className="flex flex-col max-md:flex-row gap-5 items-start mt-5">
                            <label htmlFor="discountCode" className="sr-only">
                                Discount Code
                            </label>
                            <input
                                type="text"
                                id="discountCode"
                                placeholder="Discount Code"
                                aria-label="Discount Code"
                                className="flex-1 px-3.5 py-4 bg-white rounded-3xl border border-black border-solid max-md:pr-5"
                            />
                            <button type="submit" className="text-xl bg-zinc-300 px-7 py-4 rounded-xl max-md:px-5">
                                Apply
                            </button>
                        </div>
                    </form>
                    <div className="flex justify-between gap-5 mt-12 max-md:max-w-full">
                        <div className="text-lg">Subtotal</div>
                        <div className="text-xl">1980.00 $</div>
                    </div>
                    <div className="flex justify-between gap-5 mt-6 max-md:max-w-full">
                        <div className="text-lg">Shipping</div>
                        <div className="text-xl">120.00 $</div>
                    </div>
                    <div className="flex justify-between gap-5 mt-5 font-medium max-md:max-w-full">
                        <div className="text-lg">Total</div>
                        <div className="text-xl">9240.00 $</div>
                    </div>
                    <button className="justify-center items-center px-16 py-4 mt-20 text-base tracking-wider text-white bg-black rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        Complete Order
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SummarySection;