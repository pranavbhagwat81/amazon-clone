import React from "react";
import Product from "./Product";
import "./Checkout.css";
import { connect } from "react-redux";
import { db } from "../firebase";
import { emptyCart } from "../actions";
import history from "../history";
import { Link } from "react-router-dom";

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

  const onOrderConfirm = () => {
    if (props.user?.email) {
      var batch = db.batch();

      Object.keys(props.cart).forEach((productID) => {
        // //consolelog(props.user?.uid);
        // //consolelog(productID);
        batch.set(
          db
            .collection("user_cart")
            .doc(props.user?.uid)
            .collection("products")
            .doc(productID),
          props.cart[productID]
        );
      });

      batch
        .commit()
        .then(function () {
          //consolelog("All documents stored successfully");
          props.emptyCart();
          history.push("/amazon-clone/order");
        })
        .catch(function (error) {
          //consoleerror("Error writing document: ", error);
        });
    } else {
      history.push("/amazon-clone/login", {
        prevRoute: "/amazon-clone/checkout",
      });
    }
  };

  return (
    <div className="orderedProducts">
      <Link to="/amazon-clone/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG6.png"
          alt="amazon_logo"
          className="checkout__logo"
        />
      </Link>
      <div className="checkout__pageTitle">CheckOut</div>
      {Object.keys(props.cart).length ? (
        <div className="checkout__list">
          {Object.keys(props.cart).map((productId) => {
            if (props.cart[productId].quantity > 0) {
              return (
                <Product
                  key={props.cart[productId].id}
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
              Total Amount : {`$${renderTotalAmount()}`}
            </div>
            <div className="checkout__confirmBtnDiv">
              <button
                onClick={() => {
                  onOrderConfirm();
                }}
                className="checkout__confirmBtn"
              >
                Confirm
              </button>
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
    user: state.user,
  };
};

const mapDispatchToProps = () => {
  return {
    emptyCart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Checkout);
