import { combineReducers } from 'redux';

import authReducer from './authReducer';

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
