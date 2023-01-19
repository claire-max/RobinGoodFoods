import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import Carousel from  "../components/carousel/Carousel";
import Video from "../components/Video/vid";
import Hero from "../components/Hero/herobanner";


import CategoryMenu from "../components/CategoryMenu";




const Home = () => {
  return (  
    
       <div>        
        <div class = "justify-content-right">  
        <Carousel/>
        </div> 
       
        <Hero/>
        <Video/>
        <ProductList />
       
        <Footer/>
        </div>  
        

  );
};

export default Home;
