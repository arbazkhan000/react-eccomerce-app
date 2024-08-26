import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ filterItem }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            const res = await axios.get(
                `https://fakestoreapi.com/products/category/${filterItem}`
            );
            setProducts(res.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [filterItem]);

    const navigate = useNavigate();
    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="product-section">
            <div className="product-box">
                {loading ? (
                    <>
                        <Skeleton height={250} width={200} />
                        <Skeleton height={250} width={200} />
                        <Skeleton height={250} width={200} />
                    </>
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
