import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './assets/components/App.jsx'
import configureStore from './store/configureStore'

import './assets/css/bootstrap/bootstrap.css';
import './assets/css/bootstrap/bootstrap-theme.css';
import './assets/css/styles.css';

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <App title="100 Happy Wishes" />
    </Provider>,
    document.getElementById('app')
);
