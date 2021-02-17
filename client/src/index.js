import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import App from './Components/App/App';
import './index.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)));

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
        document.getElementById('root'));