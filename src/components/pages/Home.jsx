import React from 'react'
import "../ProductCard.css";

function Home(props) {

    const products = [
        {
            id: 1,
            title: "Elegant Kurti",
            price: 2500,
            img: "https://www.gulahmedshop.com/cdn/shop/files/Printed-Lawn-Dupatta-Embroidered-Printed-Lawn-Shirt-Dyed-Trouser-Gulahmed-CL-62304-Front-White_jpg.jpg?v=1774868223",
        },
        {
            id: 2,
            title: "3 Piece Suit",
            price: 5800,
            img: "https://www.gulahmedshop.com/cdn/shop/files/CL-62198.jpg?v=1775717561",
        },
        {
            id: 3,
            title: "Lawn Collection",
            price: 3200,
            img: "https://www.gulahmedshop.com/cdn/shop/files/Printed-Lawn-Dupatta-Embroidered-Printed-Lawn-Shirt-Dyed-Trouser-Gulahmed-SD-52227-Front-White.jpg?v=1767679133",
        },
        {
            id: 4,
            title: "Casual Kurti",
            price: 2000,
            img: "https://www.gulahmedshop.com/cdn/shop/files/Printed-Lawn-Dupatta-Embroidered-Printed-Lawn-Shirt-Dyed-Trouser-Gulahmed-SD-52203-Front-White.jpg?v=1767679032",
        },
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
                        <img src="/images/bg-3.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/bg-2.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/bg-1.jpg" className="d-block w-100" alt="..." />
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



            {/* =======cards======== */}

            <div className="container py-5">
                <div className="row g-4">
                    {products.map((item) => (
                        <div className="col-md-3" key={item.id}>
                            <div className="card card-custom h-100">
                                <div className="box-img">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="card-img-top"
                                    />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>

                                    <p className="text-secondary">
                                        <i>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </i>
                                    </p>

                                    <p className="price">
                                        Rs. {item.price.toLocaleString()}
                                    </p>

                                    <button className="btn btn-brand w-100" onClick={() => props.setCount(props.count + 1)}>
                                        Add to Cart
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