import React from 'react';

export default class Ingredient extends React.Component{
    state = {

    }

    render(){
        return(
            <div class="add-ingredient-wrapper">
                <input type="text" class="inp-ingredient" placeholder="Type Ingredient" />
                <input type="text" class="inp-amount" placeholder="Type Quantity i.e 2tsp" />
            </div>
        )
    }
}