import React from "react";

import "./login.css";
class Login extends React.Component {
  constructor(props){
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
  }
  state = {
    show: false,
    username: '',
    password: ''
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      username: this.username.current.value,
      password: this.password.current.value
    })
  }

  render() {
    return (
      <div className="login-wrapper">
        <div className="login-X-close">&times;</div>
        <form id="login-form">
          <div className="login-input-wrapper">
            <div className="inp-username-wrapper">
              <label className="inp-label" htmlFor="inpUserName" >Username</label>
              <input
                id="inpUserName"
                type="text"
                ref={this.username} 
                value={this.state.username} 
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="inp-password-wrapper">
              <label className="inp-label" htmlFor="inpUserPassword" >Password</label>
              <input
                id="inpUserPassword"
                type="text"
                ref={this.password} 
                value={this.state.password} 
                onChange={this.handleChange}
                required
              />
            </div>    
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
