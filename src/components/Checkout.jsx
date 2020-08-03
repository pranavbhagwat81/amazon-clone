import React from "react";
import Product from "./Product";
import "./Checkout.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Checkout(props) {
  const renderTotalAmount = () => {
    let totalAmount = 0;
    Object.keys(props.cart).forEach((productId) => {
      totalAmount =
        props.cart[productId].price * props.cart[productId].quantity +
        totalAmount;
    });
    return totalAmount;
  };

  return (
    <div className="checkout">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG6.png"
        alt="amazon_logo"
        className="checkout__logo"
      />
      <div className="checkout__pageTitle">CheckOut</div>
      {Object.keys(props.cart).length ? (
        <div className="checkout__list">
          {Object.keys(props.cart).map((productId) => {
            if (props.cart[productId].quantity > 0) {
              return (
                <Product
                  productIn="checkout"
                  id={props.cart[productId].id}
                  price={props.cart[productId].price}
                  name={props.cart[productId].name}
                  rating={props.cart[productId].rating}
                  img={props.cart[productId].img}
                ></Product>
              );
            } else {
              return false;
            }
          })}
          <div className="checkout__confirm">
            <div className="checkout__totalAmount">
              Total Amount : {`$ ${renderTotalAmount()}`}
            </div>
            <div className="checkout__confirmBtnDiv">
              <Link to="/">
                <button className="checkout__confirmBtn">Confirm</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="checkout__totalAmount">No Items in cart</div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Checkout);
