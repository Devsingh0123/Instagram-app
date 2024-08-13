import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import "./SignIn.css"

const SignIn = () => {
  return (
    <div className="signIn">
    <div className="form-container">
      <div className="loginform">
        <img className="signInLogo" src={logo} alt="" />
        
        
        <input type="email" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
  
        <input type="submit" id="login-btn" value="Sign In" />
      </div>
      <div className="form2">
        Don't have an account ? <Link to='/signup'> <span style={{color:"blue",cursor:"pointer" }} >Sign Up</span></Link>
      </div>
    </div>
  </div>
  )
}

export default SignIn