import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import authReducer from "./authReducer";

let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers());

export default store;