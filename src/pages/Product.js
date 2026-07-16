import React, { useEffect } from "react";
import Card from "../components/Card.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../feature/product/ProductSlice.js";

const Product = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-base-200">
      {/* Header */}
      <div className="hero bg-base-100 shadow-sm">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-4xl font-bold text-primary uppercase">
              Fakestore
            </h1>
            <p className="py-2 text-base-content/70">
              Browse all available products
            </p>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto p-4">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products?.map((item) => (
            <Link
              to={`/products/${item.id}`}
              key={item.id}
              className="hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="card bg-base-100 shadow-xl h-full">
                <figure className="p-4 bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-52 object-contain"
                  />
                </figure>

                <div className="card-body">
                  <div className="badge badge-secondary w-fit">
                    {item.category}
                  </div>

                  <h2 className="card-title text-sm line-clamp-2">
                    {item.title}
                  </h2>

                  <p className="text-sm text-base-content/70 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-primary">
                      ${item.price}
                    </span>

                    <div className="badge badge-outline">
                      ⭐ {item.rating?.rate}
                    </div>
                  </div>

                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary btn-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;