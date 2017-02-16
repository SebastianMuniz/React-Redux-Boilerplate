import { ActionType } from '../constants/index';

const initialState = [];

export const setPayload = (state = initialState, action) => {
	switch(action.type) {
		case ActionType.GET_DATA:
			state = [action.payload, ...state];
			return state;
		default:
			return state;
	}
};