
import React from "react";
import "./Home.css";

const Home = () => {
const products = [
  {
    id: 1,
    name: "Elegant Kurti",
    price: "2,500",
    img: "https://www.gulahmedshop.com/cdn/shop/files/TLP-52050.jpg?v=1775475821"
  },
  {
    id: 2,
    name: "3 Piece Suit",
    price: "5,800",
    img: "https://www.gulahmedshop.com/cdn/shop/files/ips-44144_1.jpg?v=1758378941"
  },
  {
    id: 3,
    name: "Regular Fit Co-Ord Set",
    price: "3,200",
    img: "https://www.gulahmedshop.com/cdn/shop/files/Salt-Women-Co-Ord-Set-Color-Est.Blue-50_-Cotton-50_-Viscose-Regular-Fit-WM-COD-SS26-UP35-Front.jpg?v=1775817703"
  },
  {
    id: 4,
    name: "Casual Kurti",
    price: "2,000",
    img: "https://www.gulahmedshop.com/cdn/shop/files/ripple_crinkle_embroidered_co-ord_set_ipst-44755_front.jpg?v=1758379236"
  }
];
const testimonials = [
  {
    name: "Emily Johnson",
    text: "Amazing quality and very fast delivery. Totally satisfied!",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Olivia Brown",
    text: "The fabric is really soft and the fitting is perfect.",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Sophia Williams",
    text: "Great prices and very trendy designs. Love the collection!",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    name: "Isabella Davis",
    text: "Really happy with my purchase. Will definitely shop again!",
    img: "https://randomuser.me/api/portraits/women/42.jpg",
  },
];

  return (
    <>
      {/* ================= HERO / BANNER ================= */}
      <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./images/b1" className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="./images/b2" className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="./images/b1" className="d-block w-100" alt="Slide 3" />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

      {/* ================= PRODUCTS ================= */}
     <section className="products py-5">
  <div className="container text-center">
    <h2 className="section-title mb-4">Featured Products</h2>

    <div className="row">
      {products.map((item) => (
        <div className="col-md-3 mb-4" key={item.id}>
          <div className="card product-card h-100">
            
            <img 
              src={item.img || "https://via.placeholder.com/300x350"} 
              alt={item.name} 
              className="card-img-top"
            />

            <div className="card-body text-center d-flex flex-column">
              <h5 className="card-title">{item.name || "Product Name"}</h5>

              <p className="price">Rs. {item.price || "0"}</p>

              <button 
  className="btn btn-cart mt-auto"
  onClick={() => console.log(item)}
>
  Add to Cart
</button>
            </div>

          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonials py-5">
        <div className="container text-center text-white">
          <h2 className="section-title">What Our Customers Say</h2>

          <div className="row">
            {testimonials.map((item, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="testimonial-card">
                  <img src={item.img} alt={item.name} />
                  <p>"{item.text}"</p>
                  <h6>- {item.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;