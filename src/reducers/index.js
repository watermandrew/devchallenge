import { combineReducers } from 'redux';

import DaliReducer from './dali-reducer';

const rootReducer = combineReducers({
  dali: DaliReducer,
});

export default rootReducer;
