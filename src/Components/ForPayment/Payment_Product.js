function Payment_Product({ product }) {
    return (
        <div className="flex gap-2 self-start text-lg">
            <img src={product.image} alt={product.name} className="shrink-0 max-w-full aspect-[0.9] w-[126px]" />
            <div className="flex flex-col flex-1 self-start mt-6">
                <div className="text-black">{product.name}</div>
                <div className="mt-3.5 text-black text-opacity-50">{product.size}</div>
            </div>
        </div>
    );
}

export default Payment_Product;