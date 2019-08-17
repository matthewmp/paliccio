import React, { Component } from 'react'
import './menu.css';
export default class Menu extends Component {

    prevent = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }
    render() {
    return (
        <div className="menu">
            <ul>
                <li onClick={this.prevent}>Log In</li>
                <li>Search</li>
                <li>Random Recipe</li>
                <li>Add New Recipe</li>    
            </ul> 
        </div>
    )
    }
}
