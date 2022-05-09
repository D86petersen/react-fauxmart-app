import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {NavLink} from 'react-router-dom';

// created a function called cart that uses context to get the cart state
const Cart = () => {
  const { cart } = useContext(CartContext);
  // created variable of subTotal and set it to 0
  let subTotal = 0;
  // used for loop to do calculations on the cart 
  for (let i = 0; i < cart.length; i++) {
    subTotal += cart[i].price*cart[i].quantity;
  }
// returning the cart state
if (cart.length === 0) {
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-3 fw-bolder text-center text-shadow-navlinks">
              Cart
            </h1>
            <hr />
          </div>
        </div>
        </div>
        
    <div className="container">
      <div className="row">
        <div className="col-md-8 mb-5 mx-auto col-md-8 text-center text-title text-uppercase">
          <h1 className="display-3 mb-3">Your cart is currently empty</h1>
          </div>
          <div className="col-md-12 text-center text-title text-uppercase mb-5">
          <NavLink to="/products" className=" btn btn-danger fw-bold fs-3">Please click here to view products page</NavLink>
          </div>
        </div>  
      </div>
      </div>
  )
}
else {
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-3 fw-bolder text-center text-shadow-navlinks">
              Cart
            </h1>
            <hr />
          </div>
        </div>
        {cart.map((item, index) => (
          <div className="container p-5">
            <div className="row">
              <div className="col-md-2" key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  height="100px"
                  width="100px"
                />
              </div>
              <div className="col-md-8">
                <h4 className="text-uppercase fw-bold text-black">
                  {item.title}
                </h4>
                <p className="lead fw-bolder">Price: ${(item.price).toFixed(2)} </p>
                <p className="lead fw-bold">Quantity: {item.quantity}</p>
              </div>
              <div className="col-md-2 d-flex justify-content-end  mt-5 mb-5" id="cartsubtotal">
                ${(item.price*item.quantity).toFixed(2)}
              </div>
            </div>
          </div>
        ))}
        <div className="container border-top p-5">
          <div className="row d-flex">
            <div className="col-md-12 text-end fs-3 fw-bold d-flex flex-column align-items-end">
              <hr />
              Subtotal: ${subTotal.toFixed(2)}
              <NavLink to="/checkout" className="btn btn-danger col-md-2 fw-bold justify-content-end mt-3">Checkout</NavLink>
              </div>
              </div>
              </div>
              
      </div>
      
    </div>
  );
};
}
export default Cart;
