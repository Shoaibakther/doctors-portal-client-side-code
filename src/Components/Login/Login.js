import React from 'react';
import './Login.css';
import logo from '../../Images/logo/google-logo.png'
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

const Login = () => {
    const {signInUsingGoogle,handleRegistration, handEmailChange,handlePasswordChange} = useAuth();
    return (
        <div className="login-form">
            <div className="form">
  
<img src={logo} alt="" />
                             
<form onSubmit={handleRegistration}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address:</label>
    <input type="email" onBlur={handEmailChange} placeholder="Your Email " className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" onBlur={handlePasswordChange} placeholder="Password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="form-group form-check ">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Already Registered?</label>
                    </div>
                    <br /><br />
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<div>--------Or----------</div>
<button onClick={signInUsingGoogle} className="btn-regular btn-primary mb-5">Google Sign In</button>
            </div>
            
        </div>
    );
};

export default Login;