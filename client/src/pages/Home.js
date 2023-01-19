import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
import CategoryMenu from "../components/CategoryMenu";
import Footer from "../components/Footer"
import Carousel from  "../components/carousel/Carousel"


const Home = () => {
  return (      
       <div>        
        <div class = "justify-content-right">  
        <Carousel/>
        </div>     
        {/* <ProductList />
        <CategoryMenu />     
        <Footer/>   */}
       </div>
   
  );
};

export default Home;
