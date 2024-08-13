import React from "react";
import logo from "../img/logo.png";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signUp">
      <div className="form-container">
        <div className="form">
          <img className="signUpLogo" src={logo} alt="" />
          <p className="loginPara">
            sign up to see photos and <br />  videos from your friends
          </p>
          <input type="text" name="name" id="name" placeholder="Name" />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <input type="email" name="email" id="email" placeholder="email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <p className="Loginpara" style={{fontSize:"12px", margin:"3px 0px"}}>
            By signing up, you agree to our terms, <br /> privacy policy and
            cookies policy
          </p>
          <input type="submit" id="submit-btn" value="Sign Up" />
        </div>
        <div className="form2">
          Already have an account ? <Link to='/signin'> <span style={{color:"blue",cursor:"pointer" }} >Sign In</span></Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
