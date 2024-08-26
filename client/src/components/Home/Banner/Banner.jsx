import React from "react";
import BannerImg from "../../../assets/banner-img.png";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="hero-content">
                <div className="text-content">
                    <p>Sales</p>

                    <div className="hero-btn">
                        <button>Read More</button>
                        <button>Shop Now</button>
                    </div>
                </div>
                <img className="image" src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
