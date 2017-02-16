import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
//Provider
import { Provider } from 'react-redux'; 
//Middleware
import thunk from 'redux-thunk';
//Main Container
import App from './containers/App';
//Root Reducer
import rootReducer from './reducers/index';

const composeStore = compose(applyMiddleware(thunk)(createStore));
const store = composeStore(rootReducer);

ReactDOM.render(<Provider store={store}>
					<App />
				</Provider>, document.querySelector('.container')
);