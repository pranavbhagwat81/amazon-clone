import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import Product from "./Product";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function Order(props) {
  const [orderedProducts, setorderedProducts] = useState(null);

  useEffect(() => {
    let productCart = {};
    if (props.user?.uid) {
      db.collection("user_cart")
        .doc(props.user?.uid)
        .collection("products")
        .onSnapshot((snapshot) => {
          snapshot.docs.forEach((doc) => {
            console.log(doc.data());
            productCart[doc.data().id] = doc.data();
          });
          setorderedProducts(productCart);
        });
      // .then((doc) => {
      //   console.log(doc.data());
      //   //setorderedProducts(doc.data());
      // });
    }

    //WORKING CODE
    // db.collection("user_cart").onSnapshot((snapshot) => {
    //   snapshot.docs.forEach((doc) => {
    //     if(props.user.uid === )
    //     console.log(doc.id);
    //     console.log(doc.data());
    //   });
    // });

    // db.collection("user_cart").onSnapshot((usercartdocs) => {
    //   usercartdocs.docs.forEach((usercartdoc) => {
    //     console.log(usercartdoc.data().userid);
    //     console.log(usercartdoc.id);
    //     if (usercartdoc.data().userid === userId) {
    //       db.collection("user_cart")
    //         .doc(usercartdoc.id)
    //         .collection("products")
    //         .onSnapshot((snapshot) => {
    //           snapshot.forEach((proddoc) => {
    //             productsByUser[proddoc.id] = proddoc.data();
    //             console.log(proddoc.data());
    //           });
    //           setorderedProducts(productsByUser);
    //         });
    //     }
    //   });
    // });
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
          <div className="checkout__pageTitle">Orders with this user</div>
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
    console.log("in else when no user signed in");
    return (
      <Redirect
        to={{
          pathname: "/amazon-clone/login",
          prevRoute: "/amazon-clone/order",
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
