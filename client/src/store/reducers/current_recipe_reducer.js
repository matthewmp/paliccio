import * as actions from '../actions';

const initialState = {
    current_recipe_id: ''
}

export const current_recipe_id = (state=initialState, action) => {
    if(action.type === actions.SET_CURRENT_RECIPE){
            return Object.assign({} , state, {
                current_recipe_id: action.recipeID
            });
        }
    else {
        return state;
    }
}

