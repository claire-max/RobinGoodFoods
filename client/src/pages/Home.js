import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css'
import ProductList from "../components/ProductList"
import CategoryMenu from "../components/CategoryMenu";
import Footer from "../components/Footer"

const Home = () => {
  return (
    // <div className="container">
      <div>
        <CategoryMenu />     
        <Footer/>
      </div>
     
   
  );
};

export default Home;
