import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Card from "../components/Card";
import Slider from "../components/Herosection";
import { fetchProducts } from "../feature/product/ProductSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="bg-base-100 min-h-screen">
      {/* Hero Slider */}
      <div className="mb-10">
        <Slider />
      </div>

      {/* Men's Clothing Section */}
      <section className="px-4 lg:px-8 mb-12">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold uppercase text-primary">
            Men's Clothing
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products
            ?.filter((item) => item.category === "men's clothing")
            .slice(0, 4)
            .map((item) => (
              <Link to="/product" key={item.id}>
                <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="card-body p-0">
                    <Card
                      id={item.id}
                      image={item.image}
                      title={item.title}
                      price={item.price}
                      descriptions={item.description}
                      category={item.category}
                      rating={item.rating}
                    />
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>

      {/* Top Rated Products */}
      <section className="px-4 lg:px-8 pb-12">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold uppercase text-secondary">
            Top Rated Products
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products
            ?.filter((item) => item.rating.rate > 4.1)
            .slice(0, 4)
            .map((item) => (
              <Link to="/product" key={item.id}>
                <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="card-body p-0">
                    <Card
                      id={item.id}
                      image={item.image}
                      title={item.title}
                      price={item.price}
                      descriptions={item.description}
                      category={item.category}
                      rating={item.rating}
                    />
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;