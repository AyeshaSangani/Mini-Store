import React from 'react'

import "../ProductCard.css";

function Home(props) {


    const products = [
        {
            id: 1,
            title: "Elegant Kurti",
            price: "Rs. 2,500",
            img: "https://www.gulahmedshop.com/cdn/shop/files/Printed-Lawn-Dupatta-Embroidered-Printed-Lawn-Shirt-Dyed-Trouser-Gulahmed-CL-62304-Front-White_jpg.jpg?v=1774868223"
        },
        {
            id: 2,
            title: "3 Piece Suit",
            price: "Rs. 5,800",
            img: "https://www.gulahmedshop.com/cdn/shop/files/CL-62198.jpg?v=1775717561"
        },
        {
            id: 3,
            title: "Lawn Collection",
            price: "Rs. 3,200",
            img: "https://www.gulahmedshop.com/cdn/shop/files/Printed-Lawn-Dupatta-Embroidered-Printed-Lawn-Shirt-Dyed-Trouser-Gulahmed-SD-52227-Front-White.jpg?v=1767679133"
        },
        {
            id: 4,
            title: "Casual Kurti",
            price: "Rs. 2,000",
            img: "https://www.gulahmedshop.com/cdn/shop/files/Printed-Lawn-Dupatta-Embroidered-Printed-Lawn-Shirt-Dyed-Trouser-Gulahmed-SD-52203-Front-White.jpg?v=1767679032"
        }
    ];

    return (

        <>



            {/* banner */}

            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/bg-1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/bg-2.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/bg-3.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            {/* ============ */}

            <div className="container py-5">

                <div className="row">

                    {products.map((product) => (

                        <div className="col-lg-3 col-md-6 mb-4" key={product.id}>

                            <div className="card card-custom h-100">

                                <img
                                    src={product.img}
                                    className="card-img-top"
                                    alt={product.title}
                                    style={{
                                        height: "300px",
                                        objectFit: "cover"
                                    }}
                                />

                                <div className="card-body text-center">

                                    <h5 className="card-title">
                                        {product.title}
                                    </h5>

                                    <h6 className="price">
                                        {product.price}
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

                    ))}

                </div>

            </div>






        </>





    )
}

export default Home