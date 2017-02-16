//Constants
import { ActionType } from '../constants/index';

export const getData = (param) => {
	return {
		type: ActionType.GET_DATA,
		payload: param
	}
}
