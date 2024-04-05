import React, { useEffect, useState } from "react";

function GeneralInformation({ onGeneralInfoChange }) {
    const [generalInfo, setGeneralInfo] = useState({
        on_hand_quantity: "",
        price: "",
        measurement: "",
        size:""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setGeneralInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value
        }));
    };

    useEffect(() => {
        console.log("General information updated:", generalInfo);
        // Call onGeneralInfoChange with the updated generalInfo
        onGeneralInfoChange(generalInfo);
    }, [generalInfo]); // Run this effect whenever generalInfo changes or onGeneralInfoChange changes

    return (
        <div className="flex flex-col pt-5 pb-12 mt-9 border border-solid border-zinc-200 max-md:max-w-full">
            <div className="flex gap-5 justify-between self-start ml-9 text-sm max-md:ml-2.5">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc2bd46ee9a6393a3646d5babaa1e16638bf0e41e721d2626a20cd19bcd3a073?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
                    alt="General information icon"
                    className="shrink-0 aspect-square w-[50px]"
                />
                <div className="flex flex-col my-auto">
                    <h2 className="font-bold text-black">General Information</h2>
                    <p className="mt-3 text-zinc-500">Fill all information below</p>
                </div>
            </div>
            <hr className="shrink-0 mt-5 h-px border border-solid bg-zinc-200 border-zinc-200 max-md:max-w-full" />
            <div className="flex flex-col pr-20 pl-10 mt-6 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-wrap max-md:mr-2 max-md:max-w-full">
                </div>
                <div className="flex gap-5 items-start mt-5 max-md:flex-wrap max-md:mr-2">
                    <div className="flex flex-col flex-1">
                        <label htmlFor="on_hand_quantity" className="text-sm font-bold text-black">
                            in_stock_quantity
                        </label>
                        <div className="flex flex-col justify-center mt-3.5">
                            <input
                                type="number"
                                id="on_hand_quantity"
                                name="on_hand_quantity"
                                value={generalInfo.on_hand_quantity}
                                onChange={handleInputChange}
                                className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300"
                                required />
                        </div>
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="price" className="text-sm font-bold text-black">
                            Price (฿)
                        </label>
                        <div className="flex flex-col justify-center mt-3">
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={generalInfo.price}
                                onChange={handleInputChange}
                                className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300"
                                required />
                        </div>
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="discount" className="text-sm font-bold text-black">
                            Measurement
                        </label>
                        <div className="flex flex-col justify-center mt-2.5">
                            <input
                                type="text"
                                id="measurement"
                                name="measurement"
                                value={generalInfo.measurement}
                                onChange={handleInputChange}
                                className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300"
                                required />
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 self-first mt-3.5 mr-14 text-xs text-black whitespace-nowrap max-md:mr-2.5">
                    <div className="flex flex-col flex-1 justify-center">
                        <label htmlFor="size" className="text-sm font-bold text-black">
                            Size
                        </label>
                        <select
                            id="size"
                            name="size"
                            value={generalInfo.size}
                            onChange={handleInputChange}
                            className="shrink-0 h-9 bg-white border-2 border-solid border-stone-300"
                            required
                        >
                            <option value="">Select Size</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="2XL">2XL</option>
                            <option value="3XL">3XL</option>
                            <option value="4XL">4XL</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GeneralInformation;
