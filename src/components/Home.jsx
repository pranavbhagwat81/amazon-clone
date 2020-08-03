import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";
import { db } from "../firebase";

function Home() {
  const [products, setproducts] = useState(null);

  useEffect(() => {
    let prods = {};
    db.collection("products").onSnapshot((snapshot) => {
      console.log(snapshot);
      snapshot.docs.forEach((doc) => {
        //console.log(doc.data());
        //console.log(doc.data().id);
        prods[doc.data().id] = doc.data();
      });
      console.log(prods);
      setproducts(prods);
    });
  }, []);

  if (products) {
    console.log(products);
    return (
      <div className="home">
        <img
          alt="banner_Image"
          className="amazon_bannerImg"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup/GW/3000x1200_main_1x._CB409438475_.jpg"
        ></img>
        <div className="home__row">
          {Object.keys(products).map((productID) => {
            return (
              <Product
                productIn="home"
                id={products[productID].id}
                price={products[productID].price}
                name={products[productID].name}
                rating={products[productID].rating}
                img={products[productID].img}
              ></Product>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div>Loading....</div>;
  }
}

export default Home;
