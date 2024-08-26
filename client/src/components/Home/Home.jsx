import React, { useEffect, useState } from "react";
import List from "../../api/List.json";
import Category from "../Categeroy/Categeroy"; 
import Product from "../Product/Product";
import Banner from "./Banner/Banner";

const Home = () => {
    const [filterItem, setFilterItem] = useState(""); 
    const [products, setProducts] = useState([]);

    const getProductsByCategory = (category) => {
        const items = List.filter((elem) => elem.category === category);
        setProducts(items);
    };

    useEffect(() => {
        if (filterItem) {
            getProductsByCategory(filterItem);
        } else {
            setProducts(List); 
        }
    }, [filterItem]);

    const handleFilter = (category) => {
        setFilterItem(category);
    };

    return (
        <div className="home">
            <Banner />
            <Category handleFilter={handleFilter} />
            <Product products={products} />
        </div>
    );
};

export default Home;
