import React from "react";

function SignIn() {
  return (
    <div className="signin">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG6.png"
        alt="amazon_logo"
        className="signin__logo"
      />
      <form className="signin__form">
        <input
          type="text"
          className="signin__usernameInput"
          placeholder="Enter Username"
        ></input>
        <input
          type="password"
          className="signin__passwordInput"
          placeholder="Enter Password"
        ></input>
        <button className="signin__signinBtn">Continue</button>
      </form>
      <span className="signin__signUpDirection">New To Amazon?</span>
      <button className="signin__signupBtn">Create your Amazon account</button>
    </div>
  );
}

export default SignIn;
