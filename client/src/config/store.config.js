import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reduxThunk from 'redux-thunk'; 
import reducers from '../reducers/index';

// Logger configuration to prevent Redux Form logs
const logger = createLogger({
	predicate: (getState, action) => !action.type.match("@@redux-form")
});

const store = createStore(reducers, applyMiddleware(reduxThunk, logger))

export default store;
