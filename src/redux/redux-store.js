import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;