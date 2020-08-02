import React, { useState } from "react";
import "./Product.css";
import { connect } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../actions";

function Product(props) {
  const [productInCart, setProductInCart] = useState(false);

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

  const removeProductFromCart = () => {
    props.removeProductFromCart(props);
    setProductInCart(false);
  };

  const addProductToCart = () => {
    props.addProductToCart(props);
    setProductInCart(true);
  };

  return (
    <div className="product">
      <div className="product__info">{props.price}</div>
      <div className="product__title">{renderName(props.name)}</div>
      <div className="product__rating">
        {Array(props.rating)
          .fill("")
          .map(() => {
            return (
              <p>
                <span role="img">⭐</span>
              </p>
            );
          })}
      </div>

      <br />
      <img
        tooltip={props.name}
        className="product__img"
        src={props.img}
        alt={props.name}
      ></img>
      <button
        onClick={
          productInCart
            ? () => {
                removeProductFromCart();
              }
            : () => {
                addProductToCart();
              }
        }
        className="product__button"
      >
        {productInCart ? "Remove from Basket" : "Add To Basket"}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = () => {
  return {
    addProductToCart,
    removeProductFromCart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Product);
