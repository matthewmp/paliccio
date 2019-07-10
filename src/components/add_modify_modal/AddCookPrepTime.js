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
        formError: ''
    }

    handleTransition = (e) => {
        if((this.cookTime1.current.value.trim() > 0) && (this.prepTime1.current.value.trim() > 0) 
        && (this.cookTime2.current.value.trim() > 0) && (this.prepTime2.current.value.trim()) > 0){
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

        let cookTimeMinHighLight = this.props.cookTimeMinHrs1 === 'mins' ? 'highlight' : null;
        let cookTimeHrsHighLight = this.props.cookTimeMinHrs1 === 'hours' ? 'highlight' : null;
        let cookTimeMinHighLight2 = this.props.cookTimeMinHrs2 === 'mins' ? 'highlight' : null;
        let cookTimeHrsHighLight2 = this.props.cookTimeMinHrs2 === 'hours' ? 'highlight' : null;

        let prepTimeMinHighLight = this.props.prepTimeMinHrs1 === 'mins' ? 'highlight' : null;
        let prepTimeHrsHighLight = this.props.prepTimeMinHrs1 === 'hours' ? 'highlight' : null;
        let prepTimeMinHighLight2 = this.props.prepTimeMinHrs2 === 'mins' ? 'highlight' : null;
        let prepTimeHrsHighLight2 = this.props.prepTimeMinHrs2 === 'hours' ? 'highlight' : null;

        return (
            <section className="add-edit-recipe-view cook-prep-info">
            <div className="add-edit-recipe-label">Cook / Prep Time</div>
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
                        
                        <ul>
                            <li className={prepTimeMinHighLight} onClick={this.props.togglePrepTimeMinHrs1}>Minutes</li>
                            <li className={prepTimeHrsHighLight} onClick={this.props.togglePrepTimeMinHrs1}>Hours</li>
                        </ul>

                        <input className="add-edit-recipe-input" 
                            tabIndex={tabIndex}
                            type="text" 
                            placeholder="PREP TIME" 
                            onChange={this.props.handlePrepTimeChange2} 
                            value={this.props.prepTimeVal2}
                            ref={this.prepTime2}
                            required
                        />
                        
                        <ul>
                            <li className={prepTimeMinHighLight2} onClick={this.props.togglePrepTimeMinHrs2}>Minutes</li>
                            <li className={prepTimeHrsHighLight2} onClick={this.props.togglePrepTimeMinHrs2}>Hours</li>
                        </ul>
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

                        <ul>
                            <li className={cookTimeMinHighLight} onClick={this.props.toggleCookTimeMinHrs1}>Minutes</li>
                            <li className={cookTimeHrsHighLight} onClick={this.props.toggleCookTimeMinHrs1}>Hours</li>
                        </ul>

                        <input className="add-edit-recipe-input"
                            tabIndex={tabIndex}
                            type="text"
                            placeholder="COOK TIME"
                            onChange={this.props.handleCookTimeChange2}
                            value={this.props.cookTimeVal2}
                            ref={this.cookTime2}
                            required
                        />

                        <ul>
                            <li className={cookTimeMinHighLight2} onClick={this.props.toggleCookTimeMinHrs2}>Minutes</li>
                            <li className={cookTimeHrsHighLight2} onClick={this.props.toggleCookTimeMinHrs2}>Hours</li>
                        </ul>
                    </div>
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
