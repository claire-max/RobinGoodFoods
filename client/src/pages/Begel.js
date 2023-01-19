import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
import CategoryMenu from "../components/CategoryMenu";
import ProductList from "../components/ProductList";


const Begel = () => {
  return (      
       <div>        
        <div class = "justify-content-right">  
        <ProductList />
        </div>     
       </div>
   
  );
};

export default Home;
