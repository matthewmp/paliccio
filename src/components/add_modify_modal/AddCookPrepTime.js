import React, { Component } from 'react'

export default class AddCookPrepTime extends Component {
    constructor(props){
        super(props);
        this.cookTime = React.createRef();
        this.prepTime = React.createRef();
    }

    state = {
        formError: ''
    }

    handleTransition = (e) => {
        if((this.cookTime.current.value.trim() !== "") && (this.prepTime.current.value.trim() !== "")){
            this.setState({formError: ""})
            this.props.transition(e);
        } 

        else {
            this.setState({formError: "Please fill out all fields."})
        }
    }

    render() {
        let tabIndex = this.props.currentTransition === "-200" ? "0" : "-1";
        let formError = this.state.formError;

        return (
            <section className="add-edit-recipe-view cook-prep-info">
            <div className="add-edit-recipe-label">Cook / Prep Time</div>
                <div className="add-recipe-inputs-wrapper">
                    <input className="add-edit-recipe-input" 
                        tabIndex={tabIndex}
                        type="text" 
                        placeholder="ESTIMATED PREP TIME" 
                        onChange={this.props.handlePrepTimeChange} 
                        value={this.props.caloriesVal}
                        ref={this.prepTime}
                        required
                    />

                    <input className="add-edit-recipe-input" 
                        tabIndex={tabIndex}
                        type="text"
                        placeholder="ESTIMATED COOK TIME"
                        onChange={this.props.handleCookTimeChange}
                        value={this.props.servingsVal}
                        ref={this.cookTime}
                        required
                    />
                </div>
                <div className="add-recipe-btn-wrapper">
                    <button
                        tabIndex={tabIndex}
                        className="add-recipe" 
                        id="servingsPrevious" 
                        type="button"
                        data-transition="-100"
                        onClick={this.props.transition}>Previous
                    </button>
                    <p className="form-error">{formError}</p>
                    <button
                        tabIndex={tabIndex}
                        className="add-recipe" 
                        id="servingsNext" 
                        type="button"
                        data-transition="-300"
                        onClick={this.handleTransition}>Next
                    </button>
                </div>
            </section>
        )
    }
}
