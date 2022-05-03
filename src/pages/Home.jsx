// Imports
import React from "react";
import Products from "../components/Products";
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
           Check out our online only deals
          </p>
          
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
