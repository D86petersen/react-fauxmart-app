// Imports
import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
// Created NavBar component with bootstrap styling that
const Navbar = () => {
  // imported context 
  const { cart } = useContext(CartContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light py-3 bg-white shadow-lg">
        <div className="container">
          <NavLink
            className="navbar-brand fw-bold fs-1 text-danger text-shadow"
            to="/"
          >
            FauxMart
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-4 text-shadow-navlinks fw-bold">
              <li className="nav-item text-shadow-navlinks">
                <NavLink className="nav-link ms-5" aria-current="page" to="/" id="text-transition">
                  Home
                </NavLink>
              </li>
              <li className="nav-item text-shadow-navlinks" >
                <NavLink className="nav-link ms-5" to="/products" id="text-transition">
                  Products
                </NavLink>
              </li>
              <li className="nav-item text-shadow-navlinks">
                <NavLink className="nav-link ms-5" to="/about" id="text-transition">
                  About
                </NavLink>
              </li>
              <li className="nav-item text-shadow-navlinks">
                <NavLink className="nav-link ms-5" to="/contact" id="text-transition">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink
                to="/login"
                className="btn btn-outline-danger fw-bold"
                id="box-shadow"
              >
                {" "}
                <i className="fa fa-sign-in me-1" aria-hidden="true"></i> Log-in
              </NavLink>
              <NavLink
                to="/register"
                className="btn btn-outline-danger fw-bold ms-2"
                id="box-shadow"
              >
                {" "}
                <i className="fa fa-user-plus me-1" aria-hidden="true"></i>{" "}
                Register
              </NavLink>
              <NavLink
                to="/cart"
                className="btn btn-outline-danger fw-bold ms-2"
                id="box-shadow"
              >
                {" "}
                <i
                  className="fa fa-shopping-cart me-1"
                  aria-hidden="true"
                ></i>{" "}
                Cart ({cart.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
