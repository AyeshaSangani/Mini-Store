import React from 'react'
import './Contact.css'

function Contact() {
  return (
   <>
   
     {/* ================= BANNER ================= */}
      <section className="contact-banner">
        <div className="overlay"></div>

        
        <img
          src="./images/banner.webp"
          alt="banner"
          className="banner-img"
        />

        <div className="banner-content">
          <h1>CONTACT US</h1>
          <p>We would love to hear from you</p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="contact-section py-5">
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT SIDE */}
            <div className="col-lg-5 mb-5 mb-lg-0">

              <span className="contact-tag">GET IN TOUCH</span>

              <h2 className="contact-heading">
                Let's Talk About Your Shopping Experience
              </h2>

              <p className="contact-text">
                Have questions about products, delivery, payments, or support?
                Our team is always ready to help you with your orders and feedback.
              </p>

              {/* INFO BOXES */}

              <div className="info-box">
                <div className="icon-box">
                  <i className="fas fa-envelope"></i>
                </div>

                <div>
                  <h5>Email Address</h5>
                  <p>support@stylewear.com</p>
                </div>
              </div>

              <div className="info-box">
                <div className="icon-box">
                  <i className="fas fa-phone-alt"></i>
                </div>

                <div>
                  <h5>Phone Number</h5>
                  <p>+92 300 1234567</p>
                </div>
              </div>

              <div className="info-box">
                <div className="icon-box">
                  <i className="fas fa-map-marker-alt"></i>
                </div>

                <div>
                  <h5>Location</h5>
                  <p>Karachi, Pakistan</p>
                </div>
              </div>

              {/* SOCIAL ICONS */}
              <div className="social-links mt-4">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="col-lg-7">

              <div className="contact-form-wrapper">

                <h2 className="form-title">Send Feedback</h2>

                <form>

                  <div className="row">

                    <div className="col-md-6 mb-4">
                      <input
                        type="text"
                        className="form-control custom-input"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <input
                        type="email"
                        className="form-control custom-input"
                        placeholder="Your Email"
                      />
                    </div>

                  </div>

                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="mb-4">
                    <textarea
                      rows="6"
                      className="form-control custom-input"
                      placeholder="Write Your Message..."
                    ></textarea>
                  </div>

                  <button className="contact-btn">
                    Send Message
                  </button>

                </form>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="map-section">

        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.2499967073116!2d67.00113617536661!3d24.86073424535088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e0f1c0d1f45%3A0x403c4331d9f6bb5f!2sKarachi!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      </section>
   
   </>
  )
}

export default Contact