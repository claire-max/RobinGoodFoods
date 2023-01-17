import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css'
import ProductList from "../components/ProductList"

const Home = () => {
  return (
    <div className="container">
      <div>
        <ProductList />
      
      </div>

    </div>
  );
};

export default Home;
