import React from 'react';
import './Login.css';
import logo from '../../Images/logo/google-logo.png'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

const Login = () => {
    const {signInUsingGoogle,handleRegistration, handleEmailChange,handlePasswordChange,error,isLogin,toggleLogin} = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.form || '/home'
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(result => {
      history.push(redirect_uri)
    })
  }
    return (
        <div className="login-form">
            <div className="form">
  
<img src={logo} alt="" />
          <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>                   
<form onSubmit={handleRegistration}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address:</label>
    <input type="email" onBlur={handleEmailChange} placeholder="Your Email " className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" onBlur={handlePasswordChange} placeholder="Password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="form-group form-check ">
    <input onChange={toggleLogin} type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Already Registered?</label>
                    </div>
                    <br /><br />
  <div className="row mb-3 text-danger">{error}</div>
        <button type="submit" className="btn btn-primary">
          {isLogin ? 'Login' : 'Register'}
        </button>
</form>
<div>--------Or----------</div>
<button onClick={handleGoogleLogin} className="btn-regular btn-primary mb-5">Google Sign In</button>
            </div>
            
        </div>
    );
};

export default Login;