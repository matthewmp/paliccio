import { combineReducers } from 'redux';

import UIreducer from 'UIreducer';

const rootReducer = combineReducers({
    UI: UIreducer
});

export default rootReducer;