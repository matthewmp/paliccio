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

    handleNextTransition = (e) => {
        if(this.calories.current.value > 0 && this.servings.current.value > 0){
            this.props.transition(e);
        } else {
            this.setState({formError: 'Please fill out all fields with # greater than 0'})
        }
    }

    render() {
        const formError = this.state.formError;
        const sectionClass = this.props.currentTransition === "-100" ? "add-edit-recipe-view calories-servings-info" : "add-edit-recipe-view calories-servings-info hidden";
       
        return (
            <section className={sectionClass}>
            <div className="add-edit-recipe-label modal-label">Calories / Servings</div>
                <div className="add-recipe-inputs-wrapper">
                    <input className="add-edit-recipe-name" 
                        type="number"
                        min="1"
                        max="20000"
                        placeholder="CALORIES PER SERVING" 
                        onChange={this.props.handleCaloriesChange} 
                        value={this.props.caloriesVal}
                        ref={this.calories}
                    />

                    <input 
                        type="number"
                        min="1"
                        max="99"
                        placeholder="# OF SERVINGS"
                        onChange={this.props.handleServingsChange}
                        value={this.props.servingsVal}
                        ref={this.servings}
                    />
                </div>
                
                <div className="add-recipe-btn-wrapper">
                    <p className="form-error">{formError}</p>
                    <button 
                        className="add-recipe"
                        id="servingsPrevious" 
                        type="button"
                        data-transition="0"
                        onClick={this.props.transition}>Previous
                    </button>
                    <button 
                        className="add-recipe"
                        id="servingsNext" 
                        type="button"
                        data-transition="-200"
                        onClick={this.handleNextTransition}>Next
                    </button>
                </div>
            </section>
        )
    }
}
