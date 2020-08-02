import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG6.png"
        alt="amazon_logo"
        className="signup__logo"
      />
      <form className="signup__form">
        <div className="signup__formTitle">Create Account</div>
        <input
          type="text"
          className="signup__nameInput"
          placeholder="Enter Name"
        ></input>
        <input
          type="text"
          className="signup__usernameInput"
          placeholder="Enter Email"
        ></input>
        <input
          type="password"
          className="signup__passwordInput"
          placeholder="Enter Password"
        ></input>
        <Link to="/">
          <button className="signup__signupBtn">Continue</button>
        </Link>
      </form>
    </div>
  );
}

export default Signup;
