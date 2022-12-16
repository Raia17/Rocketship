import React from 'react';

type Product = {
  id: number;
  image: string;
  name: string;
  brand: string;
  price: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="relative h-64 w-full">
      <img className="absolute h-full w-full object-cover" src={product.image} alt={product.name} />
      <div className="absolute bottom-0 left-0 p-4">
        <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
        <p className="text-lg text-gray-600">{product.brand}</p>
        <p className="text-lg font-bold text-gray-800">{product.price}</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Shop Now</button>
      </div>
    </div>
  );
};

export default ProductCard;