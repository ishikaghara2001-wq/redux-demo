import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../feature/Cart/CartSlice.js";

const Card = ({
  id,
  image,
  title,
  price,
  description,
  category,
  rating,
  isCartPage,
}) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart?.cartItems || []);

  const cartItem = cartItems.find((item) => item.id === id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart({ id, title, price, image, rating }));
  };

  const handleIncrease = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeFromCart(id));
  };

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-2xl transition-all duration-300">
      {/* Image */}
      <figure className="bg-base-200 p-6 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-48 object-contain transition-transform duration-300 hover:scale-105"
        />
      </figure>

      {/* Content */}
      <div className="card-body">
        <p className="text-xs uppercase tracking-wide text-gray-500">
          {category}
        </p>

        <h2 className="card-title line-clamp-2 text-base">{title}</h2>

        <p className="text-sm text-gray-500 line-clamp-2">
          {description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="badge badge-warning gap-1 text-white">
            <Star size={14} fill="currentColor" />
            {rating?.rate ?? rating ?? "N/A"}
          </div>
        </div>

        {/* Footer */}
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-xl font-bold text-primary">
            ₹{price}
          </span>

          {isCartPage ? (
            <div className="flex items-center gap-2">
              <button
                onClick={handleDecrease}
                className="btn btn-sm btn-outline"
              >
                -
              </button>

              <span className="font-semibold min-w-[20px] text-center">
                {cartItem?.quantity || 1}
              </span>

              <button
                onClick={handleIncrease}
                className="btn btn-sm btn-outline"
              >
                +
              </button>

              <button
                onClick={handleRemove}
                className="btn btn-sm btn-error text-white"
              >
                Remove
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="btn btn-primary btn-sm"
            >
              <ShoppingCart size={16} />
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;