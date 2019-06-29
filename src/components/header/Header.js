import React from 'react'
import HambugerMenu from './HamburgerMenu';

const Header = () => {
    return (
        <header>
          <div className="row valign-wrapper header-wrapper">
            <div className="col s4">
              <div className="img-container">
                <img className="headerImage" src="./images/pasta_white.svg" alt="pasta"/>
              </div>
            </div>  
            <span className="logo col s4 center-align" >Paliccio</span>
            <div className="col s4">
              <HambugerMenu />
            </div>
          </div>
        </header>
    )
}

export default Header;