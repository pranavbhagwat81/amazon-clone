import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";
import { db } from "../firebase";

function Home() {
  const [products, setproducts] = useState(null);

  useEffect(() => {
    let prods = {};
    db.collection("products").onSnapshot((snapshot) => {
      //consolelog(snapshot);
      snapshot.docs.forEach((doc) => {
        ////consolelog(doc.data());
        ////consolelog(doc.data().id);
        prods[doc.data().id] = doc.data();
      });
      //consolelog(prods);
      setproducts(prods);
    });
  }, []);

  if (products) {
    //consolelog(products);
    return (
      <div className="home">
        <img
          alt="banner_Image"
          className="amazon_bannerImg"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup/GW/3000x1200_main_1x._CB409438475_.jpg"
        ></img>
        <div className="home__row">
          <div className="container-fluid">
            <div className="row">
              {Object.keys(products).map((productID) => {
                return (
                  <div className="col-xs-12 col-md-6 col-lg-4 col-xl-3">
                    <Product
                      key={products[productID].id}
                      productIn="home"
                      id={products[productID].id}
                      price={products[productID].price}
                      name={products[productID].name}
                      rating={products[productID].rating}
                      img={products[productID].img}
                    ></Product>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="home__loader">Loading....</div>;
  }
}

export default Home;
