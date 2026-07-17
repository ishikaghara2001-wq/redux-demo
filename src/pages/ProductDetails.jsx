import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import ProductDetailsView from "../components/ProductDetailsView";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../feature/product/ProductSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const singleProduct = products.find(
    (item) => item.id === Number(id)
  );

  // Prevent error before product loads
  const relatedProducts = products?.filter(
    (item) =>
      singleProduct &&
      item.category === singleProduct.category &&
      item.id !== singleProduct.id
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!singleProduct) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="alert alert-error shadow-lg w-fit">
          <span>Product not found</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-base-100 min-h-screen">
      {/* Product Details */}
      <div className="container mx-auto px-4 py-6">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <ProductDetailsView
              id={singleProduct.id}
              title={singleProduct.title}
              image={singleProduct.image}
              price={singleProduct.price}
              rating={singleProduct.rating}
              category={singleProduct.category}
              description={singleProduct.description}
            />
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="container mx-auto px-4 pb-10">
        <h1 className="text-3xl font-bold text-center text-primary mb-8 uppercase">
          Related Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts?.slice(0, 3).map((item) => (
            <Link to={`/products/${item.id}`} key={item.id}>
              <div className="card bg-base-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="card-body">
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
      </div>
    </div>
  );
};

export default ProductDetails;