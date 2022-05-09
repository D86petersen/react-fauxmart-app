// Imports
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import {QuantityPicker} from 'react-qty-picker';
// Created an arrow function named ProductDetails that sets the state of the product and the loading state
const ProductDetails = () => {
  // used useParams to get the id from the url
  const { id } = useParams();
  // set the state of the product to an empty object
  const [product, setProduct] = useState([]);
  // set the state of the loading to false by default
  const [loading, setLoading] = useState(false);

  const { cart, setCart } = useContext(CartContext);
  
  const getPickerValue = (value) =>{
    product.quantity = value;
    
    console.log(product.quantity) // Here you can get the value of the Quantity picker
}

  // useEffect to get the product with the id from the products array
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);
  // Created a function name Loading that returns a loading message if the loading state is true
  const Loading = () => {
    return (
      <>
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-md-12 fs-1 mt-5">Loading.....</div>
          </div>
        </div>
      </>
    );
  };
  // Created a function name ShowProduct stylized with bootstrap that returns the product data if the loading state is false
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 mt-5 mb-5">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6 mt-5 mb-5">
          <h4 className="text-uppercase fw-bold text-black-50">
            {product.category}
          </h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating: {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <QuantityPicker  min={1} max={10} value={0} onChange={getPickerValue} smooth/>
          <br />
            
          {/*add to cart button with onclick that adds product to cart  */}
          <NavLink
            to="/cart"
            className="btn btn-outline-danger fw-bold px-4 py-2 mb-5 mt-1 ms-2"
            onClick={() => setCart([...cart, product])}
            id="box-shadow"
          >
            <i className="fa fa-shopping-cart me-1" aria-hidden="true"></i>
            Add to Cart
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default ProductDetails;
