import React, { Component } from 'react'
import './addEditModal.scss';

export default class AddGeneralInfo extends Component {
    render() {
        return (
            <section className="add-edit-recipe-view general-info">
                <div className="add-edit-recipe-label">Recipe General Info</div>
                <div className="add-recipe-inputs-wrapper">
                    <input className="add-edit-recipe-name" 
                        type="text" 
                        placeholder="RECIPE NAME" 
                        onChange={this.props.handleNameChange} 
                        value={this.props.nameVal}/>
                    <textarea name="recipe-description" 
                        id="recipe-description" 
                        cols="30" 
                        rows="60" 
                        placeholder="Description..."
                        onChange={this.props.handleDescriptionChange}
                        value={this.props.descriptionVal}>
                    </textarea>
                    <button className="add-recipe-next" type="button">Next</button>
                </div>
            </section>
        )
    }
}
