import React, { useEffect, useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [scroll, setScroll] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const selectItem = useSelector((state) => state.cart);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`main-header ${scroll ? "sticky-header" : ""}`}>
                <div className="header-contant">
                    <ul className="left">
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>

                    <Link to={"/"}>
                        <div className="center">
                            <h2>kreo</h2>
                        </div>
                    </Link>

                    <div className="right">
                        <Link to={"/cart"}>
                            <span>
                                <CgShoppingCart
                                    onClick={() => setShowCart(true)}
                                    size={28}
                                />
                                <span className="cart-item">
                                    {selectItem.length}
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
