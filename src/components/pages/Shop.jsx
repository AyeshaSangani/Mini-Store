import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./shop.css";

function Shop(props) {

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {

    fetch("https://fakestoreapi.com/products/")
      .then(res => res.json())
      .then(data => setProducts(data));

  }, []);



  const addToCart = (product) => {

    localStorage.setItem(
      "cart",
      JSON.stringify(product)
    );

    navigate("/checkout");

  };



  return (
    <>

      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >

        <div className="carousel-inner">

          <div className="carousel-item active">

            <img
              src="/images/productbanner.jpg"
              className="d-block w-100"
              alt="banner"
            />

          </div>

        </div>

      </div>



      <div className="container py-5">


        <div className="product-heading text-center mb-5">

          <h2>
            <b>
              <u>OUR FEATURED PRODUCTS</u>
            </b>
          </h2>

        </div>



        <div className="row">


          {
            products.map((item) => (

              <div
                className="col-lg-3 col-md-6 mb-4"
                key={item.id}
              >

                <div className="card card-custom h-100">


                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                    style={{
                      height: "300px",
                      objectFit: "cover"
                    }}
                  />



                  <div className="card-body text-center">


                    <h5 className="card-title">
                      {item.title.slice(0, 25)}
                    </h5>


                    <p className="card-text">
                      {item.category}
                    </p>


                    <h6 className="price">
                      Rs. {item.price}
                    </h6>



                    <button
                      className="btn btn-brand w-100 mt-2"
                      onClick={() => props.setCount(props.count + 1)}
                    >
                      Add To Cart
                    </button>


                  </div>


                </div>


              </div>

            ))
          }


        </div>


      </div>


    </>
  );
}

export default Shop;




































// import React, { useEffect, useState } from 'react'
// import './shop.css'

// function Shop() {

//   const [product, setProduct] = useState([])

//   useEffect(() => {

//     fetch('https://fakestoreapi.com/products/')
//       .then(res => res.json())
//       .then(data => { setProduct(data) })


//   }, [])

//   console.log(product);





//   return (
//     <>
//       <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src="/images/productbanner.jpg" className="d-block w-100" alt="pbanner" />
//           </div>

//         </div>
//       </div>

//       <div className="container p-5">

//         <div className="product-heading p-5 text-center">
//           <h2><b><u>OUR FEATURED PRODUCTS</u></b></h2>
//         </div>

//         <div className="show-products row justify-content-center">

//           {

//             product.map((item) => (

//               <div className="col-md-3 mb-3" key={item.id}>
//                 <div className="card" style={{ width: '14rem' }}>
//                   <div className="box box1">
//                     <img src={item.image} className="card-img-top" alt="..." />
//                   </div>
//                   <div className="card-body">
//                     <h5 className="card-title">{item.title}</h5>
//                     <p className="card-text">{item.category}</p>
//                     <p className="card-text"><b>Rs. <span>{item.price}</span></b></p>

//                     <a href="#" className="btn btn-warning">Add to Cart</a>
//                   </div>
//                 </div>
//               </div>


//             ))





//           }

//         </div>


//       </div>

//     </>
//   )
// }

// export default Shop