import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../feature/Cart/CartSlice";

const ProductDetailsView = ({
  id,
  image,
  title,
  price,
  description,
  rating,
  category,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        title,
        price,
        image,
      }),
    );
  };

  const originalPrice = price + 50;
  const discount = Math.round(
    ((originalPrice - price) / originalPrice) * 100,
  );

  return (
    <div className="bg-base-200 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto card bg-base-100 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8">
          {/* LEFT - IMAGE SECTION */}
          <div className="flex flex-col items-center">
            <figure className="w-full bg-base-200 rounded-2xl p-6">
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="w-full max-h-[420px] object-contain hover:scale-105 transition duration-300"
              />
            </figure>

            <div className="flex gap-4 mt-8 w-full">
              <button
                onClick={handleAddToCart}
                className="btn btn-warning w-1/2 text-white"
              >
                🛒 Add to Cart
              </button>

              <button className="btn btn-secondary w-1/2 text-white">
                ⚡ Buy Now
              </button>
            </div>
          </div>

          {/* RIGHT - DETAILS SECTION */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold leading-snug">{title}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-4">
              <div className="badge badge-success badge-lg text-white p-4">
                {rating.rate} ★
              </div>

              <span className="text-sm opacity-70">
                {rating.count} Ratings & 230 Reviews
              </span>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-center flex-wrap gap-3">
              <span className="text-4xl font-bold">₹{price}</span>

              <span className="text-lg line-through opacity-60">
                ₹{originalPrice}
              </span>

              <span className="text-success font-semibold text-lg">
                {discount}% off
              </span>
            </div>

            <p className="text-success text-sm mt-2 font-medium">
              + ₹40 Secured Packaging Fee
            </p>

            <div className="divider"></div>

            {/* Offers */}
            <div className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h3 className="card-title text-lg">
                  🎁 Available Offers
                </h3>

                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-success font-bold">✔</span>
                    Bank Offer 10% off on ICICI Bank Cards
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-success font-bold">✔</span>
                    Special Price Get extra ₹2000 off
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-success font-bold">✔</span>
                    No Cost EMI starting from ₹2,500/month
                  </li>
                </ul>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold capitalize mb-3">
                {category}
              </h3>

              <p className="leading-relaxed text-sm opacity-80">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsView;