import React, { Component } from 'react'

export default class ChefInfo_Vote extends Component {
    render() {
        return (
            <div className="chef-info container">
                <div className="chef-info-wrapper row">
                    <div className="chef-title-img col l10">
                        <span className="chef-title-label">Chef: </span>
                        <span className="chef-title">Joe Blow</span>
                        <span className="chef-avatar">
                            <img src="./images/headshot.jpg" alt="chef avatar"/>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
