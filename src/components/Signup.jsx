import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import { auth } from "../firebase";
import { connect } from "react-redux";

function Signup(props) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");

  const onSignUp = (event) => {
    event.preventDefault();
    //consolelog(email, password);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({ displayName: name });
        //consolelog("User created");
      })
      .catch((error) => {
        //consolelog(error);
        alert(error.message);
      });
  };

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
          onChange={(e) => {
            setname(e.target.value);
          }}
          type="text"
          className="signup__nameInput"
          placeholder="Enter Name"
        ></input>
        <input
          onChange={(e) => {
            setemail(e.target.value);
          }}
          type="text"
          className="signup__usernameInput"
          placeholder="Enter Email"
        ></input>
        <input
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          type="password"
          className="signup__passwordInput"
          placeholder="Enter Password"
        ></input>
        <Link to={`/amazon-clone/login`}>
          <button
            onClick={(event) => {
              onSignUp(event);
            }}
            className="signup__signupBtn"
          >
            Continue
          </button>
        </Link>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  //consolelog(state);
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Signup);
