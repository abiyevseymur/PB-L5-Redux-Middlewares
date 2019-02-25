import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { countEachAct, muteOddAct,doubleAct } from './actions';


ReactDOM.render(
    
    <Provider store={createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk,countEachAct,muteOddAct,doubleAct)))}>
        <App />
    </Provider>
    , document.getElementById('root'));