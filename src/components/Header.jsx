import { Link } from 'react-router-dom'
import React from 'react'
import './Header.css'


const Header = (props) => {
  return (
    <>
    

        {/* Topbar */}
      <div className="topbar py-2 px-3 p-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="topbar-left">
            <small>
              <i className="fas fa-envelope me-2"></i> info@example.com
              <span className="mx-3">|</span>
              <i className="fas fa-phone me-2"></i> +123 456 7890
            </small>
          </div>

          <div className="topbar-right">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="">{props.title}</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="shop">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="usestate">Use State</Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to="useeffect">Use Effect</Link>
              </li>
              

            </ul>

            {/* Right Icons */}
            <div className="nav-icons">
              <Link to="cart"><i className="fas fa-shopping-cart"></i></Link>
              <Link to="login"><i className="fas fa-user"></i></Link>
            </div>
          </div>
        </div>
      </nav>

 

    
    </>
  )
}

export default Header   

