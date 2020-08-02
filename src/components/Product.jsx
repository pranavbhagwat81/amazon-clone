import React from "react";
import "./Product.css";

function Product({ price, name, rating, img }) {
  return (
    <div className="product">
      <div className="product__info">{price}</div>
      <div className="product__title">{name}</div>
      <div className="product__rating">
        {Array(rating)
          .fill("")
          .map(() => {
            return <p>⭐</p>;
          })}
      </div>

      <br />
      <img className="product__img" src={img} alt={name}></img>
      <button className="product__button">Add To Basket</button>
    </div>
  );
}

export default Product;
