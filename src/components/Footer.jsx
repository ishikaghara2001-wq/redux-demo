import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal bg-neutral text-neutral-content p-10">
      <div className="max-w-7xl mx-auto w-full">
        {/* Grid Section */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Logo & About */}
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white mb-3">
              ShopEase
            </h2>
            <p className="text-sm leading-relaxed">
              Your one-stop shop for the best products at unbeatable prices.
              Fast delivery and secure payments guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="link link-hover">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" className="link link-hover">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="link link-hover">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link link-hover">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="text-center sm:text-left">
            <h3 className="footer-title">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li className="link link-hover">FAQ</li>
              <li className="link link-hover">Returns</li>
              <li className="link link-hover">Privacy Policy</li>
              <li className="link link-hover">Terms & Conditions</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h3 className="footer-title">Subscribe</h3>

            <p className="text-sm mb-4">
              Get updates about new products and offers.
            </p>

            {/* DaisyUI Input Group */}
            <div className="join w-full flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered join-item w-full text-black"
              />

              <button className="btn btn-warning join-item">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-300 mt-10 pt-5 text-center text-sm">
          © {new Date().getFullYear()} ShopKart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;