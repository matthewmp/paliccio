import React, { Component } from 'react'

export default class AddCookPrepTime extends Component {
    constructor(props){
        super(props);
        this.cookTime1 = React.createRef();
        this.prepTime1 = React.createRef();
        this.cookTime2 = React.createRef();
        this.prepTime2 = React.createRef();
    }

    state = {
        formError: '',
        nextBorderClass: false,
        prevBorderClass: false
    }
    
    handleTransition = (e) => {
        if((this.cookTime1.current.value.trim()) + (this.cookTime2.current.value.trim()) > 0 
        && (this.prepTime1.current.value.trim()) + (this.prepTime2.current.value.trim()) > 0){
            this.setState({formError: ""})
            this.props.transition(e);
        } 

        else {
            this.setState({formError: "Please fill out all fields with."})
        }
    }

    handleNextButtonFocus = () => {
        this.setState({nextBorderClass: !this.state.nextBorderClass})
    }

    handlePrevButtonFocus = (bool) => {
        this.setState({prevBorderClass: !this.state.prevBorderClass})
    }

    render() {
        let tabIndex = this.props.currentTransition === "-200" ? "0" : "-1";
        let formError = this.state.formError;
        const nextBorderClass = this.state.nextBorderClass ? 'add-recipe button-border' : 'add-recipe';
        const prevBorderClass = this.state.prevBorderClass ? 'add-recipe button-border' : 'add-recipe';

        return (
            <section className="add-edit-recipe-view cook-prep-info">
            <div className="add-edit-recipe-label modal-label">Cook / Prep Time</div>
                <div className="add-recipe-inputs-wrapper">
                    <div className="prep-time-wrapper">
                        <input className="add-edit-recipe-input" 
                            tabIndex={tabIndex}
                            type="text" 
                            placeholder="PREP TIME" 
                            onChange={this.props.handlePrepTimeChange1} 
                            value={this.props.prepTimeVal1}
                            ref={this.prepTime1}
                            required
                        />
                        <span className="mins-hours">Minutes</span>
                        
                        <input className="add-edit-recipe-input" 
                            tabIndex={tabIndex}
                            type="text" 
                            placeholder="PREP TIME" 
                            onChange={this.props.handlePrepTimeChange2} 
                            value={this.props.prepTimeVal2}
                            ref={this.prepTime2}
                            required
                        />

                        <span className="mins-hours">Hours</span>

                    </div>
                    
                    <div className="cook-time-wrapper">
                        <input className="add-edit-recipe-input"
                            tabIndex={tabIndex}
                            type="text"
                            placeholder="COOK TIME"
                            onChange={this.props.handleCookTimeChange1}
                            value={this.props.cookTimeVal1}
                            ref={this.cookTime1}
                            required
                        />

                        <span className="mins-hours">Minutes</span>

                        <input className="add-edit-recipe-input"
                            tabIndex={tabIndex}
                            type="text"
                            placeholder="COOK TIME"
                            onChange={this.props.handleCookTimeChange2}
                            value={this.props.cookTimeVal2}
                            ref={this.cookTime2}
                            required
                        />

                        <span className="mins-hours">Hours</span>

                    </div>
                </div>
                <div className="add-recipe-btn-wrapper">
                    <button
                        tabIndex={tabIndex}
                        className={prevBorderClass} 
                        id="servingsPrevious" 
                        type="button"
                        data-transition="-100"
                        onFocus={this.handlePrevButtonFocus}
                        onBlur={this.handlePrevButtonFocus}
                        onClick={this.props.transition}>Previous
                    </button>
                    <p className="form-error">{formError}</p>
                    <button
                        tabIndex={tabIndex}
                        className={nextBorderClass}
                        id="servingsNext" 
                        type="button"
                        data-transition="-300"
                        onFocus={this.handleNextButtonFocus}
                        onBlur={this.handleNextButtonFocus}
                        onClick={this.handleTransition}>Next
                    </button>
                </div>
            </section>
        )
    }
}
