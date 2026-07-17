import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { cartItems } = useSelector((state) => state.cart);

  const navLinkClass = ({ isActive }) =>
    `btn btn-sm ${
      isActive
        ? "btn-warning text-white"
        : "btn-ghost text-gray-700 hover:text-orange-500"
    }`;

  return (
    <header className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-4 md:px-8">
      {/* Left */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown md:hidden">
          <button
            tabIndex={0}
            className="btn btn-ghost"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {isOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NavLink to="/" onClick={() => setIsOpen(false)}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/product" onClick={() => setIsOpen(false)}>
                  Products
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" onClick={() => setIsOpen(false)}>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink to="/cart" onClick={() => setIsOpen(false)}>
                  Cart ({cartItems.length})
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-warning ml-2 md:ml-0"
        >
          ShopEase
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/product" className={navLinkClass}>
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end">
        <NavLink to="/cart" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <ShoppingCart className="h-5 w-5" />
            <span className="badge badge-sm badge-warning indicator-item text-white">
              {cartItems.length}
            </span>
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;