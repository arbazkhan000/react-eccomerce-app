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
            <div className="categeroy-item">
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
    );
};

export default Category;

//  <div className="category-container">
//             <div className="category-body">
//                 {categoryItems.length > 0 ? (
//                     <ul className="categeroy-item">
//                         {categoryItems.map((item, index) => (
//                             <li className="category-title" key={index}>
//                                 {item}
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     <p className="empty-text">Please wait...</p>
//                 )}
//             </div>
//         </div>
