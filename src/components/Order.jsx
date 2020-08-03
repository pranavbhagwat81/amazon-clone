import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import Product from "./Product";

function Order() {
  const [orderedProducts, setorderedProducts] = useState(null);

  useEffect(() => {
    //db.collection("user_cart").doc(userId) -  gets the doc on which we can call user products collection
    //db.collection("user_cart").doc(userId).collection(products) -  gets the doc on which we can call user products collection
    let prods = {};
    db.collection("user_cart")
      .doc("4jYOfOpyS1p7Cddq24p6")
      .collection("products")
      .doc("36J13wJMQR4AGUKx39D9")
      .collection("product_info")
      .onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc) => {
          //   console.log(doc.id);
          prods[doc.data().id] = doc.data();
          //   console.log(doc.data());
        });
        console.log(prods);
        setorderedProducts(prods);
      });
  }, []);

  if (orderedProducts) {
    return (
      <div className="order">
        <div className="checkout__pageTitle">Order with this user</div>
        {Object.keys(orderedProducts).length ? (
          <div className="checkout__list">
            {Object.keys(orderedProducts).map((productId) => {
              console.log(orderedProducts[productId]);
              console.log(orderedProducts[productId].quantity);
              return (
                <Product
                  key={orderedProducts[productId].id}
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
          </div>
        ) : (
          <div className="checkout__totalAmount">No Items in order</div>
        )}
      </div>
    );
  } else {
    return <div>No Orders</div>;
  }
}

export default Order;
