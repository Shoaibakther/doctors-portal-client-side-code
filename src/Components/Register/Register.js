import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo/google-logo.png'

const Register = () => {
    return (
        <div>
                        <div class="form">
  
<img src={logo} alt="" />
                             
<input type="email" name="email" placeholder="Email" />
   
  <input type="password" name="Password" placeholder="Password" />

  <button>Sign Up</button>
   

   <Link to="/login">Sign In</Link>

            </div>
        </div>
    );
};

export default Register;