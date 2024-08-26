import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ products }) => {
    const navigate = useNavigate();

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="product-section">
            <div className="product-box">
                {products.length === 0 ? (
                    <Skeleton count={3} height={250} width={200} />
                ) : (
                    products.map((elem) => (
                        <div
                            className="product-body"
                            key={elem.id}
                            onClick={() => handleProductClick(elem.id)}
                        >
                            <img src={elem.image} alt={elem.title} />
                            <div className="product-content">
                                <p className="product-title">
                                    {elem.title.slice(0, 20)}...
                                </p>
                                <h3 className="product-price">${elem.price}</h3>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Product;
