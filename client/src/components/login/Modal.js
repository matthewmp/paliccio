import React from 'react';
import Login from './LoginForm';
import Signup from './SignupForm';
import './login.css';

class Modal extends React.Component{
    state = {
        show: true,
        formType: 'login'
    }

    close = () => {
        this.setState({show: !this.state.show});
    }

    render(){
        let loginClass = this.state.show ? 'login-wrapper' : 'login-wrapper hidden';
        // const formType = props.type === 'login' ? <Login /> : <Signup />;
        // console.log(props.type)
        return (
            <div className={loginClass}>
                <div className="login-X-close" onClick={this.close}>&times;</div>
                {/* {formType} */}
                sing in | log in
            </div>
        )
    }
    
}

export default Modal;