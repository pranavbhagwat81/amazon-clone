import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import Product from "./Product";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function Order(props) {
  const [orderedProducts, setorderedProducts] = useState(null);

  useEffect(() => {
    let productsByUser = {};
    let userId = "5000"; //get this from props.
    db.collection("user_cart").onSnapshot((usercartdocs) => {
      usercartdocs.docs.forEach((usercartdoc) => {
        console.log(usercartdoc.data().userid);
        console.log(usercartdoc.id);
        if (usercartdoc.data().userid === userId) {
          db.collection("user_cart")
            .doc(usercartdoc.id)
            .collection("products")
            .onSnapshot((snapshot) => {
              snapshot.forEach((proddoc) => {
                productsByUser[proddoc.id] = proddoc.data();
                console.log(proddoc.data());
              });
              setorderedProducts(productsByUser);
            });
        }
      });
    });
  }, []);

  const renderTotalAmount = () => {
    let totalAmount = 0;
    Object.keys(orderedProducts).forEach((productId) => {
      totalAmount =
        orderedProducts[productId].price * orderedProducts[productId].quantity +
        totalAmount;
    });
    return totalAmount;
  };

  if (props.user?.email) {
    if (orderedProducts) {
      console.log(orderedProducts);
      return (
        <div className="order">
          <div className="checkout__pageTitle">Order with this user</div>
          {Object.keys(orderedProducts).length ? (
            <div className="checkout__list">
              {Object.keys(orderedProducts).map((productId) => {
                return (
                  <Product
                    key={orderedProducts[productId].name}
                    productIn="orderedProducts"
                    id={orderedProducts[productId].id}
                    price={orderedProducts[productId].price}
                    name={orderedProducts[productId].name}
                    rating={orderedProducts[productId].rating}
                    img={orderedProducts[productId].img}
                    quantity={orderedProducts[productId].quantity}
                  ></Product>
                );
              })}
              <div className="checkout__confirm">
                <div className="checkout__totalAmount">
                  Total Amount : {`$ ${renderTotalAmount()}`}
                </div>
                <div className="checkout__confirmBtnDiv"></div>
              </div>
            </div>
          ) : (
            <div className="checkout__totalAmount">No Items in order</div>
          )}
        </div>
      );
    } else {
      return <div>No Orders</div>;
    }
  } else {
    return (
      <Redirect
        to={{
          pathname: "/login",
          previousRoute: "/order",
        }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.user);
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Order);
