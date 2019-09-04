import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux';

let _callSubscriber = (state) => { ReactDOM.render(
    
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
}

_callSubscriber(store.getState());

store.subscribe(() => {
    let state = store.getState();
    _callSubscriber(state);
});




// If you want your app to work aoffline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
