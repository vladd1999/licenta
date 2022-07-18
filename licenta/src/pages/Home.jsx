import React from "react";
import Bar from "../components/Bar";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Bar />
            <Slider />
            <Categories />
            <Products />
            <Footer />
        </div>
    );
};

export default Home;