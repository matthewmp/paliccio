import React from "react";

import "./login.css";
class Login extends React.Component {
  render() {
    return (
      <div className="login-wrapper">
        <div className="login-X-close">X</div>
        <form id="login-form">
          <div class="login-input-wrapper">
            <label className="inp-label" htmlFor="inpUserName">Username</label>
            <input
              id="inpUserName"
              type="text"
              placeholder="Username"
              required
            />

            <label className="inp-label" htmlFor="inpUserPassword">Password</label>
            <input
              id="inpUserPassword"
              type="text"
              placeholder="Password"
              required
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
