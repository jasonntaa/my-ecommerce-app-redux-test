import type { NextPage } from "next";

import { HeaderCartIcon } from "../app/components/HeaderCartIcon";
import { useAppSelector, useAppDispatch } from "@/lib/store/hooks";
import { removeItem } from "@/lib/store/cartslice";

const CartPage: NextPage = () => {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const total = items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <a
            href="/"
            className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            ShopHub
          </a>
          <HeaderCartIcon />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
            <p className="text-gray-600 mb-4">Your cart is empty</p>
            <a
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-md transition-colors"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-200">
              {items.map((item) => (
                <div key={item.id} className="p-5 relative flex flex-col">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className=" text-right">
                      <p className="text-xs text-gray-500">
                        ${item.price.toFixed(2)} each
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => dispatch(removeItem(item.id))}
                      className="border text-sm p-2 bg-blue-600 text-white rounded-xl mt-4"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Total</h3>
                <p className="text-2xl font-bold text-gray-900">
                  ${total.toFixed(2)}
                </p>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors mb-3">
                Checkout
              </button>

              <a
                href="/"
                className="block text-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Continue Shopping
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CartPage;
