import React from 'react';
import Menu from './Menu';
import './header.css';

export default class HamburgerMenu extends React.Component{
    state = {
        closed: true,
        topBarClass: 'hamburger-bar top-bar',
        midBarClass: 'hamburger-bar middle-bar',
        botBarClass: 'hamburger-bar bottom-bar'
    }

    toggle = () => {
        
        if(this.state.closed){
            this.setState({
                closed: !this.state.closed, 
                topBarClass: 'hamburger-bar top-bar topBarXOpen',
                midBarClass: 'hamburger-bar middle-bar midBarOpen',
                botBarClass: 'hamburger-bar bottom-bar bottomBarXOpen'
             })
             document.getElementsByClassName('menu')[0].className = "menu slide-in show";
        } else if(!this.state.closed){
            this.setState({
                closed: !this.state.closed,
                topBarClass: 'hamburger-bar top-bar topBarXClose',
                midBarClass: 'hamburger-bar middle-bar midBarClose',
                botBarClass: 'hamburger-bar bottom-bar bottomBarXClose'
             })
             document.getElementsByClassName('menu')[0].className = "menu slide-out";
        }
    }

    render(){
        const topBarClass = this.state.topBarClass;
        const middleBarClass = this.state.midBarClass;
        const bottomBarClass = this.state.botBarClass;
        
        return (
            <div className="nav" onClick={this.toggle} >
                <Menu ref={this.menu} />
                <div className={topBarClass}></div>
                <div className={middleBarClass}></div>
                <div className={bottomBarClass}></div>
            </div>
        );
    }
};