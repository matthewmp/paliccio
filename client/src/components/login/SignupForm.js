import React from "react";

import "./login.css";
export default class Signup extends React.Component {
  constructor(props){
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
    this.confirmpass = React.createRef();
  }
  state = {
    show: false,
    username: '',
    password: '',
    confirmpass: ''
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      username: this.username.current.value,
      password: this.password.current.value,
      confirmpass: this.confirmpass.current.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      
        <form id="signup-form">
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
                type="password"
                ref={this.password} 
                value={this.state.password} 
                onChange={this.handleChange}
                required
              />
            </div> 

            <div className="inp-password-wrapper">
              <label className="inp-label" htmlFor="inpConfirmPassword" >Confirm Password</label>
              <input
                id="inpConfirmPassword"
                type="password"
                ref={this.confirmpass} 
                value={this.state.confirmpass} 
                onChange={this.handleChange}
                required
              />
            </div>  

            <button type="submit" className= "btn-submit" 
              onSubmit={this.handleSubmit}>Login
            </button>    
          </div>
        </form>
    );
  }
}
