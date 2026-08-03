import React, { useState } from "react";
import "./Checkout.css";

function Checkout() {
    const product = JSON.parse(localStorage.getItem("cart"));

    const shipping = 249;

    const [paymentMethod, setPaymentMethod] = useState("cod");

    const price = product
        ? Number(product.price.replace(/[^0-9]/g, "").replace(/,/g, ""))
        : 0;

    const total = price + shipping;

    if (user) {

        return <Navigate to="/shop" />
    }


    return (
        <div className="checkout-page py-5">
            <div className="container">
                <div className="row">

                    {/* LEFT */}

                    <div className="col-lg-8">

                        <h1 className="checkout-heading">
                            Checkout
                        </h1>

                        <p className="text-muted mb-4">
                            Complete your order
                        </p>

                        <div className="checkout-card p-4">

                            <h2 className="section-title">
                                Shipping Information
                            </h2>

                            <div className="row mt-4">

                                <div className="col-md-6 mb-3">
                                    <label>First Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Ali"
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Last Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Ahmed"
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Email</label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        placeholder="example@gmail.com"
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Phone</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="+92 300 1234567"
                                    />
                                </div>

                                <div className="col-12 mb-3">
                                    <label>Address</label>

                                    <textarea
                                        rows="4"
                                        className="form-control"
                                        placeholder="House No, Street, City"
                                    ></textarea>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Province</label>

                                    <select className="form-select">
                                        <option>Select Province</option>
                                        <option>Punjab</option>
                                        <option>Sindh</option>
                                        <option>KPK</option>
                                        <option>Balochistan</option>
                                        <option>Islamabad</option>
                                    </select>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>City</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Karachi"
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Postal Code</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="74000"
                                    />
                                </div>

                            </div>

                            <hr />

                            <h4 className="payment-title">
                                Payment Method
                            </h4>

                            <div className="payment-box">
                                <label className="payment-option">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cod"
                                        checked={paymentMethod === "cod"}
                                        onChange={(e) =>
                                            setPaymentMethod(e.target.value)
                                        }
                                    />
                                    <span className="ms-2">
                                        Cash On Delivery (COD)
                                    </span>
                                </label>
                            </div>

                            <div className="payment-box">
                                <label className="payment-option">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="payfast"
                                        checked={paymentMethod === "payfast"}
                                        onChange={(e) =>
                                            setPaymentMethod(e.target.value)
                                        }
                                    />
                                    <span className="ms-2">
                                        PAYFAST (Debit / Credit Card / Wallet / Bank)
                                    </span>
                                </label>
                            </div>

                            <div className="payment-box">
                                <label className="payment-option">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="alfalah"
                                        checked={paymentMethod === "alfalah"}
                                        onChange={(e) =>
                                            setPaymentMethod(e.target.value)
                                        }
                                    />
                                    <span className="ms-2">
                                        Alfalah Payment Gateway
                                    </span>
                                </label>
                            </div>

                            <div className="payment-box">
                                <label className="payment-option">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="baadmay"
                                        checked={paymentMethod === "baadmay"}
                                        onChange={(e) =>
                                            setPaymentMethod(e.target.value)
                                        }
                                    />
                                    <span className="ms-2">
                                        BaadMay | Buy Now, Pay Later
                                    </span>
                                </label>
                            </div>

                            {/* <div className="payment-box">
                                <label className="payment-option">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="jazzcash"
                                        checked={paymentMethod === "jazzcash"}
                                        onChange={(e) =>
                                            setPaymentMethod(e.target.value)
                                        }
                                    />
                                    <span className="ms-2">
                                        JazzCash
                                    </span>
                                </label>
                            </div> */}

                            {/* <div className="payment-box">
                                <label className="payment-option">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="easypaisa"
                                        checked={paymentMethod === "easypaisa"}
                                        onChange={(e) =>
                                            setPaymentMethod(e.target.value)
                                        }
                                    />
                                    <span className="ms-2">
                                        EasyPaisa
                                    </span>
                                </label>
                            </div> */}

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="col-lg-4">

                        <div className="summary-card p-4">

                            <h2 className="summary-title">
                                Order Summary
                            </h2>

                            {product && (
                                <>
                                    <div className="product-box">
                                        <img
                                            src={product.img}
                                            alt=""
                                        />

                                        <div>
                                            <h5>{product.title}</h5>

                                            <p>
                                                Qty : 1
                                            </p>

                                            <h6>
                                                {product.price}
                                            </h6>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="d-flex justify-content-between">
                                        <span>Subtotal</span>

                                        <span>
                                            Rs. {price}
                                        </span>
                                    </div>

                                    <div className="d-flex justify-content-between mt-2">
                                        <span>Shipping</span>

                                        <span>
                                            Rs. {shipping}
                                        </span>
                                    </div>

                                    <hr />

                                    <div className="d-flex justify-content-between total">
                                        <strong>Total</strong>

                                        <strong>
                                            Rs. {total}
                                        </strong>
                                    </div>

                                    <button className="place-btn mt-4">
                                        Place Order
                                    </button>
                                </>
                            )}

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Checkout;






















// import React, { useState } from "react";
// import { Navigate } from "react-router-dom";
// import "./Checkout.css";

// function Checkout() {

//     // Check Login
//     const user = JSON.parse(localStorage.getItem("user"));

//     if (!user) {
//         return <Navigate to="/shop" />;
//     }

//     // Check Cart
//     const product = JSON.parse(localStorage.getItem("cart"));

//     if (!product) {
//         return <Navigate to="/shop" />;
//     }

//     const shipping = 249;

//     const [paymentMethod, setPaymentMethod] = useState("cod");

//     const price = Number(product.price);

//     const total = price + shipping;

//     return (
//         <div className="checkout-page py-5">
//             <div className="container">
//                 <div className="row">

//                     {/* LEFT */}

//                     <div className="col-lg-8">

//                         <h1 className="checkout-heading">
//                             Checkout
//                         </h1>

//                         <p className="text-muted mb-4">
//                             Complete your order
//                         </p>

//                         <div className="checkout-card p-4">

//                             <h2 className="section-title">
//                                 Shipping Information
//                             </h2>

//                             <div className="row mt-4">

//                                 <div className="col-md-6 mb-3">
//                                     <label>First Name</label>
//                                     <input
//                                         className="form-control"
//                                         type="text"
//                                         placeholder="Ali"
//                                     />
//                                 </div>

//                                 <div className="col-md-6 mb-3">
//                                     <label>Last Name</label>
//                                     <input
//                                         className="form-control"
//                                         type="text"
//                                         placeholder="Ahmed"
//                                     />
//                                 </div>

//                                 <div className="col-md-6 mb-3">
//                                     <label>Email</label>
//                                     <input
//                                         className="form-control"
//                                         type="email"
//                                         placeholder="example@gmail.com"
//                                     />
//                                 </div>

//                                 <div className="col-md-6 mb-3">
//                                     <label>Phone</label>
//                                     <input
//                                         className="form-control"
//                                         type="text"
//                                         placeholder="+92 300 1234567"
//                                     />
//                                 </div>

//                                 <div className="col-12 mb-3">
//                                     <label>Address</label>

//                                     <textarea
//                                         rows="4"
//                                         className="form-control"
//                                         placeholder="House No, Street, City"
//                                     ></textarea>
//                                 </div>

//                                 <div className="col-md-6 mb-3">
//                                     <label>Province</label>

//                                     <select className="form-select">
//                                         <option>Select Province</option>
//                                         <option>Punjab</option>
//                                         <option>Sindh</option>
//                                         <option>KPK</option>
//                                         <option>Balochistan</option>
//                                         <option>Islamabad</option>
//                                     </select>
//                                 </div>

//                                 <div className="col-md-6 mb-3">
//                                     <label>City</label>

//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         placeholder="Karachi"
//                                     />
//                                 </div>

//                                 <div className="col-md-6 mb-3">
//                                     <label>Postal Code</label>

//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         placeholder="74000"
//                                     />
//                                 </div>

//                             </div>

//                             <hr />

//                             <h4 className="payment-title">
//                                 Payment Method
//                             </h4>

//                             <div className="payment-box">
//                                 <label className="payment-option">
//                                     <input
//                                         type="radio"
//                                         name="payment"
//                                         value="cod"
//                                         checked={paymentMethod === "cod"}
//                                         onChange={(e) =>
//                                             setPaymentMethod(e.target.value)
//                                         }
//                                     />
//                                     <span className="ms-2">
//                                         Cash On Delivery (COD)
//                                     </span>
//                                 </label>
//                             </div>

//                             <div className="payment-box">
//                                 <label className="payment-option">
//                                     <input
//                                         type="radio"
//                                         name="payment"
//                                         value="payfast"
//                                         checked={paymentMethod === "payfast"}
//                                         onChange={(e) =>
//                                             setPaymentMethod(e.target.value)
//                                         }
//                                     />
//                                     <span className="ms-2">
//                                         PAYFAST (Debit / Credit Card / Wallet / Bank)
//                                     </span>
//                                 </label>
//                             </div>

//                             <div className="payment-box">
//                                 <label className="payment-option">
//                                     <input
//                                         type="radio"
//                                         name="payment"
//                                         value="alfalah"
//                                         checked={paymentMethod === "alfalah"}
//                                         onChange={(e) =>
//                                             setPaymentMethod(e.target.value)
//                                         }
//                                     />
//                                     <span className="ms-2">
//                                         Alfalah Payment Gateway
//                                     </span>
//                                 </label>
//                             </div>

//                             <div className="payment-box">
//                                 <label className="payment-option">
//                                     <input
//                                         type="radio"
//                                         name="payment"
//                                         value="baadmay"
//                                         checked={paymentMethod === "baadmay"}
//                                         onChange={(e) =>
//                                             setPaymentMethod(e.target.value)
//                                         }
//                                     />
//                                     <span className="ms-2">
//                                         BaadMay | Buy Now, Pay Later
//                                     </span>
//                                 </label>
//                             </div>

//                         </div>

//                     </div>

//                     {/* RIGHT */}

//                     <div className="col-lg-4">

//                         <div className="summary-card p-4">

//                             <h2 className="summary-title">
//                                 Order Summary
//                             </h2>

//                             <div className="product-box">
//                                 <img
//                                     src={product.image}
//                                     alt={product.title}
//                                 />

//                                 <div>
//                                     <h5>{product.title}</h5>

//                                     <p>
//                                         Qty : 1
//                                     </p>

//                                     <h6>
//                                         Rs. {price}
//                                     </h6>
//                                 </div>
//                             </div>

//                             <hr />

//                             <div className="d-flex justify-content-between">
//                                 <span>Subtotal</span>

//                                 <span>
//                                     Rs. {price}
//                                 </span>
//                             </div>

//                             <div className="d-flex justify-content-between mt-2">
//                                 <span>Shipping</span>

//                                 <span>
//                                     Rs. {shipping}
//                                 </span>
//                             </div>

//                             <hr />

//                             <div className="d-flex justify-content-between total">
//                                 <strong>Total</strong>

//                                 <strong>
//                                     Rs. {total}
//                                 </strong>
//                             </div>

//                             <button className="place-btn mt-4">
//                                 Place Order
//                             </button>

//                         </div>

//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Checkout;







