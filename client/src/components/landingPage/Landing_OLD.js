import React, { Component } from 'react'
import Modal from '../login/Modal';
import './landing.css';


export default class Landing extends Component {
  constructor(props){
    super(props);
    this.login = React.createRef();
    this.signup = React.createRef();
  }
  state = {
    modal:{
      active: false,
      showLogin: false,
      showSignup: false
    }
  }

  toggleLogin = (e) => {
    this.setState({active: !this.state.modal.active, showLogin: true});
  }

  toggleSignup = (e) => {
    this.setState({active: !this.state.modal.active, showSignup: true});
  }

  hideModal = (e) => {
    this.setState({active: false, showLogin: false, showSignup: false});
  }

  render() {
    let modal;
    if(this.state.showLogin){modal = <Modal type="login" close={this.hideModal}/>}
    else if(this.state.showSignup){modal =  <Modal type="signup" close={this.hideModal}/>}
    else {modal = ""}
    console.log(modal);
    return (
      <section className="landing-page">
        <div className="landing-content">
          <div className="slogan">
            Family Recipes
            <div className="landing-login">
              <ul>
                <li ref={this.login} onClick={this.toggleLogin}>Sign In |</li>
                <li ref={this.signup} onClick={this.toggleSignup}>Sign Up |</li>
                <li>Demo</li>
              </ul>
            </div>
          </div>
        </div>
        {modal}
      </section>
    )
  }
}
