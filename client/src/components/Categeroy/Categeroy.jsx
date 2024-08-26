import React from "react";
import "./Categeroy.css";

const Category = ({ handleFilter }) => {
    const categories = [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing",
    ];

    return (
        <div className="category-container">
            <div className="category-item">
                <div className="category-body">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className="category-title"
                            onClick={() => handleFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
