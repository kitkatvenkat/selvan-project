import React from "react";
import "./Slider.css";
import photo from "../image/dressshop.jpg";
import { useNavigate } from "react-router-dom";

function Slider() {

  const navigate=useNavigate()

  return (
    <section className="slider">
      <div className="slider-content">

        
        <div className="slider-image">
          <img src={photo} alt="Dress Shop" />
        </div>

        
        <div className="slider-text">
          <h1>Welcome to Our Dress Shop</h1>
          <p>
            Discover stylish and comfortable clothing for men, women, and
            children. From casual wear to party outfits and traditional dresses,
            we bring fashion that suits every occasion and budget.
          </p>

          <button onClick={()=> navigate("/about")} className="slider-btn">Shop Now</button>
        </div>

      </div>
    </section>
  );
}

export default Slider;
