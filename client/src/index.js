// Package imports
import React from 'react';
import ReactDOM from 'react-dom';
// Store
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// Reducer
import { moviesReducer } from './redux/reducers/moviesReducer';
// Styling
import './index.css';
// Components
import App from './App';
// Other
import reportWebVitals from './reportWebVitals';


const store = createStore(moviesReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
