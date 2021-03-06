import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App';
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import allReducer from './Reducers'


const store = createStore ( allReducer );
store.subscribe(  () => { console.log(store.getState())})
ReactDOM.render( <Provider store = {store}> <App />   </Provider>  
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

