import axios from "axios";
import React, { useEffect, useState } from "react";
import Category from "../Categeroy/Categeroy";
import Product from "../Product/Product";
import Banner from "./Banner/Banner";

const Home = () => {
    const [filterItem, setFilterItem] = useState("electronics"); 
    const [products, setProducts] = useState([]);

    // Fetch Products based on category
    const fetchProductsByCategory = async (category) => {
        try {
            const res = await axios.get(
                `https://fakestoreapi.com/products/category/${category}`
            );
            setProducts(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProductsByCategory(filterItem);
    }, [filterItem]);

    const handleFilter = (category) => {
        setFilterItem(category);
    };

    return (
        <div className="home">
            <Banner />
            <Category handleFilter={handleFilter} />
            <Product filterItem={filterItem} />
        </div>
    );
};

export default Home;
