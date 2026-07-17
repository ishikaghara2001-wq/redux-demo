import React from "react";

const About = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      {/* Hero Section */}
      <div className="hero bg-neutral text-neutral-content py-20">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Our Store
            </h1>
            <p className="text-lg opacity-80">
              We provide high-quality products at the best prices with fast
              delivery and secure payments.
            </p>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df"
          alt="Our Store"
          className="rounded-2xl shadow-xl w-full"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>

          <p className="text-base-content/70 mb-4">
            Founded with a mission to simplify online shopping, our store has
            grown into a trusted ecommerce platform serving thousands of
            customers worldwide.
          </p>

          <p className="text-base-content/70">
            We believe in quality, affordability, and customer satisfaction.
            Every product is carefully selected to ensure you get the best
            value.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-base-100 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-2xl">Our Mission</h3>

              <p className="text-base-content/70">
                To provide customers with a seamless shopping experience and
                deliver products that enhance everyday life.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-2xl">Our Vision</h3>

              <p className="text-base-content/70">
                To become a globally recognized ecommerce brand known for
                innovation, trust, and customer-first service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
            <div className="card-body items-center text-center">
              <h4 className="card-title text-xl">Fast Delivery</h4>

              <p className="text-base-content/70">
                Quick and reliable shipping across the country.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
            <div className="card-body items-center text-center">
              <h4 className="card-title text-xl">Secure Payments</h4>

              <p className="text-base-content/70">
                100% secure payment options with full buyer protection.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
            <div className="card-body items-center text-center">
              <h4 className="card-title text-xl">24/7 Support</h4>

              <p className="text-base-content/70">
                Our support team is always ready to help you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;