import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";

const defaultState = {
    cash: 0,
    loading: true
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD':
            return {...state, cash: state.cash + action.payload}
        case 'REMOVE':
            return {...state, cash: state.cash - + action.payload}
        default:
            return state;
    }
}

// const castomReducer = (state = defaultState, action) => {
//     switch (action.type) {
//         case 'ADD_USER':
//             return {...state, cash: state.cash + action.payload}
//         case 'REMOVE_USER':
//             return {...state, cash: state.cash - + action.payload}
//         default:
//             return state;
//     }
// }

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>

);

