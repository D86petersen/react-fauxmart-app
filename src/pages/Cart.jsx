import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";

// created a function called cart that uses context to get the cart state
const Cart = (item) => {
  const { cart, setCart } = useContext(CartContext);
  // created variable of subTotal and set it to 0
  let subTotal = 0;
  // used for loop to do calculations on the cart
  for (let i = 0; i < cart.length; i++) {
    subTotal += cart[i].price * cart[i].quantity;
  }
  
  // returning the cart state
  if (cart.length === 0) {
    return (
      <div>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12 mb-5">
              <h1 className="display-3 fw-bolder text-center text-danger text-shadow-navlinks">
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
              <NavLink
                to="/products"
                className=" btn btn-danger fw-bold fs-3"
                id="box-shadow"
              >
                Please click here to view products page
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="container text-danger my-5 py-5">
          <div className="row">
            <div className="col-12 mb-5">
              <h1 className="display-3 fw-bolder text-center text-danger text-shadow-navlinks">
                Cart
              </h1>
              <hr />
            </div>
          </div>
          {cart.map((item, index) => (
            <div className="container p-5">
              <div className="row border border-3 p-3" id="box-shadow">
                <div className="col-md-2" key={index}>
                  <img
                    className="img-fluid mt-2"
                    src={item.image}
                    alt={item.title}
                    height="100px"
                    width="100px"
                  />
                </div>
                <div className="col-md-8">
                  <h4 className="text-uppercase fw-bold text-black mt-2">
                    {item.title}
                  </h4>
                  <p className="lead fw-bold">
                    Price: ${item.price.toFixed(2)}{" "}
                  </p>
                  <p className="lead fw-bold">Quantity: {item.quantity}</p>
                  <button
                    className="btn btn-danger"
                    id="box-shadow"
                    onClick={() => {
                      setCart(cart.filter((cartItem) => cartItem.id !== item.id));
                    }
                  }
                  >
                    Remove from cart
                  </button>
                </div>
                <div
                  className="col-md-2 d-flex justify-content-end fs-3 mt-5 mb-5"
                  id="cartsubtotal"
                >
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
          <div className="container border-top p-5">
            <div className="row d-flex">
              <div className="col-md-12 text-end fs-2 fw-bold d-flex flex-column align-items-end">
                <hr />
                Subtotal: ${subTotal.toFixed(2)}
                <NavLink
                  to="/checkout"
                  className="btn btn-danger col-md-2 fw-bold justify-content-end mt-3"
                  id="box-shadow"
                >
                  Checkout
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Cart;
