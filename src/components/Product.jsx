import React, { useState } from "react";
import "./Product.css";
import { connect } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
  addProductQuantityInCart,
  decreaseProductQuantityInCart,
} from "../actions";

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

  const updateProductInHome = (operation) => {
    if (operation === "add") {
      props.addProductToCart(props);
      setProductInCart(true);
    } else if (operation === "remove") {
      props.removeProductFromCart(props.id);
      setProductInCart(false);
    }
  };

  const updateProductQuantityInCheckout = (operation) => {
    if (operation === "add") {
      props.addProductQuantityInCart(props.id);
    } else if (operation === "remove") {
      props.decreaseProductQuantityInCart(props.id);
    }
  };

  if (props.productIn === "home") {
    return (
      <div className="product__home">
        <div className="product__info">{`$ ${props.price}`}</div>
        <div className="product__title">{renderName(props.name)}</div>
        <div className="product__rating">
          {Array(props.rating)
            .fill("")
            .map((item, index) => {
              return (
                <span key={index} role="img" aria-label="star">
                  ⭐
                </span>
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
                  updateProductInHome("remove");
                }
              : () => {
                  updateProductInHome("add");
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
        <div className="product__checkoutPrice">{`$${props.price}`}</div>
        <div className="product__checkoutQuantity">
          <button
            onClick={() => {
              updateProductQuantityInCheckout("add");
            }}
            className="product__checkout__Btn"
          >
            +
          </button>
          <span className="product__quantity">
            {props.cart[props.id].quantity}
          </span>
          <button
            onClick={() => {
              updateProductQuantityInCheckout("remove");
            }}
            className="product__checkout__Btn"
          >
            -
          </button>
        </div>
        {/** product name */}
        {/** product price*/}
        {/** + quantity - */}
        {/** */}
      </div>
    );
  } else if (props.productIn === "orderedProducts") {
    return (
      <div className="product__order">
        <div className="product__orderName">{props.name}</div>
        <div className="product__orderPrice">{`$ ${props.price}`}</div>
        <div className="product__orderQuantity">
          <span className="product__quantity">{props.quantity}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //consolelog(state);
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = () => {
  return {
    addProductToCart,
    removeProductFromCart,
    addProductQuantityInCart,
    decreaseProductQuantityInCart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Product);
