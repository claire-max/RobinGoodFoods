import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
// import Carousel from "./carousel";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      {/* <Carousel /> */}
      <Cart />
    </div>
  );
};

export default Home;