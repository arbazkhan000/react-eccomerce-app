import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, Decrement } from "../../redux/Slice/cardSlice";
import "./Cart.css";

const Cart = () => {
    const dispatch = useDispatch();
    const selectedItem = useSelector((state) => state.cart);

    const handleIncrement = (product) => {
        dispatch(addTocart(product));
    };

    const handleDecrement = (id) => {
        dispatch(Decrement({ id }));
    };

    const calculateSubtotal = () => {
        return selectedItem
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2);
    };

    return (
        <>
            <div className="card-container">
                <div className="master-container">
                    <div className="card cart">
                     

                        {selectedItem.length === 0 ? (
                            <div className="empty-cart">
                                <p className="empty-text">Your cart is empty</p>
                            </div>
                        ) : (
                            <div className="products">
                                {selectedItem.map((product) => (
                                    <div className="product" key={product.id}>
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            width={60}
                                            height={60}
                                        />
                                        <div>
                                            <p className="product-title">
                                                {product.title}
                                            </p>
                                        </div>
                                        <div className="quantity">
                                            <label
                                                className="quantity-label"
                                                onClick={() =>
                                                    handleDecrement(product.id)
                                                }
                                                disabled={product.quantity <= 1}
                                            >
                                                <FaMinus size={20} />
                                            </label>
                                            <label>{product.quantity}</label>
                                            <label
                                                className="quantity-label"
                                                onClick={() =>
                                                    handleIncrement(product)
                                                }
                                            >
                                                <FaPlus size={20} />
                                            </label>
                                        </div>
                                        <label className="price small">
                                            ${product.price.toFixed(2)}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {selectedItem.length > 0 && (
                        <div className="card checkout">
                            <div className="details">
                                <span>Your cart subtotal:</span>
                                <span className="price">
                                    ${calculateSubtotal()}
                                </span>
                            </div>
                            <div className="checkout--footer">
                                <label className="price">
                                    <sup>$</sup>
                                    {calculateSubtotal()}
                                </label>
                                <button className="checkout-btn">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;
