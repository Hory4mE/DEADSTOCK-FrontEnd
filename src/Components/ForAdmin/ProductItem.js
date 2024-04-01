import React from "react";

function ProductItem({ product }) {
  // Function to truncate description
  const truncateDescription = (description) => {
    if (description.length > 30) {
      return description.substring(0, 30) + "...";
    } else {
      return description;
    }
  };

  return (
    <>
      <td className="px-5 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src={product.image_url}
              alt={product.description}
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{product.product_name}</div>
            <div className="text-sm text-gray-500">{truncateDescription(product.description)}</div>
            <div className="text-sm text-gray-500">{product.size}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{product.in_stock_quantity}</td>
      <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
      <td className="px-6 py-4 whitespace-nowrap">...</td>
    </>
  );
}

export default ProductItem;
