import React, { Component } from 'react';
import Instruction from './Instruction';
import uuidv4 from 'uuid/v4';
import './addEditModal.scss';

export default class AddInstructions extends Component {
    constructor(props){
        super(props);
        this.instructionContainer = React.createRef();
    }

    state = {
        instructions: []
    }

    componentDidMount(){
        if(this.state.instructions.length === 0){
            this.addInstruction();
        }
    }

    inputsAreFilled = (instructionContainerElement) => {
        let areFilled = true;
        instructionContainerElement.forEach(container => {
            if(container.childNodes[0].value.trim() === "" || container.childNodes[0].value.trim() === ""){
                areFilled = false;
            }
        });
        return areFilled;
    }

    addInstruction = (e) => {
        if(this.inputsAreFilled(this.instructionContainer.current.childNodes)){
            this.setState({
                instructions: this.state.instructions.concat(
                    <Instruction 
                        key={uuidv4()}
                        dataId={uuidv4()}
                        add={this.addInstruction}
                        remove={this.removeInstruction}
                        className = {this.state.instructions.length + 1}
                    />
                )
            });
        };
    }

    collectAllInstructions = () => {
        const allInstructionsWrapper = [...this.instructionContainer.current.childNodes];
        let instructionsObject = allInstructionsWrapper.map((node) => {

            const instruction = node.childNodes[0].value;
            const amount = node.childNodes[1].value;
            return {instruction, amount, id: node.dataset.id}
        })
        .filter(instructionObject => (instructionObject.instruction.trim() && instructionObject.amount.trim()))
        
        this.props.getinstructions(instructionsObject);
    }

    removeInstruction = (e) => {
        var id = e.target.parentNode.dataset.id;
        if(this.state.instructions.length > 1){
            let tmpState = this.state.instructions;
            let index = tmpState.map(item => item.props.dataId).indexOf(id);
            tmpState.splice(index, 1);
            this.setState({instructions: tmpState});
            this.props.handleremoveInstruction(id);
        }
        
    }

    submit = (e) => {
        this.props.submit(e);
    }

    render() {
        return (
            <section className="add-edit-recipe-view ">
                <div className="add-edit-recipe-label modal-label">Add Instructions</div>
                <div className="add-recipe-inputs-wrapper">
                    <div className="ingredient-component-container" ref={this.instructionContainer} onChange={this.collectAllInstructions}>
                        {this.state.ingredients}
                    </div>
                    
                    <div className="add-recipe-btn-wrapper">
                        <button
                            tabIndex="-1" 
                            className="add-recipe" 
                            id="servingsPrevious" 
                            type="button"
                            data-transition="-300"
                            onClick={this.props.transition}>Previous
                        </button>
                        <button
                            tabIndex="-1" 
                            className="add-recipe" 
                            id="servingsNext" 
                            type="submit"
                            onClick={this.submit}>Submit
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}
