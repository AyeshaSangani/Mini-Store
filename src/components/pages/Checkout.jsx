import React from "react";
import "./checkout.css";
import { Navigate } from "react-router-dom";

function Checkout() {

  const user = JSON.parse(localStorage.getItem("user"))

  if(!user){
    
    return <Navigate to="/shop"/>
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">

        {/* Left Side */}
        <div className="checkout-form">

          <h1>Checkout</h1>
          <p className="subtitle">
            Complete your order with Cash on Delivery
          </p>

          <div className="card">
            <h3>Shipping Information</h3>

            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input type="text" placeholder="+92 300 1234567" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="example@gmail.com" />
            </div>

            <div className="input-group">
              <label>Address</label>
              <textarea placeholder="House No, Street, City"></textarea>
            </div>

            <div className="grid">
              <div className="input-group">
                <label>City</label>
                <input type="text" />
              </div>

              <div className="input-group">
                <label>Postal Code</label>
                <input type="text" />
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Payment Method</h3>

            <div className="payment-method active">
              <div>
                <h4>💵 Cash on Delivery</h4>
                <p>Pay when your order arrives at your doorstep.</p>
              </div>

              <span className="selected">Selected</span>
            </div>
          </div>

        </div>

        {/* Right Side */}
        <div className="summary">

          <div className="summary-card">

            <h2>Order Summary</h2>

            <div className="product">
              <img
                src="https://via.placeholder.com/80"
                alt=""
              />

              <div>
                <h4>Wireless Headphones</h4>
                <p>Qty: 1</p>
              </div>

              <span>$120</span>
            </div>

            <div className="line"></div>

            <div className="price">
              <span>Subtotal</span>
              <span>$120</span>
            </div>

            <div className="price">
              <span>Shipping</span>
              <span>$10</span>
            </div>

            <div className="price total">
              <span>Total</span>
              <span>$130</span>
            </div>

            <button className="place-order">
              Place Order
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Checkout;