import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="amazon_bannerImg"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup/GW/3000x1200_main_1x._CB409438475_.jpg"
      ></img>
      <div className="home__row">
        <Product
          id="1312"
          price="$29"
          name="Roku Express HD Streaming Media Player 2019"
          rating={5}
          img="https://images-na.ssl-images-amazon.com/images/I/41A+LoN2W3L._AC_US160_.jpg"
        ></Product>
        <Product
          id="1313"
          price="$59"
          name="AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler"
          rating={4}
          img="https://images-na.ssl-images-amazon.com/images/I/41m+krxXiBL._AC_US160_.jpg"
        ></Product>
      </div>
      <div className="home__row">
        <Product
          id="1314"
          price="$29"
          name="TP-Link AC750 WiFi Extender | Covers Up to 1200 Sq.ft and 20 Devices Up to 750Mbps| Dual Band WiFi Range Extender | WiFi Booster to Extend Range of WiFi Internet Connection (RE220)"
          rating={3}
          img="https://images-na.ssl-images-amazon.com/images/I/311BvbMe2dL._AC_US160_.jpg"
        ></Product>
        <Product
          id="1315"
          price="$319"
          name="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)"
          rating={5}
          img="https://images-na.ssl-images-amazon.com/images/I/41h0H4SCgPL._AC_US160_.jpg"
        ></Product>
        <Product
          id="1316"
          price="$62"
          name="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox (STGX2000400)"
          rating={2}
          img="https://images-na.ssl-images-amazon.com/images/I/31jBba7+ySL._AC_US160_.jpg"
        ></Product>
      </div>
    </div>
  );
}

export default Home;
