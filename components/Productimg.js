import React from "react";
import Description from "./Description";
import "./Productimg.css";

function Productimg() {
  return (
    <div id="super_div">
    <div className="main_div">
      <img
        src="https://rukminim1.flixcart.com/image/612/612/krtjgcw0/headphone/d/9/g/au-mh501-maono-original-imag5j35rffkwpac.jpeg?q=70"
        alt="product_image"
        id="main_img"
      ></img>
      <ul>
        <h2>Product Details</h2>
        <li>Model Name - ATH-M50x Professional Monitor Headphones</li>
        <li>Color - Black</li>
        <li>Headphone Type - On the Ear</li>
        <li>Inline Remote - No</li>
        <li>Connectivity - Wired</li>
        <li>Headphone Design - Over the Head</li>
      </ul>
    </div>
    <Description/>
    </div>
    
  );
}
export default Productimg;
