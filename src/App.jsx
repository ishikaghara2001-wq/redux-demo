import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Product from "./pages/Product.js";
import Contact from "./pages/Contact.js";
import ProductDetails from "./pages/ProductDetails.js";
import Cart from "./pages/Cart.js";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;