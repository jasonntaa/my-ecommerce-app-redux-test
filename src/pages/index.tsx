import type { NextPage } from "next";

import { products, Product } from "@/lib/products";

import { ProductItem } from "../app/components/ProductItem";

import { HeaderCartIcon } from "../app/components/HeaderCartIcon";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">ShopHub</h1>
          <HeaderCartIcon />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
