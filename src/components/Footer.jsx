import React from 'react'
import './Footer.css'



const Footer = (props) => {
  return (
    <>

  <section className="footer-top py-2">
  <div className="container d-flex justify-content-between align-items-center">

    <p className="mb-0 text-light small">
      Follow us for latest fashion updates:
    </p>

    <div className="social-icons d-flex gap-3">
      <a href="#"><i className="fab fa-facebook-f"></i></a>
      <a href="#"><i className="fab fa-instagram"></i></a>
      <a href="#"><i className="fab fa-twitter"></i></a>
      <a href="#"><i className="fab fa-linkedin-in"></i></a>
    </div>

  </div>
</section>


<footer className="footer">

  <div className="container py-5">
    <div className="row">

      {/* Column 1 */}
      <div className="col-md-3 mb-4">
        <h5 className="footer-title">👕 ECOMMERCE MINI STORE</h5>
        <p className="footer-text">
          Premium collection of Office Shirts, Casual T-Shirts, and Denim Jeans.
          Elevate your everyday fashion with comfort and style.
        </p>
      </div>

      {/* Column 2 */}
      <div className="col-md-3 mb-4">
        <h6 className="footer-heading">CATEGORIES</h6>
        <ul className="footer-links">
          <li><a href="#">Office Shirts</a></li>
          <li><a href="#">T-Shirts</a></li>
          <li><a href="#">Denim Jeans</a></li>
          <li><a href="#">New Arrivals</a></li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="col-md-3 mb-4">
        <h6 className="footer-heading">CUSTOMER CARE</h6>
        <ul className="footer-links">
          <li><a href="#">My Account</a></li>
          <li><a href="#">Orders</a></li>
          <li><a href="#">Shipping</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>

      {/* Column 4 */}
      <div className="col-md-3 mb-4">
        <h6 className="footer-heading highlight">CONTACT</h6>

        <p className="footer-contact">
          <i className="fas fa-map-marker-alt me-2"></i> Karachi, Pakistan
        </p>

        <p className="footer-contact">
          <i className="fas fa-envelope me-2"></i> support@stylewear.com
        </p>

        <p className="footer-contact">
          <i className="fas fa-phone me-2"></i> +92 300 1234567
        </p>
      </div>

    </div>
  </div>

  <div className="footer-bottom text-center py-3">
    © 2026 StyleWear | All Rights Reserved
  </div>

</footer>
    </>

  )
}

export default Footer

