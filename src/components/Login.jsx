import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG6.png"
        alt="amazon_logo"
        className="login__logo"
      />
      <form className="login__form">
        <input
          type="text"
          className="login__usernameInput"
          placeholder="Enter Username"
        ></input>
        <input
          type="password"
          className="login__passwordInput"
          placeholder="Enter Password"
        ></input>
        <button className="login__signinBtn">Continue</button>
      </form>
      <span className="login__signUpDirection">New To Amazon?</span>
      <Link to="signup">
        <button className="login__signupBtn">Create your Amazon account</button>
      </Link>
    </div>
  );
}

export default Login;
