import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { connect } from "react-redux";
import history from "../history";

function Nav(props) {
  const onLogoClick = () => {
    history.push("/amazon-clone/");
  };

  return (
    <nav className="nav">
      {/**logo */}
      {/**searchbar */}

      <img
        onClick={onLogoClick}
        className="nav__logo"
        src="http://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png"
        alt="amazon_logo"
      />

      {/* <div className="nav__search">
        <input className="nav__searchInput" type="text"></input>
        <SearchIcon className="nav__searchIcon" />
      </div> */}
      <div className="nav__nav">
        <Link
          to={{
            pathname: `/amazon-clone/login`,
            prevRoute: "/amazon-clone/",
          }}
          className="nav__link"
        >
          <div className="nav__option">
            <span className="nav__optionLineOne">Hello </span>
            <span className="nav__optionLineTwo">
              {props.user?.displayName ? props.user?.displayName : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to={`/amazon-clone/order`} className="nav__link">
          <div className="nav__option">
            <span className="nav__optionLineOne">Return</span>
            <span className="nav__optionLineTwo">Orders</span>
          </div>
        </Link>
        {/* <Link
          to={{
            pathname: `/amazon-clone/login`,
            prevRoute: "/amazon-clone/",
          }}
          className="nav__link"
        >
          <div className="nav__option">
            <span className="nav__optionLineOne">Your</span>
            <span className="nav__optionLineTwo">Prime</span>
          </div>
        </Link> */}
        <Link to="/amazon-clone/checkout" className="nav__basketContainer">
          <ShoppingBasketIcon className="nav__basketIcon" />
        </Link>
        <span className="nav__basket__itemcount">
          {Object.keys(props.cart).length}
        </span>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  //consolelog(state);
  return {
    cart: state.cart,
    user: state.user,
  };
};

export default connect(mapStateToProps)(Nav);
