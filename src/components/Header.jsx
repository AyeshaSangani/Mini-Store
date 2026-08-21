import { Link, Navigate } from 'react-router-dom'
import React, { useState } from 'react'
import './Header.css'

const Header = (props) => {


  const user = JSON.parse(localStorage.getItem("user"))

  const logoutUser = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")

    alert("Logout Successfully");
    <Navigate to="/login" />
    window.location.reload()
  }

  return (
    <>

      {/* Topbar */}
      <div className="topbar d-flex justify-content-between align-items-center px-4">
        <div className="topbar-left">
          <span className="me-3">
            <i className="fas fa-envelope me-2"></i> info@ministore.com
          </span>
          <span>
            <i className="fas fa-phone me-2"></i> +92 300 1234567
          </span>
        </div>

        <div className="topbar-right">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg custom-navbar px-4">
        <Link className="navbar-brand text-white fw-bold" to="">
          {props.title}
        </Link>

        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Center Links */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="shop">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">Contact Us</Link>
            </li>

          </ul>

          {/* Right Icons */}
          <div className="nav-icons">

            <div className="d-flex align-items-center">

              <Link to="cart" className="position-relative">
                <i className="fas fa-shopping-cart mx-2"></i>

                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {props.count} </span>
              </Link>

              {
                user ? (
                  <div className="dropdown btn btn-light dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">

                    <span className="me-2 fw-semibold text-dark text-uppercase"> Hellow! {user.fullname}</span>

                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <button className="dropdown-item text-info" onClick={logoutUser}>
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )
                  :
                  (
                    <Link to="login"><i className="fas fa-user mx-2"></i></Link>
                  )

              }

            </div>
          </div>
        </div>
      </nav>



    </>
  )
}

export default Header