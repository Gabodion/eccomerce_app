import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import { createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {Provider} from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension"
import { allReducers } from './reducers';


const middleware = [thunk];
const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(...middleware)))

ReactDOM.render(
    <Provider store ={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)