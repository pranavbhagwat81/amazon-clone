import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { saveLoggedInUser } from "../actions";
import Nav from "./Nav";
import Home from "./Home";
import { withRouter } from "react-router";
import history from "../history";

function Login(props) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(authUser);
        console.log(authUser.user.email);
        props.saveLoggedInUser(authUser.user);
        history.push("/amazon-clone/home");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const onSignUp = () => {
    history.push("/amazon-clone/signup");
  };

  if (props.user?.displayName) {
    return (
      <div className="app">
        <Redirect to={props.location.prevRoute} />
        <Nav />
        <Home />
      </div>
    );
  } else {
    console.log("in else when no user signed in", props);
    return (
      <div className="login">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG6.png"
          alt="amazon_logo"
          className="login__logo"
        />
        <form className="login__form">
          <input
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="text"
            className="login__usernameInput"
            placeholder="Enter Email"
          ></input>
          <input
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            type="password"
            className="login__passwordInput"
            placeholder="Enter Password"
          ></input>
          <div
            className="login__signupBtn"
            onClick={(e) => {
              signIn(e);
            }}
          >
            Continue
          </div>
        </form>
        <span className="login__signUpDirection">New To Amazon?</span>

        <button onClick={onSignUp} className="login__signupBtn">
          Create your Amazon account
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.user);
  return {
    user: state.user,
  };
};

const mapDispatchToProps = () => {
  return {
    saveLoggedInUser,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(withRouter(Login));
