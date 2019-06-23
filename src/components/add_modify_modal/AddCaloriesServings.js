import React, { Component } from 'react'

export default class AddCaloriesServings extends Component {
    constructor(props){
        super(props);
        this.calories = React.createRef();
        this.servings = React.createRef();
    }
    state = {
        formError: ''
    }

    handleTransition = (e) => {
        if((this.calories.current.value.trim() !== "") && (this.servings.current.value.trim() !== "")){
            this.setState({formError: ""})
            this.props.transition(e);
        } 

        else {
            this.setState({formError: "Please fill out all fields."})
        }
    }
    
    render() {
        let tabIndex = this.props.currentTransition === "-100" ? "0" : "-1";
        let formError = this.state.formError;

        return (
            <section className="add-edit-recipe-view calories-servings-info">
            <div className="add-edit-recipe-label">Calories / Servings</div>
                <div className="add-recipe-inputs-wrapper">
                    <input className="add-edit-recipe-input" 
                        tabIndex={tabIndex}
                        type="number" 
                        placeholder="ESTIMATED CALORIES PER SERVING" 
                        onChange={this.props.handleCaloriesChange} 
                        value={this.props.caloriesVal}
                        ref={this.calories}
                        required
                    />

                    <input className="add-edit-recipe-input" 
                        tabIndex={tabIndex}
                        type="number"
                        placeholder="ESTIMATED # OF SERVINGS"
                        onChange={this.props.handleServingsChange}
                        value={this.props.servingsVal}
                        ref={this.servings}
                        required
                    />
                </div>
                <div className="add-recipe-btn-wrapper">
                    <button
                        tabIndex={tabIndex}
                        className="add-recipe" 
                        id="servingsPrevious" 
                        type="button"
                        data-transition="0"
                        onClick={this.props.transition}>Previous
                    </button>
                    <p className="form-error">{formError}</p>
                    <button
                        tabIndex={tabIndex}
                        className="add-recipe" 
                        id="servingsNext" 
                        type="button"
                        data-transition="-200"
                        onClick={this.handleTransition}>Next
                    </button>
                </div>
            </section>
        )
    }
}
