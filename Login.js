import React from 'react'
import './LoginForm.css';
function Login() {
    return (
        <div className="login-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name :" />
          <br />
          <label htmlFor="password"> Password:</label>
          <input type="password" id="password" placeholder="Enter the Password :"/>
          <br />
          <button id="btnsubmit" type="submit">Submit</button>
        </div>
      );
}

export default Login  