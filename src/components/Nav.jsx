import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Nav() {
  return (
    <nav className="nav">
      {/**logo */}
      {/**searchbar */}
      <Link to="/">
        <img
          className="nav__logo"
          src="https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png"
          alt="amazon_logo"
        />
      </Link>
      <div className="nav__search">
        <input className="nav__searchInput" type="text"></input>
        <SearchIcon className="nav__searchIcon" />
      </div>
      <div className="nav__nav">
        <Link to="/login" className="nav__link">
          <div className="nav__option">
            <span className="nav__optionLineOne">Hello P</span>
            <span className="nav__optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/checkout" className="nav__link">
          <div className="nav__option">
            <span className="nav__optionLineOne">Return</span>
            <span className="nav__optionLineTwo">Orders</span>
          </div>
        </Link>
        <Link to="/login" className="nav__link">
          <div className="nav__option">
            <span className="nav__optionLineOne">Your</span>
            <span className="nav__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="nav__basketContainer">
          <ShoppingBasketIcon className="nav__basketIcon" />
        </Link>
        <span className="nav__basket__itemcount">0</span>
      </div>
    </nav>
  );
}

export default Nav;
