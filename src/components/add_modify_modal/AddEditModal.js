import React, { Component } from 'react'
import './addEditModal.scss';

export default class AddEditModal extends Component {
    render() {
        return (
            <div className="add-edit-modal-overlay">
                <div className="add-edit-modal-wrapper">
                    <div className="add-edit-modal-close">&times;</div>
                </div>
            </div>
        )
    }
}
