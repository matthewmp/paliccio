import React from 'react';

import axios from 'axios';

export default class Votes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            votes: 0
        }
    }

    componentDidMount(){
        this.setState({votes: this.props.votes})
    }

    upVote = () => {
        console.log(this.props.recipeId)
        axios.put(`/recipes/voteup/${this.props.recipeId}`, {headers: {'Content-Type': 'application/json'}})
        .then(result => {
            this.setState({votes: result.data.votes})
        })
        .catch(err => {
            console.error(err);
            this.setState({votes: '???'});
        })
    }

    downVote = () => {
        axios.put(`/recipes/votedown/${this.props.recipeId}`, {headers: {'Content-Type': 'application/json'}})
        .then(result => {
            this.setState({votes: result.data.votes})
        })
        .catch(err => {
            console.error(err);
            this.setState({votes: '???'});
        })
    }

    render(){
        return(
            <div className="recipe-votes-wrapper col s3">
                <div className="recipe-votes-container">
                    <div className="up-vote" onClick={this.upVote}>
                        <img src="./images/upvote.svg" alt="upvote"/>
                    </div>
                    <div className="vote-text-wrapper">
                        <span className="recipe-header-label">Votes: </span>
                        <span className="recipe-header-amount vote-amount">{this.state.votes}</span>
                    </div>
                    <div className="down-vote" onClick={this.downVote}>
                        <img src="./images/downvote.svg" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}