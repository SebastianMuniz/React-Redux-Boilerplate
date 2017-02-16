//Plain Actions
import { getData } from './plainActions';

export const getDataMethod = (param) => {
	return (dispatch, getState) => {
		Controller.methodName( /*optional param*/ (response,error) => {
				dispatch(getData(data))
		});
	}; 
};
