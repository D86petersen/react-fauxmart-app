// Imports
import React from "react";
import { NavLink } from "react-router-dom";
// Created Home Component that contains background image and Header text and Products Component
const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          alt="hero"
          height="700px"
        />
        <div className="card-img-overlay d-flex justify-content-center flex-column ">
            <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0 text-shadow" >New Arrivals For The Season</h5>
          <p className="card-text fs-2 text-shadow">
           Check out our Summer deals
          </p>
          <NavLink to="/products" className="btn btn-danger fs-3 fw-bold py-2 px-5">Shop Now!</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
