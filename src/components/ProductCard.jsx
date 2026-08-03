import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

function ProductCard(props) {

    const navigate = useNavigate();

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

    // Add To Cart
    const addToCart = (product) => {
        localStorage.setItem("cart", JSON.stringify(product));
        navigate("/checkout");
    };

    return (
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
                                    {product.price.tolocalstring()}
                                </h6>

                                <button
                                    className="btn btn-brand w-100 mt-2"
                                    onClick={() => addToCart(product)}
                                >
                                    Add To Cart
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default ProductCard;
