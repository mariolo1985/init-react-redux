import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import initialState from './reducers/reducersInit';
import * as viewStates from './reducers/reducerViewstate';

const store = (function buildStore() {
    const reducers = combineReducers({
        initialState,
        ...viewStates
    });

    const middleware = [thunk];
    return createStore(
        reducers,
        composeWithDevTools(applyMiddleware(...middleware))
    );
}());

export default store;
