import React, { Component } from 'react'
import './landing.css';

export default class Landing extends Component {
  render() {
    return (
      <section className="landing-page">
        <section className="landing-content">
          <div className="slogan">
            Family Recipes
            <div className="landing-login">
              <ul>
                <li>Sign In |</li>
                <li>Sign Up |</li>
                <li>Demo</li>
              </ul>
            </div>
          </div>
          
        </section>
      </section>
    )
  }
}
