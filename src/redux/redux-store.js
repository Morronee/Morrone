import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';
import usersReducer from "./usersReducer";

let reducers = combineReducers({
<<<<<<< Updated upstream
    profilePage: profileReducer,
    dialogsPage: dialogReducer
    
=======
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
>>>>>>> Stashed changes
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers());

export default store;