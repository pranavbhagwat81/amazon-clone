import React from "react";
import "./Product.css";

function Product({ price, name, rating, img }) {
  const renderName = (str, length, ending) => {
    if (str) {
      if (length == null) {
        length = 100;
      }
      if (ending == null) {
        ending = "...";
      }
      if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
      } else {
        return str;
      }
    }
  };

  return (
    <div className="product">
      <div className="product__info">{price}</div>
      <div className="product__title">{renderName(name)}</div>
      <div className="product__rating">
        {Array(rating)
          .fill("")
          .map(() => {
            return <p>⭐</p>;
          })}
      </div>

      <br />
      <img tooltip={name} className="product__img" src={img} alt={name}></img>
      <button className="product__button">Add To Basket</button>
    </div>
  );
}

export default Product;
