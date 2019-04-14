import React from "react";

import "./login.css";
class Login extends React.Component {
  render() {
    return (
      <div className="login-wrapper">
        <div className="login-X-close">X</div>
        <form id="login-form">
          <div>
            <input
              id="inpUserName"
              type="text"
              placeholder="Username"
              required
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
