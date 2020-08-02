import React from "react";
import Product from "./Product";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG6.png"
        alt="amazon_logo"
        className="checkout__logo"
      />
      <div className="checkout__pageTitle">CheckOut</div>
      <Product
        productIn="checkout"
        id="1312"
        price="$29"
        name="Roku Express HD Streaming Media Player 2019"
        rating={5}
        img="https://images-na.ssl-images-amazon.com/images/I/41A+LoN2W3L._AC_US160_.jpg"
      ></Product>
      <Product
        productIn="checkout"
        id="1312"
        price="$29"
        name="Roku Express HD Streaming Media Player 2019"
        rating={5}
        img="https://images-na.ssl-images-amazon.com/images/I/41A+LoN2W3L._AC_US160_.jpg"
      ></Product>
    </div>
  );
}

export default Checkout;
