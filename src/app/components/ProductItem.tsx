import React from "react";

import { Product } from "@/lib/products";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "@/lib/store/hooks";
import { addToCart } from "@/lib/store/cartslice";

interface ProductItemProps {
  product: Product;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    console.log("Adding to cart: ", product.name);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {product.name}
      </h3>

      <p className="text-2xl font-bold text-blue-600 mb-4">
        ${product.price.toFixed(2)}
      </p>

      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2.5 rounded-md transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};
