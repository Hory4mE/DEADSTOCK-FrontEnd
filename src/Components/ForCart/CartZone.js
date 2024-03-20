import React from "react";

const CartZone = ({ items }) => {
  items = [
    // ลบทิ้งถ้ามีข้อมูลมาแทนแล้ว
    {
      id: 1,
      name: "Vintage T-Shirt",
      size: "L",
      price: 1799.99,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6a259e885fcf42171c345c322c7db06acc8ab6cea9804a402360ba0eef368d46?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
    {
      id: 2,
      name: "Leather Jacket",
      size: "XL",
      price: 3538.99,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/51c5ed47f82482e0d472498bcc1e725e6f0d4ff314415adfdb16af68e173ef86?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
    {
      id: 3,
      name: "Denim Jeans",
      size: "M",
      price: 1589.97,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3af186bee0e96b7e4e1ca0863a03ae08876653c347feeb5ff29b80be383e39dc?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
    },
  ];

    // Function to handle item removal
    const handleRemoveItem = (itemId) => {
      // Send request to remove item from cart (example: API call)
      // For this example, let's just filter out the item locally
      const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
      setCartItems(updatedCartItems);
    };
  

  // Check if items is not defined or not an array
  if (!items || !Array.isArray(items) || items.length === 0) {
    return (
      <div className="flex flex-col bg-white">
        <div className="flex flex-col pb-20 w-full text-sm tracking-wider max-md:max-w-full"></div>
        <main className="flex flex-col self-center px-5 mt-4 w-full max-w-[1181px] max-md:max-w-full">
          <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col">
              <h1 className="text-4xl text-black">Your cart</h1>
              <div className="mt-16 text-lg text-black text-opacity-60 max-md:mt-10">
                Your Cart is Empty
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Calculate total price of items in the cart
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div className="flex flex-col bg-white">
      {/* Your cart header and total UI */}
      <main className="flex flex-col self-center px-5 mt-4 w-full max-w-[1181px] max-md:max-w-full">
        <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col w-full">
            <h1 className="text-4xl text-black mb-4">Your cart</h1>
            <div className="flex flex-col">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="mt-4 text-lg text-black text-opacity-60 max-md:mt-3 flex items-center"
                >
                  <img
                    loading="lazy"
                    src={item.imageUrl}
                    alt={item.name}
                    className="shrink-0 max-w-full aspect-[0.83] w-[108px]"
                  />
                  <div className="ml-4 flex flex-col">
                    <span>
                      <strong>
                        {item.name} ({item.size})
                      </strong>{" "}
                      - {item.price.toFixed(2)} ฿
                    </span>
                    <span className="mt-1">
                      Quantity: 1 <span className="mx-2">| </span>
                      {/* Clickable bin icon */}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9f6ee43231a571b35f4c7e108b332ddf15bf79c386b6cde035bdefee2234cdd?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
                        alt=""
                        className="shrink-0 my-auto w-7 aspect-[0.9] cursor-pointer"
                        onClick={() => handleRemoveItem(item.id)}
                      />
                    </span>
                  </div>
                  <div className="ml-auto flex flex-col items-end">
                    <span>Price: {item.price.toFixed(2)} ฿</span>
                  </div>
                </div>
              ))}
            </div>
            <hr className="mt-4 mb-2 border border-solid border-gray-300" />
            <div className="self-end mt-4 text-xl text-black max-md:mt-3">
              Subtotal {totalPrice.toFixed(2)} ฿
            </div>
            <div className="flex flex-col justify-center self-end mt-4 max-w-full text-base tracking-wider text-white w-[379px]">
              <button className="justify-center items-center px-16 py-4 bg-black rounded-3xl border border-black border-solid max-md:px-5">
                Check out
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartZone;
