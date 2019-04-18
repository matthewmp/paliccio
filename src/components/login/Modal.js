import React from 'react';
import Login from './Login';
import Signup from './Signup';
import './login.css';

const Modal = (props) =>{
    const formType = props.type === 'login' ? <Login /> : <Signup />;
    console.log(props.type)
    return (
        <div className='login-wrapper'>
            <div className="login-X-close" onClick={props.close}>&times;</div>
            {formType}
        </div>
    )
}

export default Modal;