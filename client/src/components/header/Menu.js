import React from 'react'
import './menu.css';
const Menu = () => {

    const prevent = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <div className="menu">
            <ul>
                <li onClick={prevent}>Log In</li>
                <li>Search</li>
                <li>Random Recipe</li>
                <li>Add New Recipe</li>    
            </ul> 
        </div>
    )
}

export default Menu;