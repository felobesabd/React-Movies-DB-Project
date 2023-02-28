import React, { StrictMode }  from 'react';
import ReactDOM  from 'react-dom';
import './css/style.css'
import App from './app.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { store } from './Reducer/store/store';

ReactDOM.render(
    <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    </StrictMode>
    , document.getElementById('root'))