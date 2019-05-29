import React, { Component } from 'react'
import './addEditModal.scss';

export default class AddGeneralInfo extends Component {
    render() {
        return (
            <section className="add-edit-recipe-view general-info">
                <div className="add-edit-recipe-label">General Info</div>
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
                    value={this.props.descriptionVal}></textarea>
            </section>
        )
    }
}
