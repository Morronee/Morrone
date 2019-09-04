import { createStore, combineReducers } from "redux";
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';

let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer
});

let store = createStore(reducers);

export default store;