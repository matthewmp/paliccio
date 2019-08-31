import React, { Component } from 'react'

export default class AddGeneralInfo extends Component {
    constructor(props){
        super(props);
        this.recipeName = React.createRef();
        this.recipeDescription = React.createRef();
    }

    state = {
        formError: '',
        borderClass: false
    }

    handleTransition = (e) => {
        if((this.recipeName.current.value.trim() !== "") && (this.recipeDescription.current.value.trim() !== "")){
            this.setState({formError: ""})
            this.props.transition(e);
        } 
        else {
            this.setState({formError: "Please fill out all fields."})
        }
    }

    handleButtonFocus = (bool) => {
        this.setState({borderClass: !this.state.borderClass})
    }

    render() {
        // Set tabIndex
        const tabIndex = this.props.currentTransition === "0" ? "0" : "-1";
        const borderClass = this.state.borderClass ? 'add-recipe button-border' : 'add-recipe';
        let formError = this.state.formError;
        return (
            <section className="add-edit-recipe-view general-info">
                <div className="add-edit-recipe-label modal-label">Recipe General Info</div>
                <div className="add-recipe-inputs-wrapper">
                    <input className="add-edit-recipe-input" 
                        tabIndex={tabIndex}
                        type="text" 
                        placeholder="RECIPE NAME" 
                        onChange={this.props.handleNameChange} 
                        value={this.props.nameVal}
                        ref={this.recipeName}
                        required/>
                    <textarea name="recipe-description" 
                        tabIndex={tabIndex}
                        id="recipe-description" 
                        cols="30" 
                        rows="60" 
                        placeholder="Description..."
                        onChange={this.props.handleDescriptionChange}
                        value={this.props.descriptionVal}
                        ref={this.recipeDescription}
                        required>
                    </textarea>
                    
                    <div className="add-recipe-btn-wrapper" id="add-recipe-btn-prime">
                    <p className="form-error">{formError}</p>
                        <button
                            tabIndex={tabIndex}
                            className={borderClass}
                            id="generalNext" 
                            type="button" 
                            data-transition="-100" 
                            onClick={this.handleTransition.bind(this)}
                            onFocus={this.handleButtonFocus}
                            onBlur={this.handleButtonFocus}
                            >Next
                        </button>    
                    </div>
                    
                </div>
            </section>
        )
    }
}
