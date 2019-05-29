import React, { Component } from 'react'
import AddGeneralInfo from './AddGeneralInfo';

import './addEditModal.scss';

export default class AddEditModal extends Component {
    state = {
        name: '',
        description: ''

    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }

    handleDescriptionChange = (e) => {
        this.setState({description: e.target.value})
    }
    render() {
        console.log(this.state.name, this.state.description);
        return (
            <div className="add-edit-modal-overlay">
                <div className="add-edit-modal-wrapper">
                    <div className="add-edit-modal-close">&times;</div>
                    <form id="add-edit-recipe-form">
                        <AddGeneralInfo 
                        handleNameChange={this.handleNameChange} 
                        handleDescriptionChange={this.handleDescriptionChange}
                        nameVal={this.state.name}
                        descriptionVal={this.state.description}/>
                    </form>
                        
                </div>
            </div>
        )
    }
}
