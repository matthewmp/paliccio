import React from 'react'

const ChefInfo_Vote = () => {
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

export default ChefInfo_Vote;