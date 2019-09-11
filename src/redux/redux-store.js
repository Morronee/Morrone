import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer
    
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers());

export default store;