// Imports
import React from "react";
import { NavLink } from "react-router-dom";
// Created Home Component that contains background image and Header text and Products Component
const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/bg2.jpg"
          className="card-img"
          alt="hero"
          height="800px"
        />
        <div className="card-img-overlay d-flex justify-content-center flex-column ">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder text-danger mb-0 text-shadow">
              Summer Time Is Upon Us
            </h5>
            <p className="card-text fs-1 text-shadow">
              Check out our <span className="text-danger fw-bold display-3">NOT REAL</span> deals!
            </p>
            <NavLink
              to="/products"
              className="btn btn-danger fs-3 fw-bold py-2 px-5 mt-1" id="box-shadow"
            >
              Shop Now!
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
