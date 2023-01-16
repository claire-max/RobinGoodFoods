import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css'

const Home = () => {
  return (
    <div className="container">
      <div>
        {/* <Carousel/> */}
      </div>
      <div class="menuContainer">
        <div class="food">
          <img
            class="sweetmeatImage"
            src="https://www.snackandbakery.com/ext/resources/images/bakeryproducts.jpg?1432238179"
            alt="foodicon"
          />
          <Link class="sweetmeatText" to="/Sweetmeats">
            SWEETMEATS
          </Link>
        </div>
        <div class="drinks">
          <img
            class="drinkImage"
            src="https://www.foodbeverageinsider.com/sites/foodbeverageinsider.com/files/styles/article_featured_standard/public/Coffee%20and%20tea%20market%20data.jpg?itok=EZl09oep"
            alt="Drinkicon"
          />
          <Link class="teacoffText" to="/Teacoff">
            TEACOFF
          </Link>
        </div>
      </div>
    </div>

  );
};

export default Home;
