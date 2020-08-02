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

  if (props.productIn === "home") {
    return (
      <div className="product__home">
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
  } else if (props.productIn === "checkout") {
    return (
      <div className="product__checkout">
        <div className="product__checkoutName">{props.name}</div>
        <div className="product__checkoutPrice">{props.price}</div>
        <div className="product__checkoutQuantity">
          <button className="product__checkout__Btn">+</button>
          <span className="product__quantity">5</span>
          <button className="product__checkout__Btn">-</button>
        </div>
        {/** product name */}
        {/** product price*/}
        {/** + quantity - */}
        {/** */}
      </div>
    );
  }
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
