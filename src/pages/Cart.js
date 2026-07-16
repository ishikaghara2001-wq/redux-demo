import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card.js";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-10 py-5">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold uppercase">Cart</h1>
        <div className="divider"></div>
      </div>

      {/* Empty Cart */}
      {cartItems.length === 0 ? (
        <div className="hero bg-base-200 rounded-box py-10">
          <div className="hero-content text-center">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Your cart is empty 🛒
              </h2>
              <p className="text-base-content/70">
                Add some products to continue shopping.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Product Grid */}
          <div
            className="
              grid gap-5
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {cartItems.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
                isCartPage={true}
              />
            ))}
          </div>

          {/* Summary */}
          <div className="card bg-base-200 shadow-md mt-10">
            <div className="card-body">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                {/* Item Count */}
                <div className="stat p-0">
                  <div className="stat-title">Items</div>
                  <div className="stat-value text-primary text-2xl">
                    {cartItems.length}
                  </div>
                </div>

                {/* Total Price */}
                <div className="stat p-0 text-center sm:text-right">
                  <div className="stat-title">Total Price</div>
                  <div className="stat-value text-secondary text-2xl">
                    ₹{totalPrice.toFixed(2)}
                  </div>
                </div>

                {/* Checkout Button */}
                <button className="btn btn-warning text-white w-full sm:w-auto">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;