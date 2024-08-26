import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addTocart, Decrement } from "../../redux/Slice/cardSlice";
import "./SingleProduct.css";

const SingleProduct = () => {
    const dispatch = useDispatch();
    const [singleProduct, setSingleProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const selectedItem = useSelector((state) =>
        state.cart.find((item) => item.id === parseInt(id))
    );


    useEffect(() => {
        const getSingleProduct = async () => {
            try {
                const res = await axios.get(
                    `https://fakestoreapi.com/products/${id}`
                );
                setSingleProduct(res.data);
            } catch (error) {
                console.error("Error fetching the single product:", error);
            } finally {
                setLoading(false);
            }
        };
        getSingleProduct();
    }, [id]);

    const handleIncrement = () => {
        const { id, title, image, rating, price } = singleProduct;
        dispatch(addTocart({ id, title, image, rating, price }));
    };

    const handleDecrement = () => {
        const { id } = singleProduct;
        dispatch(Decrement({ id }));
    };

    return (
        <div className="product-single">
            <div className="single-product-body">
                {loading ? (
                    <div className="single-product-content">
                        <Skeleton height={300} width={300} />
                        <div className="product-right-desc">
                            <Skeleton width={`80%`} height={30} />
                            <Skeleton count={3} />
                            <div className="btn-group">
                                <Skeleton width={60} height={40} />
                                <Skeleton width={120} height={40} />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="single-product-content">
                        <img
                            className="product-image"
                            src={singleProduct.image}
                            alt={singleProduct.title}
                        />
                        <div className="product-right-desc">
                            <h1>{singleProduct.title}</h1>
                            <br />
                            <p className="product-desc">
                                {singleProduct.description.slice(0, 30)}...
                            </p>
                            <br />
                            <div className="btn-group">
                                
                                <div className="right-btn">
                                    <button
                                        className="button"
                                        onClick={handleIncrement}
                                    >
                                        Shop now
                                        
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SingleProduct;
