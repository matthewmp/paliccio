import React, { Component } from 'react'

export default class AddCaloriesServings extends Component {
    constructor(props){
        super(props);
        this.calories = React.createRef();
        this.servings = React.createRef();
    }

    state = {
        formError: '',
        nextBorderClass: false,
        prevBorderClass: false
    }

    handleNextTransition = (e) => {
        if(this.calories.current.value > 0 && this.servings.current.value > 0){
            this.props.transition(e);
        } else {
            this.setState({formError: 'Please fill out all fields with # greater than 0'})
        }
    }

    handleNextButtonFocus = () => {
        this.setState({nextBorderClass: !this.state.nextBorderClass})
    }

    handlePrevButtonFocus = (bool) => {
        this.setState({prevBorderClass: !this.state.prevBorderClass})
    }

    render() {
        const formError = this.state.formError;
        const tabIndex = this.props.currentTransition === "-100" ? "0" : "-1";
        const nextBorderClass = this.state.nextBorderClass ? 'add-recipe button-border' : 'add-recipe';
        const prevBorderClass = this.state.prevBorderClass ? 'add-recipe button-border' : 'add-recipe';
        return (
            <section className="add-edit-recipe-view calories-servings-info">
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
                        tabIndex={tabIndex}
                    />

                    <input 
                        type="number"
                        min="1"
                        max="99"
                        placeholder="# OF SERVINGS"
                        onChange={this.props.handleServingsChange}
                        value={this.props.servingsVal}
                        ref={this.servings}
                        tabIndex={tabIndex}
                    />
                </div>
                
                <div className="add-recipe-btn-wrapper">
                    <p className="form-error">{formError}</p>
                    <button 
                        className={prevBorderClass}
                        id="servingsPrevious" 
                        type="button"
                        data-transition="0"
                        tabIndex={tabIndex}
                        onFocus={this.handlePrevButtonFocus}
                        onBlur={this.handlePrevButtonFocus}
                        onClick={this.props.transition}>Previous
                    </button>
                    <button 
                        className={nextBorderClass}
                        id="servingsNext" 
                        type="button"
                        data-transition="-200"
                        tabIndex={tabIndex}
                        onFocus={this.handleNextButtonFocus}
                        onBlur={this.handleNextButtonFocus}
                        onClick={this.handleNextTransition}>Next
                    </button>
                </div>
            </section>
        )
    }
}
