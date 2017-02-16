import { combineReducers } from 'redux';
//Reducers
import { setPayload } from './reducer_name';

const rootReducer = combineReducers({
	payload: setPayload
});

export default rootReducer;