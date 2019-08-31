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
        instructions: [],
        nextBorderClass: false,
        prevBorderClass: false,
        tabIndex: "-1"
    }

    componentDidMount(){
        if(this.state.instructions.length === 0){
            this.addInstruction();
        }
    }

    componentDidUpdate(){
        if(this.state.instructions.length === 0){
            this.addInstruction();
        }
    }

    inputsAreFilled = (instructionContainerElement) => {
        let areFilled = true;
        instructionContainerElement.forEach(container => {
            console.log(container.childNodes[0])
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
                        tabIndex={this.state.tabIndex}
                        toggleTabIndex={this.toggleTabIndex}    
                    />
                )
            });
        };
    }

    toggleTabIndex = () => {
        if(this.state.tabIndex === "-1"){
            this.setState({tabIndex: "0", instructions: []});
            this.addInstruction();
        } 
        this.forceUpdate();
    }

    handleNextButtonFocus = () => {
        this.setState({nextBorderClass: !this.state.nextBorderClass})
    }

    handlePrevButtonFocus = (bool) => {
        this.setState({prevBorderClass: !this.state.prevBorderClass})
    }


    collectAllInstructions = () => {
        const allInstructionsWrapper = [...this.instructionContainer.current.childNodes];
        let instructionsObject = allInstructionsWrapper.map((node) => {

            const instruction = node.childNodes[0].value;
            console.log('Instruction: ', instruction)
            // const amount = node.childNodes[1].value;
            return {instruction, id: node.dataset.id}
        })
        .filter(instructionObject => (instructionObject.instruction.trim()))
        console.log(instructionsObject)
        this.props.getInstructions(instructionsObject);
    }

    removeInstruction = (e) => {
        var id = e.target.parentNode.dataset.id;
        if(this.state.instructions.length > 1){
            let tmpState = this.state.instructions;
            let index = tmpState.map(item => item.props.dataId).indexOf(id);
            tmpState.splice(index, 1);
            this.setState({instructions: tmpState});
            this.props.handleRemoveInstruction(id);
        }
        
    }

    submit = (e) => {
        this.props.submit(e);
    }

    render() {
        let tabIndex = this.props.currentTransition === "-400" ? "0" : "-1";
        const nextBorderClass = this.state.nextBorderClass ? 'add-recipe button-border' : 'add-recipe';
        const prevBorderClass = this.state.prevBorderClass ? 'add-recipe button-border' : 'add-recipe';
        
        return (
            <section className="add-edit-recipe-view ">
                <div className="add-edit-recipe-label modal-label">Add Instructions</div>
                <div className="add-recipe-inputs-wrapper">
                    <div className="ingredient-component-container" ref={this.instructionContainer} onChange={this.collectAllInstructions}>
                        {this.state.instructions}
                    </div>
                    
                    <div className="add-recipe-btn-wrapper">
                        <button
                            tabIndex={tabIndex} 
                            className={prevBorderClass} 
                            id="servingsPrevious" 
                            type="button"
                            data-transition="-300"
                            onFocus={this.handlePrevButtonFocus}
                            onBlur={this.handlePrevButtonFocus}
                            onClick={this.props.transition}>Previous
                        </button>
                        <button
                            tabIndex={tabIndex} 
                            className={nextBorderClass} 
                            id="servingsNext" 
                            type="submit"
                            onFocus={this.handleNextButtonFocus}
                            onBlur={this.handleNextButtonFocus}
                            onClick={this.submit}>Submit
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}
