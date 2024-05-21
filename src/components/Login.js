// Login.js
import React from 'react';
import '../Styles/Login.css';
import Navbar from './Navbar';

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className='login-container'>
        <div className='login-form-container'>
          <h1>Login</h1>
          <form>
            <div>
              {/* <label htmlFor="username">Username:</label> */}
              <input type="text" id="username" name="username" placeholder="Username" />
            </div>
            <div>
              {/* <label htmlFor="password">Password:</label> */}
              <input type="password" id="password" name="password" placeholder="Password" />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;