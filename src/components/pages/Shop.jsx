import React, { } from "react";
import { useEffect, useState } from "react";
import "./Shop.css"

function Shop() {

  const [product, setProduct] = useState([])

  useEffect(() => {

    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(data => { setProduct(data) })

  }, [])

  console.log(product);

  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/b1" className="d-block w-100" alt="..." />
          </div>

        </div>


      </div>

      <div className="container p-5">

        <div className="product-heading p-5 text-center">
          <h1>
            <u> Our Feature Product </u>
          </h1>

          <hr />
        </div>


        <div className="show-products row justify-content-center">


    
        {
          product.map((item)=>(

              <div className="col-md-3 mb-3" key={item.id} >
            <div className="card" style={{ width: "14rem" }}>
              <div className="box box1">
                <img src={item.image} className="card-img-top" alt="..." />
              </div>

              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>

                <p className="card-text">{item.category}</p>

                <p className="card-text"><b><span>Rs.</span>{item.price}</b></p>

                <a href="#" className="btn btn-warning"> Add To Cart </a>
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
