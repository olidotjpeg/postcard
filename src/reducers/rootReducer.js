import { combineReducers } from 'redux';

// Reducers
import testReducer from './testReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
	test: testReducer,
	form: formReducer
});

export default rootReducer;