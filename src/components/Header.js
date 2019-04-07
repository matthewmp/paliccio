import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      
        <header style={headerStyle}>
          <div className="row valign-wrapper">
            <div className="img-container col s4">
              <img style={imageStyle} src="./pasta.png" alt="pasta"/>
            </div>
            <span className="logo col s4 center-align" style={logoStyle} >Paliccio</span>
            <div className="col s4 right-align" style={hamburgerStyle} >TEST</div>
          </div>
          
        </header>
      
    )
  }
}

const logoStyle = {
  display: 'inline-block',
  color: '#9E2252',
  fontFamily: 'Satisfy',
  fontSize: '3.4rem'
}

const headerStyle = {
  width: '100%',
  height: '82px', 
}

const imageStyle ={
  maxWidth: '50px'
}

const hamburgerStyle = {
  marginRight: '20px'
}